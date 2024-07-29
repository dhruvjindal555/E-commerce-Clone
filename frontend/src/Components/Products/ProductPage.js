import React, { useContext, useState } from 'react'
import Review from '../Review';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useLoaderData } from 'react-router';
import CartContext from '../../context/CartContext/CartContext';

function ProductPage() {
    const { addToCart, cart } = useContext(CartContext)
    
    const data = useLoaderData()
    const [modelYear, setModelYear] = useState(2023);
    const [pincode, setPincode] = useState('');
    const [showAddReview, setShowAddReview] = useState(false);

    const handlePincodeChange = (e) => {
        setPincode(e.target.value);
    };

    const isPincodeInvalid = () => {
        return pincode && pincode.length !== 6; // Assuming a valid pincode is 6 digits long
    };

    return (
        <div >
            <div className="mx-20 bg-white shadow-lg rounded-lg overflow-hidden  flex justify-evenly ">
                <div className="md:flex-shrink-0 ">
                    <Carousel stopOnHover infiniteLoop autoPlay interval={2000} className='w-screen-75'>
                        {data.images.map((url, index) => {
                            return (<div className='flex justify-center items-center h-fit w-full  ' key={index}>
                                <img
                                    key={index}
                                    className="object-contain object-center max-h-96"
                                    src={url}
                                    alt={data.name}
                                />
                            </div>
                            )
                        })}
                    </Carousel>
                    <div className="flex space-x-4">
                        <button
                            onClick={() => {
                                console.log(addToCart(data));
                                console.log(cart);
                            }}
                            className=" w-full bg-yellow-300 hover:bg-yellow-400 text-white text-lg font-bold py-2 px-4 rounded inline-flex items-center justify-center ">
                            <i className="fa-solid fa-cart-shopping pr-2"></i>
                            Add to cart
                        </button>
                        <button className="w-full bg-orange-300 hover:bg-orange-400 text-white text-lg font-bold py-2 px-4 rounded inline-flex items-center justify-center">
                            <i className="pr-2 fa-solid fa-bolt"></i>
                            Buy Now
                        </button>
                    </div>
                </div>
                <div className="flex flex-col justify-start py-5">
                    <div className="px-4 py-2 flex flex-col">
                        <div className="uppercase text-gray-600 mb-3 tracking-wide text-xl font-bold">
                            {data.brand}
                        </div>
                        <div className="uppercase tracking-wide text-xl ">
                            {data.name}
                        </div>
                        <div className="  flex gap-2 my-2 ">
                            <div className='bg-green-600 w-fit px-2 rounded-xl flex items-center text-white'>
                                <span className='pr-1 ' >{data.rating} </span>
                                <i className="fa-solid fa-star fa-sm"></i>
                            </div>
                            <div className='w-fit text-gray-500'>
                                <span>200 ratings & 50 reviews</span>
                            </div>
                        </div>
                    </div>
                    <div className="px-4  rounded mx-auto">
                        <div className="text-green-600 font-semibold ">Special Price</div>
                        <div className="text-3xl font-bold text-gray-800">{"₹" + data.price} <span className="line-through text-gray-500 text-xl">{"₹" + data.mrp}</span> <span className="text-green-600 text-xl">25% off</span></div>
                        <div className="mt-2">
                            <div className="text-green-600 font-semibold">Coupons for you</div>
                            <div className="text-gray-800 font-medium mt-1">
                                <span className="inline-flex items-center">
                                    <svg className="w-5 h-5 text-green-600 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.553 2.378a1 1 0 011.894 0l1.286 4.085h4.287a1 1 0 01.688 1.748l-3.47 2.519 1.286 4.085a1 1 0 01-1.538 1.152l-3.47-2.52-3.471 2.52a1 1 0 01-1.537-1.152l1.286-4.085-3.47-2.52a1 1 0 01.688-1.748h4.287L9.553 2.378z" />
                                    </svg>
                                    <span>Partner offer Buy this product and get upto ₹500 off</span>
                                </span>
                            </div>
                            <div className="text-indigo-500 font-medium mt-1 cursor-pointer">View more coupons</div>
                        </div>
                        <div className="mt-4">
                            <div className="font-semibold text-gray-800">Available offers</div>
                            <ul className="mt-2 list-disc list-inside">
                                <li className="text-gray-700">Bank offers 10% off on Axis Bank Credit Card Transactions, up to ₹1,250 on orders of ₹5,000 and above</li>
                                <li className="text-gray-700 mt-1">Bank offers 10% off on HDFC Bank Credit Card Transactions, up to ₹1,250 on orders of ₹5,000 and above</li>
                                <li className="text-gray-700 mt-1">Bank offers 10% off on ICICI Bank Credit Card Transactions, up to ₹1,250 on orders of ₹5,000 and above</li>
                                <li className="text-gray-700 mt-1">Special Price Get extra 6% off (price inclusive of cashback/coupon)</li>
                                <li className="text-gray-700 mt-1">Bank offers 10% off on SBI Bank Credit Card Transactions, up to ₹1,250 on orders of ₹5,000 and above</li>
                            </ul>
                        </div>
                    </div>
                    <div className="p-4 rounded ">
                        <div className="text-gray-500">For warranty details visit Brand's official website</div>
                        <div className="mt-4 flex justify-start items-center gap-4 ">
                            <div className="text-gray-700 font-semibold">Model year</div>
                            <div className="flex space-x-2 mt-1">
                                <button
                                    className={`px-4 py-2 border rounded ${modelYear === 2023 ? 'bg-blue-500 text-white' : 'bg-white'} font-semibold`}
                                    onClick={() => setModelYear(2023)}
                                >
                                    2023
                                </button>
                                <button
                                    className={`px-4 py-2 border rounded ${modelYear === 2024 ? 'bg-blue-500 text-white' : 'bg-white'} font-semibold`}
                                    onClick={() => setModelYear(2024)}
                                >
                                    2024
                                </button>
                            </div>
                        </div>
                        <div className="my-3  flex justify-between items-center ">
                            <div className='flex gap-4'>
                                <div className="text-gray-700 font-semibold flex items-center">
                                    <svg className="w-5 h-5 text-blue-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-9.586V7a1 1 0 112 0v3a1 1 0 01-.293.707l-2 2a1 1 0 01-1.414-1.414l1.707-1.707z" />
                                    </svg>
                                    Delivery
                                </div>
                                <input
                                    type="text"
                                    value={pincode}
                                    onChange={handlePincodeChange}
                                    className="mt-1 block  border-b-2 focus:outline-none focus:border-blue-500"
                                    placeholder="Enter pincode"
                                />
                                {isPincodeInvalid() && (
                                    <div className="text-red-500 mt-1">Invalid Pincode</div>
                                )}
                            </div>
                            <div className="text-gray-700 font-medium mt-1">Delivery by Wed Jul 24 2024 | Free</div>
                        </div>
                        <div className='flex justify-between'>
                            <div className="mt-4">
                                <div className="text-gray-700 font-semibold">Highlights</div>
                                <ul className="list-disc list-inside mt-1">
                                    {data.features.map((item, index) => {
                                        return (<li key={index} className="text-gray-700">{item}</li>)
                                    })}
                                </ul>
                            </div>
                            <div className="mt-4">
                                <div className="text-gray-700 font-semibold">Easy Payment Options</div>
                                <ul className="list-disc list-inside mt-1">
                                    <li className="text-gray-700">No cost EMI starting from ₹925/month</li>
                                    <li className="text-gray-700">Cash on Delivery</li>
                                    <li className="text-gray-700">Net banking & Credit/ Debit/ ATM card</li>
                                </ul>
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <span className='text-gray-700 font-semibold'>Description</span>
                            <p className="">Best printer available in this range</p>
                        </div>
                        <div className="p-6">
                            <div className="mt-6 border-t border-gray-200 pt-4">
                                <h2 className="text-xl font-bold">Ratings & Reviews</h2>
                                <div className="mt-2">
                                    <button onClick={() => {
                                        console.log(showAddReview);
                                        setShowAddReview(true)
                                    }} className="px-4 py-2 bg-gray-100 text-gray-800 rounded shadow">
                                        Add Review
                                    </button>
                                </div>
                            </div>
                            {/* <div className="mt-8 border-t border-gray-200 pt-4">
                                <h2 className="text-xl font-bold">Questions and Answers</h2>
                                <div className="mt-2">
                                    <button className="px-4 py-2 bg-gray-100 text-gray-800 rounded shadow">
                                        + Add Question
                                    </button>
                                </div>
                            </div> */}
                        </div>
                        <Review showAddReview={showAddReview} setShowAddReview={setShowAddReview} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage
export const productPageLoader = async ({ params }) => {
    const { id } = params;
    try {
        const response = await fetch(`http://localhost:8888/product/getProduct/${id}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        console.log('Response from backend:', data);
        return data.data;
    } catch (error) {
        console.error('Error fetching product:', error);
        return {}; // Return an empty object or handle the error as needed
    }
};
