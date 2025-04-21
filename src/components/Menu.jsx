import React, { useState } from 'react';
import Logo from '../assets/Logo.svg';
import { HashLink } from 'react-router-hash-link';
import LogoutButton from '../components/LogoutButton';

function Menu() {
  const [open, setOpen] = useState(false);
  const token = localStorage.getItem('token');

  // itens de navegação principais
  const navItems = [
    { to: '/#hero', label: 'Home' },
    { to: '/#sobre', label: 'Sobre' },
    { to: '/#servicos', label: 'Serviços' },
    { to: '/#equipe', label: 'Equipe' },
    { to: 'https://wa.me/XXXXXXXXXXX', label: 'WhatsApp', external: true }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#070A14] shadow w-full">
      <div className="flex items-center justify-between py-4 px-4">
        {/* Logo */}
        <HashLink smooth to="/#hero" className="flex-shrink-0">
          <img src={Logo} alt="Logo" className="h-16 w-auto" />
        </HashLink>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-white">
          {navItems.map(item => (
            <li key={item.label}>
              {item.external ? (
                <a href={item.to} className="hover:text-gray-400">
                  {item.label}
                </a>
              ) : (
                <HashLink smooth to={item.to} className="hover:text-gray-400">
                  {item.label}
                </HashLink>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-4">
          {/* Agendar horário sempre visível quando não logado */}
          {!token && (
            <HashLink
              smooth
              to="/agendamento"
              className="inline-block bg-[#f0b35b] text-black px-4 py-2 rounded hover:bg-blue-600"
            >
              Agendar horário
            </HashLink>
          )}

          {/* Agendamentos sempre visível quando logado */}
          {token && (
            <HashLink
              smooth
              to="/lista-agendamentos"
              className="inline-block bg-[#f0b35b] text-black px-4 py-2 rounded hover:bg-blue-600"
            >
              Agendamentos
            </HashLink>
          )}

          {/* Logout */}
          {token && <LogoutButton />}

          {/* Botão hambúrguer */}
          <button
            className="md:hidden text-white text-3xl focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {open && (
        <ul className="md:hidden bg-[#070A14] px-4 py-3 space-y-2 text-white">
          {navItems.map(item => (
            <li key={item.label}>
              {item.external ? (
                <a href={item.to} className="block hover:text-gray-400">
                  {item.label}
                </a>
              ) : (
                <HashLink smooth to={item.to} className="block hover:text-gray-400">
                  {item.label}
                </HashLink>
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Menu;
