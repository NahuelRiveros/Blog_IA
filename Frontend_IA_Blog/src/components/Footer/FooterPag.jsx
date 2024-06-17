import React from "react";
import { Link } from "react-router-dom";
import { CgAdd } from "react-icons/cg";
function FooterPag() {
  return (
    <footer className="bg-gradient-to-r from-blue-100 via-green-100 to-gray-100 text-gray-700 py-12 font-mono">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-y-0">
          {/* Sección 1: Sobre nosotros */}
          <div className="flex items-center flex-col">
            <h4 className="text-lg font-bold mb-4">Sobre nosotros</h4>
            <p className="text-sm leading-relaxed">
              Somos un grupo de estudiantes del último año de la Licenciatura en Sistemas de Información. Apasionados por la tecnología y la innovación, estamos comprometidos con el aprendizaje continuo y la búsqueda de soluciones creativas para los desafíos del mundo digital.
            </p>
          </div>
          {/* Sección 2: Enlaces rápidos */}
          <div className="flex flex-col items-center">
            <h4 className="text-lg font-bold mb-4">Enlaces rápidos</h4>
            <ul className="text-sm text-center flex flex-col gap-1">
              <li>
                <Link to="/" className="hover:text-coral-400 hover:border-b-2">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-coral-400 hover:border-b-2">
                  Contacto
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-coral-400 hover:border-b-2">
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/NewPost"
                  className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-lg flex items-center gap-2 transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                  Nuevo Post <CgAdd className="text-xl" />
                </Link>
              </li>
            </ul>
          </div>
          {/* Sección 3: Contacto */}
          <div className="flex items-center flex-col">
            <h4 className="text-lg font-bold mb-4">Autores</h4>
            <p className="text-sm hover:text-coral-400 hover:border-b-2 cursor-pointer">Bordon Raul</p>
            <p className="text-sm hover:text-coral-400 hover:border-b-2 cursor-pointer">Machado Gaston</p>
            <p className="text-sm hover:text-coral-400 hover:border-b-2 cursor-pointer">Mencia Aramis</p>
            <p className="text-sm hover:text-coral-400 hover:border-b-2 cursor-pointer">Rios Anahi</p>
            <p className="text-sm hover:text-coral-400 hover:border-b-2 cursor-pointer">Riveros Nahuel</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterPag;
