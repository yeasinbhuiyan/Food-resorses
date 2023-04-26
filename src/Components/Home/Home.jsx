import React from 'react';
import Lottie from "lottie-react";
import reading from '../../assets/36895-healthy-or-junk-food.json'
import reading1 from '../../assets/24064-food-squeeze-with-burger-and-hot-dog.json'
import reading2 from '../../assets/42205-cooking-your-food.json'
import reading3 from '../../assets/77322-food.json'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import './Home.css'
import { Link } from 'react-router-dom';
import { FaAdn, FaArrowRight, FaHatCowboySide } from 'react-icons/fa';
const Home = () => {

    const sellsData = [
        {
            name: 'B Wellington',
            uv: 400,
            pv: 300,
            amt: 2400,
        },
        {
            name: 'Bourguignon',
            uv: 200,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Stew Chicken',
            uv: 100,
            pv: 2400,
            amt: 2400,
        },

    ]

    return (
        <>
            <div className='home-container text-center mx-auto min-w-full'>

                {/* <div className=' lg:ms-0 md:mt-[8%] md:ms-[35%]'> */}
                <div className='main-container mx-auto absolute mt-[8%]'>


                    <h1 className='text-7xl text-color'>Enjoy Our <br /> Delicious Food</h1>

                    <p className='text-yellow-500 px-10  text-center my-5 text-xl'>Plants and animals are the main source  of food for all the organisms on earth.  Food obtained from animals is the main source of protein  and include fish, milk, meat, poultry, and cheese. Whereas plants provide us with fruits and vegetables, which are an important br source of fibres, proteins and carbohydrates</p>

                    <Link to='/foods' className='btn-warning'> See Food Item</Link>

                </div>
                {/* 
                <div>

                    <div className='w-6/12 right-0 absolute'>
                        <Lottie animationData={reading3} loop={true} />
                    </div>

                </div> */}




            </div>

            <div className='main-container grid grid-cols-1 lg:grid-cols-2'>
                <div className=''>
                    <h1 className='text-color m-5 ps-10'>Top Three Selling Fast Food</h1>
                    <BarChart
                        width={500}
                        height={300}
                        data={sellsData}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        {/* <CartesianGrid strokeDasharray="3 3" /> */}
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        {/* <Legend /> */}
                        <Bar dataKey="uv" fill="#8884d8" />
                        <Bar dataKey="uv" fill="#238f72" />
                    </BarChart>
                </div>
                <div>
                    <div className='w-12/12 mx-auto'>
                        <Lottie animationData={reading} loop={true} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;