// src/App.jsx
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Novo from "./pages/Novo";
// import SemiNovo from "./pages/Seminovo";
// import "./css/App.css";
// import "./css/Button.css";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/novo" element={<Novo />} />
//         <Route path="/Seminovo" element={<SemiNovo />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }
// src/App.jsx
// src/App.jsx
import { Routes, Route } from "react-router-dom"; // <--- importar Routes e Route
import Home from "./pages/Home";
import Novo from "./pages/Novo";
import SemiNovo from "./pages/Seminovo";
import "./css/App.css";
import "./css/Button.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/novo" element={<Novo />} />
      <Route path="/Seminovo" element={<SemiNovo />} />
    </Routes>
  );
}
