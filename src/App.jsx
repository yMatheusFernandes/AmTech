
// src/App.jsx
import { Routes, Route } from "react-router-dom"; // <--- importar Routes e Route
import Home from "./pages/Home";
import Novo from "./pages/Novo";
import Novo2 from "./pages/Novo"
import SemiNovo from "./pages/Seminovo";
import "./css/App.css";
import "./css/Button.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/novo" element={<SemiNovo />} />
      <Route path="/seminovo" element={<Novo2 />} />
    </Routes>
  );
}
