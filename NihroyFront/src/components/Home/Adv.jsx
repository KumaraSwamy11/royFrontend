import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

//Import your Imgages

import image1 from "../../imgAdv/Adv1.jpeg";
import image2 from "../../imgAdv/Adv2.jpeg";
import image3 from "../../imgAdv/Adv3.jpeg";

export default function Adv() {
  const slides = [
    { image: image1, details: "Spacisus 3Bhk in a Prime Location" },
    { image: image2, details: "Luxury villa with private pool and gardeen" },
    { image: image3, details: "Affordable apartments near the city center" },
  ];

  const [curr, setCurr] = useState(0);

  const prev = () => setCurr(curr === 0 ? slides.length - 1 : curr - 1);
  const next = () => setCurr(curr === slides.length - 1 ? 0 : curr + 1);

  useEffect(() => {
    const autoSlideInterval = 3000;
    const autoSlide = true;

    if (!autoSlide) return;
    const interval = setInterval(next, autoSlideInterval);
    return () => clearInterval(interval);
  }, [curr]);

  return (
    <div className="relative w-full max-w-5xl mx-auto bg-gray-50 rounded-lg shadow-lg overflow-hidden mt-4">
      {/* Main Carousel */}
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full flex flex-col md:flex-row items-center gap-6 p-6"
          >
            {/*Image Section */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="rounded-lg shadow-lg object-cover max-h-64"
              />
            </div>
            {/* Text Section */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl font-semibold text-gray-800">
                Property Details
              </h3>
              <p className="mt-4 text-gray-600">{slide.details}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Button*/}
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-2 bg-white/80 rounded-full shadow hover:bg-white text=gray-800"
        >
          <ChevronLeft size={30} />
        </button>
        <button
          onClick={next}
          className="p-2 bg-white/80 rounded-full shadow hover:bg-white text-gray-800"
        >
          <ChevronRight size={30} />
        </button>
      </div>
      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 ">
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`transition-all w-3 h-3 bg-gray-500 rounded-full ${
                curr === i ? "p-2" : "bg-opacity-20"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
