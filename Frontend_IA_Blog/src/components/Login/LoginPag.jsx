import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { PiEyeSlashFill } from "react-icons/pi";
import { IoEyeSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function LoginPag() {
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState(null); // Estado para mensajes de error
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      console.log(values)
      const response = await axios.post('http://localhost:8000/api/login', values); // Reemplaza '/api/login' con la ruta correcta de tu backend
      localStorage.setItem('token', response.data.token); // Almacena el token
      navigate('/'); // Redirige al usuario
    } catch (error) {
      setError(error.response.data.message || 'Error al iniciar sesión'); // Maneja errores
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex h-screen justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-mono font-bold text-center mb-6">Login</h2>
        {error && <div className="text-red-500">{error}</div>} {/* Mostrar mensaje de error */}

        <Formik
          initialValues={{ username: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.username) {
              errors.username = "Required";
            }
            if (!values.password) {
              errors.password = "Required";
            }
            return errors;
          }}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="username" className="text-sm">
                  Username
                </label>
                <Field
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="border rounded-md p-2"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <div className="flex items-center relative">
                  <Field
                    type={showPass ? "text" : "password"}
                    name="password"
                    placeholder="password"
                    className="border rounded-md p-2 flex-grow"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    className="outline-none absolute text-xl right-2 top-3 focus:outline-none"
                  >
                    {showPass ? <PiEyeSlashFill /> : <IoEyeSharp />}
                  </button>
                </div>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                >
                  Login
                </button>
              </div>
            </Form>
          )}
        </Formik>

        <div className="mt-4 flex justify-center">
          <Link to={"/registro"} className="text-blue-500 hover:text-blue-700 text-sm transition-all duration-100 hover:scale-110">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPag;