import React, { useState } from 'react';
import Carousel from './Carousel';
import { posts } from '../assets/db/posts';

const Main = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleButtonNext = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex >= posts.length ? 0 : nextIndex;
    });
  };

  const handleButtonPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? posts.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div>
      <main className="bg-gray-200">
        <div className="container mx-auto min-h-screen py-10">
          <h1 className="mb-11 text-center text-2xl font-bold">My Carousel</h1>

          {/* Carousel */}
          <Carousel
            // key={i}
            title={posts[currentIndex].title}
            image={posts[currentIndex].image}
            content={posts[currentIndex].content}
          />

          {/* Buttons */}
          <div className="mt-4 flex justify-center gap-5">
            {/* Prev */}
            <button
              onClick={handleButtonPrev}
              className="rounded-md bg-blue-500 px-5 py-2 font-bold text-white duration-150 hover:bg-blue-800"
            >
              Indietro
            </button>

            {/* Next */}
            <button
              onClick={handleButtonNext}
              className="rounded-md bg-blue-500 px-5 py-2 font-bold text-white duration-150 hover:bg-blue-800"
            >
              Avanti
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
