import React from 'react';
import { FaFacebookF, FaTwitter, FaBehance, FaYoutube, FaArrowUp, FaAngleRight } from 'react-icons/fa';
import service1 from '../assets/img/cs1.png';
import service2 from '../assets/img/cs2.png';
import service3 from '../assets/img/cs3.png';
import service4 from '../assets/img/cs4.png';
import service5 from '../assets/img/cs5.png';
import service6 from '../assets/img/cs6.png';

const Footer = ({ headerRef }) => {
  const handleScrollToTop = () => {
    if (headerRef && headerRef.current) {
      headerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='py-4'>
      <div className="pt-8 pb-8 mx-3 text-white bg-gray-800">
        <div className="px-8 mx-auto">
          <div className="flex flex-col items-center justify-between mb-16 md:flex-row">
            <div className="text-center md:text-left">
              <h2 className="mb-2 text-3xl font-bold">Weekly Newsletter</h2>
              <p>There are many variations of passages of lorem ipsum available</p>
            </div>
            <div className="flex items-center gap-4 mt-4 md:mt-0 xs:flex-col md:flex-row ">
              <input
                type="text"
                placeholder="Enter Your Mail"
                className="p-4 text-black rounded-lg focus:outline-none"
              />
              <button className="px-6 py-4 text-white bg-yellow-500 rounded-lg xs:w-full">SUBSCRIBE</button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="mb-16 text-xl font-semibold about-us-header">About Us</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              <div className="p-2 mt-4" style={{ backgroundColor: '#7b79794d' }}>
                <p className="mb-2"><i className="mr-2 fa fa-phone"></i> (+94) 11 436 7575</p>
                <p><i className="mr-2 fa fa-map-marker-alt"></i> 42 Lily Ave, Colombo 00600</p>
              </div>
            </div>
            <div>
              <h3 className="mb-16 text-xl font-semibold">Latest News</h3>
              <ul>
                <li className="flex items-center mb-2">
                  <FaAngleRight className="mr-2 text-yellow-500" />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                </li>
                <li className="flex items-center">
                  <FaAngleRight className="mr-2 text-yellow-500" />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-16 text-xl font-semibold">Customer Service</h3>
              <ul>
                <li className="mb-2">Support Forums</li>
                <li className="mb-2">Communication</li>
                <li className="mb-2">FAQs</li>
                <li className="mb-2">Privacy Policy</li>
                <li className="mb-2">Rules & Condition</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-16 text-xl font-semibold">Customer Service</h3>
              <div className="grid grid-cols-3 gap-2">
                <img src={service1} alt="Service 1" className="w-full h-auto" />
                <img src={service2} alt="Service 2" className="w-full h-auto" />
                <img src={service3} alt="Service 3" className="w-full h-auto" />
                <img src={service4} alt="Service 4" className="w-full h-auto" />
                <img src={service5} alt="Service 1" className="w-full h-auto" />
                <img src={service6} alt="Service 3" className="w-full h-auto" />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-around mx-8 mt-8 md:flex-row">
            <p className="text-sm">Copyright © 2023 All Rights Reserved. Site by DewSoft</p>
            <div className="flex mt-4 space-x-4 md:mt-0">
              <FaFacebookF />
              <FaTwitter />
              <FaBehance />
              <FaYoutube />
            </div>
          </div>
        </div>
        <div className="fixed bottom-4 right-20">
          <button className="w-12 p-3 text-white bg-yellow-500 h-sm-height " onClick={handleScrollToTop}>
            <FaArrowUp />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
