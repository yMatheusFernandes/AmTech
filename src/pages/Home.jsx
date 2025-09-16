// src/pages/Home.jsx
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import "../css/App.css";
import logo from "../images/logo.png";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="app">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Logo Am Tech" />
        </div>
        <div className="title">
          <h1>Am Tech</h1>
          <p>Assistência Técnica Especializada</p>
        </div>
      </header>

      <main className="main">
        <h2>Escolha sua categoria</h2>
        <div className="button-group">
          <Button variant="primary" onClick={() => navigate("/Seminovo")}>
            iPhone Novo
          </Button>
          <Button variant="dark" onClick={() => navigate("/Novo")}>
            iPhone Seminovo
          </Button>
        </div>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 Am Tech — Todos os direitos reservados</p>

          <nav className="footer-links">
            <a href="/sobre">Sobre</a>
            <a href="/contato">Contato</a>
            <a href="/politica">Política de Privacidade</a>
          </nav>

          <div className="footer-social">
            <a
              href="https://instagram.com/amtech_piripiri"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="../../public/icons/instagram.svg" alt="Instagram" />
            </a>
            <a
              href="https://wa.me/5599999999999"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="../../../public/icons/WhatApp.webp" alt="WhatsApp" />
            </a>
          </div>
        </div>

        <div className="footer-address">
          <p>📍 Rua Freitas Júnior, 619 Centro, Piripiri - PI</p>
        </div>
      </footer>
    </div>
  );
}
