import React, { useState } from "react";
import { banner } from "../../assets/img";
import { BsSearch } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";

const Search = ({ searchTerm, handleSearchChange, searchBy, setSearchBy, selectedTag, setSelectedTag }) => {
  const tags = [
    { id: 1, name: "Aprendizaje Automático" },
    { id: 2, name: "Procesamiento del Lenguaje Natural" },
    { id: 3, name: "Visión Artificial" },
    { id: 4, name: "Robótica" },
    { id: 5, name: "Ética de la IA" },
    { id: 6, name: "IA en la Salud" },
    { id: 7, name: "IA en el Negocio" },
  ];

  const [showTagList, setShowTagList] = useState(false);

  const handleTagClick = (tag) => {
    if (selectedTag && selectedTag.id === tag.id) {
      setSelectedTag(null);
      handleSearchChange(""); // Clear search term when tag is deselected
    } else {
      setSelectedTag(tag);
      handleSearchChange(tag.name); // Set search term to tag name
    }
    setShowTagList(false);
  };

  const handleSearchByChange = (event) => {
    const selectedValue = event.target.value;
    setSearchBy(selectedValue); // Actualiza el estado de searchBy
    if (selectedValue !== "tag") {
      setSelectedTag(null);
      handleSearchChange(""); // Limpia el término de búsqueda cuando se cambia de búsqueda por etiqueta
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mt-8 px-4 md:px-8 lg:px-16 xl:px-32">
      <img src={banner} alt="Banner" className="rounded-2xl md:h-[250px]" />
      <div className="bg-white shadow-lg p-4 rounded-lg mt-[-20px] w-full max-w-lg md:mx-auto flex items-center">
        <BsSearch className="text-[20px] text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Buscar Contenido"
          className="outline-none w-full px-2 py-1 md:px-4 md:py-2 focus:border-blue-500 transition duration-300 text-sm md:text-base"
          value={searchTerm}
          onChange={(e) => handleSearchChange(e.target.value)}
          disabled={searchBy === "tag"} // Deshabilita el input cuando se busca por etiqueta
        />
        <select
          className="ml-2 border rounded-md px-2 py-1"
          value={searchBy}
          onChange={handleSearchByChange}
        >
          <option value="title">Título</option>
          <option value="author">Autor</option>
          <option value="tag">Etiqueta</option>
        </select>
      </div>

      {searchBy === "tag" && (
        <div className="w-full max-w-lg md:mx-auto mt-4">
          <div className="relative">
            <button
              className="bg-gray-200 px-4 py-2 rounded-md w-full text-left"
              onClick={() => setShowTagList(!showTagList)}
            >
              {selectedTag ? selectedTag.name : "Seleccione una etiqueta"}
            </button>
            {showTagList && (
              <ul className="absolute top-full left-0 z-10 bg-white shadow-md rounded-md w-full mt-1 max-h-60 overflow-auto">
                {tags.map((tag) => (
                  <li
                    key={tag.id}
                    className={`py-2 px-4 hover:bg-gray-100 cursor-pointer ${
                      selectedTag?.id === tag.id && "bg-gray-200"
                    }`}
                    onClick={() => handleTagClick(tag)}
                  >
                    {tag.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
          {selectedTag && (
            <button
            className="flex items-center mt-2 text-red-500 bg-white hover:bg-red-500 hover:text-white border border-red-500 hover:border-transparent rounded-md px-4 py-2 transition duration-300 ease-in-out"
            onClick={() => handleTagClick(selectedTag)}
          >
            <BsTrash className="mr-2" /> Deseleccionar Etiqueta
          </button>
          
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
