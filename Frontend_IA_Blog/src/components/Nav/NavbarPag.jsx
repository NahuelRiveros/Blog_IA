import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaTimes, FaSearch } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { CgAdd } from "react-icons/cg";
import axios from 'axios';

function NavbarPag() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token'); 
  const [userName, setUserName] = useState(null);
  const [click, setClick] = useState(false);

  const handleToggleClick = () => {
    setClick(!click);
  };

  const closeMenu = () => {
    setClick(false);
  };

  const fetchUserName = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/user', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUserName(response.data.username);
    } catch (error) {
      console.error('Error al obtener el nombre de usuario:', error);
    }
  };

  useEffect(() => {
    if (token) {
      fetchUserName();
    }
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login'); 
  };

  const contentNav = (
    <div className="lg:hidden  absolute left-0 right-0 z-10 top-[3.7rem] w-full bg-gradient-to-r from-blue-100 via-green-100 to-gray-100 text-gray-700 transition-all duration-500 ease-in-out transform translate-y-0 opacity-100">
      <ul className="text-center text-xl space-y-4 py-6">
        <li className="border-b border-gray-300">
          <Link to="/" onClick={closeMenu} className="hover:text-green-600 transition-all duration-300 ease-in-out">Home</Link>
        </li>
        <li className="border-b border-gray-300">
          <Link to="/software" onClick={closeMenu} className="hover:text-green-600 transition-all duration-300 ease-in-out">Software AI</Link>
        </li>
        <li className="border-b border-gray-300">
          <Link to="/clasificacion" onClick={closeMenu} className="hover:text-green-600 transition-all duration-300 ease-in-out">Clasificación</Link>
        </li>
        <li className="border-b border-gray-300">
          <Link to="/foros" onClick={closeMenu} className="hover:text-green-600 transition-all duration-300 ease-in-out">Foros</Link>
        </li>
        <li className="border-b border-gray-300">
          <Link to="/perfil" onClick={closeMenu} className="hover:text-green-600 transition-all duration-300 ease-in-out">Perfil</Link>
        </li>
        <li>
          <Link to="/estadisticas" onClick={closeMenu} className="hover:text-green-600 transition-all duration-300 ease-in-out">Estadísticas</Link>
        </li>
      </ul>
    </div>
  );

  return (
    <nav className="bg-gradient-to-r from-blue-100 via-green-100 to-gray-100 text-gray-700 px-5 shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-8 lg:px-0">
        <div>
          <Link to="/">
            <img src="../src/assets/logoImagen.png" alt="Logo" className="w-16 rounded-full border-2 border-gray-700 hover:border-coral-300 transition duration-300 ease-in-out" />
          </Link>
        </div>
        <div className="hidden lg:flex items-center space-x-12">
          <ul className="flex gap-10 text-xl font-semibold">
            <li>
              <Link to="/" className="hover:text-green-600 transition duration-300 ease-in-out">Home</Link>
            </li>
            <li>
              <Link to="/software" className="hover:text-green-600 transition duration-300 ease-in-out">Software AI</Link>
            </li>
            <li>
              <Link to="/clasificacion" className="hover:text-green-600 transition duration-300 ease-in-out">Clasificación</Link>
            </li>
            <li>
              <Link to="/foros" className="hover:text-green-600 transition duration-300 ease-in-out">Foros</Link>
            </li>
            <li>
              <Link to="/perfil" className="hover:text-green-600 transition duration-300 ease-in-out">Perfil</Link>
            </li>
            <li>
              <Link to="/estadisticas" className="hover:text-green-600 transition duration-300 ease-in-out 
              ">Estadísticas</Link>
            </li>
          </ul>
          <div className="flex items-center space-x-6">
            <Link
              to="/NuevoBlog"
              className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-lg flex items-center gap-2 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Nuevo Post <CgAdd className="text-2xl" />
            </Link>
            <button className="bg-white hover:bg-gray-100 text-gray-600 font-bold py-2 px-4 rounded-lg flex items-center gap-2 transition-all duration-300 ease-in-out transform hover:scale-105">
              <FaSearch className="text-2xl" />
            </button>
          </div>
          {token && (
            <div className="flex items-center space-x-4">
              <span className="text-gray-700 font-bold">Bienvenido, {userName || 'Cargando...'}</span>
              <button onClick={handleLogout} className="bg-blue-300 text-gray-700 px-4 py-2 rounded-md hover:bg-blue-200 transition-all duration-300 ease-in-out">Logout</button>
            </div>
          )}
          {!token && (
            <Link to="/login" className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-lg flex items-center gap-2 transition-all duration-300 ease-in-out transform hover:scale-105">Login</Link>
          )}
        </div>
        {/* BOTON DESPLEGABLE RESPONSIVO */}
        <div className="lg:hidden flex items-center space-x-4">
          {token ? (
            <button onClick={handleLogout} className="text-gray-700 bg-blue-300 px-3 py-2 rounded-md hover:bg-blue-200 transition-all duration-300 ease-in-out">
              Logout
            </button>
          ) : (
            <Link to="/login" className="text-gray-700 font-bold hover:text-green-400 px-5">Login</Link>
          )}
          <button onClick={handleToggleClick} className="text-2xl text-gray-700 hover:text-green-600 transition duration-300 ease-in-out">
            {click ? <FaTimes /> : <CiMenuFries />}
          </button>
        </div>
        {click && contentNav}
      </div>
    </nav>
  );
}

export default NavbarPag;
