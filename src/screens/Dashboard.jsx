import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ color: 'green' }}>✅ Login Bem-Sucedido!</h1>
      <p>Você foi redirecionado para a Dashboard de teste.</p>
      <button onClick={() => navigate("/")}>Voltar ao Login</button>
    </div>
  );
}