// src/pages/Home.jsx
import Main from "../components/Main"
import Footer from "../components/Footer"
import logo from "../images/logo.png";
import "../css/App.css";

export default function Home() {

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

    <Main>
    </Main>
      
      
    <Footer>
    </Footer>
      
    </div>
  );
}
