import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Food from './Food';
import './Foods.css'
const Foods = () => {
  const foods = useLoaderData()
  // console.log(foods)
  const [showAll, setShowAll] = useState(false)
  const [allFoods, setAllFoods] = useState(foods)
  return (
    <>


      <div className='allFoods-container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 p-10'>
        {

          showAll ? allFoods.meals.map(food => <Food food={food}></Food>) :
            allFoods.meals.slice(0, 6).map(food => <Food food={food}></Food>)
        }

          {
        !showAll && <div className='text-center my-5'>
          <button className='btn-warning ' onClick={() => setShowAll(!showAll)}>Show All</button>
        </div>
      }

      </div>

    
    </>
  );
};

export default Foods;