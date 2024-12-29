import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users')
        .then(({data}) => setData(data))
    }, [])

    return (
        <div>
            {
                data.map(item => {
                return (
					    <p key={item.id}>
						    <Link to={`/user/${item.id}`}>{item.name}</Link>
					    </p>
					)
                })
            }
        </div>
    );
}

export default Home;

