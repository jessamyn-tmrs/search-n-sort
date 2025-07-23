const apiUrl = 'https://api.yelp.com/v3/businesses/search?';
const apiKey =
	'HLOdPVpGztBJ5cPpRPgkjGH2J_X_6qxtuM3-hZzv11vDk1z2J_KyTPB4lcl1i9MjBzUod-eYExuXVzI5Zy0bItqveHbovvrUlCgUEslkmaL7Au6_DW6ssOmxGRl4aHYx';

type PropTypes = {
	searchTerm: string;
	location: string;
	selected: string;
};
export const getRestaurants = async ({
	searchTerm,
	location,
	selected,
}: PropTypes) => {
	const apiUrlParams = `term=${searchTerm}&location=${location}&sort_by=${selected}&limit=20`;
	const endpoint = `${apiUrl}${apiUrlParams}`;
	console.log('API Endpoint:', endpoint);

	try {
		const response = await fetch(endpoint, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${apiKey}`,
			},
			cache: 'no-cache',
		});

		if (response.ok) {
			const jsonResponse = await response.json();
			const searchResultList = jsonResponse.businesses;
			return searchResultList;
		}
	} catch (error) {
		console.error(
			`Error fetching data from endpoint: ${endpoint}, error type: ${error}`
		);
	}
};

