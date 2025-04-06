import React from 'react';
import { HashLink } from 'react-router-hash-link';


function Login() {
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


                <div className="mb-4">
                    <label className="block text-white mb-2">Email</label>
                    <input
                        type="email"
                        className="w-full px-4 py-2 rounded bg-gray-200 focus:outline-none"
                        placeholder="Digite seu email..."
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-white mb-2">Senha</label>
                    <input
                        type="password"
                        className="w-full px-4 py-2 rounded bg-gray-200 focus:outline-none"
                        placeholder="Digite sua senha..."
                    />
                </div>

                <button className="w-full bg-[#f0b35b] text-black py-2 rounded hover:bg-blue-600 transition-colors">
                    Entrar
                </button>

                <p className="text-center text-gray-400 mt-4">
                    <button
                       
                        className="text-[#f0b35b] hover:underline focus:outline-none"
                    >
                        <HashLink smooth to="/#hero" className="hover:text-gray-400">
                        Voltar para Home                    </HashLink>
                       
                    </button>
                </p>
            </div>
        </div>
    );
}

export default Login;
