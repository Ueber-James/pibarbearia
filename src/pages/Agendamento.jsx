import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Agendamento() {
  const navigate = useNavigate();

  const [nome, setNome] = useState('');
  const [telefone, telefoneNome] = useState('');
  const [servico, setServico] = useState('');
  const [data, setData] = useState('');
  const [horario, setHorario] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ nome, servico, data, horario });
    alert('Agendamento realizado com sucesso!');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0d121e]">
      <div className="bg-[#070A14] w-full max-w-md p-8 rounded shadow-lg relative">
        <h2 className="text-white text-3xl font-semibold mb-6 text-center">
          Agendar Horário
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white mb-2">Nome</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Digite seu Nome..."
              required
              className="w-full px-4 py-2 rounded bg-gray-200 focus:outline-none"
            />
          </div>
           <div className="mb-4">
            <label className="block text-white mb-2">Telefone</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => telefoneNome(e.target.value)}
              placeholder="Digite seu Telefone..."
              required
              className="w-full px-4 py-2 rounded bg-gray-200 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2">Serviço</label>
            <select
              value={servico}
              onChange={(e) => setServico(e.target.value)}
              required
              className="w-full px-4 py-2 rounded bg-gray-200 focus:outline-none"
            >
              <option value="">Selecione o serviço</option>
              <option value="corte">Corte Masculino</option>
              <option value="barba">Barba e Bigode</option>
              <option value="tratamento">Tratamento Capilar</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2">Data</label>
            <input
              type="date"
              value={data}
              onChange={(e) => setData(e.target.value)}
              required
              className="w-full px-4 py-2 rounded bg-gray-200 focus:outline-none"
            />
          </div>
          <div className="mb-6">
            <label className="block text-white mb-2">Horário</label>
            <input
              type="time"
              value={horario}
              onChange={(e) => setHorario(e.target.value)}
              required
              className="w-full px-4 py-2 rounded bg-gray-200 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#f0b35b] text-black py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Agendar
          </button>
        </form>
        <p className="text-center text-gray-400 mt-4">
          <button
            onClick={() => navigate('/')}
            className="text-[#f0b35b] hover:underline focus:outline-none"
          >
            Voltar para Home
          </button>
        </p>
      </div>
    </div>
  );
}

export default Agendamento;
