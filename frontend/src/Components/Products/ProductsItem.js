import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

 
const ProductsItem = ({ product }) => {
    return (
        <Link to={`/${product.mainCategory}/${product.subCategory}/${product._id}`} className="flex border rounded-lg p-4 justify-evenly shadow-md h-fit flex-wrap md:flex-nowrap" >
            <div className="flex-shrink-0  rounded-lg min-w-48 max-w-64 max-h-64 min-h-48">
                <Carousel stopOnHover infiniteLoop autoPlay showThumbs={false} interval={2000} className='w-48 h-48'>
                    {product.images.map((url, index) => {
                        return (<div className='flex justify-center items-center bg-contain 'key={index}>
                            <img
                                className=" object-contain  max-h-48 rounded-lg"
                                src={url}
                                alt={product.name}
                            />
                            {/* <p className="legend">{"Legend "+(index+1)}</p> */}
                        </div>
                        )
                    })}
                </Carousel>
            </div>
            <div className="flex-grow ml-4 order-3 md:order-2">
                <div className="flex items-center mb-2">
                    <span className="text-xl font-bold">{product.brand}</span>
                    <button className="ml-2 text-gray-500">❤️</button>
                </div>
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <div className="flex items-center text-green-500 mb-2">
                    <span className="ml-1">{product.rating}</span>
                    <i className="fa-solid fa-star fa-sm px-1"></i>
                </div>
                <ul className="list-disc pl-5 mb-4">
                    {product.features.map((item, index) => {
                        return (<li key={index} className="">{item}</li>)
                    })}
                </ul>
            </div>
            <div className="flex-shrink-0 w-full sm:w-fit text-right lg:mr-10 order-2 md:order-3">
                <div className="text-2xl font-bold">{"₹" + product.price}</div>
                <div className="line-through text-gray-500">{"₹" + product.mrp}</div>
                <div className="text-green-500">Delivery: Free</div>
                <div className="text-gray-500">Est. Delivery Date: Thu Jul 25 2024</div>
                <div className="text-green-600 font-semibold">Bank Offers Available</div>
            </div>
        </Link>
    );
};

export default ProductsItem;
