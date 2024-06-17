import React, { useState, useEffect } from "react";
import { useNavigate, useLoaderData } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import Search from "../Nav/NavbarSearch";

const BlogIAPag = () => {
  const loadMovies = useLoaderData(); // Obtiene los datos del loader
  const [searchTerm, setSearchTerm] = useState(""); // Inicializa como una cadena vacía
  const [filteredData, setFilteredData] = useState(loadMovies);
  const [searchBy, setSearchBy] = useState("title");
  const [selectedTag, setSelectedTag] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    let filtered = loadMovies;

    // Verifica que searchTerm es una cadena antes de usar trim
    if (typeof searchTerm === 'string' && searchTerm.trim() !== "") {
      filtered = filtered.filter((item) => {
        console.log(searchBy)
        switch (searchBy) {
          case "title":
            return item.nombrePelicula
              && typeof item.nombrePelicula === 'string'
              && item.nombrePelicula
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
          case "author":
            return item.autor
              && typeof item.autor === 'string'
              && item.autor
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
          case "tag":
            return item.tags
              && Array.isArray(item.tags)
              && item.tags.includes(selectedTag?.name);
          default:
            return true;
        }
      });
    }
    

    if (selectedTag) {
      filtered = filtered.filter((item) => {
        return item.tags && item.tags.includes(selectedTag.name);
      });
    }

    setFilteredData(filtered);
  }, [searchTerm, searchBy, selectedTag, loadMovies]);

  const handleDetalles = (pMovie) => {
    let direccion = String(pMovie.nombrePelicula)
      .toLowerCase()
      .split(" ")
      .join("");

    navigate(`/pelicula/${direccion}`, {
      state: { item: pMovie },
    });
  };

  return (
    <div className="flex flex-col justify-center">
      <Search 
  searchTerm={searchTerm}                    // Término de búsqueda actual
  handleSearchChange={setSearchTerm}         // Función para actualizar el término de búsqueda
  searchBy={searchBy}                        // Opción de búsqueda actual (title, author, tag)
  setSearchBy={setSearchBy}                  // Función para actualizar la opción de búsqueda
  selectedTag={selectedTag}                  // Etiqueta seleccionada para la búsqueda por etiqueta
  setSelectedTag={setSelectedTag}            // Función para actualizar la etiqueta seleccionada
/>
      <div className="text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 m-4 gap-4">
        {filteredData.map((item) => (
          <div
           
            key={item.id} // Asigna un key único basado en idPelicula
            className="cursor-pointer p-5 shadow-lg rounded-md bg-white hover:bg-gray-100 transition duration-300"
            onClick={() => handleDetalles(item)}
          >
            
            <h1 className="font-bold text-xl mb-2">{item.nombrePelicula}</h1>
            <div className="relative">
              <img
                src={`data:image/png;base64,${item.imagen}`}
                alt="Poster Pelicula"
                className="rounded-md w-full"
              />
            </div>
            <p className="text-gray-700 mt-2">{item.descripcionPelicula}</p>
            <div className="flex items-center mt-2">
              <FaUser className="text-gray-500 mr-1" />
              <p className="text-gray-500">{item.autor}</p>
            </div>
            <p className="text-gray-500 text-sm mt-1">
              Publicado: {item.release_date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogIAPag;
