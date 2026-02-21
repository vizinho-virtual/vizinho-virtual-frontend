import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./screens/Login";
import LandingPage from "./screens/LandingPage";
import Cadastro from "./screens/Cadastro";
import RecuperarSenha from "./screens/RecuperarSenha"; 
import Verify from "./screens/Verify";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<LandingPage />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/recuperar-senha" element={<RecuperarSenha />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;