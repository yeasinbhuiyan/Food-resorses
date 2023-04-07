import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className=''>
            <div className='navbar flex justify-between items-center'>

                <div>
                    <h1>Foodie Shop </h1>
                </div>

                <div>
                    <Link to='/'>Home</Link>
                    <Link to='/foods'>Food</Link>
                    <Link to='about'> About</Link>
                    <Link to='/login'>Login</Link>

                </div>
            </div>
        </div>
    );
};

export default Header;