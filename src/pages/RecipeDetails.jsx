import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetails = () => {
  const { id } = useParams(); // Retrieve the recipe id from the URL
  const [recipe, setRecipe] = useState(null);

  // Fetch recipe details based on the id
  useEffect(() => {
    const fetchRecipeById = async () => {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await response.json();
      setRecipe(data.meals?.[0]); // Set the first meal in the response
    };

    fetchRecipeById();
  }, [id]);

  // Loading state while the data is being fetched
  if (!recipe) {
    return <p className="text-center mt-10">Loading recipe...</p>;
  }

  return (
    <div className="p-10 max-w-screen-md mx-auto">
      {/* Recipe Image */}
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full rounded-lg mb-4" />
      <h1 className="text-4xl font-bold mb-2">{recipe.strMeal}</h1>
      <p className="text-slate-500 mb-4 italic">{recipe.strArea} | {recipe.strCategory}</p>
      <p className="mb-6">{recipe.strInstructions}</p>

      <h2 className="text-xl font-semibold mb-2">Ingredients:</h2>
      <ul className="list-disc list-inside">
        {Array.from({ length: 20 }, (_, i) => i + 1).map(i => {
          const ingredient = recipe[`strIngredient${i}`];
          const measure = recipe[`strMeasure${i}`];
          return (
            ingredient && (
              <li key={i}>
                {ingredient} - {measure}
              </li>
            )
          );
        })}
      </ul>
    </div>
  );
};

export default RecipeDetails;
