import { services } from "@/constants";
import React from "react";

export default function Services() {
  return (
    <section
      className="min-h-screen text-black flex flex-col justify-start 
    items-center gap-10"
    >
      <h1 className="text-5xl font-bold">Our Services</h1>
      <div className="border-b-2 border-black w-20 "></div>
      <p className="text-center text-lg text-gray-500 w-[78%]">
        We provide to you the best choices for you. Adjust it to your health
        needs and make sure your undergo treatment with our highly qualified
        doctors you can consult with us which type of service is suitable for
        your health.
      </p>
      <div
        className="flex flex-wrap items-center justify-center 
       m-4 gap-x-8 gap-y-4"
      >
        {services.map((items, index) => (
          <div
            key={index}
            className="flex flex-col 
                items-start w-80 h-80 gap-3 shadow-md 
                justify-center rounded-xl p-8"
          >
            <img src={items.img} alt="" className="h-24" />
            <h3 className="text-xl pt-4 font-bold">{items.title}</h3>
            <p className="text-gray-500">{items.desc}</p>
          </div>
        ))}
      </div>
      <div>
        <button
          className="border-sky-500 border-2 
        rounded-full px-6 py-2 text-sky-500 font-bold"
        >
          Learn More
        </button>
      </div>
    </section>
  );
}
