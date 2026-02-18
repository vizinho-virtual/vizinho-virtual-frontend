import React from "react";
import LogoBase from "../assets/images/LogoBase.svg";
import FbLogo from "../assets/images/facebook.svg";
import InstaLogo from "../assets/images/instagram.svg";
import MailLogo from "../assets/images/mail.svg";
import PhoneLogo from "../assets/images/phone.svg";
import WhatsLogo from "../assets/images/whatsapp.svg";
import "./login.css";


export default function Login() {


  return (
    <>
    <div className="login-wrapper">
      <div className="left-side">
          <img src={LogoBase} alt="" /> <h2>Vizinho Virtual</h2>
      </div>
      <div className="right-side">
        <div className="login-box">
          <h1>Login</h1>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Digite seu email" />
          </div>
          <div className="input-group">
            
            <label>Senha</label>
            <input type="password" placeholder="Digite sua senha" />
          </div>
          <button className="btn-login">Entrar</button>
          <p className="forgot">Esqueceu sua senha?</p>
          <p className="forgot">
            Não tem uma conta? <span>Criar conta</span>
          </p>
        </div>
      </div>
    </div>
      <footer>
          <div className="logo-footer">
            
            <img src={LogoBase} alt="" /> <h2>Vizinho Virtual</h2>
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
    </>
  );
}
