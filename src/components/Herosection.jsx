import React from "react";

export default function Herosection() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:gap-10 gap-6 mt-20">
      <div className="text-center md:text-left">
        <h1 className="text-[38px] font-bold">
          Hi, I am William,
          <br /> Frontend Developer
        </h1>
        <p className="mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A ut nulla
          odio repellendus voluptatum <br />
          harum excepturi inventore quod omnis, eos, sapiente quia!oudbdjc Lorem
          ipsum dolor sit amet <br />
          consectetur adipisicing elit.
        </p>
        <button className="bg-red-500 p-2 mt-6 text-sm text-white hover:bg-red-600">
          Download Resume
        </button>
      </div>
      <div>
        <img
          src="/public/images/og.png"
          alt="my photo"
          className="w-40 h-40 sm:w-60 sm:h-60 rounded-full object-cover"
        />
      </div>
    </div>
  );
}
