import React from 'react';

const Hero = () => {
  return (
    <div className="bg-blue-500 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Bridging Languages, Equipping the Global Church</h1>
        <p className="text-xl mb-8">Empowering communities to grow and mature in Christ through their heart language</p>
        <a href="#mission" className="bg-white text-blue-500 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300">Our Vision</a>
      </div>
    </div>
  );
};

export default Hero;