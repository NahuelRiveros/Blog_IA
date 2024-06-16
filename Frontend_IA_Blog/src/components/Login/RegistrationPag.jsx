import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

function RegistrationPag() {
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post('/api/register', values);
      // Redirige a la página de inicio o al perfil después de registrar
      navigate('/');
      setSubmitting(false);
    } catch (error) {
      console.error('Error al registrar:', error);
      setSubmitting(false);
    }
  };

  const validate = (values) => {
    const errors = {};
    if (!values.nombre) {
      errors.nombre = "*Obligatorio";
    }
    if (!values.apellido) {
      errors.apellido = "*Obligatorio";
    }
    if (!values.email) {
      errors.email = "*Obligatorio";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Email inválido";
    }
    if (!values.password) {
      errors.password = "*Obligatorio";
    } else if (values.password.length < 8) {
      errors.password = "La contraseña debe tener al menos 8 caracteres";
    } else if (!/\d/.test(values.password)) {
      errors.password = "La contraseña debe incluir al menos un número";
    } else if (!/[a-z]/.test(values.password)) {
      errors.password = "La contraseña debe incluir al menos una letra minúscula";
    } else if (!/[A-Z]/.test(values.password)) {
      errors.password = "La contraseña debe incluir al menos una letra mayúscula";
    }
    return errors;
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200 py-10">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mx-4">
        <h2 className="text-2xl text-center font-bold mb-4">Registro</h2>
        <Formik
          initialValues={{ nombre: "", apellido: "", email: "", password: "" }}
          validate={validate}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="font-mono space-y-4">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium mb-1">Nombre</label>
                <Field
                  type="text"
                  name="nombre"
                  className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                />
                <ErrorMessage name="nombre" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div>
                <label htmlFor="apellido" className="block text-sm font-medium mb-1">Apellido</label>
                <Field
                  type="text"
                  name="apellido"
                  className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                />
                <ErrorMessage name="apellido" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <Field
                  type="email"
                  name="email"
                  className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
                <Field
                  type="password"
                  name="password"
                  className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className=" bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline transition duration-300"
                >
                  Registrar
                </button>
                <Link
                  to="/login"
                  className=" hover:text-green-500 text-sm transition-all duration-100"
                >
                  Login..
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default RegistrationPag;
