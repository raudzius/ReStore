import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';

const Catalog: React.FC = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/products').then((res) => res.json()).then((productsData) => setProducts(productsData));
  }, []);

  return (
    <ProductList products={products} />
  );
};

export default Catalog;
