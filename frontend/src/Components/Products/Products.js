import React from 'react';
import Filter from '../Filter';
import ProductsItem from './ProductsItem';

const Products = () => {
  const data = {
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
  return (
    <div className='grid grid-cols-5 mx-5'>
      <div>
        <Filter />
      </div>
      <div className='col-span-4 flex gap-1 flex-col'>
        <ProductsItem product={data} />
        <ProductsItem product={data} />
        <ProductsItem product={data} />
        <ProductsItem product={data} />
        <ProductsItem product={data} />
        <ProductsItem product={data} />
        <ProductsItem product={data} />
        <ProductsItem product={data} />
        <ProductsItem product={data} />
        <ProductsItem product={data} />
        <ProductsItem product={data} />
      </div>
    </div>
  );
};

export default Products;
