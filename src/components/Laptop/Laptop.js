import React from 'react';
import './Laptop.css'

const Laptop = ({ data, handleAddToCart }) => {
    console.log(data)
    const { name, img, price } = data;
    return (
        <div className='laptop'>
            <img src={img} alt="" />
            <div className='laptop-info'>
                <p className='laptop-name'>Name: {name}</p>
                <p>Price: {price}tk</p>
            </div>
            <button onClick={() => handleAddToCart(name)} className='btn-cart'>
                <p className='btn-text'>Select Now</p>
            </button>
        </div>
    );
};

export default Laptop;