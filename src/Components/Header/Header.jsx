import React, { useState } from 'react';
import './Header.css'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {

    const [isOpen,setIsOpen] = useState(false)
    return (
        <div className=''>
            <div className='navbar flex justify-between items-center'>

                <div>
                    <h1>{isOpen? '' : 'Foodie Shop '}</h1>
                </div>

                <div className='md:flex hidden'>
                    <NavLink className={({isActive})=> isActive ? 'text-white' : 'default'} to='/'>Home</NavLink>
                    <NavLink className={({isActive})=> isActive ? 'text-white' : 'default'} to='/foods'>Food</NavLink>
                    <NavLink className={({isActive})=> isActive ? 'text-white' : 'default'} to='about'> About</NavLink>
                    <NavLink className={({isActive})=> isActive ? 'text-white' : 'default'} to='/login'>Login</NavLink>

                </div>
                <div className='md:hidden'>
                    <button onClick={()=>setIsOpen(!isOpen)} className='btn btn-info'>x</button>

                </div>
                {
                    isOpen &&
                    
                    <div className='duration-700 md:hidden flex flex-col left-1 p-10 top-1 absolute bg-opacity-70 bg-yellow-300'>
                    <NavLink className={({isActive})=> isActive ? 'text-white' : 'default'} to='/'>Home</NavLink>
                    <NavLink className={({isActive})=> isActive ? 'text-white' : 'default'} to='/foods'>Food</NavLink>
                    <NavLink className={({isActive})=> isActive ? 'text-white' : 'default'} to='about'> About</NavLink>
                    <NavLink className={({isActive})=> isActive ? 'text-white' : 'default'} to='/login'>Login</NavLink>

                </div>
                }
           
               
            </div>
      
        </div>
    );
};

export default Header;