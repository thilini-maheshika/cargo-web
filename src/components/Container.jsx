import React from 'react';
import logisticsImage from '../assets/img/1.png';
import logisticsImage2 from '../assets/img/logistic2.jpg';
import shape1 from '../assets/img/Group 26.png';

const Container = () => {
  return (
    <div id='pages' className="flex flex-col items-center justify-center p-8 bg-white lg:h-screen md:flex-row">
      <div className='flex sm:flex-col md:flex-row'>
      <div className="flex flex-col md:items-center lg:items-baseline md:w-1/2 md:flex-row xs:items-start">
        <div className="relative md:absolute lg:z-10 md:mt-28 sm:hidden lg:flex">
          <img src={logisticsImage} alt="Worker" className="h-auto md:w-8/12"/>
        </div>
        <div className="relative flex-1 mt-8 md:mt-0">
          <img src={logisticsImage2} alt="Logistics" className="h-auto md:w-full lg:w-4/5 md:ml-0 lg:ml-12"/>
          <div className="absolute top-0 left-0 flex flex-col items-center justify-center h-32 p-4 bg-transparent lg:w-48 lg:ml-80 lg:mt-40 md:top-24 md:left-24 xs:mt-6">
            <img src={shape1} alt="shape" className="absolute w-full h-full"/>
            <div className="relative z-10 text-center lg:ml-8">
              <p className="text-2xl font-bold text-white">15,350+</p>
              <p className="text-white sm:ml-8 lg:ml-0">Clients Worldwide</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 md:w-1/2 md:mt-0 md:ml-8 xs:items-center xs:flex xs:flex-col lg:items-start lg:block ">
        <h1 className="font-bold text-gray-800 lg:text-4xl xs:text-3xl xs:text-center lg:text-start">TransMax Logistics<br />Around <span className="text-orange-500">the world</span></h1>
        <p className="mt-4 text-gray-600">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
          <br /><br />
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
        </p>
        <button className="px-6 py-2 mt-4 text-green-900 rounded bg-slate-100">MORE ABOUT US</button>
      </div>
      </div>
    </div>
  );
};

export default Container;
