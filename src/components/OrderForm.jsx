// src/components/OrderForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

function OrderForm({ productId }) {
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleOrder = async (e) => {
    e.preventDefault();

    // Cek apakah user sudah login (misalnya dengan adanya token di localStorage)
    const token = localStorage.getItem('token');
    if (!token) {
      // Jika belum login, arahkan ke halaman login dengan menyertakan redirect URL
      navigate(`/login?redirect=${encodeURIComponent(location.pathname + location.search)}`);
      return;
    }

    try {
      const response = await axios.post(
        'https://dika-server.vercel.app/api/orders', // Sesuaikan endpoint dengan route backend
        { product: productId, quantity }, // Field sesuai dengan OrderController
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` // Sertakan token untuk otentikasi
          }
        }
      );
      setMessage('Pesanan berhasil dibuat!');
    } catch (error) {
      console.error('Order error', error.response);
      setMessage('Order gagal, silahkan coba lagi.');
    }
  };

  return (
    <form onSubmit={handleOrder} className="flex flex-col gap-4">
      <input type="hidden" value={productId} />
      <div>
        <label htmlFor="quantity" className="block">Jumlah:</label>
        <input 
          type="number" 
          id="quantity" 
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="border rounded px-2 py-1 w-20"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Order</button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default OrderForm;
