import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/brand.css';

import brand1 from '../assets/img/brands_1 1.png';
import brand2 from '../assets/img/brands_7 1.png';
import brand3 from '../assets/img/brand 3.png';
import brand4 from '../assets/img/brand 4.png';
import brand5 from '../assets/img/brand 5.png';

const brands = [
    { id: 1, src: brand1, alt: 'Brand 1' },
    { id: 2, src: brand2, alt: 'Brand 2' },
    { id: 3, src: brand3, alt: 'Brand 3' },
    { id: 4, src: brand4, alt: 'Brand 4' },
    { id: 5, src: brand5, alt: 'Brand 5' },
];

const Brand = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
    };

    return (
        <div className="flex items-center h-auto bg-white">
            <div className="container py-8 mx-auto xs:w-full">
                <div className="p-6 bg-white border rounded-lg shadow-lg" style={{ border: '#e3e5e9'}}>
                    <Slider {...settings}>
                        {brands.map((brand) => (
                            <div key={brand.id} className="flex items-center justify-center h-24">
                                <img src={brand.src} alt={brand.alt} className="max-h-16" />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Brand;
