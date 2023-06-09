import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Food = ({ food }) => {
    const [more, setMore] = useState(false)
    // console.log(food)
    const { idMeal, strMeal, strInstructions, strMealThumb } = food
    return (

        <div data-aos="fade-up" className="rounded-xl md:rounded-t-3xl  w-full bg-base-100  shadow-xl">
            <figure><img className='md:rounded-none md:p-0 p-5 mx-auto md:rounded-t-3xl rounded-full' src={strMealThumb}  /></figure>

            <div className="card-body">


                <h2 className="card-title">{strMeal}</h2>

                {!more && <p>{strInstructions.substring(0, 100)}<span onClick={()=>setMore(!more)} className='font-bold text-yellow-600 cursor-pointer'>...See More</span></p>}
                {more &&
                    <p>{strInstructions} <span onClick={()=>setMore(!more)} className='font-bold text-yellow-600 cursor-pointer'>...Less</span></p>}
                <div className="card-actions justify-end">
                    <Link to={`../foodDetails/${idMeal}`} className="btn btn-warning">View Details</Link>
                </div>
            </div>

        </div>

    );
};

export default Food;