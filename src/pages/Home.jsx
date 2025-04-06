import React from 'react';
import { HashLink } from 'react-router-hash-link';

import heroImg from '../assets/hero.svg';
import sobreImg from '../assets/sobre.svg';
import service1 from '../assets/service1.svg';
import service2 from '../assets/service2.svg';
import service3 from '../assets/service3.svg';
import equipe1 from '../assets/equipe1.svg';
import equipe2 from '../assets/equipe2.svg';
import equipe3 from '../assets/equipe3.svg';
import unidade1 from '../assets/unidade1.svg';
import unidade2 from '../assets/unidade2.svg';
import Logo from '../assets/Logo.svg'; // Logo da barbearia

function Home() {
  return (
    <div className="w-full scroll-smooth">
      {/* =================== HERO =================== */}
      <section id="hero" className="relative bg-[#0d121e] text-white h-screen pt-[100px]">
  <img
    src={heroImg}
    alt="Hero"
    className="absolute inset-0 w-full h-full object-contain opacity-30"
  />
  <div className="relative flex flex-col items-center justify-center px-4 py-32 text-center">
    <h1 className="text-3xl md:text-5xl font-bold max-w-4xl mb-4">
      ESTILO É UM REFLEXO DA SUA ATITUDE E SUA PERSONALIDADE.
    </h1>
    <p className="max-w-2xl mx-auto text-sm md:text-lg text-gray-300">
      Venha conhecer nossos serviços e agende seu horário agora mesmo!
    </p>
   
  </div>
  <div className="relative flex flex-col items-center justify-center px-4 py-32 text-center">
  <HashLink smooth to="/agendamento" className="bg-[#f0b35b] text-black px-6 py-4 rounded hover:bg-blue-600">
              Agendar horário
            </HashLink>
  </div>
</section>


      {/* =================== SOBRE =================== */}
      <section id="sobre" className="bg-[#070A14] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center md:space-x-8">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src={sobreImg}
              alt="Sobre a barbearia"
              className="w-full h-auto rounded-lg shadow"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold mb-4">Sobre</h2>
            <p className="text-gray-300 leading-relaxed">
              Nossa barbearia tem o compromisso de oferecer uma experiência única,
              unindo tradição e modernidade em cada corte. Nosso time é formado por
              profissionais apaixonados pelo que fazem, garantindo sempre a melhor
              experiência para você.
            </p>
          </div>
        </div>
      </section>

      {/* =================== SERVIÇOS =================== */}
      <section id="servicos" className="bg-white text-black py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center">SERVIÇOS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card Serviço 1 */}
            <div className="text-center">
              <img
                src={service1}
                alt="Serviço 1"
                className="w-full h-64 object-cover rounded-lg shadow"
              />
              <h3 className="text-xl font-medium mt-4">Corte Masculino</h3>
              <p className="text-sm text-gray-700 mt-2">
                Corte clássico, moderno ou degradê, do jeito que você quiser.
              </p>
            </div>
            {/* Card Serviço 2 */}
            <div className="text-center">
              <img
                src={service2}
                alt="Serviço 2"
                className="w-full h-64 object-cover rounded-lg shadow"
              />
              <h3 className="text-xl font-medium mt-4">Barba e Bigode</h3>
              <p className="text-sm text-gray-700 mt-2">
                Apare, modele ou desenhe a barba com perfeição.
              </p>
            </div>
            {/* Card Serviço 3 */}
            <div className="text-center">
              <img
                src={service3}
                alt="Serviço 3"
                className="w-full h-64 object-cover rounded-lg shadow"
              />
              <h3 className="text-xl font-medium mt-4">Tratamentos</h3>
              <p className="text-sm text-gray-700 mt-2">
                Hidratação, coloração e cuidados especiais para o seu cabelo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =================== NOSSA EQUIPE =================== */}
      <section id="equipe" className="bg-[#070A14] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center">NOSSA EQUIPE</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card Barbeiro 1 */}
            <div className="text-center">
              <img
                src={equipe1}
                alt="Barbeiro 1"
                className="w-full h-64 object-contain rounded-lg shadow"
              />
            </div>
            {/* Card Barbeiro 2 */}
            <div className="text-center">
              <img
                src={equipe2}
                alt="Barbeiro 2"
                className="w-full h-64 object-contain rounded-lg shadow"
              />
            </div>
            {/* Card Barbeiro 3 */}
            <div className="text-center">
              <img
                src={equipe3}
                alt="Barbeiro 3"
                className="w-full h-64 object-contain rounded-lg shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =================== NOSSAS UNIDADES =================== */}
      <section id="unidades" className="bg-white text-black py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center">NOSSAS UNIDADES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Unidade 1 */}
            <div className="text-center">
              <img
                src={unidade1}
                alt="Unidade 1"
                className="w-full h-64 object-cover rounded-lg shadow"
              />
              <h3 className="text-xl font-medium mt-4">Unidade Centro</h3>
            </div>
            {/* Unidade 2 */}
            <div className="text-center">
              <img
                src={unidade2}
                alt="Unidade 2"
                className="w-full h-64 object-cover rounded-lg shadow"
              />
              <h3 className="text-xl font-medium mt-4">Unidade Sul</h3>
            </div>
          </div>
        </div>
      </section>

      {/* =================== FOOTER =================== */}
      <footer className="bg-[#070A14] text-white py-8 relative">
  <div className="max-w-7xl mx-auto px-4 relative">
    
    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
      <HashLink smooth to="/login" className="text-white px-4 py-2 rounded">
        Login
      </HashLink>
    </div>
    
    <div className="flex justify-center">
      <img src={Logo} alt="Logo da Barbearia" className="h-10 w-auto" />
    </div>
  </div>
</footer>

    </div>
  );
}

export default Home;
