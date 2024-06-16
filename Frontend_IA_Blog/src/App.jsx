import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Outlet,ScrollRestoration,createBrowserRouter,RouterProvider} from "react-router-dom"
import './App.css'
import FooterPag from './components/Footer/FooterPag'
import RegistrationPag from './components/Login/RegistrationPag'
import LoginPag from './components/Login/LoginPag'
import NavbarPag from './components/Nav/NavbarPag'
import HomePag from './components/Home/HomePag'

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