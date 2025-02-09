// src/components/NavigateToStore.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NavigateToStore = () => {
  return (
    <Link 
      to="/store" 
      className="inline-block px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
    >
      Belanja sekarang
    </Link>
  );
};

export default NavigateToStore;