import React, { useState, forwardRef } from 'react';
import Logo from '../assets/img/logo.png';
import { Link } from "react-scroll";

const Header = forwardRef((props, ref) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div ref={ref}>
      <header className="py-4 bg-white">
        <div className="container flex items-center justify-between px-4 mx-auto">
          <div className="flex items-center space-x-4">
            <img src={Logo} alt="Logo" className="h-16 lg:w-3/4 xs:w-7/12" />
          </div>
          <div className="lg:hidden">
            <button onClick={toggleMenu} data-collapse-toggle="navbar-hamburger" type="button" className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false">
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <nav id='navbar-hamburger' className={`flex-col items-center space-y-4 lg:space-y-0 lg:space-x-8 lg:flex lg:flex-row ${isMenuOpen ? 'flex sm:absolute lg:relative top-20 items-center z-20 bg-slate-300 p-4 right-8' : 'sm:hidden xs:w-full md:w-auto'}`}>
            {['home', 'pages', 'values', 'services', 'blogs'].map((section, index) => (
              <div key={index} className="relative group">
                <button className="flex items-center space-x-1 text-black hover:text-yellow-600 focus:outline-none">
                  <span className='font-medium'>
                    <Link
                      activeClass="active"
                      to={section}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="desktopMenuListItem"
                    >
                      {section.toUpperCase()}
                    </Link>
                  </span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5.5 7L10 11.5 14.5 7H5.5z" />
                  </svg>
                </button>
                <div className="absolute z-30 hidden bg-white rounded-md shadow-md group-hover:block">
                  <a href="#" className="block px-4 py-2 text-black">Submenu</a>
                </div>
              </div>
            ))}
            <a href="#" className="px-4 py-4 text-white bg-yellow-500 hover:bg-yellow-600">GET A QUOTE</a>
            <a href="#" className="px-4 py-4 text-white bg-black hover:bg-gray-800">SIGN IN</a>
          </nav>
        </div>
      </header>
    </div>
  );
});

export default Header;
