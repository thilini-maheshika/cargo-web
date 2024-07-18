import React, { useState , useEffect } from 'react';
import shippingImage1 from '../assets/img/cargo3.jpg';
import shippingImage2 from '../assets/img/cargo1.jpg'; 
import shippingImage3 from '../assets/img/cargo2.jpg';

const images = [shippingImage1, shippingImage2, shippingImage3]; 

const BannerSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); 

    return () => clearInterval(interval); 
  }, []);


  return (
    <section id='home' className="relative bg-white lg:py-4 xs:py-12">
      <div className="container relative flex flex-col items-center justify-end mx-auto lg:flex-row xs:flex-col-reverse">
        <div className="absolute left-0 z-10 w-full bg-white lg:h-3/4 lg:p-8 xs:p-4 xs:w-full xs:h-auto xl:w-1/2 lg:ml-16 xxl:ml-12 lg:mr-8">
          <div className='mr-4 sm:text-center lg:text-left'>
            <h4 className="mb-2 tracking-wider text-yellow-500 uppercase">Logistic</h4>
            <h1 className="mb-4 font-bold lg:text-4xl xs:text-3xl lg:leading-tight xs:leading-relaxed">
              Best Shipping <br /> <span className="text-yellow-500">Partner</span>
            </h1>
            <p className="mb-8 text-gray-600">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
            </p>
            <button className="px-6 py-3 font-semibold text-white bg-yellow-500 hover:bg-yellow-600">
              DISCOVER HERE
            </button>
          </div>
        </div>
        <div className="absolute z-10 items-center p-6 space-x-4 text-white bg-yellow-500 rounded md:flex sm:hidden bottom-4 left-4 xxl:p-3">
          <span>{currentIndex + 1} / {images.length}</span>
          <button onClick={prevSlide} className="px-2 py-1 font-semibold text-black bg-white rounded hover:bg-gray-200">
            &lt;
          </button>
          <button onClick={nextSlide} className="px-2 py-1 font-semibold text-black bg-white rounded hover:bg-gray-200">
            &gt;
          </button>
        </div>
        <div className="relative w-full lg:w-1/2">
          <img src={images[currentIndex]} alt="Shipping" className="object-cover w-full h-96" />
        </div>
      </div>
    </section>
  );
}

export default BannerSection;
