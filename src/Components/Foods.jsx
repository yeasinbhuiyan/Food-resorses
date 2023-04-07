import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Food from './Food';

const Foods = () => {
    const foods = useLoaderData()
    // console.log(foods)
   const [allFoods,setAllFoods] = useState(foods)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 m-6'>
          {
            allFoods.meals.map(food =><Food food={food}></Food>)
          }
        </div>
    );
};

export default Foods;