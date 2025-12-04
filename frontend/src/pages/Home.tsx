import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/api';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className='grid grid-cols-4 gap-4 p-4'>
      {products.map(product => <ProductCard key={product.id} product={product} />)}
    </div>
  );
};

export default Home;
