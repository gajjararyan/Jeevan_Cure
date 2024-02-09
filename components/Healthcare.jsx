import Image from "next/image";
import React from "react";

export default function Healthcare() {
  return (
    <section
      className="relative h-screen flex justify-between items-center 
     gap-32"
    >
      <div>
        {/* img */}
        <Image
          src="/healthcare.png"
          height={800}
          width={800}
          alt="Healthcare Image"
          className=""
        />
      </div>
      {/* info */}
      <div className="flex flex-col items-start gap-8 w-[50%]">
        <h2 className="text-5xl font-bold">Leading Healthcare providers</h2>
        <div className="border-black border w-20" />
        <p className="text-lg">
          Jeevan Cure provides progressive, and affordable healthcare,
          accessible on mobile and online for everyone. To us, it's not just
          work. We take pride in the solutions we deliver
        </p>
        <button className="border-sky-500 border-2 text-sky-500
        px-6 py-2 font-bold rounded-full">
          Learn More
        </button>
      </div>
      <div className="absolute bottom-5 -right-20">
        <img src="/dots.png" alt="dots" />
      </div>
    </section>
  );
}
