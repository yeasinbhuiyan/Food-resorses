import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FoodDetails = () => {
    const data =useLoaderData()
    console.log(data)
    return (
        <div>
            <h1>this is details </h1>
            
        </div>
    );
};

export default FoodDetails;