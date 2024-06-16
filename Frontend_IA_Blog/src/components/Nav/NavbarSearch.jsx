import React, { useState } from "react";
import banner from "../../assets/banner-peli.jpg";
import { BsSearch } from "react-icons/bs";

const Search = ({ searchTerm, handleSearchChange }) => {
  const tags = [
    { id: 1, name: "Terror" },
    { id: 2, name: "Accion" },
    { id: 3, name: "Comedia" },
    { id: 4, name: "Fantasia" },
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex justify-center items-center mt-8 flex-col px-4 md:px-8 lg:px-16 xl:px-32">
  <img src={banner} alt="" className="rounded-2xl md:h-[250px]" />
  <div className="bg-white shadow-lg p-4 rounded-lg mt-[-20px] w-full max-w-lg md:mx-auto flex items-center">
    <BsSearch className="text-[20px] text-gray-400 mr-2" />
    <input
      type="text"
      placeholder="Buscar Contenido"
      className="outline-none w-full px-2 py-1 md:px-4 md:py-2  focus:border-blue-500 transition duration-300 text-sm md:text-base"
      value={searchTerm}
      onChange={handleSearchChange}
    />
  </div>
</div>

  );
};

export default Search;
