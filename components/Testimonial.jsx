"use client";
import React, { useState, useEffect } from "react";
import { testimonials } from "@/constants";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Move to the next testimonial
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Move to the previous testimonial
  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Autoplay functionality
  useEffect(() => {
    const autoplayInterval = setInterval(nextSlide, 5000); // Change the interval as needed

    // Clear the interval on component unmount
    return () => clearInterval(autoplayInterval);
  }, []);

  return (
    <div className="relative h-[450px] text-white">
      <div className="absolute z-0 bottom-40 left-48">
        <img src="/dots.png" alt="dots" />
      </div>
      <div className="absolute z-0 bottom-40 left-48">
        <img src="/dots.png" alt="dots" />
      </div>
      <div className="absolute z-0 bottom-40 left-48">
        <img src="/dots.png" alt="dots" />
      </div>
      <div className="absolute z-20 -top-5 right-64">
        <img src="/dots.png" alt="dots" />
      </div>
      <div className="">
        <div
          className="z-10 relative rounded-3xl flex flex-col justify-start items-center gap-10
         bg-gradient-radial from-sky-400 to-sky-600 p-8
         w-[60%] h-80 pt-10 mx-auto shadow-lg shadow-black"
        >
          <div className="flex flex-col items-center">
            <h2 className=" text-center text-2xl font-semibold mb-4">
              What Our Customers Are Saying
            </h2>
            <div className="border-b-2 border-white w-16 " />
          </div>
          <div className="flex items-center justify-center gap-5">
            <img
              src={testimonials[activeIndex].img}
              alt={testimonials[activeIndex].name}
              className="rounded-full border-2 h-20 w-20 "
            />
            <div className="">
              <h3 className="text-xl font-bold">
                {testimonials[activeIndex].name}
              </h3>
              <p className="text-sm">{testimonials[activeIndex].position}</p>
            </div>
            <p className="ml-6 w-80">“{testimonials[activeIndex].desc}”</p>
          </div>
        </div>
      </div>
      <div className="flex mt-8 items-center justify-center gap-10 text-3xl text-sky-500  cursor-pointer">
        <button onClick={prevSlide}>
          <FaArrowLeft />
        </button>
        <div className="flex gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-4 w-4 rounded-full ${
                index === activeIndex ? "bg-sky-500" : "bg-sky-200"
              }`}
            ></button>
          ))}
        </div>
        <button onClick={nextSlide}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Testimonial;

// // import swiper from react components
// import { Swiper, SwiperSlide } from "swiper/react";

// import Image from "next/image";
// // import swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// // import required modules
// import { Navigation, Pagination } from "swiper";
// export default function Testimonial() {
//   return (
//     <section className="p-32 h-screen">
//       <Swiper
//         navigation={true}
//         pagination={{ clickable: true }}
//         modules={[Navigation, Pagination]}
//         className="h-[400px]"
//       >
//         {testimon.map((person, index) => (
//           <SwiperSlide key={index} className="bg-sky-500">
//             <h2>What our customer are saying</h2>
//             <div className="mt-4 border border-white w-12"/>
//             <div className="flex items-center gap-5">
//                 <img src={person.img} alt="person" />
//                 <div>
//                     <h3>{person.name}</h3>
//                     <p>{person.position}</p>
//                 </div>
//                 <p>{person.desc}</p>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// }
