import React, { useEffect, useState } from 'react';
import Cart from '../../Cart/Cart';
import Laptop from '../Laptop/Laptop';
import './Laptops.css';

const Laptops = () => {
    const [laptops, setLaptops] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('laptops.json')
            .then(res => res.json())
            .then(data => setLaptops(data));
    }, []);

    const handleAddToCart = productName => {
        if (cart.length === 4) {
            console.log('Can not be added more than 4 items!!!');
            return;
        }
        if (cart.indexOf(productName) === -1) {
            let newCart = [];
            console.log(productName);
            newCart = [...cart, productName];
            setCart(newCart);
        } else {
            console.log("Already exists.");
        }
    };

    const handleChooseOne = () => {
        const newCart = [];
        if (cart.length > 0) {
            const randomNum = Math.floor(Math.random() * cart.length);
            newCart.push(`Buy this: ${cart[randomNum]}`);
            setCart(newCart);
        } else {
            newCart.push(`Not available`);
            setCart(newCart);
        }
    };
    const handleChooseAgain = () => {
        setCart([]);
    };

    return (
        <div className='laptops-shop-container'>
            <div className='laptops-container'>
                {
                    laptops.map((laptop) =>
                        <Laptop key={laptop.id} data={laptop} handleAddToCart={handleAddToCart} />
                    )
                }
            </div>
            <div className='cart-container'>
                <Cart
                    handleChooseOne={handleChooseOne}
                    handleChooseAgain={handleChooseAgain}
                    data={cart}
                />
            </div>
        </div>
    );
};

export default Laptops;