
import React from "react";
import { FaUser, FaCalendarAlt, FaExternalLinkAlt, FaStar, FaStarHalfAlt } from "react-icons/fa";

const PostCard = ({ item, handleDetalles }) => {
  // Renderizar las estrellas en función de la puntuación general
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else if (i - 0.5 <= rating) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
      } else {
        stars.push(<FaStar key={i} className="text-gray-400" />);
      }
    }
    return stars;
  };

  return (
    <div
      key={item.id}
      className="cursor-pointer p-5 shadow-lg rounded-md bg-white hover:bg-gray-100 transition duration-300"
      onClick={() => handleDetalles(item)}
    >
      {/* Título */}
      <h1 className="font-bold text-2xl mb-3">{item.nombre}</h1>
      
      {/* Imagen */}
      <div className="relative mb-3">
        <img
          src={`data:image/png;base64,${item.imagen}`}
          alt="Imagen de IA"
          className="rounded-md w-full"
        />
      </div>

      {/* Descripción */}
      <p className="text-gray-700 mb-3">{item.objetivos}</p>

      {/* Autor */}
      <div className="flex items-center mb-2">
        <FaUser className="text-gray-500 mr-2" />
        <p className="text-gray-500">{item.autor}</p>
      </div>

      {/* Fecha de lanzamiento */}
      <div className="flex items-center mb-2">
        <FaCalendarAlt className="text-gray-500 mr-2" />
        <p className="text-gray-500">{new Date(item.createdAt).toLocaleDateString("es-ES", { year: 'numeric', month: '2-digit', day: '2-digit' })}</p>
      </div>

      {/* Link de acceso */}
      {item.linkDeAcceso && (
        <div className="flex items-center mb-2">
          <FaExternalLinkAlt className="text-blue-500 mr-2" />
          <a
            href={item.linkDeAcceso}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
            onClick={(e) => e.stopPropagation()} // Evita que la navegación del link maneje el evento onClick de la tarjeta
          >
            Acceder a la IA
          </a>
        </div>
      )}

      {/* Link del video */}
      {item.linkVideo && (
        <div className="flex items-center mb-2">
          <FaExternalLinkAlt className="text-blue-500 mr-2" />
          <a
            href={item.linkVideo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
            onClick={(e) => e.stopPropagation()} // Evita que la navegación del link maneje el evento onClick de la tarjeta
          >
            Ver Video
          </a>
        </div>
      )}

      {/* Puntuación general */}
      <div className="flex items-center mb-2">
        {renderStars(item.puntuacionGeneral)}
      </div>

      {/* Ventajas y limitaciones */}
      <div className="mt-4">
        <h3 className="font-bold text-lg mb-2">Ventajas</h3>
        <p className="text-gray-700 mb-3">{item.ventajas}</p>
        <h3 className="font-bold text-lg mb-2">Limitaciones</h3>
        <p className="text-gray-700 mb-3">{item.limitaciones}</p>
      </div>
    </div>
  );
};

export default PostCard;
