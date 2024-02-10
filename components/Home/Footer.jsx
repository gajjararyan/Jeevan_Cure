import React from "react";

export default function Footer() {
  return (
    <section
      className="relative text-white overflow-hidden h-80 bg-gradient-to-t px-32 py-20 gap-10
    flex items-start justify-between from-sky-700 via-sky-500 to-sky-400"
    >
      {/* Jeevan Care */}
      <div className="flex flex-col gap-5 justify-start w-[400px]">
        <div className="flex gap-2">
          <img src="/logo.png" alt="logo" className="h-8" />
          <h2 className="font-bold text-xl">Jeevan Cure</h2>
        </div>
        <p>
          Jeevan Cure provides progressive, and affordable healthcare,
          accessible on mobile and online for everyone
        </p>
        <p>&copy; Jeevan Cure PVT LTD 2023. All rights reserved</p>
      </div>

      {/* company */}
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-bold">Company</h2>
        <ul className="gap-y-6 space-y-2">
          <li>About</li>
          <li>Testimonials</li>
          <li>Find a doctor</li>
          <li>Apps</li>
        </ul>
      </div>

      {/* Region */}
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-bold">Region</h2>
        <ul className="gap-y-6 space-y-2">
          <li>Indonesia</li>
          <li>Singapore</li>
          <li>Hongkong</li>
          <li>Canada</li>
        </ul>
      </div>

      {/* Help */}
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-bold">Help</h2>
        <ul className="gap-y-6 space-y-2">
          <li>Help Center</li>
          <li>Contact Support</li>
          <li>Instructions</li>
          <li>How it works</li>
        </ul>
      </div>

      {/* dots */}
      <div className="absolute -bottom-11 left-2">
        <img src="/dots.png" alt="dots" />
      </div>
    </section>
  );
}
