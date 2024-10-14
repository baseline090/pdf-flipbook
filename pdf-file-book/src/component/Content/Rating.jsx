import React, { useState, useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    rating: 1,
    text: " After trying around 5 other plugins, Real 3D Flipbook stands out as the best one for many reasons. Among them: the quality of the plugin design, the variety of options available, and above all, the wonderful technical support from the developer, who helped me a lot to achieve the best results for my website.",
    author: "Michael Gough",
  },
  {
    rating: 2,
    text: "Excellent performance and great customer support. Highly recommended! Easy to use – and it’s looking absolutely fascinating ... Well done – good job!",
    author: "TechWorld",
  },
  {
    rating: 3,
    text: " This really is an amazing plugin. But the best thing about it is that the author continues to improve it, support it and generally make it better and better and better. Thank you! ",
    author: "anneboleynfiles",
  },
];

const RatingSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="px-4 py-5 md:py-24 bg-[#3b393a]  ">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* ----------- Left Side: Company Info --------- */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            33,000+ Happy
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold text-white ">
            Customers
          </h1>
        </div>

     {/* ------- Right Section - Testimonials Slider --------- */}
        <div className="w-full md:w-1/2 flex flex-col items-center self-start">
          <div className="relative w-full">
            <div className="bg-white rounded-lg shadow-lg p-6 transform transition duration-300 hover:shadow-2xl ">
              <div className="text-[44px] text-[gray] mb-2">
                <FaQuoteLeft />
              </div>
              <div className="text-yellow-400 mb-2 text-[24px]">
                {"★".repeat(testimonials[currentIndex].rating)}
              </div>
              <p className="text-lg italic mb-2 ">
                "{testimonials[currentIndex].text}"
              </p>
              <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <div className="pr-3 font-medium text-gray-900 dark:text-black">
                  <h1 className="text-[20px] text-gray-900 ">
                    - {testimonials[currentIndex].author}
                  </h1>
                </div>
                <div className="pl-3 text-sm font-light text-gray-600 dark:text-gray-400">
                  CEO at Google
                </div>
              </div>
            </div>

           {/* ---------- Dots for indicator -------- */}
            <div className="flex justify-center mt-4">
              {testimonials.map((_, idx) => (
                <div
                  key={idx}
                  onClick={() => setCurrentIndex(idx)} 
                  className={`h-2 w-2 mx-1 rounded-full cursor-pointer transition-all duration-300 ${
                    idx === currentIndex ? "bg-green-400" : "bg-white"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="md:pt-20 bg-[#3b393a] flex justify-center items-center">
          <p className="text-[#d5d5d5]">
            ©2023 creativeinteractivemedia All Rights Reserved
          </p>
        </div>
    </section>
  );
};

export default RatingSection;
