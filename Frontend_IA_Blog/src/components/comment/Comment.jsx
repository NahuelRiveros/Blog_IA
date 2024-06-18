import React, { useState, useEffect } from 'react';

const CommentSection = () => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [userVotes, setUserVotes] = useState({});

    // Carga los votos del usuario desde localStorage al inicio
  // useEffect(() => {
  //   const storedVotes = localStorage.getItem('userVotes');
  //   if (storedVotes) {
  //     setUserVotes(JSON.parse(storedVotes));
  //   }
  // }, []);
  useEffect(() => {
    
    // Función para cargar los comentarios desde el backend
    const fetchComments = async () => {
      try {
        const response = await axios.get('/api/comments'); // Reemplaza '/api/comments' con tu endpoint real
        setComments(response.data); // Asume que el backend devuelve un array de comentarios
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, []);
  // Guarda los votos del usuario en localStorage cada vez que cambia
  useEffect(() => {
    localStorage.setItem('userVotes', JSON.stringify(userVotes));
  }, [userVotes]);
 
  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  // const addComment = () => {
  //   if (newComment.trim() !== '') {
  //     const newCommentObj = {
  //       id: Date.now(),
  //       text: newComment,
  //       likes: 0,
  //       dislikes: 0,
  //     };

  //     setComments([...comments, newCommentObj]);
  //     setNewComment('');
  //   }
  // };
  const addComment = async () => {
    if (newComment.trim() !== '') {
      try {
        const response = await axios.post('/api/comments', { text: newComment }); // Envia el nuevo comentario al backend
        const newCommentObj = response.data; // Suponiendo que el backend devuelve el comentario creado con un ID generado
        setComments([...comments, newCommentObj]);
        setNewComment('');
      } catch (error) {
        console.error('Error adding comment:', error);
      }
    }
  };

  // const handleVote = (commentId, voteType) => {
  //   // Verifica si el usuario ya votó por este comentario
  //   if (userVotes[commentId] && userVotes[commentId] !== voteType) {
  //     // Si ya votó, pero con el tipo opuesto, cambia el voto
  //     setComments(comments.map((comment) => {
  //       if (comment.id === commentId) {
  //         if (voteType === 'like') {
  //           return {
  //             ...comment,
  //             likes: comment.likes + 1,
  //             dislikes: comment.dislikes - 1,
  //           };
  //         } else if (voteType === 'dislike') {
  //           return {
  //             ...comment,
  //             dislikes: comment.dislikes + 1,
  //             likes: comment.likes - 1,
  //           };
  //         }
  //       }
  //       return comment;
  //     }));
  //   } else if (!userVotes[commentId]) {
  //     // Si no ha votado, realiza el voto
  //     setComments(comments.map((comment) => {
  //       if (comment.id === commentId) {
  //         if (voteType === 'like') {
  //           return { ...comment, likes: comment.likes + 1 };
  //         } else if (voteType === 'dislike') {
  //           return { ...comment, dislikes: comment.dislikes + 1 };
  //         }
  //       }
  //       return comment;
  //     }));
  //   }

  //   // Actualiza el estado de userVotes para registrar el voto
  //   setUserVotes({ ...userVotes, [commentId]: voteType });
  // };
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

      <div className="comment-form flex items-center mb-4">
        <textarea
          value={newComment}
          onChange={handleCommentChange}
          placeholder="Escribe tu comentario..."
          className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={addComment}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg ml-2"
        >
          Agregar Comentario
        </button>
      </div>

      <ul className="comment-list">
        {comments.map((comment) => (
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
        ))}
      </ul>
    </div>
  );
};

export default CommentSection;