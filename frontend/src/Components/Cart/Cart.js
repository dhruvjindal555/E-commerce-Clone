import React, { useContext, useEffect, useState } from 'react';
import CartContext from '../../context/CartContext/CartContext';
import CartItem from './CartItem';

const Cart = () => {
    const { cart } = useContext(CartContext)

    return (
        <>
            <div className='flex flex-col mx-20'>
                {cart.length>=1? cart.map((product, index) => {
                    return <CartItem product={product} key={index} />
                }):
                    <div className='w-full h-full text-center font-semibold mt-16 mb-10'>
                        Your cart is empty. Add some products to proceed.
                    </div>
                }
            </div>
        </>
    );
};
export default Cart