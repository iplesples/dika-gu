// src/components/UI/DashboardButton.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HiOutlineUser } from "react-icons/hi";

const DashboardButton = ({className}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/dashboard');
  };

  return (
    <button
      onClick={handleClick}
    >
      <HiOutlineUser className={className}/>
    </button>
  );
};

export default DashboardButton;
