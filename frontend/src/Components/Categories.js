import React from 'react';
import grocery from '../Assets/grocerybg.png';
import mobiles from '../Assets/mobiles.png';
import fashion from '../Assets/fashionbg.png';
import electronics from '../Assets/electronicsbg.png'
import furniture from '../Assets/furniture.jpeg'
import appliance from '../Assets/appliancesbg.png'
import travel from '../Assets/travelbg.png'
import beauty from '../Assets/beautybg.png';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const categories = [
  { name: 'Grocery', image: grocery },
  { name: 'Mobiles', image: mobiles },
  { name: 'Fashion', image: fashion },
  { name: 'Electronics', image: electronics },
  { name: 'Furniture', image: furniture },
  { name: 'Appliances', image: appliance },
  { name: 'Travel', image: travel },
  { name: 'Beauty, Toys & More', image: beauty },
];


const Categories = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 100,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-white py-4">
      <div className="xl:container xl:mx-auto px-4 hidden sm:block">
        <div className="md:flex md:justify-around grid grid-cols-4 gap-2">
          {categories.map((category, index) => (
            <Link to={"/" + category.name} key={index} className="text-center ">
              <img src={category.image} alt={category.name} className=" object-cover lg:w-16 w-10 lg:h-16 h-10 mx-auto md:mb-2 mb-1" />
              <span className="text-gray-800 font-semibold">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
      <div className='sm:hidden block text-sm md:text-base'>
        <Slider {...settings}>
          {categories.map((category, index) => (
            <Link to={"/" + category.name} key={index} className="text-center ">
              <img src={category.image} alt={category.name} className=" object-cover lg:w-16 w-10 lg:h-16 h-10 mx-auto md:mb-2 mb-1" />
              <span className="text-gray-800 font-semibold">{category.name}</span>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Categories;
