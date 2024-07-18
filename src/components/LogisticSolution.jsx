import React, { useState, useEffect } from 'react';
import shipImage from '../assets/img/ship.png';
import airImage from '../assets/img/plane.png';
import shipImage2 from '../assets/img/ship2.png';
import airImage2 from '../assets/img/plane2.png';

const slides = [
  {
    image: shipImage,
    title: 'Ship Services',
    description: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.',
  },
  {
    image: airImage,
    title: 'Air Flight Services',
    description: 'Lorem Ipsum as their default model text, and a search for "lorem ipsum" will uncover many websites.',
  },
  {
    image: shipImage2,
    title: 'Ship Services',
    description: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.',
  },
  {
    image: airImage2,
    title: 'Air Flight Services',
    description: 'Lorem Ipsum as their default model text, and a search for "lorem ipsum" will uncover many websites.',
  },
];

const LogisticSolution = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 2 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); 

    return () => clearInterval(interval); 
  }, []);

  const renderSlides = () => {
    const firstSlide = slides[currentIndex];
    const secondSlide = slides[(currentIndex + 1) % slides.length];
    return [firstSlide, secondSlide];
  };

  const renderedSlides = renderSlides();

  return (
    <div id='services' className="p-8 bg-white">
      <div className="text-center">
        <p className="text-yellow-500">Real Solution, Real Fast</p>
        <h1 className="mt-2 mb-8 font-bold lg:text-4xl xs:text-3xl">Best Global Logistics Solutions</h1>
      </div>
      <div className="flex justify-center lg:space-x-8 xs:flex-col md:flex-row">
        {renderedSlides.map((slide, index) => (
          <div key={index} className="lg:p-4 xs:p-0 lg:w-full md:w-1/2 xs:flex xs:flex-col md:flex-row xs:items-center xs:my-4 md:my-0">
            <div className="overflow-hidden md:w-full">
              <img src={slide.image} alt={slide.title} className="object-cover w-64 h-48" />
            </div>
            <div className="flex flex-col p-6 bg-white shadow-lg md:h-custom-full lg:w-full lg:justify-evenly xs:text-center xs:items-center ">
              <h2 className="mb-2 text-xl font-bold">{slide.title}</h2>
              <p className="mb-4 text-gray-700">{slide.description}</p>
              <a href="#" className="flex items-center font-semibold text-black">
                <span className="mr-2">Read More</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M12.293 9.293a1 1 0 011.414 1.414L10.414 14H17a1 1 0 110 2H7a1 1 0 01-1-1v-2a1 1 0 112 0v1.586l3.293-3.293a1 1 0 010-1.414l4.293-4.293z" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: Math.ceil(slides.length / 2) }).map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${currentIndex / 2 === index ? 'bg-yellow-500' : 'bg-gray-300'}`}
            onClick={() => setCurrentIndex(index * 2)}
          />
        ))}
      </div>
      <div className="mt-4 ml-4 text-left">
        <p className="text-sm text-gray-700">Logistic & Transport Solutions Saves Your Time - <a href="#" className="font-bold text-black">Find Your Solution</a></p>
      </div>
    </div>
  );
};

export default LogisticSolution;

