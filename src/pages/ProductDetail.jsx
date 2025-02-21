import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import OrderForm from '../components/OrderForm.jsx';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://dika-server.vercel.app/api/products/${id}`) // Ganti dengan endpoint API detail produk Anda
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error('Error fetching product detail', error);
      });
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container mx-auto mt-10">
      <div className="flex flex-col md:flex-row gap-8">
        <img src={product.photoDisplay} alt={product.title} className="w-full md:w-1/2 object-cover rounded" />
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="mt-2">{product.description}</p>
          <p className="mt-2 font-semibold">Harga: Rp {product.price}</p>
          <p className="mt-2">Stok: {product.stock}</p>
          <div className="mt-4">
            <OrderForm productId={product._id} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
