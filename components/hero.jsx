import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="h-[85vh]  text-black flex justify-between items-center">
      {/* dots png */}
      <div className="absolute top-24 left-0">
        <img src="/dots.png" alt="dots" />
      </div>
      <div className="absolute top-24 left-0">
        <img src="/dots.png" alt="dots" />
      </div>
      {/* heading */}
      <div className="w-[550px] flex flex-col gap-5">
        <h1 className="text-5xl font-bold tracking-widest" data-aos="fade-up">
          Connecting you to nearby meical help in emergencies.
        </h1>
        <p className="text-xl tracking-[2px]">
          Jeevan Cure provides progressive and affordale healthcare, accessible
          on mobile and online for everyone.
        </p>
        <div className="py-10">
          <button
            className="bg-blue-500 text-white rounded-full 
          px-6 py-3 text-xl font-semibold"
          >
            Consult today
          </button>
        </div>
      </div>
      {/* Image */}
      <div className="w-">
        <Image
          src="/hero.png"
          alt="hero image"
          height={400}
          width={400}
          className="h-[500px] w-[650px]"
        />
      </div>
    </div>
  );
}
