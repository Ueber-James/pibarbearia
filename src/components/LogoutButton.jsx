// src/components/LogoutButton.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/', { replace: true });
    window.location.reload(); 
  };

  return (
    <button
      onClick={handleLogout}
      className="text-[#f0b35b] hover:underline focus:outline-none"
    >
      Sair
    </button>
  );
}
