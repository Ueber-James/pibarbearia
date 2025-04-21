import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createAgendamento } from '../api/client';

export default function Agendamento() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nome: '', telefone: '', servico: '', data: '', horario: ''
  });

  const handleChange = e =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const appt = await createAgendamento(form);
      alert(`Agendamento  realizado com sucesso!`);
      
    } catch (err) {
      console.error(err);
      alert(`Erro ao agendar: ${err.message}`);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0d121e]">
      <div className="bg-[#070A14] w-full max-w-md p-8 rounded shadow-lg">
        <h2 className="text-white text-3xl font-semibold mb-6 text-center">
          Agendar Horário
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            { label: 'Nome', name: 'nome', type: 'text', placeholder: 'Digite seu Nome...' },
            { label: 'Telefone', name: 'telefone', type: 'text', placeholder: 'Digite seu Telefone...' }
          ].map(({ label, name, type, placeholder }) => (
            <div key={name}>
              <label className="block text-white mb-1">{label}</label>
              <input
                name={name} type={type}
                value={form[name]} onChange={handleChange}
                placeholder={placeholder}
                required
                className="w-full px-4 py-2 rounded bg-gray-200 focus:outline-none"
              />
            </div>
          ))}

          <div>
            <label className="block text-white mb-1">Serviço</label>
            <select
              name="servico"
              value={form.servico}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded bg-gray-200 focus:outline-none"
            >
              <option value="">Selecione o serviço</option>
              <option value="corte">Corte Masculino</option>
              <option value="barba">Barba e Bigode</option>
              <option value="tratamento">Tratamento Capilar</option>
            </select>
          </div>

          <div>
            <label className="block text-white mb-1">Data</label>
            <input
              name="data" type="date"
              value={form.data} onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded bg-gray-200 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-white mb-1">Horário</label>
            <input
              name="horario" type="time"
              value={form.horario} onChange={handleChange}
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
