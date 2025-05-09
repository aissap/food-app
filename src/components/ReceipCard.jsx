import React from 'react';
import { Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();

  if (!recipe) {
    return null; // Return nothing if recipe is undefined or null
  }

  const handleClick = () => {
    // Navigate to the recipe details page
    navigate(`/recipe/${recipe.idMeal}`);
  };

  return (
    <div className="flex flex-col rounded-md bg-[#ecf7d4] overflow-hidden p-3 relative" onClick={handleClick}>
      <div className="relative h-32">
        {recipe.strMealThumb ? (
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="rounded-md w-full h-full object-cover cursor-pointer"
          />
        ) : (
          <div className="w-full h-full bg-gray-300 flex items-center justify-center">No Image</div> // Placeholder if no image
        )}
        <div className="absolute top-1 right-2 bg-white rounded-full p-1">
          <Heart size={20} className="hover:fill-red-500 hover:text-red-500" />
        </div>
      </div>

      <div className="flex mt-2">
        <p className="font-bold tracking-wide">{recipe.strMeal}</p>
      </div>
      <p className="my-2">{recipe.strArea}</p>

      <div className="flex gap-2 mt-auto">
        <div className="flex gap-1 bg-[#d6f497] items-center p-1 rounded-md">
          <span className="text-sm tracking-tighter font-semibold">Gluten-free</span>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
