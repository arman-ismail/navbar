import React from 'react';
import heroImage from 'https://i.pinimg.com/736x/ef/bf/53/efbf53b5eeb32251e42e256740e72a4b.jpg';

const Hero = () => {
  return (
    <div className="relative h-[600px]">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Agricultural field"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col justify-center h-full text-white">
          <h1 className="text-5xl font-bold mb-4">
            Connecting<br />Agricultural Minds
          </h1>
          <p className="text-xl mb-2">
            Join the world's largest network of agricultural<br />
            experts, farmers, and researchers
          </p>
          <p className="text-xl mb-8">
            Share knowledge, get advice, and grow together.
          </p>
          <button className="bg-yellow-400 text-black px-8 py-3 rounded-md text-lg font-semibold w-fit hover:bg-yellow-500">
            GET STARTED...
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;