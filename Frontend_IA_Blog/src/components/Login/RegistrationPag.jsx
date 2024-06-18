import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import * as Yup from 'yup'; // Importamos yup para validación

function RegistrationPag() {
  const navigate = useNavigate();

  // Esquema de validación usando Yup
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required('*Obligatorio'),
    email: Yup.string()
      .email('Email inválido')
      .required('*Obligatorio'),
    password: Yup.string()
      .required('*Obligatorio')
      .min(8, 'La contraseña debe tener al menos 8 caracteres')
      .matches(/\d/, 'La contraseña debe incluir al menos un número')
      .matches(/[a-z]/, 'La contraseña debe incluir al menos una letra minúscula')
      .matches(/[A-Z]/, 'La contraseña debe incluir al menos una letra mayúscula'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir')
      .required('*Obligatorio'),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      // Aquí podrías hacer la llamada a la API con axios
      const  resRegistratio = await axios.post('http://localhost:8000/api/register', values);
      
      alert(resRegistratio.data.msg)
      // Redirige a la página de inicio o al perfil después de registrar
      navigate("/")
      setSubmitting(false);
    } catch (error) {
      console.error('Error al registrar:', error);
      setSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200 py-10">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mx-4">
        <h2 className="text-2xl text-center font-bold mb-4">Registro</h2>
        <Formik
          initialValues={{ username: "", email: "", password: "", confirmPassword: "" }}
          validationSchema={validationSchema} // Agregamos el esquema de validación
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="font-mono space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium mb-1">Nombre de Usuario</label>
                <Field
                  type="text"
                  name="username"
                  className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                />
                <ErrorMessage name="username" component="div" className="text-red-500 text-sm mt-1" />
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
                <label htmlFor="password" className="block text-sm font-medium mb-1">Contraseña</label>
                <Field
                  type="password"
                  name="password"
                  className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">Confirmar Contraseña</label>
                <Field
                  type="password"
                  name="confirmPassword"
                  className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                />
                <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm mt-1" />
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
                  Back to Login..
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
