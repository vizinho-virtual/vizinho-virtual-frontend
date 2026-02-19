import { useNavigate } from "react-router-dom";

export default function RecuperarSenha() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Tela de Recuperar Senha</h1>
      <p>Esta tela está em desenvolvimento (Teste).</p>
      
      <button onClick={() => navigate("/")}>
        Voltar para o Login
      </button>
    </div>
  );
}