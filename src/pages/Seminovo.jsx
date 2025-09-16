import React from "react";
import "./../css/App.css";
import "./../css/Novo.css"

export default function Novo() {
  return (
    <div className="app">
      <header className="header">
        <h1>Tabela de Preços - iPhones Novos</h1>
      </header>

      <main className="main">
        <table style={{ width: "80%", maxWidth: "800px", borderCollapse: "collapse", marginTop: "2rem" }}>
          <thead>
            <tr style={{ backgroundColor: "#003BA5", color: "white" }}>
              <th style={{ padding: "12px" }}>Modelo</th>
              <th style={{ padding: "12px" }}>Armazenamento</th>
              <th style={{ padding: "12px" }}>Preço</th>
              <th style={{ padding: "12px" }}>Cores</th>
              <th style={{ padding: "12px" }}>Estoque</th>
            </tr>
          </thead>
          <tbody className="price-table">
            <tr>
              <td>iPhone 16 pro max</td>
              <td>128 GB</td>
              <td>R$ 5.499</td>
              <td>🟣 🔴 🟡</td>
              <td>Disponível</td>
            </tr>
            <tr>
              <td>iPhone 16 pro</td>
              <td>256 GB</td>
              <td>R$ 6.199</td>
              <td>🟣 🔴 🟡</td>
              <td>Disponível</td>
            </tr>
            <tr>
              <td>iPhone 16</td>
              <td>128 GB</td>
              <td>R$ 5.499</td>
              <td>🟣 🔴 🟡</td>
              <td>Disponível</td>
            </tr>
            <tr>
              <td>iPhone 15 pro max</td>
              <td>128 GB</td>
              <td>R$ 5.499</td>
              <td>🟣 🔴 🟡</td>
              <td>Disponível</td>
            </tr>
            <tr>
              <td>iPhone 15 pro</td>
              <td>128 GB</td>
              <td>R$ 5.499</td>
              <td>🟣 🔴 🟡</td>
              <td>Disponível</td>
            </tr>
            <tr>
              <td>iPhone 15</td>
              <td>128 GB</td>
              <td>R$ 5.499</td>
              <td>🟣 🔴 🟡</td>
              <td>Disponível</td>
            </tr>
            <tr>
              <td>iPhone 14 pro max</td>
              <td>128 GB</td>
              <td>R$ 5.499</td>
              <td>🟣 🔴 🟡</td>
              <td>Disponível</td>
            </tr>
            <tr>
              <td>iPhone 14 pro</td>
              <td>128 GB</td>
              <td>R$ 5.499</td>
              <td>🟣 🔴 🟡</td>
              <td>Disponível</td>
            </tr>
            <tr>
              <td>iPhone 14</td>
              <td>128 GB</td>
              <td>R$ 5.499</td>
              <td>🟣 🔴 🟡</td>
              <td>Disponível</td>
            </tr>
            <tr>
              <td>iPhone 13 pro max</td>
              <td>128 GB</td>
              <td>R$ 5.499</td>
              <td>🟣 🔴 🟡</td>
              <td>Disponível</td>
            </tr>
            <tr>
              <td>iPhone 13 pro</td>
              <td>128 GB</td>
              <td>R$ 5.499</td>
              <td>🟣 🔴 🟡</td>
              <td>Disponível</td>
            </tr>
            <tr>
              <td>iPhone 13</td>
              <td>128 GB</td>
              <td>R$ 5.499</td>
              <td>🟣 🔴 🟡</td>
              <td>Disponível</td>
            </tr>
            
          </tbody>
        </table>
      </main>

      <footer className="footer">
        <p>&copy; 2025 Am Tech - Todos os direitos reservados</p>
      </footer>
    </div>
  );
}
