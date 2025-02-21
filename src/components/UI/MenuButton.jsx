// src/components/UI/MenuButton.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { HiOutlineStop } from 'react-icons/hi';
import { HiXCircle } from 'react-icons/hi';

const MenuButton = ({ className }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [brands, setBrands] = useState([]);
  const navigate = useNavigate();

  // Ambil data produk dan ekstrak brand unik
  const fetchBrands = async () => {
    try {
      const response = await axios.get('https://dika-server.vercel.app/api/products');
      const products = response.data;
      const brandSet = new Set();
      products.forEach(product => {
        if (product.brand) {
          brandSet.add(product.brand.trim());
        }
      });
      setBrands(Array.from(brandSet));
    } catch (error) {
      console.error("Error fetching brands:", error);
    }
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  const handleBrandClick = (brand) => {
    navigate(`/productlist?brand=${encodeURIComponent(brand)}`);
    setIsModalOpen(false);
  };

  // Fungsi toggle modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <button
        onClick={toggleModal}
      >
        {isModalOpen ? <HiXCircle className={className}/> : <HiOutlineStop className={className}/>}
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Overlay dengan background gelap dan blur */}
          <div 
            className="absolute inset-0 " 
            onClick={toggleModal}
          ></div>
          {/* Container modal dengan ukuran tetap */}
          <div className="absolute top-27 flex w-screen h-[100vw] overflow-auto">
            <div className="grid grid-cols-1 gap-4">
              {brands.length === 0 ? (
                <p className="col-span-2 text-center text-gray-500">
                  Tidak ada brand ditemukan.
                </p>
              ) : (
                brands.map((brand) => (
                  <button
                    key={brand}
                    onClick={() => handleBrandClick(brand)}
                    className="backdrop-blur-xl text-white text-lg rounded-full w-screen"
                  >
                    {brand}
                  </button>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuButton;
