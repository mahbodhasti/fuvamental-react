import React from 'react';
import { useParams } from 'react-router-dom';

const PersonFaviver = () => {
    let  {raper,music,rate} = useParams()
    return (
        <div>
            <h1>Raper:{raper}</h1>
            <h2>Music:{music}</h2>
            <h3>rate:{rate}</h3>
        </div>
    );
};

export default PersonFaviver;