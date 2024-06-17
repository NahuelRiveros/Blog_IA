import React from 'react';

function Home() {
  const projectDescription = `
    Una aplicación que permita llevar un catálogo de software de inteligencia artificial con sus nombres, objetivos, 
    link de acceso, ventajas, limitaciones, tipo de licencia, año de lanzamiento, autor o referencia. Debe además tener 
    una descripción corta de su funcionamiento y un video o material demostrativo. Debe permitir realizar búsquedas por 
    diferentes campos y que se pueda hacer a través del lenguaje natural y lenguaje de señas. Investigar acerca a través 
    de qué recursos se pueden implementar los dos últimos puntos y de ser posible llevarlo a cabo. La aplicación también 
    debe contener una sección con las diferentes clasificaciones de sistemas inteligentes, imágenes y en qué consisten, 
    ejemplo de casos de uso y links a sitios que amplíen la información. El usuario debería poder puntuar cada uno de los 
    componentes consultados y posteriormente realizar estadísticas y recomendaciones al ingresar a la aplicación y en 
    cualquier momento en que se requiera una. También deberá contener una sección donde determinados usuarios autorizados 
    puedan agregar debates o comentarios acerca de usos éticos, sesgos, beneficios, polémicas, futuro, y deberá permitir 
    que el resto de los usuarios participen en cada uno y puedan votar por cada intervención. Nuevamente debe poder 
    realizarse análisis de los datos recolectados y permitir su consulta desde cualquier lugar de la aplicación.
  `;

  const authors = [
    {
      name: 'Bordon Raul',
      role: 'Desarrollador Frontend',
      description: 'Especializado en la creación de interfaces de usuario atractivas y funcionales utilizando Tailwind CSS y React.',
    },
    {
      name: 'Machado Gaston',
      role: 'Desarrollador Backend',
      description: 'Experto en el desarrollo de aplicaciones robustas y escalables utilizando Node.js, Express y PostgreSQL.',
    },
    {
      name: 'Mencia Aramis',
      role: 'Especialista en IA',
      description: 'Investigador y desarrollador en inteligencia artificial, enfocado en sistemas de aprendizaje automático y análisis de datos.',
    },
    {
      name: 'Rios Anahi',
      role: 'Diseñadora UX/UI',
      description: 'Diseñadora creativa con experiencia en la creación de experiencias de usuario intuitivas y accesibles.',
    },
    {
      name: 'Riveros Nahuel',
      role: 'Analista de Datos',
      description: 'Analista experimentado en el procesamiento y análisis de grandes volúmenes de datos para obtener insights significativos.',
    }
  ];

  const toolsUsed = [
    'Visual Studio Code',
    'Frontend: JavaScript, Vite, Tailwind CSS',
    'Backend: JavaScript, Node.js, Nodemon, Cors, Express, Sequelize, pg-hstore, Multer, fs, pg',
    'Database: PostgreSQL'
  ];

  const resourcesUsed = 'Recursos utilizados: Investigación sobre implementación de búsqueda por lenguaje natural y de señas, clasificaciones de sistemas inteligentes, integración de sistemas de puntuación y estadísticas, gestión de debates y comentarios éticos, sesgos y beneficios en sistemas de inteligencia artificial.';

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-gradient-to-r from-blue-100 via-green-100 to-gray-100 text-gray-700 py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-2">Bienvenido a Well-Aimed Cool Handsome Innovated Program Auxiliary Technologically Operator</h1>
          <p className="text-lg">Explora artículos sobre tecnología, desarrollo web y más.</p>
        </div>
      </header>

      <section className="container mx-auto mt-8">
        <div className="p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Descripción del Proyecto</h2>
          <p className="text-gray-700">{projectDescription}</p>
        </div>
      </section>

      <section className="container mx-auto mt-8">
        <div className="p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Herramientas Utilizadas</h2>
          <ul className="list-disc pl-4">
            {toolsUsed.map((tool, index) => (
              <li key={index} className="text-gray-700">{tool}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container mx-auto mt-8">
        <div className="p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Recursos Utilizados</h2>
          <p className="text-gray-700">{resourcesUsed}</p>
        </div>
      </section>

      <section className="container mx-auto mt-8">
        <div className="p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Autores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {authors.map((author, index) => (
              <div key={index} className="border border-gray-200 p-4 rounded-lg">
                <h3 className="text-xl font-bold mb-2">{author.name}</h3>
                <p className="text-gray-700 mb-2">{author.role}</p>
                <p className="text-gray-700">{author.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
