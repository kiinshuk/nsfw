import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const Site = () => {
    const [url, setUrl] = useState('');

    const options = {
        method: 'GET',
        url: 'https://porn-pictures-api.p.rapidapi.com/pornstars/female/1',
        headers: {
            'x-rapidapi-key': 'b231d19355msh0605e5c03964b2cp1985acjsndaa8e7984476',
            'x-rapidapi-host': 'porn-pictures-api.p.rapidapi.com'
        }
    };

    const img = () => {
        axios.request(options).then(response => {
            const randomIndex = Math.floor(Math.random() * response.data.result.length);
            setUrl(response.data.result[randomIndex].picture);
        }).catch(err => {
            console.log("error", err);
        });
    };

    return (
        <div className='main'>
            <button className='button' onClick={img}>Click here</button><br />
            {url && <img src={url} alt='Fetched from API' />}
        </div>
    );
};

export default Site;
