import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import LogoBase from "../assets/images/LogoBase.svg"
import MailLogo from "../assets/images/mail.svg"
import InstaLogo from "../assets/images/instagram.svg"
import PhoneLogo from "../assets/images/phone.svg"
import WhatsLogo from "../assets/images/whatsapp.svg"
import FbLogo from "../assets/images/facebook.svg"
import { useNavigate, Link } from "react-router-dom";
import { loginSchema } from "../core/schemas/loginValidation";
import "./login.css"

export default function LoginPage() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log("Dados enviados:", data);
    navigate("/dashboard");
  };

  return (
    <div className="page-container">
    <main>
      <div className="left-side">
        <img src={LogoBase} alt="" />
        <h1>Vizinho virtual</h1>
      </div>

<div className="right-side">
        <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="e-mail">E-mail</label>
          <input {...register("email")} placeholder="Digite o seu e-mail" />
          {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
        
        <label htmlFor="senha">Senha</label>
          <input {...register("senha")} type="password" placeholder="Digite a sua senha" />
          {errors.senha && <p style={{ color: 'red' }}>{errors.senha.message}</p>}

          <Link to="/recuperar-senha">Esqueceu a senha?</Link>
        <button type="submit">Entrar</button>

       
       <span>Não possui cadastro?  <Link to="/cadastro">Cadastre-se</Link>  </span>
           
      </form>
      </div>
    </main>
  <footer>
          <div className="logo-footer">
            
            <img src={LogoBase} alt="" />
             <h2>Vizinho Virtual</h2>
          </div>
          <div className="footer-links">
            
            <h3>Suporte</h3> <a href="#">Termos de uso e privacidade</a>
            <a href="#">Precisa de ajuda?</a>
          </div>
          <div className="footer-links">
            
            <h3>Contato</h3>
            <a href="#">
              
              <img src={PhoneLogo} alt="" /> (11) 2187-1000
            </a>
            <a href="#">
              <img src={MailLogo} alt="" /> contato@vizinhovirtual.com.br/</a>

        </div>
          <div className="footer-links">
            
            <h3>Comunidade</h3>
            <a href="#">
              
              <img src={InstaLogo} alt="" /> <img src={FbLogo} alt="" />
              <img src={WhatsLogo} alt="" />
            </a>
             <input type="email" placeholder="Digite seu email" />
          

        </div>
      </footer>
         
   </div>
    
  );
}