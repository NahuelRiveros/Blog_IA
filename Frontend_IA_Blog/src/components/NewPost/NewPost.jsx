import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate, Link } from 'react-router-dom';
import * as Yup from "yup";
import axios from 'axios';

const NewPost = () => {
  const initialValues = {
    nombre: "Raulito asdasdasdasasds",
    objetivo: "alo", 
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", 
    ventaja: "Es muy lindo", 
    limitacion: "Es muy feo", 
    tipoLicencia: "Nose", 
    añoLanz: 2022, 
    autorRef: "Cosme Fulanito", 
    compromisoUso: "Uso Compromiso", 
    descripcion: "Descripsao", 
    linkVid: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    // imagen: "", //asd
    // ejemplo: "", //asd
    // tags: [], //asd
};


  const tags = [
    { id: 1, name: "Artificial Intelligence" },
    { id: 2, name: "Robotics" },
    { id: 3, name: "Machine Learning" },
    { id: 4, name: "Autonomous" },
    { id: 5, name: "Problem Solving" },
    { id: 6, name: "Deep Learning" },
    { id: 7, name: "Cybernetics" },
    { id: 8, name: "Neural Networks" },
  ];

  const validationSchema = Yup.object().shape({
    nombre: Yup.string().required("El nombre es obligatorio"),
    objetivo: Yup.string().required("El objetivo es obligatorio"),
    link: Yup.string()
    .url("Ingresa una URL válida")
    .required("El enlace de acceso es obligatorio"),
    ventaja: Yup.string().required("Las ventajas son obligatorias"),
    limitacion: Yup.string().required("Las limitaciones son obligatorias"),
    tipoLicencia: Yup.string().required("El tipo de licencia es obligatorio"),
    añoLanz: Yup.number()
    .required("El año es obligatorio")
    .min(1900, "Debe ser mayor a 1900")
    .max(2024, "Debe ser menor 2025"),
    autorRef: Yup.string().required("El autor es obligatorio"),
    compromisoUso: Yup.string().required("El compromiso de uso es obligatorio"),
    descripcion: Yup.string().required("La descripción es obligatoria"),
    linkVid: Yup.string()
    .url("Ingresa una URL válida")
    .required("El enlace del video es obligatorio"),
  });

  const handleSubmit = async (values) => {
    try {
      const  resRegistIA = await axios.post('http://localhost:8000/api/newIA', values, {
        headers: {
          Authorization:`Bearer ${localStorage?.getItem("token")}`
        }
      });
      alert(resRegistIA.data.msg)
      // Redirige a la página de inicio o al perfil después de registrar
      // navigate("/")
    } catch(err) {
      console.error('Error al registrar:', err);
    }
  };
// 
  return (
    <div className="bg-gray-200 p-6">

    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-4">
        Agregar Nuevo Post
      </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form className="font-mono space-y-6">
            <div className="">
              <label
                htmlFor="nombre"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre IA
              </label>
              <Field
                id="nombre"
                name="nombre"
                type="text"
                className="mt-1 border block w-full h-10  border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
              <ErrorMessage
                name="nombre"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            <div className="">
              <label
                htmlFor="objetivo"
                className="block text-sm font-medium text-gray-700"
              >
                Objetivos IA
              </label>
              <Field
                id="objetivo"
                name="objetivo"
                as="textarea"
                className="mt-1 border block w-full h-24 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm resize-none"
              />
              <ErrorMessage
                name="objetivo"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            <div className="">
              <label
                htmlFor="link"
                className="block text-sm font-medium text-gray-700"
              >
                Enlace de Acceso
              </label>
              <Field
                id="link"
                name="link"
                type="url"
                className="mt-1 border block w-full  h-10 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
              <ErrorMessage
                name="link"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            <div className="">
              <label
                htmlFor="ventaja"
                className="block text-sm font-medium text-gray-700"
              >
                Ventajas
              </label>
              <Field
                id="ventaja"
                name="ventaja"
                as="textarea"
                className="mt-1 border block w-full h-24 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm resize-none"
              />
              <ErrorMessage
                name="ventaja"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            <div className="">
              <label
                htmlFor="limitacion"
                className="block text-sm font-medium text-gray-700"
              >
                Limitaciones
              </label>
              <Field
                id="limitacion"
                name="limitacion"
                as="textarea"
                className="mt-1 border block w-full h-24 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm resize-none"
              />
              <ErrorMessage
                name="limitacion"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            {/* TRIPLE MENU HORIZONTALES  */}
            <div className="flex gap-5 items-center justify-center mb-4">
              <div className="flex flex-col items-center w-1/3">
                <label
                  htmlFor="tipoLicencia"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Tipo de Licencia
                </label>
                <Field
                  id="tipoLicencia"
                  name="tipoLicencia"
                  type="text"
                  className="mt-1 border block w-full h-10 px-3 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <ErrorMessage
                  name="tipoLicencia"
                  component="div"
                  className="text-red-600 text-sm inline-block min-h-[1.25rem]"
                />
              </div>

              <div className="flex flex-col items-center">
                <label
                  htmlFor="añoLanz"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Año de Lanzamiento
                </label>
                <Field
                  id="añoLanz"
                  name="añoLanz"
                  type="number"
                  className="mt-1 border block w-36 h-10 px-3 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <ErrorMessage
                  name="añoLanz"
                  component="div"
                  className="text-red-600 text-sm inline-block min-h-[1.25rem]"
                />
              </div>

              <div className="flex flex-col items-center w-72">
                <label
                  htmlFor="autorRef"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Autor
                </label>
                <Field
                  id="autorRef"
                  name="autorRef"
                  type="text"
                  className="mt-1 border block w-full h-10 px-3 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <ErrorMessage
                  name="autorRef"
                  component="div"
                  className="text-red-600 text-sm inline-block min-h-[1.25rem]"
                />
              </div>
            </div>

            {/* TRIPLE MENU HORIZONTALES  */}

            <div className="mt-1">
              <label
                htmlFor="imagen"
                className="block text-sm font-medium text-gray-700"
              >
                Imagen
              </label>
              <input
                id="imagen"
                name="imagen"
                type="file"
                className="mt-1 block  text-gray-700 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                onChange={(event) =>
                  setFieldValue("imagen", event.currentTarget.files[0])
                }
              />
              <ErrorMessage
                name="imagen"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            <div className="">
              <label
                htmlFor="compromisoUso"
                className="block text-sm font-medium text-gray-700"
              >
                Compromiso de Uso
              </label>
              <Field
                id="compromisoUso"
                name="compromisoUso"
                type="text"
                className="mt-1 border block w-full h-10  border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
              <ErrorMessage
                name="compromisoUso"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            <div className="">
              <label
                htmlFor="descripcion"
                className="block text-sm font-medium text-gray-700"
              >
                Descripcion
              </label>
              <Field
                id="descripcion"
                name="descripcion"
                as="textarea"
                className="mt-1 border block w-full h-24 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm resize-none"
              />
              <ErrorMessage
                name="descripcion"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            <div className="">
              <label
                htmlFor="linkVid"
                className="block text-sm font-medium text-gray-700"
              >
                Enlace del Video
              </label>
              <Field
                id="linkVid"
                name="linkVid"
                type="url"
                className="mt-1 border block w-full h-10 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
              <ErrorMessage
                name="linkVid"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            <div className="">
              <label className="block text-sm font-medium text-gray-700">
                Tags
              </label>
              <div className="flex flex-wrap gap-2 mt-2">
                {tags?.map((tag) => ( 
                  <button
                    key={tag.id}
                    type="button"
                    onClick={() => {
                      const isSelected = values?.tags?.includes(tag.name);
                      if (isSelected) {
                        setFieldValue(
                          "tags",
                          values.tags.filter((t) => t !== tag.name)
                        );
                      } else {
                        setFieldValue("tags", [...values.tags, tag.name]);
                      }
                    }}
                    className={`py-1 px-3 rounded-full ${
                      values?.tags?.includes(tag.name)
                        ? "bg-indigo-600 text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {tag.name}
                  </button>
                ))}
              </div>
              <ErrorMessage
                name="tags"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            <div className="">
              <label className="block text-sm font-medium text-gray-700">
                Tags Seleccionados
              </label>
              <div className="flex flex-wrap gap-2 mt-2">
                {values?.tags?.map((tag, index) => ( 
                  <div
                    key={index}
                    className="flex items-center bg-green-200 text-green-700 rounded-full px-3 py-1"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() =>
                        setFieldValue(
                          "tags",
                          values.tags.filter((t) => t !== tag)
                        )
                      }
                      className="ml-2 text-green-700"
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className=" flex justify-center">
              <button
                type="submit"
                className="bg-green-400 text-white font-medium py-2 px-4 rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Agregar Post
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
    </div>
  );
};

export default NewPost;