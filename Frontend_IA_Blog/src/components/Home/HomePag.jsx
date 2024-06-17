import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const articles = [
    {
      id: 1,
      title: 'Cómo comenzar con Tailwind CSS',
      image: 'https://via.placeholder.com/300',
      excerpt: 'Aprende los conceptos básicos y comienza a utilizar Tailwind CSS en tus proyectos.',
    },
    {
      id: 2,
      title: 'Mejores prácticas para desarrolladores frontend',
      image: 'https://via.placeholder.com/300',
      excerpt: 'Descubre las técnicas más efectivas para mejorar tu desarrollo frontend.',
    },
    {
      id: 3,
      title: 'Introducción a React Hooks',
      image: 'https://via.placeholder.com/300',
      excerpt: 'Explora cómo utilizar los hooks de React para escribir componentes más limpios y efectivos.',
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-gradient-to-r from-blue-100 via-green-100 to-gray-100 text-gray-700 py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-2">Bienvenido a Mi Blog</h1>
          <p className="text-lg">Explora artículos sobre tecnología, desarrollo web y más.</p>
        </div>
      </header>

      <section className="container mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-4">Artículos Recientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={article.image} alt={article.title} className="w-full h-48 object-cover object-center" />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{article.title}</h3>
                <p className="text-gray-700">{article.excerpt}</p>
                <Link
                  to={`/article/${article.id}`}
                  className="block mt-2 text-blue-500 hover:text-blue-700 transition duration-300"
                >
                  Leer más
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
