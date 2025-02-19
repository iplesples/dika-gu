import React, { useState } from "react";

// Reusable Button Component
export const Button = ({ text, onClick, variant = "primary" }) => {
  const baseStyle = "px-4 py-2 rounded-xl font-medium transition-all duration-300";
  const variants = {
    primary: "bg-black text-white hover:bg-gray-800",
    secondary: "bg-gray-200 text-black hover:bg-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };
  return (
    <button className={`${baseStyle} ${variants[variant]}`} onClick={onClick}>
      {text}
    </button>
  );
};

// Reusable Card Component for Product Display
export const Card = ({ image, title, price, onClick }) => {
  return (
    <div className="border rounded-xl p-4 shadow-md hover:shadow-lg transition">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg" />
      <h2 className="text-lg font-semibold mt-2">{title}</h2>
      <p className="text-gray-600">Rp {price}</p>
      <Button text="Lihat Detail" onClick={onClick} variant="primary" />
    </div>
  );
};

// Reusable Input Field Component
export const InputField = ({ label, type = "text", value, onChange }) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
      />
    </div>
  );
};

// HomePage Component
export const HomePage = ({ products, onProductClick }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Daftar Produk</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <Card key={product.id} image={product.image} title={product.title} price={product.price} onClick={() => onProductClick(product)} />
        ))}
      </div>
    </div>
  );
};

// Product Detail Page
export const ProductPage = ({ product, onOrder }) => {
  if (!product) return <p>Produk tidak ditemukan</p>;

  return (
    <div className="container mx-auto p-4">
      <img src={product.image} alt={product.title} className="w-full h-64 object-cover rounded-lg" />
      <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
      <p className="text-gray-600 text-lg">Rp {product.price}</p>
      <p className="mt-2">{product.description}</p>
      <Button text="Pesan Sekarang" onClick={() => onOrder(product)} variant="primary" />
    </div>
  );
};

// Order List Page for Admin
export const OrderList = ({ orders, onUpdateStatus }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Daftar Pesanan</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Nama</th>
            <th className="border p-2">Produk</th>
            <th className="border p-2">Jumlah</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="text-center">
              <td className="border p-2">{order.name}</td>
              <td className="border p-2">{order.product.title}</td>
              <td className="border p-2">{order.quantity}</td>
              <td className="border p-2">{order.status}</td>
              <td className="border p-2">
                <select
                  value={order.status}
                  onChange={(e) => onUpdateStatus(order.id, e.target.value)}
                  className="border p-1 rounded-md"
                >
                  <option value="Menunggu Konfirmasi">Menunggu Konfirmasi</option>
                  <option value="Diproses">Diproses</option>
                  <option value="Selesai">Selesai</option>
                  <option value="Dibatalkan">Dibatalkan</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
