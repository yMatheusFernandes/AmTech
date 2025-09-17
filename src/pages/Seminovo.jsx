import React, { useState } from 'react';
import { ShoppingCart, Star, Check, Smartphone, Battery, Camera, Cpu } from 'lucide-react';

const IphoneStore = () => {
  const [selectedColors, setSelectedColors] = useState({});
  
  const iphones = [
    {
      id: 1,
      modelo: "iPhone 15 Pro Max",
      preco: 9999.00,
      precoAntigo: 10999.00,
      parcelas: 12,
      imagem: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400",
      cores: ["#1a1a1a", "#F5F5F0", "#4A4A4A", "#394C6B"],
      nomesCores: ["Titânio Preto", "Titânio Natural", "Titânio Cinza", "Titânio Azul"],
      destaque: true,
      novo: true,
      especificacoes: {
        tela: "6.7\" Super Retina XDR",
        chip: "A17 Pro",
        camera: "48MP + 12MP + 12MP",
        bateria: "29h de vídeo",
        armazenamento: ["256GB", "512GB", "1TB"]
      },
      avaliacao: 4.9,
      totalAvaliacoes: 2547
    },
    {
      id: 2,
      modelo: "iPhone 15 Pro",
      preco: 8499.00,
      precoAntigo: 9299.00,
      parcelas: 12,
      imagem: "https://images.unsplash.com/photo-1696446701796-da61225697cc?w=400",
      cores: ["#1a1a1a", "#F5F5F0", "#4A4A4A", "#394C6B"],
      nomesCores: ["Titânio Preto", "Titânio Natural", "Titânio Cinza", "Titânio Azul"],
      novo: true,
      especificacoes: {
        tela: "6.1\" Super Retina XDR",
        chip: "A17 Pro",
        camera: "48MP + 12MP + 12MP",
        bateria: "23h de vídeo",
        armazenamento: ["128GB", "256GB", "512GB", "1TB"]
      },
      avaliacao: 4.8,
      totalAvaliacoes: 1892
    },
    {
      id: 3,
      modelo: "iPhone 15",
      preco: 6299.00,
      precoAntigo: 7199.00,
      parcelas: 12,
      imagem: "https://images.unsplash.com/photo-1695729626008-7adb521f15be?w=400",
      cores: ["#FFD3E1", "#E3E3C7", "#1a1a1a", "#D4E4FA", "#C9E7D4"],
      nomesCores: ["Rosa", "Amarelo", "Preto", "Azul", "Verde"],
      especificacoes: {
        tela: "6.1\" Super Retina XDR",
        chip: "A16 Bionic",
        camera: "48MP + 12MP",
        bateria: "20h de vídeo",
        armazenamento: ["128GB", "256GB", "512GB"]
      },
      avaliacao: 4.7,
      totalAvaliacoes: 3421
    },
    {
      id: 4,
      modelo: "iPhone 14",
      preco: 5299.00,
      precoAntigo: 6499.00,
      parcelas: 12,
      imagem: "https://images.unsplash.com/photo-1678652197831-2d180705cd2c?w=400",
      cores: ["#5C5B77", "#F0E5D8", "#1a1a1a", "#FA3C4E", "#6BB6FF"],
      nomesCores: ["Roxo", "Estelar", "Meia-noite", "Vermelho", "Azul"],
      desconto: 18,
      especificacoes: {
        tela: "6.1\" Super Retina XDR",
        chip: "A15 Bionic",
        camera: "12MP + 12MP",
        bateria: "20h de vídeo",
        armazenamento: ["128GB", "256GB", "512GB"]
      },
      avaliacao: 4.6,
      totalAvaliacoes: 5672
    },
    {
      id: 5,
      modelo: "iPhone 14 Plus",
      preco: 6799.00,
      precoAntigo: 7999.00,
      parcelas: 12,
      imagem: "https://images.unsplash.com/photo-1678911820864-e2c567c655d7?w=400",
      cores: ["#5C5B77", "#F0E5D8", "#1a1a1a", "#FA3C4E", "#6BB6FF", "#FFFC9E"],
      nomesCores: ["Roxo", "Estelar", "Meia-noite", "Vermelho", "Azul", "Amarelo"],
      desconto: 15,
      especificacoes: {
        tela: "6.7\" Super Retina XDR",
        chip: "A15 Bionic",
        camera: "12MP + 12MP",
        bateria: "26h de vídeo",
        armazenamento: ["128GB", "256GB", "512GB"]
      },
      avaliacao: 4.5,
      totalAvaliacoes: 2134
    },
    {
      id: 6,
      modelo: "iPhone 13",
      preco: 4299.00,
      precoAntigo: 5499.00,
      parcelas: 12,
      imagem: "https://images.unsplash.com/photo-1640437830863-8f7f38327319?w=400",
      cores: ["#FFB3BA", "#1a1a1a", "#FFFFFF", "#6BB6FF", "#FA3C4E"],
      nomesCores: ["Rosa", "Meia-noite", "Estelar", "Azul", "Vermelho"],
      desconto: 22,
      especificacoes: {
        tela: "6.1\" Super Retina XDR",
        chip: "A15 Bionic",
        camera: "12MP + 12MP",
        bateria: "19h de vídeo",
        armazenamento: ["128GB", "256GB", "512GB"]
      },
      avaliacao: 4.4,
      totalAvaliacoes: 8923
    }
  ];

  const handleColorSelect = (phoneId, colorIndex) => {
    setSelectedColors(prev => ({
      ...prev,
      [phoneId]: colorIndex
    }));
  };

  const formatPrice = (price) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              iPhone Store
            </span>
          </h1>
          <p className="text-gray-300 text-lg">Os melhores iPhones com condições especiais</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {iphones.map((iphone) => {
            const selectedColorIndex = selectedColors[iphone.id] || 0;
            
            return (
              <div
                key={iphone.id}
                className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-3xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
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
                
                {iphone.desconto && (
                  <div className="absolute top-14 right-4 z-10 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg">
                    -{iphone.desconto}%
                  </div>
                )}

                <div className="relative h-64 bg-gradient-to-br from-gray-700/30 to-gray-800/30 p-6">
                  <img
                    src={iphone.imagem}
                    alt={iphone.modelo}
                    className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{iphone.modelo}</h3>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < Math.floor(iphone.avaliacao) ? "fill-yellow-400 text-yellow-400" : "text-gray-600"}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-400">
                      {iphone.avaliacao} ({iphone.totalAvaliacoes})
                    </span>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-400 mb-2">Cores disponíveis:</p>
                    <div className="flex gap-2">
                      {iphone.cores.map((cor, index) => (
                        <button
                          key={index}
                          onClick={() => handleColorSelect(iphone.id, index)}
                          className={`w-8 h-8 rounded-full border-2 transition-all duration-300 ${
                            selectedColorIndex === index 
                              ? 'border-purple-400 scale-110 shadow-lg' 
                              : 'border-gray-600 hover:border-gray-400'
                          }`}
                          style={{ backgroundColor: cor }}
                          title={iphone.nomesCores[index]}
                        />
                      ))}
                    </div>
                    {selectedColorIndex !== undefined && (
                      <p className="text-xs text-purple-400 mt-2">
                        {iphone.nomesCores[selectedColorIndex]}
                      </p>
                    )}
                  </div>

                  <div className="space-y-3 mb-4 border-t border-gray-700 pt-4">
                    <div className="flex items-center gap-2 text-gray-300">
                      <Smartphone size={16} className="text-purple-400" />
                      <span className="text-sm">{iphone.especificacoes.tela}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <Cpu size={16} className="text-blue-400" />
                      <span className="text-sm">{iphone.especificacoes.chip}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <Camera size={16} className="text-pink-400" />
                      <span className="text-sm">{iphone.especificacoes.camera}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <Battery size={16} className="text-green-400" />
                      <span className="text-sm">{iphone.especificacoes.bateria}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-400 mb-2">Armazenamento:</p>
                    <div className="flex gap-2 flex-wrap">
                      {iphone.especificacoes.armazenamento.map((storage) => (
                        <span
                          key={storage}
                          className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-lg text-sm border border-gray-600 hover:border-purple-400 hover:text-purple-400 transition-colors cursor-pointer"
                        >
                          {storage}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    {iphone.precoAntigo && (
                      <p className="text-gray-500 line-through text-sm">
                        {formatPrice(iphone.precoAntigo)}
                      </p>
                    )}
                    <p className="text-3xl font-bold text-white">
                      {formatPrice(iphone.preco)}
                    </p>
                    <p className="text-sm text-gray-400">
                      em até {iphone.parcelas}x de {formatPrice(iphone.preco / iphone.parcelas)}
                    </p>
                  </div>

                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg hover:shadow-purple-500/50">
                    <ShoppingCart size={20} className="group-hover:scale-110 transition-transform" />
                    Adicionar ao Carrinho
                  </button>
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