import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const CommentSection = ({ idPost }) => {
  const [comments, setComments] = useState([]);
  const [userVotes, setUserVotes] = useState({});

  useEffect(() => {
    // Función para cargar los comentarios desde el backend al inicio
    const fetchComments = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/comments'); 
        if (Array.isArray(response.data)) {
          setComments(response.data); // Asume que el backend devuelve un array de comentarios
        } else {
          setComments([]); // Si el backend no devuelve un array válido, inicializa comments como un array vacío
        }
      } catch (error) {
        console.error('Error fetching comments:', error);
        setComments([]); // Manejo de error: inicializa comments como un array vacío
      }
    };

    fetchComments();
  }, []);

  useEffect(() => {
    // Guarda los votos del usuario en localStorage cada vez que cambia
    localStorage.setItem('userVotes', JSON.stringify(userVotes));
  }, [userVotes]);


  // Formik for the new comment form
  const createDebate = useFormik({
    initialValues: {
      title: '',
      content: '',
    },
    validationSchema: Yup.object({
      title: Yup.string().required('El título es obligatorio'),
      content: Yup.string().required('El contenido es obligatorio'),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        console.log('Enviando comentario:', values);
        const fechaDebate = new Date().toLocaleDateString('es-ES');
        const response = await axios.post('http://localhost:8000/api/debate', {
          title: values.title,
          content: values.content,
          id: idPost, // Include the idPost here
          date: fechaDebate
        });

        const newCommentObj = response.data;
        setComments([...comments, newCommentObj]);
        resetForm();
      } catch (error) {
        console.error('Error adding comment:', error);
      }
    },
  });

  const handleVote = async (commentId, voteType) => {
    try {
      const response = await axios.put(`/api/comments/${commentId}/vote`, { voteType }); // Envia el voto al backend
      const updatedComment = response.data; // Suponiendo que el backend devuelve el comentario actualizado con votos
      setComments(comments.map(comment => comment.id === commentId ? updatedComment : comment));
      setUserVotes({ ...userVotes, [commentId]: voteType });
    } catch (error) {
      console.error('Error voting:', error);
    }
  };

  return (
    <div className="comment-section bg-white rounded-lg shadow-md p-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Comentarios</h2>

      {/* New comment form */}
      <form onSubmit={createDebate.handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
            Título:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={createDebate.values.title}
            onChange={createDebate.handleChange}
            onBlur={createDebate.handleBlur}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {createDebate.touched.title && createDebate.errors.title ? (
            <p className="text-red-500 text-xs italic">{createDebate.errors.title}</p>
          ) : null}
        </div>

        <div className="mb-4">
          <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-2">
            Contenido:
          </label>
          <textarea
            id="content"
            name="content"
            value={createDebate.values.content}
            onChange={createDebate.handleChange}
            onBlur={createDebate.handleBlur}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {createDebate.touched.content && createDebate.errors.content ? (
            <p className="text-red-500 text-xs italic">{createDebate.errors.content}</p>
          ) : null}
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline"
          >
            Enviar Comentario
          </button>
        </div>
      </form>
      
    </div>
  );
};

export default CommentSection;