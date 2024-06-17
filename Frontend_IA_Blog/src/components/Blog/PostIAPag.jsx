import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoReturnDownBackOutline } from "react-icons/io5";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const PostIAPag = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [post, setPost] = useState(location.state.item);
  const [puntuacionGeneral, setPuntuacionGeneral] = useState(post.puntuacionGeneral);

  const fecha = new Date(post.createdAt);
  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  const fechaFormateada = fecha.toLocaleDateString("es-ES", options);

  const renderStars = (rating) => {
    const starArray = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        starArray.push(<FaStar key={i} className="text-yellow-500" />);
      } else if (i - 0.5 <= rating) {
        starArray.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
      } else {
        starArray.push(<FaStar key={i} className="text-gray-400" />);
      }
    }
    return starArray;
  };

  const backToBlog = () => {
    navigate("/blog");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row gap-10 justify-center items-center bg-white shadow-lg rounded-lg p-8">
        <div className="w-full md:w-1/2">
          <img
            className="w-full h-auto object-cover rounded-lg shadow-md"
            src={`data:image/png;base64,${post.imagen}`}
            alt="Post de IA"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
            {post.nombrePelicula}
          </h2>
          <div className="text-center">
            <p className="text-lg text-gray-600 mb-4">
              {post.descripcionPelicula}
            </p>
            <p className="text-lg text-gray-600 flex justify-center items-center mb-4">
              Popularidad: <span className="ml-2 flex">{renderStars(puntuacionGeneral)}</span>
            </p>
            <p className="text-lg text-gray-700">{fechaFormateada}</p>
          </div>
          <div className="flex justify-center items-center gap-10">
            <button
              className="flex justify-center items-center w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg transition duration-300"
              onClick={backToBlog}
              title="Regresar al Blog"
            >
              <IoReturnDownBackOutline className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
      <div className="my-8">
        <label className="bg-black text-white font-bold text-lg py-4 px-8 rounded-t-lg block text-center">
          Comentarios
        </label>
        <div className="bg-gray-100 p-4 rounded-b-lg">
          {/* Aquí puedes insertar el componente de comentarios */}
        </div>
      </div>
    </div>
  );
};

export default PostIAPag;