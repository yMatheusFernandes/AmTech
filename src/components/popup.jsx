import React, { useState } from "react";
import { Smartphone, Cpu, Camera, Battery } from "lucide-react";

const IphoneSpecsPopup = ({ iphone }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Botão para abrir o pop-up */}
      <button
        onClick={togglePopup}
        className="bg-[#003ba5] hover:bg-[#002a79] text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition-all duration-300"
      >
        Ver especificações
      </button>

      {/* Pop-up */}
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/70 z-50 transition-opacity duration-300"
        >
          <div
            className="bg-gray-900 p-6 rounded-2xl w-11/12 max-w-md relative transform scale-90 opacity-0 transition-all duration-300"
            style={{ animation: `${isOpen ? "popupOpen 0.3s forwards" : ""}` }}
          >
            {/* Botão fechar */}
            <button
              onClick={togglePopup}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              ✕
            </button>

            {/* Conteúdo do pop-up */}
            <h2 className="text-xl font-bold text-white mb-4">
              Especificações do {iphone.modelo}
            </h2>
            <div className="space-y-3 mb-4 border-t border-gray-700 pt-4">
              <div className="flex items-center gap-2 text-gray-300">
                <Smartphone size={16} className="text-[#ffc700]" />
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
          </div>
        </div>
      )}

      {/* Animação CSS */}
      <style jsx>{`
        @keyframes popupOpen {
          0% {
            opacity: 0;
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
};

export default IphoneSpecsPopup;
