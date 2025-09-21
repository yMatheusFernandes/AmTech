import React, { useState } from "react";
import IphoneSpecsPopup from "../components/popup";
import iphone16promax from "../assets/iphone16promax.webp";
import iphone16pro from "../assets/iphone16pro.webp";
import iphone16 from "../assets/iphone16.webp";
import iphone16e from "../assets/iphone16e.webp";
import iphone15 from "../assets/iphone15.webp";
import iphone14 from "../assets/iphone14.webp";
import iphone13 from "../assets/iphone13.webp";

import { ShoppingCart, Smartphone, Battery, Camera, Cpu } from "lucide-react";

const IphoneStore = () => {
  const [selectedColors, setSelectedColors] = useState({});
  const [selectedStorages, setSelectedStorages] = useState({});

  const iphones = [
    {
      id: 1,
      modelo: "iPhone 16 Pro Max",
      precos: {
        "256GB": { preco: 7350.0, precoAntigo: 7500.0 },
        "512GB": { preco: 8800.0, precoAntigo: 9000.0 },
        "1TB": { preco: 9450.0, precoAntigo: 9650.0 },
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
        armazenamento: ["256GB", "512GB", "1TB"],
      },
    },
    {
      id: 2,
      modelo: "iPhone 16 Pro",
      precos: {
        "128GB": { preco: 6290.0, precoAntigo: 6540.0 },
        "256GB": { preco: 7240.0, precoAntigo: 7530.0 },
      },
      parcelas: 18,
      imagem: iphone16pro,
      cores: ["#ffffffff", "#F5F5F0", "#000000ff", "#BFA48F"],
      nomesCores: ["Titânio Branco", "Titânio Natural", "Titânio Preto", "Titânio Desert"],
      especificacoes: {
        tela: '6,3" Super Retina XDR OLED',
        chip: "A18 Pro",
        camera: "48MP + 12MP + 12MP",
        bateria: "23h de vídeo",
        armazenamento: ["128GB", "256GB"],
      },
    },
    {
      id: 3,
      modelo: "iPhone 16",
      precos: {
        "128GB": { preco: 4700.0, precoAntigo: 4900.0 },
        "256GB": { preco: 5650.0, precoAntigo: 5750.0 },
      },
      parcelas: 18,
      imagem: iphone16,
      cores: ["#ffffffff", "#F2ADDA", "#000000ff", "#B0D4D2","#9AADF6"],
      nomesCores: [
        "Branco",
        "Rosa",
        "Preto",
        "Verde",
        "Azul",
      ],
      especificacoes: {
        tela: '6,1" Super Retina XDR OLED',
        chip: "A18",
        camera: "48MP + 12MP",
        bateria: "20h de vídeo",
        armazenamento: ["128GB", "256GB"],
      },
    },
    {
      id: 4,
      modelo: "iPhone 16e",
      precos: {
        "128GB": { preco: 3750.0, precoAntigo: 3900.0 },
        "256GB": { preco: 4290.0, precoAntigo: 4450.0 },
      },
      parcelas: 18,
      imagem: iphone16e,
      cores: ["#ffffffff", "#000000ff"],
      nomesCores: [
        "Titânio Branco",
        "Titânio Preto",
      ],
      especificacoes: {
        tela: '6,1" Super Retina XDR OLED',
        chip: "A18",
        camera: "48MP (principal) + 12MP (frontal)",
        bateria: "26h de vídeo",
        armazenamento: ["128GB", "256GB"],
      },
    },
    {
      id: 5,
      modelo: "iPhone 15",
      precos: {
        "128GB": { preco: 4250.0, precoAntigo: 4600.0 },
      },
      parcelas: 18,
      imagem: iphone15,
      cores: ["#ffffffff", "#FFD3E1","#C9E7D4", "#000000ff", "#394C6B"],
      nomesCores: [
        "Branco",
        "Rosa",
        "Verde",
        "Preto",
        "Azul",
      ],
      especificacoes: {
        tela: '6,1" Super Retina XDR OLED',
        chip: "A16 Bionic",
        camera: "48MP + 12MP",
        bateria: "26h de vídeo",
        armazenamento: ["128GB"],
      },
    },
    {
      id: 6,
      modelo: "iPhone 14 ",
      precos: {
        "128GB": { preco: 3800.0, precoAntigo: 4240.0 },
      },
      parcelas: 18,
      imagem: iphone14,
      cores: ["#000000", "##D4E4FA", "", "#fffffff"],
      nomesCores: ["Preto", "Azul", "Branco"],
      especificacoes: {
        tela: '6.1" Super Retina XDR',
        chip: "A15 Bionic",
        camera: "12MP (principal) + 12MP (ultrawide)",
        bateria: "20h de vídeo",
        armazenamento: ["128GB"],
      },
    },
    {
      id: 7,
      modelo: "iPhone 13",
      precos: {
        "128GB": { preco: 3300.0, precoAntigo: 3456.0 },
      },
      parcelas: 18,
      imagem: iphone13,
      cores: ["#000000", "#ffffff"],
      nomesCores: ["Preto", "Branco"],
      especificacoes: {
        tela: '6.1" Super Retina XDR',
        chip: "A15 Bionic",
        camera: "Dual 12MP (principal e ultrawide)",
        bateria: "19h de vídeo",
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
          <p className="text-gray-300 text-lg">
            Todos os iphones desta aba acompanham 1 ano de garantia <br />
            apple mais capa pelicula e cabo como brinde da loja
          </p>
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
                {/* Imagem */}
                <div className="relative w-full sm:w-1/2 h-48 sm:h-auto bg-gradient-to-br from-[#ffffff] to-[#ffffff] p-6 flex items-center justify-center">
                  <img
                    src={iphone.imagem}
                    alt={iphone.modelo}
                    className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Menu de cores sobreposto no mobile */}
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

                  {/* Menu de cores abaixo da imagem no desktop */}
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

                  {/* Pop up das especificações */}
                  <IphoneSpecsPopup iphone={iphone} />

                  {/* Seleção de armazenamento */}
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

                  {/* Preço */}
                  <div className="mb-6">
                    {precoAntigoAtual && (
                      <p className="text-gray-500 line-through text-sm">
                        {formatPrice(precoAntigoAtual)}
                      </p>
                    )}
                    <p className="text-2xl md:text-3xl font-bold text-white">
                      {formatPrice(precoAtual)}
                    </p>

                    {/* Parcela de preços
                    <p className="text-sm text-gray-400">
                      em até {iphone.parcelas}x de {formatPrice(precoAtual / iphone.parcelas)}
                    </p>
                    */}
                  </div>

                  {/* Botão WhatsApp */}
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
