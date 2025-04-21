import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { login } from '../api/client';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const { token } = await login(email, password);
      localStorage.setItem('token', token);
       // ou "/" se preferir
      navigate('/lista-agendamentos');
   window.location.reload();      // ← força atualizar toda a página
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0d121e]">
      <div className="bg-[#070A14] w-full max-w-md p-8 rounded shadow-lg relative">
        <button className="absolute top-4 right-4 text-white text-2xl focus:outline-none">
          <HashLink smooth to="/#hero" className="hover:text-gray-400">
            &times;
          </HashLink>
        </button>

        <h2 className="text-white text-3xl font-semibold mb-6 text-center">
          LOGIN
        </h2>

        {error && (
          <div className="mb-4 text-red-500 text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white mb-2">Usuario</label>
            <input
              type="text"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded bg-gray-200 focus:outline-none"
              placeholder="Digite seuusuario..."
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-white mb-2">Senha</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded bg-gray-200 focus:outline-none"
              placeholder="Digite sua senha..."
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#f0b35b] text-black py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Entrar
          </button>
        </form>

        <p className="text-center text-gray-400 mt-4">
          <HashLink
            smooth
            to="/#hero"
            className="text-[#f0b35b] hover:underline focus:outline-none"
          >
            Voltar para Home
          </HashLink>
        </p>
      </div>
    </div>
  );
}
