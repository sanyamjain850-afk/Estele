import { useState } from "react";

export default function AboutUs() {
  return (
    <div id="about" className="bg-gradient-to-br from-purple-950 to-rose-900 text-white text-center px-6 py-14">
      <h2 className=" italic font-serif text-2xl sm:text-3xl ">About Us</h2>
      <p className="mt-4 text-sm sm:text-base text-white/80 max-w-md mx-auto leading-relaxed">
        Estele was born from a love of clean, honest beauty. We source
        premium ingredients and craft every product with care, so you get
        real results without compromise. This is more than skincare — it's
        a ritual worth showing up for, every day.
      </p>
    </div>
  );
}