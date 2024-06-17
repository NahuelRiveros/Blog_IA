import React, { useState, useEffect } from "react";
import { useNavigate, useLoaderData } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import Search from "../Nav/NavbarSearch";
import PostCard from "../Cart/PostCart";

const BlogIAPag = () => {
  const loadMovies = useLoaderData(); // Obtiene los datos del loader
  const [movies, setDataMovies] = useState(loadMovies);
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
        switch (searchBy) {
          case "title":
            return item.nombre
              .toLowerCase()
              .includes(searchTerm.toLowerCase());
          case "author":
            return item.autor
              .toLowerCase()
              .includes(searchTerm.toLowerCase());
          case "tag":
            return item.tags && item.tags.includes(selectedTag?.name);
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
    console.log(pMovie)
    let direccion = String(pMovie.nombre)
      .toLowerCase()
      .split(" ")
      .join("");

    navigate(`/Publication/${direccion}`, {
      state: { item: pMovie },
    });
  };

  return (
    <div className="flex flex-col justify-center">
      <Search 
        searchTerm={searchTerm} 
        handleSearchChange={setSearchTerm} 
        searchBy={searchBy} 
        setSearchBy={setSearchBy} 
        selectedTag={selectedTag} 
        setSelectedTag={setSelectedTag} 
      />
      <div className="text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 m-4 gap-4">
        
      {filteredData.map((item) => (
        <PostCard key={item.id} item={item} handleDetalles={handleDetalles} />
      ))}
      </div>
    </div>
  );
};

export default BlogIAPag;
