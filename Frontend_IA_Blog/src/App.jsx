import {Outlet,ScrollRestoration,createBrowserRouter,RouterProvider} from "react-router-dom"
import './App.css'
import FooterPag from './components/Footer/FooterPag'
import RegistrationPag from './components/Login/RegistrationPag'
import LoginPag from './components/Login/LoginPag'
import NavbarPag from './components/Nav/NavbarPag'
import HomePag from './components/Home/HomePag'
import PostIAPag from './components/Blog/ClickPostIAPag'
import BlogIAPag from "./components/Blog/BlogIAPag"
// import PostCard from "./components/Cart/PostCart"
const getIAPosts = [
  {
    id: 1,
    nombre: "AI Visualizer",
    objetivos: "AI Visualizer es una herramienta avanzada de análisis de datos que transforma complejos conjuntos de datos en visualizaciones gráficas fáciles de entender. Está diseñada para ayudar a los usuarios a descubrir patrones ocultos y tendencias significativas a través de gráficos interactivos.",
    linkDeAcceso: "https://aivisualizer.com",
    ventajas: "Permite la visualización interactiva de datos, soporta múltiples formatos de datos, integración con APIs populares y fácil de usar incluso para personas sin experiencia técnica.",
    limitaciones: "Requiere una buena conexión a internet para el procesamiento de datos grandes, y algunas funciones avanzadas están disponibles solo en la versión premium.",
    tipoDeLicencia: "Commercial",
    anoDeLanzamiento: 2023,
    autor: "Tech Innovators Inc.",
    imagen: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAIAAAAmV6ZKAAAABmJLR0QA/wD/AP+gvaeTAA... (base64 ficticio)",
    puntuacionGeneral: 3.7,
    createdAt: "2024-06-10T12:00:00Z",
    linkVideo: "https://www.youtube.com/watch?v=examplevideo1",
    tags: ["Artificial Intelligence", "Data Visualization", "Problem Solving"]
  },
  {
    id: 2,
    nombre: "NLP Genius",
    objetivos: "NLP Genius es una potente plataforma de Procesamiento del Lenguaje Natural (NLP) que proporciona herramientas para analizar y comprender texto en múltiples idiomas. Utiliza técnicas avanzadas de aprendizaje automático para facilitar el análisis semántico y la extracción de entidades.",
    linkDeAcceso: "https://nlpgenius.com",
    ventajas: "Soporta más de 50 idiomas, incluye modelos preentrenados para diversas tareas de NLP, y ofrece una API robusta para la integración en aplicaciones empresariales.",
    limitaciones: "Puede requerir una curva de aprendizaje para usuarios sin experiencia en NLP y los modelos personalizados pueden necesitar recursos significativos para el entrenamiento.",
    tipoDeLicencia: "Open Source",
    anoDeLanzamiento: 2022,
    autor: "OpenAI Community",
    imagen: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAIAAAAmV6ZKAAAABmJLR0QA/wD/AP+gvaeTAA... (base64 ficticio)",
    puntuacionGeneral: 4.8,
    createdAt: "2024-05-20T12:00:00Z",
    linkVideo: "https://www.youtube.com/watch?v=examplevideo2",
    tags: ["Natural Language Processing", "Machine Learning", "Artificial Intelligence"]
  },
  {
    id: 3,
    nombre: "RoboHealth",
    objetivos: "RoboHealth es un sistema de inteligencia artificial diseñado para revolucionar el sector de la salud. Proporciona diagnósticos precisos a partir de imágenes médicas y analiza grandes volúmenes de datos clínicos para mejorar la toma de decisiones en el cuidado del paciente.",
    linkDeAcceso: "https://robohealth.com",
    ventajas: "Alta precisión en el diagnóstico de enfermedades, integración con sistemas de salud electrónicos, y capacidad para manejar grandes conjuntos de datos médicos.",
    limitaciones: "Requiere un alto nivel de seguridad para manejar datos sensibles, y la integración con sistemas de salud existentes puede ser compleja y costosa.",
    tipoDeLicencia: "Commercial",
    anoDeLanzamiento: 2021,
    autor: "HealthTech Solutions",
    imagen: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAIAAAAmV6ZKAAAABmJLR0QA/wD/AP+gvaeTAA... (base64 ficticio)",
    puntuacionGeneral: 4.9,
    createdAt: "2024-06-01T12:00:00Z",
    linkVideo: "https://www.youtube.com/watch?v=examplevideo3",
    tags: ["Healthcare", "Robotics", "Artificial Intelligence"]
  }
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
        element: <BlogIAPag/>, // Ahora se llama BlogIAPag
        loader: getBlog,
      },
      {
        path:'/Publication/:id', // Define la ruta para PostIAPag
        element: <PostIAPag/> // Ahora se llama PostIAPag
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