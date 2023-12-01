import React from 'react';

const Carousel = (props) => {
  const { title, image, content } = props;
  return (
    <div>
      <div className="mx-auto h-[720px] w-3/4 rounded-lg border-4 border-gray-400 bg-red-200">
        <div className="h-4/6 w-full bg-green-300">
          <img className="h-full w-full" src={image} alt={title} />
        </div>
        <div className="h-2/6 p-5">
          <h2 className="mb-5 text-3xl font-bold">{title}</h2>
          <h2 className="text-xl italic">{content}</h2>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
