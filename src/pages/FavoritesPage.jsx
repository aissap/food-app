// src/pages/FavoritesPage.jsx
import { Receipt } from 'lucide-react';
import React from 'react';
import ReceipCard from '../components/ReceipCard'; // Fixed import path

const FavoritesPage = () => {
  const fav = true;
  return (
    <div className='bg-[#faf9fb]'>
      <div className='max-w-screen-lg mx-auto'>
        <p className='font-bold text-3xl md:text-5xl my-4'>My Favorites</p>

        {!fav && (
          <div className='h-[80vh] flex flex-col items-center gap-4'>
            <img src="/404.svg" alt="No favorites found" className='h-3/4' />
          </div>
        )}

        {fav && (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <ReceipCard />
            <ReceipCard />
            <ReceipCard />
            <ReceipCard />
            <ReceipCard />
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
