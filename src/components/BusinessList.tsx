import Business from './Business';
import '../styles/components/BusinessList.module.scss';

type Props = {
	searchResults: BusinessResults[];
};

type BusinessResults = {
	id: string;
	image_url: string;
	name: string;
	location: {
		address1: string;
		city: string;
		state: string;
		zip_code: string;
	};
	rating: number;
	review_count: number;
};

const BusinessList = ({ searchResults }: Props) => {
	return (
		<div className='buisinessList-card'>
			<h1 className='businessList-title'>Business Directory</h1>
			<ul className='businessList-list'>
				{searchResults.map((result: BusinessResults) => (
					<Business result={result} />
				))}
			</ul>
		</div>
	);
};

export default BusinessList;

