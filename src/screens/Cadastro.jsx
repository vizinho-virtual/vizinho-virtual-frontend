import { useNavigate } from "react-router-dom";

export default function Cadastro() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Tela de Cadastro</h1>
      <p>Esta tela está em desenvolvimento.</p>
      <button onClick={() => navigate("/")}>Voltar para o Login</button>
    </div>
  );
}