import React from 'react';
import './Cart.css'

const Cart = ({ data, handleChooseAgain, handleChooseOne }) => {
    return (
        <div className='cart'>
            <div>
                <h4>Selected Laptop:</h4>
                {
                    data.map((laptop, index) => (
                        <ul key={Math.random(index) * 100000}>
                            <li>{laptop}</li>
                        </ul>
                    ))
                }
            </div>
            <button onClick={() => handleChooseOne(data)} className="btn-choose-one">
                <p>Choose 1 for Me</p>
            </button>
            <button onClick={() => handleChooseAgain(data)} className="btn-choose-again">
                <p>Choose Again</p>
            </button>
        </div>
    );
};

export default Cart;