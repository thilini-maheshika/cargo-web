import React, { useState, useEffect } from 'react';
import shape1 from '../assets/img/Rectangle 49.png';

const testimonials = [
  {
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    name: "John Doe",
    title: "Managing Director"
  },
  {
    text: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
    name: "Samueal Johnson",
    title: "CEO"
  },
  {
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
    name: "Mark Peter",
    title: "Managing Director"
  },
];

const Testimonial = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentTestimonialIndex];

  return (
    <div className="flex flex-col items-center justify-center bg-white lg:p-8 lg:my-8 sm:p-4 lg:h-screen md:flex-row">
      <div className="flex justify-between xs:flex-col md:flex-row">
        <div className="pr-4 md:w-1/2 xs:w-full">
          <h2 className="mb-4 text-2xl font-bold uppercase xs:text-center md:text-start">Trusted Clients</h2>
          <p className="mb-6 font-medium text-gray-600 uppercase xs:text-center md:text-start">Lorem ipsum dolor sit amet consectetur</p>
          <div className="p-6 rounded-lg shadow-lg" style={{ backgroundColor: '#F2F1F1' }}>
            <div className="flex items-center">
              <div className="overflow-hidden md:relative md:w-full lg:-ml-12 xs:absolute xs:-ml-9">
                <img src={shape1} alt="testimonial" className="object-cover md:w-12 md:h-12 xs:w-8 xs:h-8" />
              </div>
              <div className="absolute mr-4 text-4xl text-white lg:-ml-9 xs:-ml-8">“</div>
              <p className="text-gray-700">
                {currentTestimonial.text}
              </p>
            </div>
          </div>
          <div className="mt-6 text-right">
            <p className="font-semibold text-gray-800">{currentTestimonial.name}</p>
            <p className="text-gray-600">{currentTestimonial.title}</p>
          </div>
          <div className="flex justify-start mt-4">
            <button
              className="p-2 mx-1 bg-white shadow-lg"
              onClick={() => setCurrentTestimonialIndex((currentTestimonialIndex - 1 + testimonials.length) % testimonials.length)}
            >
              &lt;
            </button>
            <button
              className="p-2 mx-1 bg-white shadow-lg"
              onClick={() => setCurrentTestimonialIndex((currentTestimonialIndex + 1) % testimonials.length)}
            >
              &gt;
            </button>
          </div>
        </div>

        <div className="md:w-1/2 md:pl-4 xs:w-full xs:my-4 md:my-0">
          <h2 className="mb-4 text-2xl font-bold uppercase xs:text-center md:text-start">Why Choose Us</h2>
          <p className="mb-6 font-medium text-gray-600 uppercase xs:text-center md:text-start">Lorem ipsum dolor sit amet consectetur</p>
          <div className="space-y-4">
            {Array(4).fill('').map((_, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-lg">
                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                <button className="p-2 text-white bg-black shadow">+</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
