// Cadastro.jsx
import React from 'react';

function Cadastro() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0d121e]">
      {/* Conteúdo centralizado */}
      <div className="bg-[#070A14] w-full max-w-md p-8 rounded shadow-lg relative">
        {/* Botão de fechar (opcional) */}
        <button className="absolute top-4 right-4 text-white text-2xl focus:outline-none">
          &times;
        </button>
        
        {/* Título */}
        <h2 className="text-white text-3xl font-semibold mb-6 text-center">
          CADASTRO
        </h2>
        
        {/* Campo Nome completo */}
        <div className="mb-4">
          <label className="block text-white mb-2">Nome completo</label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded bg-gray-200 focus:outline-none"
            placeholder="Digite seu nome..."
          />
        </div>
        
        {/* Campo Email */}
        <div className="mb-4">
          <label className="block text-white mb-2">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 rounded bg-gray-200 focus:outline-none"
            placeholder="Digite seu email..."
          />
        </div>
        
        {/* Campo Senha */}
        <div className="mb-4">
          <label className="block text-white mb-2">Senha</label>
          <input
            type="password"
            className="w-full px-4 py-2 rounded bg-gray-200 focus:outline-none"
            placeholder="Digite sua senha..."
          />
        </div>
        
        {/* Campo Confirmar senha */}
        <div className="mb-6">
          <label className="block text-white mb-2">Confirmar senha</label>
          <input
            type="password"
            className="w-full px-4 py-2 rounded bg-gray-200 focus:outline-none"
            placeholder="Digite novamente sua senha..."
          />
        </div>
        
        {/* Botão de Ação */}
        <button className="w-full bg-[#f0b35b] text-black py-2 rounded hover:bg-blue-600 transition-colors">
          Cadastrar
        </button>
        
        {/* Link para Login */}
        <p className="text-center text-gray-400 mt-4">
          Já tem conta?{' '}
          <a href="#" className="text-[#f0b35b] hover:underline">
            Faça login
          </a>
        </p>
      </div>
    </div>
  );
}

export default Cadastro;
