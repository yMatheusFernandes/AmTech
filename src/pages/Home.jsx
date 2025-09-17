// src/pages/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Footer from "../components/Footer"
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
      
    <Footer>
    </Footer>
      
    </div>
  );
}
