import React from 'react';
import { Link } from 'react-router-dom';

const Food = ({ food }) => {
    // console.log(food)
    const { idMeal, strMeal, strInstructions, strMealThumb } = food
    return (
       
            <Link to={`../foodDetails/${idMeal}`} className="card w-full bg-base-100 shadow-xl">
                <figure><img  src={strMealThumb} alt="Shoes" /></figure>
                <div className="card-body">


                    <h2 className="card-title">{strMeal}</h2>
                    <p>{strInstructions.substring(0,100)}<span className='font-bold text-yellow-600'>...See More</span></p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-warning">Buy Now</button>
                    </div>
                </div>
       
        </Link>
    
    );
};

export default Food;