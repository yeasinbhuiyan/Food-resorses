import React, { useEffect, useMemo, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import './FoodDetails.css'

const FoodDetails = () => {
    const data = useLoaderData()
    const foods = data.meals

    const f = useParams()
    const { id } = f



    console.log(f)


    const [food, setFood] = useState({})

    useEffect(() => {
        if (foods && id) {
            const x = foods.find(food => food.idMeal == id)

            setFood(x)

        }
    }, [id])


    console.log(food)

    const { idMeal, strMealThumb, strMeal, strInstructions, strMeasure1, strMeasure2, strMeasure5 } = food

    const [more, setMore] = useState(false)


    return (
        <div className="main-container">
            <div className='grid grid-cols-1 md:grid-cols-2 mx-auto '>

                <div className='rounded h-96 w-80 mt-20 mx-auto'>
                    <img src={strMealThumb} alt="" />
                </div>

                <div className='m-16'>
                    <h1 className='text-yellow-500 font-semibold text-3xl'>{strMeal}</h1>
                    <div className='my-5'>
                        <p className='font-medium text-xl'>{strMeasure1}</p>
                        <p className='font-medium text-xl'>{strMeasure2}</p>
                        <p className='font-medium text-xl'>{strMeasure5}</p>
                    </div>
                    {!more && <p className='text-black font-sm my-5 font-medium'>


                        {strInstructions?.substring(0, 600)}<span className='cursor-pointer text-yellow-500 font-bold' onClick={() => { setMore(!more) }}> ...see more</span>


                    </p>}
                    {more && <p className='text-black font-sm my-5 font-medium'>


                        {strInstructions}<span className='cursor-pointer text-yellow-500 font-bold' onClick={() => { setMore(!more) }}>...Less</span>


                    </p>}
                </div>

            </div>
            <div className='text-center'>
                <button className='btn btn-warning'>Book Now</button>
            </div>
        </div>
    );
};

export default FoodDetails;