import React, { useEffect, useState } from 'react';
import RecipeCard from '../components/ReceipCard';

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);

  // Assuming you’re storing the favorite recipes in localStorage or some global state
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <div className="bg-[#faf9fb] p-10 flex-1">
      <div className="max-w-screen-lg mx-auto">
        <h1 className="font-bold text-3xl md:text-5xl mt-4">My Favorite Recipes</h1>
        {favorites.length === 0 ? (
          <p>No favorites added yet.</p>
        ) : (
          <div className="grid gap-3 grid-cols-1 md:grid-cols-3">
            {favorites.map((recipe, index) => (
              <RecipeCard key={index} recipe={recipe} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
