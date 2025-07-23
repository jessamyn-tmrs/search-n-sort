import { useState } from 'react';
import { getRestaurants } from '../utils/api';
import BusinessList from './BusinessList';

const SearchBar = () => {
	const [selected, setSelected] = useState<string>('best_match');
	const [searchTerm, setSearchTerm] = useState<string>('');
	const [location, setLocation] = useState<string>('');
	const [searchResults, setSearchResults] = useState([]);

	const handleSelect = (e: React.MouseEvent<HTMLLIElement>) => {
		const currentSelected = e.currentTarget.id;
		setSelected(currentSelected);
	};

	const handleSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setLocation(e.target.value);
	};

	const handleClick = () => {
		getRestaurants({ searchTerm, location, selected });
		handleSearch();
	};

	const handleSearch = async () => {
		const results = await getRestaurants({
			searchTerm,
			location,
			selected,
		});
		if (results) {
			console.log('Search Results:', results);
			setSearchResults(results);
		} else {
			console.error('No results found or an error occurred.');
		}
	};

	return (
		<>
			<div className='search-bar'>
				<div className='search-options'>
					<ul>
						<li
							id='best_match'
							onClick={handleSelect}
							className={
								selected === 'best_match' ? 'search-active' : ''
							}>
							Best Match
						</li>
						<li
							id='rating'
							onClick={handleSelect}
							className={
								selected === 'rating' ? 'search-active' : ''
							}>
							Highest Rated
						</li>
						<li
							id='review_count'
							onClick={handleSelect}
							className={
								selected === 'review_count'
									? 'search-active'
									: ''
							}>
							Most Reviewed
						</li>
					</ul>
				</div>
				<div className='search-inputs'>
					<input
						type='text'
						placeholder='business name, genre, or type, ...'
						className='name-input'
						value={searchTerm}
						onChange={handleSearchTermChange}
					/>
					<input
						type='text'
						placeholder='location (e.g., city, state)'
						className='location-input'
						value={location}
						onChange={handleLocationChange}
					/>
				</div>
				<button className='search-button' onClick={handleClick}>
					Let's Go
				</button>
			</div>

			<BusinessList searchResults={searchResults} />
		</>
	);
};

export default SearchBar;

