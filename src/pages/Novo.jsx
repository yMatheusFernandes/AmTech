import { useState } from "react";
import IphoneSpecsPopup from "../components/popup";
import iphone17 from "../assets/iphone17.webp";
import iphone16promax from "../assets/iphone16promax.webp";
import iphone16pro from "../assets/iphone16pro.webp";
import iphone16 from "../assets/iphone16.webp";
import iphone15 from "../assets/iphone15.webp";
import iphone14promax from "../assets/iphone15pro.webp";
import iphone13 from "../assets/iphone13.webp";

import { ShoppingCart, ShieldCheck, Gift } from "lucide-react";

const IphoneStore = () => {
  const [selectedColors, setSelectedColors] = useState({});
  const [selectedStorages, setSelectedStorages] = useState({});

  const iphones = [
    {
      id: 1,
      modelo: "iPhone 17",
      precos: {
        "256GB": { preco: 5300.0, precoAntigo: 6800.0 },
        "256GBESIM": { preco: 6100.0, precoAntigo: 6800.0 },
      },
      parcelas: 18,
      imagem: iphone17,
      cores: ["#ffffffff", "#F5F5F0", "#000000ff", "#394C6B"],
      nomesCores: [
        "Titânio Branco",
        "Titânio Natural",
        "Titânio Preto",
        "Titânio Azul",
      ],
      especificacoes: {
        tela: '6.3" Super Retina XDR OLED',
        chip: "A19",
        camera: "48MP + 48MP",
        bateria: "30h de vídeo",
        armazenamento: ["256GB", "256GBESIM"],
      },
    },
    {
      id: 2,
      modelo: "iPhone 16 Pro Max",
      precos: {
        "512GB": { preco: 8500.0, precoAntigo: 9000.0 },
      },
      parcelas: 18,
      imagem: iphone16promax,
      cores: ["#ffffffff", "#F5F5F0", "#000000ff", "#BFA48F"],
      nomesCores: [
        "Titânio Branco",
        "Titânio Natural",
        "Titânio Preto",
        "Titânio Desert",
      ],
      especificacoes: {
        tela: '6.9" Super Retina XDR OLED',
        chip: "A18 Pro",
        camera: "48MP + 12MP + 12MP",
        bateria: "29h de vídeo",
        armazenamento: ["512GB"],
      },
    },
    {
      id: 3,
      modelo: "iPhone 16 Pro",
      precos: {
        "128GB": { preco: 6300.0, precoAntigo: 6840.0 },
      },
      parcelas: 18,
      imagem: iphone16pro,
      cores: ["#ffffffff", "#F5F5F0", "#000000ff", "#BFA48F"],
      nomesCores: [
        "Titânio Branco",
        "Titânio Natural",
        "Titânio Preto",
        "Titânio Desert",
      ],
      especificacoes: {
        tela: '6,3" Super Retina XDR OLED',
        chip: "A18 Pro",
        camera: "48MP + 12MP + 12MP",
        bateria: "23h de vídeo",
        armazenamento: ["128GB"],
      },
    },
    {
      id: 4,
      modelo: "iPhone 16",
      precos: {
        "128GB": { preco: 5000.0, precoAntigo: 5400.0 },
        "256GB": { preco: 5300.0, precoAntigo: 6200.0 },
      },
      parcelas: 18,
      imagem: iphone16,
      cores: ["#ffffffff", "#F2ADDA", "#000000ff", "#B0D4D2", "#9AADF6"],
      nomesCores: ["Branco", "Rosa", "Preto", "Verde", "Azul"],
      especificacoes: {
        tela: '6,3" Super Retina XDR OLED',
        chip: "A18 Pro",
        camera: "48MP + 12MP + 12MP",
        bateria: "23h de vídeo",
        armazenamento: ["128GB", "256GB"],
      },
    },
    {
      id: 5,
      modelo: "iPhone 15",
      precos: {
        "128GB": { preco: 4100.0, precoAntigo: 4700.0 },
        "256GB": { preco: 4840.0, precoAntigo: 4700.0 },
      },
      parcelas: 18,
      imagem: iphone15,
      cores: ["#ffffffff", "#FFD3E1", "#C9E7D4", "#000000ff", "#394C6B"],
      nomesCores: ["Branco", "Rosa", "Verde", "Preto", "Azul"],
      especificacoes: {
        tela: '6,1" Super Retina XDR OLED',
        chip: "A16 Bionic",
        camera: "48MP + 12MP",
        bateria: "26h de vídeo",
        armazenamento: ["128GB","256GB"],
      },
    },
    {
      id: 6,
      modelo: "iPhone 14",
      precos: {
        "256GB": { preco: 4160.0, precoAntigo: 5700.0 },
      },
      parcelas: 18,
      imagem: iphone14promax,
      cores: ["#5C5B77", "#1a1a1a", "#D4AF37"],
      nomesCores: ["Roxo", "Preto", "Gold"],
      especificacoes: {
        tela: '6.1" Super Retina XDR',
        chip: "A15 Bionic",
        camera: "12MP + 12MP",
        bateria: "20h de vídeo",
        armazenamento: ["256GB"],
      },
    },
    {
      id: 7,
      modelo: "iPhone 13",
      precos: {
        "128GB": { preco: 4600.0, precoAntigo: 4000.0 },
      },
      parcelas: 18,
      imagem: iphone13,
      cores: ["#C9E7D4", "#FA3C4E", "#1a1a1a", "#ffffff", "#6BB6FF"],
      nomesCores: ["Verde", "Vermelho", "Preto", "Branco", "Azul"],
      especificacoes: {
        tela: '6.1" Super Retina XDR',
        chip: "A15 Bionic",
        camera: "12MP + 12MP",
        bateria: "20h de vídeo",
        armazenamento: ["128GB"],
      },
    },
  ];

  const handleColorSelect = (phoneId, colorIndex) => {
    setSelectedColors((prev) => ({
      ...prev,
      [phoneId]: colorIndex,
    }));
  };

  const handleStorageSelect = (phoneId, storage) => {
    setSelectedStorages((prev) => ({
      ...prev,
      [phoneId]: storage,
    }));
  };

  const formatPrice = (price) =>
    price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  return (
    <div className="min-h-screen bg-[#000000] p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            iPhones Novos
          </h1>
         
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <div className="flex items-center gap-2 px-6 py-3 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-[#ffc700]/30 shadow-lg shadow-[#ffc700]/10">
              <ShieldCheck size={24} className="text-[#ffc700]" />
              <div className="text-left">
                <p className="text-white font-bold leading-none">1 Ano de Garantia</p>
                <p className="text-gray-400 text-xs mt-1">Oficial Apple</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 px-6 py-3 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-blue-400/30 shadow-lg shadow-blue-400/10">
              <Gift size={24} className="text-blue-400" />
              <div className="text-left">
                <p className="text-white font-bold leading-none">Brindes Exclusivos</p>
                <p className="text-gray-400 text-xs mt-1">Capa + Película + Cabo</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8">
          {iphones.map((iphone) => {
            const selectedColorIndex = selectedColors[iphone.id] || 0;
            const selectedStorage =
              selectedStorages[iphone.id] ||
              iphone.especificacoes.armazenamento[0];

            const precoAtual = iphone.precos?.[selectedStorage]?.preco;
            const precoAntigoAtual =
              iphone.precos?.[selectedStorage]?.precoAntigo;

            return (
              <div
                key={iphone.id}
                className="group relative flex flex-col sm:flex-row bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-3xl overflow-hidden border border-gray-700/50 hover:border-[#ffc700] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#ffc700]/50"
              >
                <div className="relative w-full sm:w-1/2 h-48 sm:h-auto bg-gradient-to-br from-[#ffffff] to-[#ffffff] p-6 flex items-center justify-center">
                  <img
                    src={iphone.imagem}
                    alt={iphone.modelo}
                    className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700"
                  />

                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 md:hidden">
                    {iphone.cores.map((cor, index) => (
                      <button
                        key={index}
                        onClick={() => handleColorSelect(iphone.id, index)}
                        className={`w-6 h-6 rounded-full border-2 transition-all duration-300 ${
                          selectedColorIndex === index
                            ? "border-[#ffc700] scale-110 shadow-lg"
                            : "border-gray-600 hover:border-gray-400"
                        }`}
                        style={{ backgroundColor: cor }}
                        title={iphone.nomesCores[index]}
                      />
                    ))}
                  </div>
                </div>

                <div className="p-4 sm:p-6 w-full sm:w-1/2">
                  <h3 className="text-lg md:text-2xl font-bold text-white mb-2">
                    {iphone.modelo}
                  </h3>

                  <div className="hidden md:block mb-4">
                    <p className="text-sm text-gray-400 mb-2">
                      Cores disponíveis:
                    </p>
                    <div className="flex gap-2">
                      {iphone.cores.map((cor, index) => (
                        <button
                          key={index}
                          onClick={() => handleColorSelect(iphone.id, index)}
                          className={`w-8 h-8 rounded-full border-2 transition-all duration-300 ${
                            selectedColorIndex === index
                              ? "border-[#ffc700] scale-110 shadow-lg"
                              : "border-gray-600 hover:border-gray-400"
                          }`}
                          style={{ backgroundColor: cor }}
                          title={iphone.nomesCores[index]}
                        />
                      ))}
                    </div>
                    <p className="text-xs text-[#ffc700] mt-2">
                      {iphone.nomesCores[selectedColorIndex]}
                    </p>
                  </div>

                  <IphoneSpecsPopup iphone={iphone} />

                  <div className="mb-4">
                    <p className="text-sm text-gray-400 mb-2">Armazenamento:</p>
                    <div className="flex gap-2 flex-wrap">
                      {iphone.especificacoes.armazenamento.map((storage) => (
                        <span
                          key={storage}
                          onClick={() =>
                            handleStorageSelect(iphone.id, storage)
                          }
                          className={`px-3 py-1 rounded-lg text-sm border cursor-pointer transition-colors ${
                            selectedStorage === storage
                              ? "bg-[#ffc700] text-black border-[#ffc700]"
                              : "bg-gray-700/50 text-gray-300 border-gray-600 hover:border-[#ffc700] hover:text-[#ffc700]"
                          }`}
                        >
                          {storage}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-[#ffc700] mt-2">
                      Selecionado: {selectedStorage}
                    </p>
                  </div>

                  <div className="mb-6">
                    {precoAntigoAtual && (
                      <p className="text-gray-500 line-through text-sm">
                        {formatPrice(precoAntigoAtual)}
                      </p>
                    )}
                    <p className="text-2xl md:text-3xl font-bold text-white">
                      {formatPrice(precoAtual)}
                    </p>

                    <p className="text-sm text-gray-400">
                      em até {iphone.parcelas}x 
                    </p>
                  </div>

                  <a
                    href="https://wa.me/5586981634623"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#003ba5] hover:bg-[#002a79] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg hover:shadow-[#002a79]"
                  >
                    <ShoppingCart
                      size={20}
                      className="group-hover:scale-110 transition-transform"
                    />
                    Whatsapp
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default IphoneStore;
