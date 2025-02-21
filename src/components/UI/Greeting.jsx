// src/components/UI/Greeting.jsx
import React from "react";
import { useAuthStore } from "../../store/authStore";

const Greeting = () => {
  const { user } = useAuthStore();

  // Jika user tidak ada (belum login), tidak render apa-apa
  if (!user) return null;

  return (
    <div className="animate-pulse fixed top-0 right-2 text-white px-4 py-2 z-50">
      Hai, {user.name}!
    </div>
  );
};

export default Greeting;
