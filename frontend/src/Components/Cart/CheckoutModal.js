// CheckoutModal.js
import React, { useState } from 'react';

const CheckoutModal = ({ isOpen, onClose, product, quantity,setQuantity, couponCode, setCouponCode, onCheckout }) => {

    if (!isOpen) return null; // Don't render anything if not open

    const totalPrice = (product.price * quantity).toFixed(2); // Calculate total price

    const handleQuantityChange = (value) => {
        setQuantity(prevQuantity => Math.max(1, prevQuantity + value)); // Ensure quantity is at least 1
    };

    return (
        <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50`}>
            <div className="bg-white rounded-lg p-6 w-1/2">
                <h2 className="text-xl font-bold mb-4">Checkout</h2>
                <div className="flex mb-4">
                    <img src={product.images[0]} alt={product.name} className="w-24 h-24 object-cover mr-4" />
                    <div className=''>
                        <h3 className="text-lg">{product.name}</h3>
                        <p>Price: ₹{product.price}</p>
                        <div className="flex items-center">
                            <label htmlFor="quantity" className="mr-2">Quantity:</label>
                            <div className="flex items-center">
                                <button
                                    onClick={() => handleQuantityChange(-1)}
                                    className="bg-gray-300 text-gray-700 px-2 py-1 rounded-l hover:bg-gray-400"
                                >
                                    -
                                </button>
                                <input
                                    type="number"
                                    id="quantity"
                                    value={quantity}
                                    readOnly
                                    className="border-t border-b border-gray-300 px-2 py-0.5 w-16 text-center"
                                    min="1"
                                />
                                <button
                                    onClick={() => handleQuantityChange(1)}
                                    className="bg-gray-300 text-gray-700 px-2 py-1 rounded-r hover:bg-gray-400"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <p>Total Price: ₹{totalPrice}</p>
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="coupon" className="block mb-1">Coupon Code:</label>
                    <input
                        type="text"
                        id="coupon"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)} // Handle coupon code input
                        className="border border-gray-300 rounded p-2 w-full"
                        placeholder="Enter coupon code"
                    />
                </div>
                <div className="flex justify-between">
                    <button 
                        onClick={onCheckout} 
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Proceed to Checkout
                    </button>
                    <button 
                        onClick={onClose} 
                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CheckoutModal;
