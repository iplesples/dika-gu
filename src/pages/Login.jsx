// src/pages/Login.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useAuthStore } from '../store/authStore';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [whatsapp, setWhatsapp] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuthStore();
  const navigate = useNavigate();
  const redirect = new URLSearchParams(location.search).get('redirect') || '/dashboard';

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://dika-server.vercel.app/api/auth/login', {
        whatsapp,
        password,
      });
      // Asumsikan response.data berisi { token, user }
      login(response.data.user, response.data.token);
      navigate(redirect);
    } catch (err) {
      setError(err.response?.data?.message || 'Login gagal');
    }
  };

  // Ambil data admin dari .env
  const adminWhatsapp = import.meta.env.VITE_ADMIN_WHATSAPP;
  const forgotPasswordMessage = encodeURIComponent(import.meta.env.VITE_FORGOT_PASSWORD_MESSAGE);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <input
          type="text"
          placeholder="Nomor WhatsApp"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          className="w-full border rounded p-2 mb-4"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border rounded p-2 mb-4"
          required
        />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Login
        </button>
        <p className="mt-4 text-center text-sm">
          Belum punya akun?{' '}
          <span 
            className="text-blue-500 cursor-pointer hover:underline"
            onClick={() => navigate('/register')}
          >
            Register di sini
          </span>
        </p>
        <p className="mt-2 text-center text-sm">
          Lupa password?{' '}
          <a
            href={`https://wa.me/${adminWhatsapp}?text=${forgotPasswordMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Hubungi Admin
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
