import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams, useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const brand = searchParams.get('brand');
  const navigate = useNavigate();
  

  useEffect(() => {
    axios.get('https://dika-server.vercel.app/api/products')
      .then((response) => {
        console.log('Semua produk:', response.data);
        const allProducts = response.data;
        const filteredProducts = brand 
          ? allProducts.filter(product => product.brand.toLowerCase() === brand.toLowerCase())
          : allProducts;
        console.log('Produk terfilter:', filteredProducts);
        setProducts(filteredProducts);
      })
      .catch((error) => {
        console.error('Error fetching products', error);
      });
  }, [brand]);
  

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="container w-screen p-6 box-border h-auto bg-[url(https://res.cloudinary.com/dt5d9j5vl/image/upload/v1740133048/background/q1n76xsxzd2igfcsn5nx.jpg)] bg-fixed">
      <div className="grid grid-cols-1 mt-10 md:grid-cols-3 gap-4">
        {products.map(product => (
          <ProductCard key={product._id} product={product} onClick={() => handleProductClick(product._id)} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
