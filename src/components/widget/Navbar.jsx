import React, { useState } from 'react';
import { HiFingerPrint } from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa6";
import { CiHome } from "react-icons/ci";
import { Link } from 'react-router-dom';


const Nav = () => {
  //tombol menu
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  //tombol wa
  const phoneNumber = 6285775478560; // Ganti dengan nomor WhatsApp Anda
  const message = 'Mas mau order sekarang bisa?'; // Pesan default

  const waClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div>     
      <div className={`absolute top-0 left-0 w-screen bg-white transition-transform duration-300 z-40 ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <ul className="flex flex-col items-center">
          <li className="p-4"><Link to="/volcom">Volcom</Link></li>
          <li className="p-4"><Link to="/quicksilver">Quick Silver</Link></li>
          <li className="p-4"><Link to="/spiderblitz">Spider Blitz</Link></li>
          <li className="p-4"><Link to="/caraorder">Cara order</Link></li>
        </ul>
      </div>

      <div className='fixed inset-x-0 bottom-6 flex justify-around w-screen z-50'>
        <Link to="/"><CiHome className='fill-white h-[50px] w-[50px] bg-amber-400 p-2 rounded-full'/></Link>
        <button onClick={handleClick}><HiFingerPrint className='fill-white h-[70px] w-[70px]  bg-amber-400 p-2 rounded-full'/></button>
        <button onClick={waClick}><FaWhatsapp className='fill-white h-[50px] w-[50px] bg-amber-400 p-2 rounded-full'/></button>
    </div>

    </div>
  );
};

export default Nav;