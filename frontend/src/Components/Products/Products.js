import React from 'react';
import Filter from '../Filter';
import ProductsItem from './ProductsItem';
import { useLoaderData } from 'react-router';

const Products = () => {
  const products = useLoaderData()

  return (
    <div className='grid grid-cols-5 mx-5'>
      <div>
        <Filter />
      </div>
      <div className='col-span-4 flex gap-1 flex-col'>
        {products.length > 0 && products.map((product, index) => {
          return <ProductsItem key={index} product={product} />
        })}
      </div>
    </div>
  );
};

export default Products;




export const productsLoader = async ({params}) => {
  const { mainCategory, subCategory } = params;
  try {
    const response = await fetch(`http://localhost:8888/product/getAllProduct`);
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    console.log('Response from backend:', data);
    const productsData = data.data || [];
    if (subCategory) {
      const filteredProducts = productsData.filter(product => {
        return (
          product.mainCategory === mainCategory &&
          product.subCategory === subCategory
        );
      });
      console.log("Filtered Products:", filteredProducts);
      return filteredProducts
    } else {
      const filteredProducts = productsData.filter(product => {
        return (
          product.mainCategory === mainCategory
        );
      });
      console.log("Filtered Products:", filteredProducts);
      return filteredProducts
    }
  } catch (error) {
    console.error('Error fetching product:', error);
    return {}; // Return an empty object or handle the error as needed
  }
}