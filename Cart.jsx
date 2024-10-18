import React, { useEffect, useState } from 'react';
import './Cart.css';
const Cart = ({ cart, setCart }) => {
    const [total, setTotal] = useState(0);
    useEffect(()=>{
        setTotal(cart.reduce((acc, cur) => acc + parseFloat(cur.price),0,2));
    },[cart]);
    return (
        <>
            <h1 className="cart-heading">Cart Products</h1>
            <div className="cart-container">
                {
                    cart.map((product) => (
                        <div className="cart-product" key={product.map}>
                            <div className="img">
                                <img src={product.image} alt="image"/>
                            </div>
                            <div className="cart-product-details">
                                <h3>{product.title}</h3>
                                <p>{product.price}</p>
                            </div>
                        </div>

                    ))
                }

            </div>
            <h2 className="cart-amt">  Total Amount Rs: {total} </h2>
        </>
    );
};

export default Cart;