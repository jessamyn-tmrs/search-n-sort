import '../styles/components/App.module.scss';
// import { businessData } from '../data/businessData';
// import BusinessList from './BusinessList';
import SearchBar from './SearchBar';

function App() {
	return (
		<div className='App'>
			<SearchBar />
			{/* <BusinessList businessData={businessData} /> */}
		</div>
	);
}

export default App;

