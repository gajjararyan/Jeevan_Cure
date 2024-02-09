import Image from "next/image";
import React from "react";
import { FaArrowDownLong } from "react-icons/fa6";


export default function Mobile() {
  return (
    <section
      className="relative h-screen flex justify-between items-center 
     gap-32"
    >
      {/* info */}
      <div className="flex flex-col items-start gap-8 w-[45%]">
        <h2 className="text-5xl font-bold">Download our mobile apps</h2>
        <div className="border-black border w-20" />
        <p className="text-lg">
          Our dedicated patient engagement app and web portal allow you to
          access ifnormation instantaneously (no tedeous form, long calls, or
          administrative hassle) and securely
        </p>
        <button
          className="border-sky-500 border-2 text-sky-500
        px-6 py-2 font-bold rounded-full flex gap-2 items-center"
        >
          Download <FaArrowDownLong/>
        </button>
      </div>
      <div className="absolute top-0 -right-20">
        <img src="/dots.png" alt="dots" />
      </div>
      <div>
        {/* img */}
        <Image
          src="/mobile.png"
          height={800}
          width={800}
          alt="Healthcare Image"
          className=""
        />
      </div>
    </section>
  );
}
