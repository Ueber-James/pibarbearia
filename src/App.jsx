// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
 import Login from './pages/Login';
 import Agendamento from './pages/Agendamento';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="agendamento" element={<Agendamento />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
