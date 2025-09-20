import React, { useState } from "react";
import { ShoppingCart, Smartphone, Battery, Camera, Cpu } from "lucide-react";

const IphoneStore = () => {
  const [selectedColors, setSelectedColors] = useState({});
  const [selectedStorages, setSelectedStorages] = useState({});

  const iphones = [
    {
      id: 1,
      modelo: "iPhone 15 Pro Max",
      precos: {
        "256GB": { preco: 9999.0, precoAntigo: 10999.0 },
        "512GB": { preco: 11299.0, precoAntigo: 12599.0 },
        "1TB": { preco: 13099.0, precoAntigo: 14599.0 },
      },
      parcelas: 18,
      imagem:
        "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400",
      cores: ["#1a1a1a", "#F5F5F0", "#4A4A4A", "#394C6B"],
      nomesCores: [
        "Titânio Preto",
        "Titânio Natural",
        "Titânio Cinza",
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
        "256GB": { preco: 9999.0, precoAntigo: 10999.0 },
        "512GB": { preco: 11299.0, precoAntigo: 12599.0 },
        "1TB": { preco: 13099.0, precoAntigo: 14599.0 },
      },
      parcelas: 18,
      imagem:
        "https://images.unsplash.com/photo-1696446701796-da61225697cc?w=400",
      cores: ["#1a1a1a", "#F5F5F0", "#4A4A4A", "#394C6B"],
      nomesCores: [
        "Titânio Preto",
        "Titânio Natural",
        "Titânio Cinza",
        "Titânio Azul",
      ],
      novo: true,
      especificacoes: {
        tela: '6.1" Super Retina XDR',
        chip: "A17 Pro",
        camera: "48MP + 12MP + 12MP",
        bateria: "23h de vídeo",
        armazenamento: ["256GB", "512GB", "1TB"],
      },
    },
    {
      id: 3,
      modelo: "iPhone 15",
      precos: {
        "256GB": { preco: 9999.0, precoAntigo: 10999.0 },
        "512GB": { preco: 11299.0, precoAntigo: 12599.0 },
        "1TB": { preco: 13099.0, precoAntigo: 14599.0 },
      },
      parcelas: 18,
      imagem:
        "https://images.unsplash.com/photo-1695729626008-7adb521f15be?w=400",
      cores: ["#FFD3E1", "#E3E3C7", "#1a1a1a", "#D4E4FA", "#C9E7D4"],
      nomesCores: ["Rosa", "Amarelo", "Preto", "Azul", "Verde"],
      especificacoes: {
        tela: '6.1" Super Retina XDR',
        chip: "A16 Bionic",
        camera: "48MP + 12MP",
        bateria: "20h de vídeo",
        armazenamento: ["256GB", "512GB", "1TB"],
      },
    },
    {
      id: 4,
      modelo: "iPhone 14",
      precos: {
        "256GB": { preco: 9999.0, precoAntigo: 10999.0 },
        "512GB": { preco: 11299.0, precoAntigo: 12599.0 },
        "1TB": { preco: 13099.0, precoAntigo: 14599.0 },
      },
      parcelas: 18,
      imagem:
        "https://images.unsplash.com/photo-1678652197831-2d180705cd2c?w=400",
      cores: ["#5C5B77", "#F0E5D8", "#1a1a1a", "#FA3C4E", "#6BB6FF"],
      nomesCores: ["Roxo", "Estelar", "Meia-noite", "Vermelho", "Azul"],
      desconto: 18,
      especificacoes: {
        tela: '6.1" Super Retina XDR',
        chip: "A15 Bionic",
        camera: "12MP + 12MP",
        bateria: "20h de vídeo",
        armazenamento: ["256GB", "512GB", "1TB"],
      },
    },
    {
      id: 5,
      modelo: "iPhone 14 Plus",
      precos: {
        "128GB": { preco: 9999.0, precoAntigo: 10999.0 },
        "256GB": { preco: 11299.0, precoAntigo: 12599.0 },
        "512GB": { preco: 13099.0, precoAntigo: 14599.0 },
      },
      parcelas: 18,
      imagem:
        "https://images.unsplash.com/photo-1678911820864-e2c567c655d7?w=400",
      cores: ["#5C5B77", "#F0E5D8", "#1a1a1a", "#FA3C4E", "#6BB6FF", "#FFFC9E"],
      nomesCores: [
        "Roxo",
        "Estelar",
        "Meia-noite",
        "Vermelho",
        "Azul",
        "Amarelo",
      ],
      desconto: 15,
      especificacoes: {
        tela: '6.7" Super Retina XDR',
        chip: "A15 Bionic",
        camera: "12MP + 12MP",
        bateria: "26h de vídeo",
        armazenamento: ["128GB", "256GB", "512GB"],
      },
    },
    {
      id: 6,
      modelo: "iPhone 13",
      precos: {
        "128GB": { preco: 9999.0, precoAntigo: 10999.0 },
        "256GB": { preco: 11299.0, precoAntigo: 12599.0 },
        "512GB": { preco: 13099.0, precoAntigo: 14599.0 },
      },
      parcelas: 18,
      imagem:
        "https://images.unsplash.com/photo-1640437830863-8f7f38327319?w=400",
      cores: ["#FFB3BA", "#1a1a1a", "#FFFFFF", "#6BB6FF", "#FA3C4E"],
      nomesCores: ["Rosa", "Meia-noite", "Estelar", "Azul", "Vermelho"],
      desconto: 22,
      especificacoes: {
        tela: '6.1" Super Retina XDR',
        chip: "A15 Bionic",
        camera: "12MP + 12MP",
        bateria: "19h de vídeo",
        armazenamento: ["128GB", "256GB", "512GB"],
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
    <div className="min-h-screen bg-[#000000] p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
            iPhones novos <br />
            sob pedido e a pronta entrega
          </h1>
          <p className="text-gray-300 text-lg">
            Os melhores iPhones com condições especiais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {iphones.map((iphone) => {
            const selectedColorIndex = selectedColors[iphone.id] || 0;
            const selectedStorage =
              selectedStorages[iphone.id] ||
              iphone.especificacoes.armazenamento[0];

            // Preços dinâmicos
            const precoAtual =
              iphone.precos?.[selectedStorage]?.preco || iphone.preco;
            const precoAntigoAtual =
              iphone.precos?.[selectedStorage]?.precoAntigo ||
              iphone.precoAntigo;

            return (
              <div
                key={iphone.id}
                className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-3xl overflow-hidden border border-gray-700/50 hover:border-[#ffc700] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#ffc700]/50"
              >
                {iphone.destaque && (
                  <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
                    DESTAQUE
                  </div>
                )}

                {iphone.novo && (
                  <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    NOVO
                  </div>
                )}

                <div className="relative h-64 bg-gradient-to-br from-gray-700/30 to-gray-800/30 p-6">
                  <img
                    src={iphone.imagem}
                    alt={iphone.modelo}
                    className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {iphone.modelo}
                  </h3>

                  {/* Seleção de cores */}
                  <div className="mb-4">
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
                    <p className="text-3xl font-bold text-white">
                      {formatPrice(precoAtual)}
                    </p>
                    <p className="text-sm text-gray-400">
                      em até {iphone.parcelas}x de{" "}
                      {formatPrice(precoAtual / iphone.parcelas)}
                    </p>
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
                    Whatsapp para compras
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
