// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Novo from "./pages/Novo"
import SemiNovo from "./pages/Seminovo";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/novo" element={<Novo />} />
      <Route path="/seminovo" element={<SemiNovo />} />
    </Routes>
  );
}
