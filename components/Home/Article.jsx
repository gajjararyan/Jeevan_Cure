import { postdata } from "@/constants";
import Image from "next/image";
import React from "react";

export default function Article() {
  return (
    <section className="min-h-screen relative pt-10 flex flex-col items-center gap-8">
      <div className="absolute z-0 top-24 left-24">
        <img src="/dots.png" alt="dots" />
      </div>
      <div className="absolute z-0 top-24 left-24">
        <img src="/dots.png" alt="dots" />
      </div>
      <div className="absolute z-0 top-24 left-24">
        <img src="/dots.png" alt="dots" />
      </div>
      <div className="absolute z-0 -bottom-5 right-0 rotate-90">
        <img src="/dots.png" alt="dots" />
      </div>
      <div className="absolute z-0 -bottom-5 right-0 rotate-90">
        <img src="/dots.png" alt="dots" />
      </div>
      <div className="absolute z-0 -bottom-5 right-0 rotate-90">
        <img src="/dots.png" alt="dots" />
      </div>
      <h2 className="text-5xl font-bold">Check out our latest article</h2>
      <div className="border border-black w-20" />
      <div className="z-10 flex flex-wrap items-center gap-8">
        {postdata.map((post, index) => (
          <div
            key={index}
            className="flex flex-col items-start justify-start 
            w-80 h-[360px] rounded-3xl shadow-black shadow-lg overflow-hidden"
          >
            <Image
              src={post.img}
              height={164}
              width={392}
              className="h-40 w-full object-cover"
            />
            <div className="px-3 flex flex-col gap-4">
              <h3 className="font-bold text-lg mt-4">{post.title}</h3>
              <p>{post.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="border my-5 border-sky-500 text-sky-500 px-8 py-2 rounded-full font-bold">
        View all
      </button>
    </section>
  );
}
