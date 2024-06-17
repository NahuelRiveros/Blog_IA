import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaStar } from 'react-icons/fa'; // Importa el icono de estrella

const PostVote = ({ postId, initialRating }) => {
  const [rating, setRating] = useState(initialRating || 0); // Estado para la calificación actual
  const [userRating, setUserRating] = useState(null); // Estado para guardar la calificación del usuario

  useEffect(() => {
    const storedRating = localStorage.getItem('userRatingForPost_' + postId);
    if (storedRating) {
      setUserRating(parseInt(storedRating, 10));
    }
  }, [postId]);

  const handleRatingChange = async (newRating) => {
    try {
      const response = await axios.post(`http://localhost:8000/api/posts/${postId}/vote`, { rating: newRating });
      setUserRating(newRating);
      setRating(newRating);
      // ... Actualizar el estado si es necesario
      // ... Mostrar un mensaje de éxito al usuario
    } catch (error) {
      console.error(error);
      // ... Mostrar un mensaje de error al usuario
    }
  };

  

  return (
    <div className="flex text-2xl">
      {[...Array(5)].map((_, i) => (
        <FaStar
          key={i}
          className={`star ${i < rating ? 'filled' : 'empty'}`}
          onClick={() => handleRatingChange(i + 1)}
        />
      ))}
      
    </div>
  );
};

export default PostVote;