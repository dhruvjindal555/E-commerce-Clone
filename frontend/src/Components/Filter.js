import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
const Filter = () => {
  const [price, setPrice] = useState([0, 100000]);
  const [brand, setBrand] = useState('');
  const [rating, setRating] = useState('');
  const [color, setColor] = useState('');

  const handlePriceChange = (e) => {
    setPrice([e[0], e[1]]);
    // console.log(e);
  };

  return (
    <div className="p-4 border rounded shadow-sm w-64 sticky top-10 ">
      <h2 className="text-xl font-bold mb-4">Filter</h2>
      <div className="mb-4">
        <label className="block font-medium mb-2">Sort by:</label>
        <select className="w-full p-2 border rounded">
          <option>Low to High Price</option>
          <option>High to Low Price</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-2">Filter by Price :</label>
        <Slider min={0} max={100000} range value={price} onChange={handlePriceChange}/>
        <div className="flex justify-between">
          <span>₹{price[0]}</span>
          <span>₹{price[1]}</span>
        </div>
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-2">Brand</label>
        <select className="w-full p-2 border rounded" value={brand} onChange={(e) => setBrand(e.target.value)}>
          <option value="">Select Brand</option>
          <option value="brand1">Brand 1</option>
          <option value="brand2">Brand 2</option>
          <option value="brand3">Brand 3</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-2">Rating</label>
        <select className="w-full p-2 border rounded" value={rating} onChange={(e) => setRating(e.target.value)}>
          <option value="">Select Rating</option>
          <option value="1">1 Star</option>
          <option value="2">2 Stars</option>
          <option value="3">3 Stars</option>
          <option value="4">4 Stars</option>
          <option value="5">5 Stars</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-2">Filter by Color:</label>
        <input 
          type="text" 
          className="w-full p-2 border rounded" 
          value={color} 
          onChange={(e) => setColor(e.target.value)} 
          placeholder="Enter color" 
        />
      </div>
    </div>
  );
};

export default Filter;
