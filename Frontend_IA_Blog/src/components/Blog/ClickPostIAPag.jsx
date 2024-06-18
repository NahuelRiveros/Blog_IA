import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoReturnDownBackOutline } from "react-icons/io5";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineVideoCamera, AiOutlineLogin } from "react-icons/ai"; // Importa los iconos de Ant Design Icons
import CommentSection from "../comment/commentarios";
import PostVote from "../Vote/PostVote";

const PostIAPag = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [post, setPost] = useState(location.state.item);

  // Formatear la fecha de creación
  const fecha = new Date(post.createdAt);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const fechaFormateada = fecha.toLocaleDateString("es-ES", options);

  // Función para renderizar las estrellas de puntuación
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

  // Función para volver al blog
  const backToBlog = () => {
    navigate("/blog");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-screen-xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            <img
              src={post.imagen}
              alt="Imagen del artículo"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              {post.nombre}
            </h1>
            <div className="flex items-center mb-4">
              <span className="text-gray-600 mr-2">Publicado el:</span>
              <span className="text-gray-800 font-medium">
                {fechaFormateada}
              </span>
            </div>
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Descripción
              </h2>
              <p className="text-lg text-gray-600">{post.objetivos}</p>
            </div>
            <div className="flex items-center mb-4">
              <span className="text-gray-600 mr-2">Calificación:</span>
              <span className="text-gray-800 font-medium">
                {post.puntuacionGeneral}{" "}
              </span>
              <span className="ml-2 flex">
                {renderStars(post.puntuacionGeneral)}
              </span>
            </div>
            <div className="mb-4">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Detalles
              </h2>
              <ul className="list-disc text-gray-600 pl-6">
                <li className="mb-2">
                  <strong>Limitaciones:</strong> {post.limitaciones}
                </li>
                <li className="mb-2">
                  <strong>Tipo de licencia:</strong> {post.tipoDeLicencia}
                </li>
                <li className="mb-2">
                  <strong>Autor:</strong> {post.autor}
                </li>
                <li className="mb-2">
                  <strong>Tags:</strong> {post.tags.join(", ")}
                </li>
                <li className="mb-2">
                  <strong>Año de lanzamiento:</strong> {post.anoDeLanzamiento}
                </li>
              </ul>
              <div className="mb-4 flex items-center justify-center gap-3">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                      Vota por esta publicación:
                    </h2>
                    <PostVote
                      postId={post.id}
                      initialLikes={post.likes}
                      initialDislikes={post.dislikes}
                    />
                  </div>
            </div>
            {/* buttons */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <button
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 flex items-center justify-center"
                onClick={() =>
                  window.open(post.linkVideo, "_blank", "noopener,noreferrer")
                }
                title="Ver video"
              >
                <AiOutlineVideoCamera className="text-lg mr-2" />
                Video
              </button>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 flex items-center justify-center"
                onClick={() =>
                  window.open(
                    post.linkDeAcceso,
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                title="Acceder"
              >
                <AiOutlineLogin className="text-lg mr-2" />
                Link
              </button>
              <button
                className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 flex items-center justify-center"
                onClick={backToBlog}
                title="Regresar al Blog"
              >
                <IoReturnDownBackOutline className="text-lg mr-2" />
                Regresar
              </button>
            </div>

            {/* buttons */}
          </div>
        </div>
      </div>
      <div className="my-8">
        <h3 className="bg-gray-800 text-white font-bold text-lg py-4 px-8 rounded-t-lg text-center">
          Comentarios
        </h3>
        <div className="bg-gray-100 p-4 rounded-b-lg">
          {/* Aquí puedes insertar el componente de comentarios */}
          <CommentSection />
        </div>
      </div>
    </div>
  );
};

export default PostIAPag;
