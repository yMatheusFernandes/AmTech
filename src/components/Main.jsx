import React from "react";
import { Smartphone, Wrench, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const AmTechMain = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-24 text-center flex flex-col items-center">
          <h1 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
            Am<span className="font-semibold">Tech</span>
          </h1>

          <p className="text-xl md:text-2xl font-light mb-4 max-w-3xl mx-auto leading-relaxed">
            Assistência técnica especializada e iPhones
          </p>

          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-12 font-light">
            Cuidamos do seu iPhone com a excelência que ele merece
          </p>


          {/* Main Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto">
            <button className="group w-full sm:w-auto bg-white text-blue-900 px-8 py-4 rounded-full font-medium text-lg shadow-lg hover:shadow-2xl hover:bg-yellow-400 hover:text-blue-900 transform hover:scale-110 hover:-translate-y-1 transition-all duration-500 ease-out flex items-center justify-center" onClick={() => navigate("/Novo")}>
              <span className="group-hover:font-semibold transition-all duration-300">
                iPhones Novos
              </span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" />
            </button>

            <button className="group w-full sm:w-auto border-2 border-white text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-yellow-400 hover:text-blue-900 hover:border-yellow-400 hover:shadow-2xl transform hover:scale-110 hover:-translate-y-1 transition-all duration-500 ease-out flex items-center justify-center" onClick={() => navigate("/Seminovo")}>
              <span className="group-hover:font-semibold transition-all duration-300">
                iPhones Seminovos
              </span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              Nossos Serviços
            </h2>
            <div className="w-12 h-1 bg-yellow-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="w-20 h-20 bg-blue-900 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Smartphone className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Venda de iPhones
              </h3>
              <p className="text-gray-600 leading-relaxed">
                iPhones novos e seminovos com garantia e qualidade certificada.
                Encontre o modelo ideal para você.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-yellow-400 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Wrench className="w-10 h-10 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Assistência Técnica
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Reparo especializado em iPhones e smartphones de todas as marcas com técnicos
                qualificados e peças originais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
            Pronto para encontrar seu próximo iPhone?
          </h2>

          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Explore nossa seleção cuidadosamente escolhida de iPhones novos e
            seminovos
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full max-w-lg mx-auto">
            <button className="group bg-blue-900 text-white px-10 py-4 rounded-full font-medium text-lg shadow-lg hover:shadow-2xl hover:bg-yellow-400 hover:text-blue-900 transform hover:scale-110 hover:-translate-y-2 transition-all duration-200 ease-out flex items-center justify-center" onClick={() => navigate("/Novo")}>
              <span className="group-hover:font-semibold transition-all duration-300">
                Ver iPhones Novos
              </span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" />
            </button>

            <button className="group border-2 border-blue-900 text-blue-900 px-10 py-4 rounded-full font-medium text-lg hover:bg-yellow-400 hover:text-blue-900 hover:border-yellow-400 hover:shadow-2xl transform hover:scale-110 hover:-translate-y-2 transition-all duration-200 ease-out flex items-center justify-center" onClick={() => navigate("/Seminovo")}>
              <span className="group-hover:font-semibold transition-all duration-300">
                Ver iPhones Seminovos
              </span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AmTechMain;
