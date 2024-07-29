import React, { useState, useEffect } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
const Filter = ({ filteredProducts, setFilteredProducts, brands, products }) => {
  const [ascending, setAscending] = useState(false);
  const [price, setPrice] = useState([0, 1000000]);
  const [brand, setBrand] = useState('');
  const [rating, setRating] = useState('');

  const handleRatingChange = (value) => {
    const newFilteredProducts = products.filter(product => product.rating >= value)
    console.log(newFilteredProducts);
    setFilteredProducts(newFilteredProducts)
  }

  const handleBrandFilter = (value) => {
    if (value === 'ALL') {
      setFilteredProducts(products)
    } else {
      setFilteredProducts(products.filter(product => product.brand === value))
    }
  }
  const handlePriceChange = (e) => {
    const newFilteredProducts = products.filter(product =>
      product.price >= e[0] && product.price <= e[1])
    setFilteredProducts(newFilteredProducts)
    setPrice([e[0], e[1]]);
    // console.log(e);
  };
  const handleSortChange = (value) => {
    const sortedProducts = [...filteredProducts].sort((a, b) =>
      value === 'false' ? b.price - a.price : a.price - b.price
    );
    console.log('Sorted Products:', sortedProducts);
    setFilteredProducts(sortedProducts);
  };

 
  return (
    <div className="lg:p-4 p-1 pb-2 md:p-1 mb-3 md:mb-0 border rounded flex-wrap shadow-sm xl:w-64 flex justify-around lg:flex-col sticky top-10 mr-1">
      <h2 className="text-xl font-bold md:mb-4 w-full md:w-fit pl-2 md:p-0">Filter</h2>
      <div className="md:mb-4">
        <label className="block font-medium mb-2">Sort by:</label>
        <select className="w-full md:p-2 p-1 border rounded"
          value={ascending}
          onChange={(e) => {
            setAscending(e.target.value)
            handleSortChange(e.target.value)
          }} >
          <option value='true'>Low to High Price</option>
          <option value='false'>High to Low Price</option>
        </select>
      </div>
      <div className="md:mb-4">
        <label className="block font-medium mb-2">Filter by Price :</label>
        <Slider min={0} max={1000000} range value={price} onChange={(e) => { handlePriceChange(e) }} />
        <div className="flex justify-between">
          <span>₹{price[0]}</span>
          <span>₹{price[1]}</span>
        </div>
      </div>
      <div className="md:mb-4">
        <label className="block font-medium md:mb-2 md-1">Brand</label>
        <select
          className="w-full md:p-2 p-1 border rounded"
          value={brand}
          onChange={(e) => {
            setBrand(e.target.value)
            handleBrandFilter(e.target.value)
          }}>
          <option value='ALL'>All</option>
          {brands.map((e, i) => {
            return <option key={i} value={e}>{e}</option>
          })}
        </select>
      </div>
      <div className="md:mb-4">
        <label className="block font-medium md:mb-2 mb-1" >Rating</label>
        <select
          className="w-full md:p-2 p-1 border rounded"
          value={rating}
          onChange={(e) => {
            handleRatingChange(e.target.value);
            setRating(e.target.value)
          }}>
          <option defaultChecked value="1">{">1 Star"}</option>
          <option value="2">{">2 Stars"}</option>
          <option value="3">{">3 Stars"}</option>
          <option value="4">{">4 Stars"}</option>
        </select>
      </div>

    </div>
  );
};

export default Filter;
