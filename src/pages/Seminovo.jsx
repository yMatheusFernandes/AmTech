import React, { useState } from "react";
import  IphoneSpecsPopup from "../components/popup"
import { ShoppingCart, Smartphone, Battery, Camera, Cpu } from "lucide-react";

const IphoneStore = () => {
  const [selectedColors, setSelectedColors] = useState({});
  const [selectedStorages, setSelectedStorages] = useState({});

  const iphones = [
    {
      id: 1,
      modelo: "iPhone 15 Pro Max",
      precos: {
        "256GB": { preco: 5450.0, precoAntigo: 5060.0 },
        "512GB": { preco: 5600.0, precoAntigo: 6000.0 },
        "1TB": { preco: 5600.0, precoAntigo: 6000.0 },
      },
      parcelas: 18,
      imagem: "../public/images/iphones/iphone15promax.webp",
      cores: ["#ffffffff", "#F5F5F0", "#000000ff", "#394C6B"],
      nomesCores: [
        "Titânio Branco",
        "Titânio Natural",
        "Titânio Preto",
        "Titânio Azul",
      ],
      destaque: true,
      novo: true,
      especificacoes: {
        tela: '6.7" Super Retina XDR',
        chip: "A17 Pro",
        camera: "48MP + 12MP + 12MP",
        bateria: "29h de vídeo",
        armazenamento: ["256GB", "512GB", "1TB"],
      },
    },
    {
      id: 2,
      modelo: "iPhone 15 Pro",
      precos: {
        "128GB": { preco: 4600.0, precoAntigo: 4800.0 },
        "256GB": { preco: 4850.0, precoAntigo: 5050.0 },
        "512GB": { preco: 4900.0, precoAntigo: 51000.0 },
        "1TB": { preco: 5000.0, precoAntigo: 5200.0 },
      },
      parcelas: 18,
      imagem: "/public/images/iphones/iphone15pro.webp",
      cores: ["#ffffffff", "#F5F5F0", "#000000ff", "#394C6B"],
      nomesCores: [
        "Titânio Branco",
        "Titânio Natural",
        "Titânio Preto",
        "Titânio Azul",
      ],
      novo: true,
      especificacoes: {
        tela: '6.1" Super Retina XDR',
        chip: "A17 Pro",
        camera: "48MP + 12MP + 12MP",
        bateria: "23h de vídeo",
        armazenamento: ["128GB", "256GB", "512GB", "1TB"],
      },
    },
    {
      id: 3,
      modelo: "iPhone 15",
      precos: {
        "128GB": { preco: 3700.0, precoAntigo: 3950.0 },
        "256GB": { preco: 4080.0, precoAntigo: 4249.0 },
      },
      parcelas: 18,
      imagem: "../public/images/iphones/iphone15.webp",
      cores: ["#FFD3E1", "#1a1a1a", "#D4E4FA", "#C9E7D4"],
      nomesCores: ["Rosa", "Preto", "Azul", "Verde"],
      especificacoes: {
        tela: '6.1" Super Retina XDR',
        chip: "A16 Bionic",
        camera: "48MP + 12MP",
        bateria: "20h de vídeo",
        armazenamento: ["128GB", "256GB"],
      },
    },
    {
      id: 4,
      modelo: "iPhone 14 Pro Max",
      precos: {
        "128GB": { preco: 4350.0, precoAntigo: 4549.0 },
        "256GB": { preco: 4550.0, precoAntigo: 4700.0 },
        "1TB": { preco: 4700.0, precoAntigo: 4900.0 },
      },
      parcelas: 18,
      imagem: "../public/images/iphones/iphone14promax.webp",
      cores: ["#5C5B77", "#1a1a1a", "#D4AF37"],
      nomesCores: ["Roxo", "Preto", "Gold"],
      especificacoes: {
        tela: '6.1" Super Retina XDR',
        chip: "A15 Bionic",
        camera: "12MP + 12MP",
        bateria: "20h de vídeo",
        armazenamento: ["128GB", "256GB", "1TB"],
      },
    },
    {
      id: 5,
      modelo: "iPhone 14 Pro",
      precos: {
        "128GB": { preco: 3700.0, precoAntigo: 4000.0 },
        "256GB": { preco: 3950.0, precoAntigo: 4200.0 },
      },
      parcelas: 18,
      imagem: "../public/images/iphones/iphone14pro.webp",
      cores: ["#5C5B77", "#1a1a1a", "#D4AF37"],
      nomesCores: ["Roxo", "Preto", "Gold"],
      especificacoes: {
        tela: '6.7" Super Retina XDR',
        chip: "A15 Bionic",
        camera: "12MP + 12MP",
        bateria: "26h de vídeo",
        armazenamento: ["128GB", "256GB"],
      },
    },
    {
      id: 6,
      modelo: "iPhone 14",
      precos: {
        "128GB": { preco: 2800.0, precoAntigo: 3100.0 },
      },
      parcelas: 18,
      imagem: "../public/images/iphones/iphone14.webp",
      cores: ["#FFFC9E", "#5C5B77", "#1a1a1a", "#6BB6FF", "#FA3C4E"],
      nomesCores: ["Amarelo ", "Lilás", "Preto", "Azul", "Vermelho"],
      especificacoes: {
        tela: '6.1" Super Retina XDR',
        chip: "A15 Bionic",
        camera: "12MP + 12MP",
        bateria: "19h de vídeo",
        armazenamento: ["128GB"],
      },
    },
    {
      id: 7,
      modelo: "iPhone 13 Pro Max",
      precos: {
        "128GB": { preco: 3600.0, precoAntigo: 3759.0 },
        "256GB": { preco: 3800.0, precoAntigo: 3999.0 },
      },
      parcelas: 18,
      imagem: "../public/images/iphones/iphone13promax.webp",
      cores: ["#1a1a1a", "#D4AF37", "#6BB6FF", "#C9E7D4"],
      nomesCores: ["Preto", "Gold", "Azul", "Verde"],
      especificacoes: {
        tela: '6.1" Super Retina XDR',
        chip: "A15 Bionic",
        camera: "12MP + 12MP",
        bateria: "20h de vídeo",
        armazenamento: ["128GB", "256GB"],
      },
    },
    {
      id: 4,
      modelo: "iPhone 14 Pro Max",
      precos: {
        "128GB": { preco: 4350.0, precoAntigo: 4549.0 },
        "256GB": { preco: 4550.0, precoAntigo: 4700.0 },
        "1TB": { preco: 4700.0, precoAntigo: 4900.0 },
      },
      parcelas: 18,
      imagem: "../public/images/iphones/iphone14promax.webp",
      cores: ["#5C5B77", "#1a1a1a", "#D4AF37"],
      nomesCores: ["Roxo", "Preto", "Gold"],
      especificacoes: {
        tela: '6.1" Super Retina XDR',
        chip: "A15 Bionic",
        camera: "12MP + 12MP",
        bateria: "20h de vídeo",
        armazenamento: ["128GB", "256GB", "1TB"],
      },
    },
    {
      id: 4,
      modelo: "iPhone 14 Pro Max",
      precos: {
        "128GB": { preco: 4350.0, precoAntigo: 4549.0 },
        "256GB": { preco: 4550.0, precoAntigo: 4700.0 },
        "1TB": { preco: 4700.0, precoAntigo: 4900.0 },
      },
      parcelas: 18,
      imagem: "../public/images/iphones/iphone14promax.webp",
      cores: ["#5C5B77", "#1a1a1a", "#D4AF37"],
      nomesCores: ["Roxo", "Preto", "Gold"],
      especificacoes: {
        tela: '6.1" Super Retina XDR',
        chip: "A15 Bionic",
        camera: "12MP + 12MP",
        bateria: "20h de vídeo",
        armazenamento: ["128GB", "256GB", "1TB"],
      },
    },
    {
      id: 4,
      modelo: "iPhone 14 Pro Max",
      precos: {
        "128GB": { preco: 4350.0, precoAntigo: 4549.0 },
        "256GB": { preco: 4550.0, precoAntigo: 4700.0 },
        "1TB": { preco: 4700.0, precoAntigo: 4900.0 },
      },
      parcelas: 18,
      imagem: "../public/images/iphones/iphone14promax.webp",
      cores: ["#5C5B77", "#1a1a1a", "#D4AF37"],
      nomesCores: ["Roxo", "Preto", "Gold"],
      especificacoes: {
        tela: '6.1" Super Retina XDR',
        chip: "A15 Bionic",
        camera: "12MP + 12MP",
        bateria: "20h de vídeo",
        armazenamento: ["128GB", "256GB", "1TB"],
      },
    },
    {
      id: 4,
      modelo: "iPhone 14 Pro Max",
      precos: {
        "128GB": { preco: 4350.0, precoAntigo: 4549.0 },
        "256GB": { preco: 4550.0, precoAntigo: 4700.0 },
        "1TB": { preco: 4700.0, precoAntigo: 4900.0 },
      },
      parcelas: 18,
      imagem: "../public/images/iphones/iphone14promax.webp",
      cores: ["#5C5B77", "#1a1a1a", "#D4AF37"],
      nomesCores: ["Roxo", "Preto", "Gold"],
      desconto: 18,
      especificacoes: {
        tela: '6.1" Super Retina XDR',
        chip: "A15 Bionic",
        camera: "12MP + 12MP",
        bateria: "20h de vídeo",
        armazenamento: ["128GB", "256GB", "1TB"],
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
            iPhones SemiNovos <br />
            sob pedido e a pronta entrega
          </h1>
          <p className="text-gray-300 text-lg">
            Os melhores iPhones com condições especiais
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 md:gap-8">
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
                className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-3xl overflow-hidden border border-gray-700/50 hover:border-[#ffc700] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#ffc700]/50"
              >
                {iphone.novo && (
                  <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    NOVO
                  </div>
                )}

                {/* Imagem */}
                <div className="relative h-64 bg-gradient-to-br from-[#ffffff] to-[#ffffff] p-6">
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

                <div className="p-4 md:p-6">
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
