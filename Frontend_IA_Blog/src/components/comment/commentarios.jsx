import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [userVotes, setUserVotes] = useState({});

  useEffect(() => {
    // Función para cargar los comentarios desde el backend al inicio
    const fetchComments = async () => {
      try {
        const response = await axios.get('/api/comments'); 
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



  const formik = useFormik({
    initialValues: {
      text: '',
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        console.log('Enviando comentario:', values.text);

        const response = await axios.post('/api/comments', { text: values.text });
        const newCommentObj = response.data; // Suponiendo que el backend devuelve el comentario creado con un ID generado
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

      <form onSubmit={formik.handleSubmit}>
        <div className="comment-form flex items-center mb-4">
          <textarea
            id="text"
            name="text"
            value={formik.values.text}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Escribe tu comentario..."
            className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg ml-2"
          >
            Agregar Comentario
          </button>
        </div>
        {formik.touched.text && formik.errors.text ? (
          <div className="text-red-500">{formik.errors.text}</div>
        ) : null}
      </form>

      <ul className="comment-list">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <li key={comment.id} className="comment-item mb-4 rounded-lg bg-gray-100 p-3">
              <div className="flex items-center mb-2">
                <p className="text-gray-800 font-medium">{comment.text}</p>
              </div>
              <div className="vote-buttons flex items-center">
                <button
                  onClick={() => handleVote(comment.id, 'like')}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded-lg mr-2"
                >
                  👍 {comment.likes}
                </button>
                <button
                  onClick={() => handleVote(comment.id, 'dislike')}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-lg"
                >
                  👎 {comment.dislikes}
                </button>
              </div>
            </li>
          ))
        ) : (
          <li className="comment-item mb-4 rounded-lg bg-gray-100 p-3">
            <p className="text-gray-800">No hay comentarios.</p>
          </li>
        )}
      </ul>
    </div>
  );
};

export default CommentSection;
