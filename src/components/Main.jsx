import React, { useState, useEffect } from 'react';
import Carousel from './Carousel';
import { posts } from '../assets/db/posts';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Main = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideInterval, setSlideInterval] = useState(null);

  // Controllo su next
  const handleButtonNext = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex >= posts.length ? 0 : nextIndex;
    });
    clearInterval(slideInterval);
  };

  // Controllo su prev
  const handleButtonPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? posts.length - 1 : prevIndex - 1,
    );
    clearInterval(slideInterval);
  };

  // Controllo su frecce
  const handleKeyboard = (e) => {
    if (e.key === 'ArrowRight') {
      handleButtonNext();
    } else if (e.key === 'ArrowLeft') {
      handleButtonPrev();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyboard);
    return () => {
      document.removeEventListener('keyup', handleKeyboard);
    };
  }, []);

  // Autoplayer
  useEffect(() => {
    const postId = setInterval(() => {
      handleButtonNext();
    }, 3000);

    setSlideInterval(postId);

    return () => {
      clearInterval(postId);
    };
  }, [currentIndex]);

  // Slider Icons
  const handleSliderIcons = (index) => {
    setCurrentIndex(index);
  };

  const sliderIcons = posts.map((post, index) => (
    <button
      key={index}
      onClick={() => handleSliderIcons(index)}
      className={`h-3 w-9 rounded ${
        index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
      } mx-1`}
    ></button>
  ));

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

          {/* Slider */}
          <div className="mt-4 flex justify-center gap-1">{sliderIcons}</div>

          {/* Buttons */}
          <div className="mt-4 flex justify-center gap-5">
            {/* Prev */}
            <button
              onClick={handleButtonPrev}
              className="rounded-md bg-blue-500 px-5 py-2 font-bold text-white duration-150 hover:bg-blue-800"
            >
              <ArrowBackIcon className="hover:scale-125" />
            </button>

            {/* Next */}
            <button
              onClick={handleButtonNext}
              className="rounded-md bg-blue-500 px-5 py-2 font-bold text-white duration-150 hover:bg-blue-800"
            >
              <ArrowForwardIcon className="hover:scale-125" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
