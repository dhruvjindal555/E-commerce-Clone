import React, { useState } from 'react'
import Review from './Review';
import Footer from './Footer';
import SimilarProducts from './SimilarProducts';

function ProductPage() {
    const data  = {
        "id": {
            "$oid": "65b2324bfce4beb31fc99875"
        },
        "mainCategory": "Electronics",  
        "subCategory": "Printer",
        "name": "Canon LBP-2800B inkjet printer",
        "brand": "Canon",
        "price": {
            "$numberInt": "8999"
        },
        "images": [
            "https://tse3.mm.bing.net/th?id=OIP.bOIJl5r0lKahbizwG_LgCgHaHa&pid=Api&P=0&h=180",
            "https://www.bhphotovideo.com/images/images2500x2500/canon_0958c002aa_maxify_mb2720_wireless_home_1269515.jpg"
        ],
        "description": "Best printer available in this range",
        "features": [
            "1rs per page",
            "Both color and b/w"
        ],
        "rating": {
            "$numberInt": "4"
        },
        "color": "Black",
        "_v": {
            "$numberInt": "0"
        },
        "mrp": {
            "$numberInt": "12000"
        }
    };
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
            <div className="mx-20 mt-5 bg-white shadow-lg rounded-lg overflow-hidden  flex justify-evenly ">
                <div className="md:flex-shrink-0 ">
                    <img
                        className=" object-cover w-screen-1/2"
                        src="Screenshot 2024-07-20 141801.png"
                        alt="Canon PowerShot ELPH 340 HS"
                    />
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
                                <span className='pr-1 ' >{data.rating.$numberInt} </span>
                                <i className="fa-solid fa-star fa-sm"></i>
                            </div>
                            <div className='w-fit text-gray-500'>
                                <span>200 ratings & 50 reviews</span>
                            </div>
                        </div>
                    </div>
                    <div className="px-4  rounded mx-auto">
                        <div className="text-green-600 font-semibold ">Special Price</div>
                        <div className="text-3xl font-bold text-gray-800">{"₹"+data.price.$numberInt} <span className="line-through text-gray-500 text-xl">{"₹"+data.mrp.$numberInt}</span> <span className="text-green-600 text-xl">25% off</span></div>

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
                                    {data.features.map((item,index)=>{
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
                                    <button onClick={()=>{
                                        console.log(showAddReview);
                                        setShowAddReview(true)}} className="px-4 py-2 bg-gray-100 text-gray-800 rounded shadow">
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
                        <Review showAddReview={showAddReview} setShowAddReview={setShowAddReview}/>
                    </div>

                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default ProductPage