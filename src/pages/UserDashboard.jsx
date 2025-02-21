// src/pages/UserDashboard.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthStore } from '../store/authStore';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
  const { user, token, logout } = useAuthStore();
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  const fetchOrders = async () => {
    try {
      const response = await axios.get('https://dika-server.vercel.app/api/orders/my-orders', {
        headers: { Authorization: `Bearer ${token}` },
      });
      // Filter pesanan yang statusnya "Selesai" atau "Dibatalkan" tidak ditampilkan
      const filteredOrders = response.data.filter(
        order => order.status !== "Selesai" && order.status !== "Dibatalkan"
      );
      setOrders(filteredOrders);
    } catch (error) {
      console.error("Gagal mengambil data pesanan:", error);
    }
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  // Fungsi untuk menentukan tampilan badge berdasarkan status
  const getStatusBadge = (status) => {
    switch(status.toLowerCase()) {
      case 'menunggu konfirmasi':
        return (
          <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
            {status}
          </span>
        );
      case 'diproses':
        return (
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
            {status}
          </span>
        );
      default:
        return (
          <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
            {status}
          </span>
        );
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto p-6 fade-in" style={{ animationDelay: '0s' }}>
      {/* Header: Tampilkan "Selamat datang" dan tombol logout sejajar */}
      <header className="flex items-center justify-between mb-8 fade-in" style={{ animationDelay: '0.2s' }}>
        <div className="flex items-center space-x-4">
          <p className="text-gray-600 text-lg">Selamat datang, {user?.name}!</p>
          <button 
            onClick={logout} 
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </header>
      
      <section className="fade-in" style={{ animationDelay: '0.4s' }}>
        <h2 className="text-2xl font-semibold mb-6">Pesanan Saya</h2>
        {orders.length === 0 ? (
          <p className="text-gray-500">Belum ada pesanan aktif.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {orders.map((order, index) => (
              <div 
                key={order._id} 
                className="border p-6 rounded-lg shadow-lg bg-white transition transform hover:scale-105 fade-in" 
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img 
                      src={order.product.photoDisplay} 
                      alt={order.product.title} 
                      className="w-16 h-16 object-cover rounded"
                    />
                    <p className="font-bold text-lg">{order.product.title}</p>
                  </div>
                  <p className="text-green-600 font-semibold">
                    Rp {order.product.price * order.quantity}
                  </p>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-700">Jumlah: {order.quantity}</p>
                </div>
                <div className="mt-2">
                  {getStatusBadge(order.status)}
                </div>
                <div className="mt-2 text-xs text-gray-500">
                  Dipesan: {new Date(order.createdAt).toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default UserDashboard;
