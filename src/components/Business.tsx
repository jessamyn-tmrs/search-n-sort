import '../styles/components/Business.module.scss';

type Props = {
	result: {
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
};

const Business = ({ result }: Props) => {
	return (
		<>
			<div className='business' key={result.id}>
				<div className='business-logo'>
					<img src={result.image_url} alt={`${result.name}-logo`} />
				</div>
				<section className='business-details'>
					<div className='business-title'>
						<h3>{result.name}</h3>
						<h6>{`${result.location.address1} ${result.location.city} ${result.location.state}, ${result.location.zip_code}`}</h6>
					</div>
					<div className='business-stats'>
						<h5>{result.rating}</h5>
						<h5>{result.review_count} Reviews</h5>
					</div>
				</section>
			</div>
		</>
	);
};

export default Business;

