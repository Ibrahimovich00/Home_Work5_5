import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const Detail = () => {
	const params = useParams();
	const [data, setData] = useState({});
	const navigate = useNavigate();

	useEffect(() => {
		axios(`https://jsonplaceholder.typicode.com/users/${params.id}`)
			.then(({ data }) => setData(data))
			.catch(error => console.error('Error fetching user data:', error))
	}, [params.id])

	return (
		<div>
			<h2>{data.name}</h2>
			<p>Username: {data.username}</p>
			<p>Email: {data.email}</p>
			<p>Phone: {data.phone}</p>
			<p>Website: {data.website}</p>
			<button onClick={() => navigate(-1)}>Go home</button>
		</div>
	)
}

export default Detail;
