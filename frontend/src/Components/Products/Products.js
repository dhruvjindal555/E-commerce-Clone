import React, { useState, useEffect } from 'react';
import Filter from '../Filter';
import ProductsItem from './ProductsItem';
import { useParams } from 'react-router';

const Products = () => {
  const [products, setProducts] = useState([])
  const { mainCategory, subCategory } = useParams()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8888/product/getAllProduct');
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
          setProducts(filteredProducts);
        } else {
          const filteredProducts = productsData.filter(product => {
            return (
              product.mainCategory === mainCategory
            );
          });

          console.log("Filtered Products:", filteredProducts);
          setProducts(filteredProducts);
        }

      } catch (error) {
        console.error('Error fetching products:', error.message);
      }
    }
    fetchData()
  }, [mainCategory, subCategory])

  return (
    <div className='grid grid-cols-5 mx-5'>
      <div>
        <Filter />
      </div>
      <div className='col-span-4 flex gap-1 flex-col'>
        {products.map((product,index) => {
          return <ProductsItem key={index} product={product} />
        })}
      </div>
    </div>
  );
};

export default Products;
