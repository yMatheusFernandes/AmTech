import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Clock,
  ChevronRight,
  ShoppingBag,
  Headphones,
  Shield,
  Truck,
  
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Seção de Benefícios */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <Truck className="w-8 h-8" style={{ color: "#FFC700" }} />
              <div>
                <p className="font-semibold">Entrega rápida</p>
                <p className="text-sm text-gray-400">Celulares comprados sobe encomenda <br />
                   podem ser entregues ao mesmo dia</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8" style={{ color: "#FFC700" }} />
              <div>
                <p className="font-semibold">Compra Segura</p>
                <p className="text-sm text-gray-400">100% Protegido</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Headphones className="w-8 h-8" style={{ color: "#FFC700" }} />
              <div>
                <p className="font-semibold">Suporte 24/7</p>
                <p className="text-sm text-gray-400">Atendimento dedicado</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-8 h-8" style={{ color: "#FFC700" }} />
              <div>
                <p className="font-semibold">Garantia </p>
                <p className="text-sm text-gray-400">Garantia em todos os aparelhos vendidos<br />
                   e serviços de manutenção</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Sobre a Empresa */}
          <div>
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: "#FFC700" }}
            >
              Am Tech
            </h3>
            <p className="text-gray-400 mb-4">
              Sua loja de tecnologia com os melhores produtos e preços do
              mercado. Qualidade e inovação em primeiro lugar.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/5586981634623"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: "#003BA5" }}
                aria-label="Whatsapp"
              >
                <FaWhatsapp size={24} color="#ffffff" />
              </a>
              <a
                href="https://instagram.com/amtech_piripiri"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: "#003BA5" }}
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://maps.app.goo.gl/c8Fxau4W3DSr9van7"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: "#003BA5" }}
                aria-label="Localização da Loja "
              >
                <MapPin className="w-5 h-5" />
              </a>
              <a
                href="mailto:amtech330@gmail.com.br"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: "#003BA5" }}
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3
              className="text-lg font-semibold mb-4"
              style={{ color: "#FFC700" }}
            >
              Métodos de Pagamento 
            </h3>
            <ul className="space-y-2">
              {["Dinheiro", "Pix", "Parcelado em até 18x", "Cartão de Débito", "Cartão de Crédito"].map(
                (item) => (
                  <li key={item}>
                    <p
                      className="text-gray-400 hover:text-white flex items-center gap-1 transition-colors duration-200 group"
                    >
                      {item}
                    </p>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Atendimento */}
          <div>
            <h3
              className="text-lg font-semibold mb-4"
              style={{ color: "#FFC700" }}
            >
              Atendimento
            </h3>
            <ul className="space-y-2">
              {[
                "Central de Ajuda",
                "Como Comprar",
                "Política de Troca",
                "Política de Privacidade",
                "Termos de Uso",
              ].map((item) => (
                <li key={item}>
                  <p
                    className="text-gray-400 hover:text-white flex items-center gap-1 transition-colors duration-200 group"
                  >
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3
              className="text-lg font-semibold mb-4"
              style={{ color: "#FFC700" }}
            >
              Contato
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin
                  className="w-5 h-5 mt-1 flex-shrink-0"
                  style={{ color: "#FFC700" }}
                />
                <span className="text-gray-400">
                  Rua Freitas Júnior, 619
                  <br />
                  Centro - Piripiri/PI
                  <br />
                  CEP: 64260-000
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#FFC700" }}
                />
                <span className="text-gray-400">(86) 8163-4623</span>
              </li>

              <li className="flex items-center gap-3">
                <Clock
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#FFC700" }}
                />
                <span className="text-gray-400">Seg-Sex: 7:30h-18h <br />
                  Sáb: 7:30h-12:30h
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-center md:text-left">
              © {currentYear} <span style={{ color: "#FFC700" }}>Am Tech</span>.
              Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
