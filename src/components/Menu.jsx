import React from 'react';
import Logo from '../assets/Logo.svg';
import { HashLink } from 'react-router-hash-link';
import LogoutButton from '../components/LogoutButton';

function Menu() {
  const token = localStorage.getItem('token');
  return (
    <nav className="sticky top-0 z-50 bg-[#070A14] shadow w-full">
      <div className="flex items-center justify-between py-4 px-4">
        <div className="flex items-center space-x-8">
          <HashLink smooth to="/#hero" className="flex-shrink-0">
            <img src={Logo} alt="Logo" className="h-16 w-auto" />
          </HashLink>
          <ul className="flex space-x-8 text-white">
            <li>
              <HashLink smooth to="/#hero" className="hover:text-gray-400">
                Home
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#sobre" className="hover:text-gray-400">
                Sobre
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#servicos" className="hover:text-gray-400">
                Serviços
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#equipe" className="hover:text-gray-400">
                Equipe
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="https://wa.me/XXXXXXXXXXX" className="text-white px-4 py-2 rounded hover:bg-green-600">
                Fale conosco via WhatsApp
              </HashLink>
            </li>
            {token && (
              <li>
                <HashLink smooth to="/lista-agendamentos" className="text-white px-4 py-2 rounded hover:text-gray-400">
                  Agendamentos
                </HashLink>
              </li>
            )}
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          <HashLink smooth to="/agendamento" className="bg-[#f0b35b] text-black px-4 py-2 rounded hover:bg-blue-600">
            Agendar horário
          </HashLink>
          {token && <LogoutButton />}
        </div>
      </div>
    </nav>
  );
}

export default Menu;
