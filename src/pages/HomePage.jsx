import React, { useEffect, useState } from 'react';
import { Search } from 'lucide-react';
import RecipeCard from '../components/ReceipCard';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRecipes = async (searchQuery) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setRecipes(data.meals || []); // changed from data.hits to data.meals
    } catch (error) {
      console.error("Failed to fetch recipes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes("chicken");
  }, []);

  return (
    <div className="bg-[#faf9fb] p-10 flex-1">
      <div className="max-w-screen-lg mx-auto">
        <form>
          <label className="input shadow-md flex items-center gap-2">
            <Search size={24} />
            <input 
              type="text" 
              className="text-sm md:text-md grow" 
              placeholder="WHAT DO YOU WANT TO COOK?" 
            />
          </label>
        </form>

        <h1 className="font-bold text-3xl md:text-5xl mt-4">Recommended Recipes</h1>
        <p className="text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight">Popular Choices</p>

        {loading ? (
          <p className="text-center mt-10 text-slate-500">Loading recipes...</p>
        ) : (
          <div className="grid gap-3 grid-cols-1 md:grid-cols-3">
            {recipes.map((meal, index) => (
              <RecipeCard key={index} recipe={meal} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
