import React, { useEffect, useState } from 'react';
import { listAgendamentos } from '../api/client';

export default function ListaAgendamentos() {
  const [agendamentos, setAgendamentos] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    listAgendamentos()
      .then(data => setAgendamentos(data))
      .catch(err => setError(err.message));
  }, []);

  if (error) return <p className="text-red-500 p-4">Erro: {error}</p>;

  return (
    <div className="max-w-3xl mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-6">Todos os Agendamentos</h1>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Nome</th>
            <th className="border px-4 py-2">Telefone</th>
            <th className="border px-4 py-2">Serviço</th>
            <th className="border px-4 py-2">Data</th>
            <th className="border px-4 py-2">Horário</th>
          </tr>
        </thead>
        <tbody>
          {agendamentos.map(a => (
            <tr key={a.id}>
              <td className="border px-4 py-2">{a.id}</td>
              <td className="border px-4 py-2">{a.nome}</td>
              <td className="border px-4 py-2">{a.telefone}</td>
              <td className="border px-4 py-2">{a.servico}</td>
              <td className="border px-4 py-2">{a.data}</td>
              <td className="border px-4 py-2">{a.horario}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
