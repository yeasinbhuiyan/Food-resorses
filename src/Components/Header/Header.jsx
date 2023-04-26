import React, { useContext, useState } from 'react';
import './Header.css'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { FaBars } from 'react-icons/fa';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const Logout = () => {
        logOut()
    }

    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className=''>
            <div className='navbar bg-gradient-to-r from-yellow-400  to-pink-400 flex justify-between items-center'>

                <div>
                    {!isOpen &&
                        <h1 className=''><span className='text-transparent text-2xl font-semibold bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-700'>Foodie</span> <span className='font-semibold'><sub>Shop</sub></span></h1>

                    }
                </div>

                <div className='md:flex hidden'>
                    <NavLink className={({ isActive }) => isActive ? 'text-white' : 'default'} to='/'>Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'text-white' : 'default'} to='/foods'>Food</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'text-white' : 'default'} to='/about'> About</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'text-white' : 'default'} to='/help'> Help</NavLink>
                    {/* <NavLink className={({ isActive }) => isActive ? 'text-white' : 'default'} to='/register'>Register</NavLink> */}
                    <div>
                        {user ? <><small> {user.displayName}</small> <button onClick={Logout} className='btn btn-xs'>Logout </button></> :
                            <NavLink className={({ isActive }) => isActive ? 'text-white' : 'default'} to='/login'>Login</NavLink>}
                    </div>
                </div>
                <div className='md:hidden'>

                    <button onClick={() => setIsOpen(!isOpen)} className='btn border-yellow-500 bg-gradient-to-r from-pink-500 to-yellow-400'> <FaBars></FaBars></button>

                </div>
                {
                    isOpen &&

                    <div className='md:hidden flex flex-col left-0 p-10 top-0 absolute   bg-opacity-70 bg-gradient-to-r from-pink-300 to-yellow-400'>
                        <div className='mb-5'>
                            {user ? <><small> {user.displayName}</small> <button onClick={Logout} className='btn btn-xs'>Logout </button></> :
                                <li className='my-2 list-none text-xl font-semibold'><NavLink className={({ isActive }) => isActive ? 'text-white' : 'default'} to='/login'>Login</NavLink></li>}
                        </div>
                        <li className='my-2 list-none text-xl font-semibold'>
                            <NavLink className={({ isActive }) => isActive ? 'text-white' : 'default'} to='/'>Home</NavLink>
                        </li>

                        <li className='my-2 list-none text-xl font-semibold'>
                            <NavLink className={({ isActive }) => isActive ? 'text-white' : 'default'} to='/foods'>Food</NavLink></li>
                        <li className='my-2 list-none text-xl font-semibold'>
                            <NavLink className={({ isActive }) => isActive ? 'text-white' : 'default'} to='about'> About</NavLink>
                        </li>

                        <li className='my-2 list-none text-xl font-semibold'> <NavLink className={({ isActive }) => isActive ? 'text-white' : 'default'} to='/login'>Login</NavLink></li>

                    </div>
                }


            </div>

        </div>
    );
};

export default Header;