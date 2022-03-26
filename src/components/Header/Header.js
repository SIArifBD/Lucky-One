import React from 'react';
import logo from '../../images/laptopLogo.png';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="/shop">Home</a>
                <a href="/about">About</a>
                <a href="/login">Login</a>
                <a href="/cart">Cart</a>
            </div>
        </div>
    );
};

export default Header;