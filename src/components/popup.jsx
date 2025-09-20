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
        className="bg-[#003ba5] hover:bg-[#002a79] text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition-all duration-300 text-sm sm:text-base"
      >
        Ver especificações
      </button>

      {/* Pop-up */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50 px-4 sm:px-0">
          <div
            className="bg-gray-900 p-4 sm:p-6 rounded-2xl w-full sm:w-11/12 md:max-w-md lg:max-w-lg relative transform scale-90 opacity-0 transition-all duration-300"
            style={{ animation: `${isOpen ? "popupOpen 0.3s forwards" : ""}` }}
          >
            {/* Botão fechar */}
            <button
              onClick={togglePopup}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-white text-lg sm:text-xl"
            >
              ✕
            </button>

            {/* Conteúdo do pop-up */}
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4 text-center sm:text-left">
              Especificações do {iphone.modelo}
            </h2>
            <div className="space-y-3 mb-4 border-t border-gray-700 pt-4">
              <div className="flex items-center gap-2 text-gray-300">
                <Smartphone size={18} className="text-[#ffc700]" />
                <span className="text-sm sm:text-base">{iphone.especificacoes.tela}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Cpu size={18} className="text-blue-400" />
                <span className="text-sm sm:text-base">{iphone.especificacoes.chip}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Camera size={18} className="text-pink-400" />
                <span className="text-sm sm:text-base">{iphone.especificacoes.camera}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Battery size={18} className="text-green-400" />
                <span className="text-sm sm:text-base">{iphone.especificacoes.bateria}</span>
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
