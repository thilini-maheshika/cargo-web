import React, { useRef } from 'react';
import Header from './Header';
import BannerSection from './BannerSection';
import Container from './Container';
import LogisticSolution from './LogisticSolution';
import Stats from './Stats';
import Testimonial from './Testimonial';
import Brand from './Brand';
import News from './News';
import Footer from './Footer';

const HomePage = () => {
  const headerRef = useRef(null);

  return (
    <div className="w-full">
      <Header ref={headerRef}/>
      <BannerSection />
      <Container />
      <LogisticSolution />
      <Stats />
      <Testimonial />
      <Brand />
      <News />
      <Footer headerRef={headerRef} />
    </div>
  );
};

export default HomePage;
