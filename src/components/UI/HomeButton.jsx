// src/components/UI/HomeButton.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HiOutlineHome } from "react-icons/hi";

const HomeButton = ({ className }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <button
      onClick={handleClick}
    >
      <HiOutlineHome className={className}/>
    </button>
  );
};

export default HomeButton;
