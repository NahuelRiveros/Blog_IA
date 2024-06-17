import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Outlet,ScrollRestoration,createBrowserRouter,RouterProvider} from "react-router-dom"
import './App.css'
import FooterPag from './components/Footer/FooterPag'
import RegistrationPag from './components/Login/RegistrationPag'
import LoginPag from './components/Login/LoginPag'
import NavbarPag from './components/Nav/NavbarPag'
import HomePag from './components/Home/HomePag'
import BlogIA from './components/Blog/BlogIAPag'
import PostIA from './components/Blog/PostIAPag'

//FICTICIO
const getIAPosts = [
  {
    id: 1,
    nombrePelicula: "Aprendizaje Automático: Guía para Principiantes",
    descripcionPelicula: "Introducción al mundo del Machine Learning.",
    imagen: "data:image/png;base64,...", // Reemplaza con la imagen base64
    autor: "Juan Pérez",
    release_date: "2023-07-15",
  },
  {
    id: 2,
    nombrePelicula: "El Impacto de la IA en la Salud",
    descripcionPelicula: "Análisis de cómo la IA está transformando el sector salud.",
    imagen: "data:image/png;base64,...", // Reemplaza con la imagen base64
    autor: "María Rodríguez",
    release_date: "2023-08-01",
  },
  // Agrega más publicaciones ficticias
];

const getBlog = () => {
  return getIAPosts; // Retorna los datos ficticios
};

const Layout = () => { 
  return (
    <div>
      <NavbarPag />
      {/* //invetigar bien estas funciones */}
      <ScrollRestoration />
      <Outlet />
      {/* //invetigar bien estas funciones */}
      <FooterPag />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePag/>
      },
      {
        path:'/blog',
        element: <BlogIA/>, // Ahora se llama BlogIAPag
        loader: getBlog,
      },
      {
        path:'/pelicula/:id', // Define la ruta para PostIAPag
        element: <PostIA/> // Ahora se llama PostIAPag
        // loader: getMovie
      },
      {
        path: '/login',
        element: <LoginPag/>
        
      },
      {
        path: '/registro',
        element: <RegistrationPag/>
        
      },    
    ]
}])

function App() {

  return (
    <div className="" >
      <RouterProvider router={router} />
    </div>

  )
}







export default App;