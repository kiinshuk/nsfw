import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const Site = () => {
    const [url, setUrl] = useState('');
    const [name, setName] = useState('');

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
            console.log(response.data)
            setUrl(response.data.result[randomIndex].picture);
            setName(response.data.result[randomIndex].pornStarName);
        }).catch(err => {
            console.log("error", err);
        });
    };

    return (
        <div className='container'>
            <div className='card'>
                <h2 className='title'>{name ? `Name: ${name}` : 'Click the button to fetch an image'}</h2>
                {url ? (
                    <img className='image' src={url} alt={`cool`} />
                ) : (
                    <div className='placeholder'>No Image Available</div>
                )}
                <button className='button' onClick={img}>
                    {url ? 'Fetch Another Image' : 'Fetch Random Image'}
                </button>
            </div>
        </div>
    );
};

export default Site;
