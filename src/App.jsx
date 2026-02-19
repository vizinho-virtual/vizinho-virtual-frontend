import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./screens/Login";
import Dashboard from "./screens/Dashboard";
import Cadastro from "./screens/Cadastro";
import RecuperarSenha from "./screens/RecuperarSenha"; // Importe a nova tela

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/recuperar-senha" element={<RecuperarSenha />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;