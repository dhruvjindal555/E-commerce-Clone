import React from 'react';
import grocery from '../Assets/grocerybg.png';
import mobiles from '../Assets/mobiles.png';
import fashion from '../Assets/fashionbg.png';
import electronics from '../Assets/electronicsbg.png'
import furniture from '../Assets/furniture.jpeg'
import appliance from '../Assets/appliancesbg.png'
import travel from '../Assets/travelbg.png'
import beauty from '../Assets/beautybg.png';
 import bike from '../Assets/bikebg.png';
const categories = [
  { name: 'Grocery', image: grocery },
  { name: 'Mobiles', image: mobiles },
  { name: 'Fashion', image: fashion },
  { name: 'Electronics', image: electronics},
  { name: 'Furniture', image: furniture},
  { name: 'Appliances', image: appliance},
  { name: 'Travel', image: travel},
  { name: 'Beauty, Toys & More', image: beauty},
  { name: 'Two-Wheelers', image: bike},
];

const Categories = () => {
  return (
    <div className="bg-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-around">
          {categories.map((category, index) => (
            <div key={index} className="text-center">
              <img src={category.image} alt={category.name} className=" object-cover w-16 h-16 mx-auto mb-2" />
              <span className="text-gray-800 font-semibold">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
