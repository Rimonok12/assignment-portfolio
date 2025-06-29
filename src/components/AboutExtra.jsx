'use client';

import React from 'react';
import { FiArrowDown } from 'react-icons/fi';

const AboutExtra = () => {
  return (
    <section className="relative min-h-screen w-full bg-[url('/22.png')] text-black font-sans p-8 overflow-hidden">
      {/* Headline and Subtext Section */}

      <div className="relative mt-40 text-center max-w-5xl mx-auto z-10">
        {/* Headline */}
        <div className="absolute right-6 transform -translate-y-1/2 m-[auto] flex items-center">
          <FiArrowDown className="h-[44px] w-[44px] p-2 border-2 border-black rounded-full cursor-pointer" />
          <button className="h-[44px] px-5 border-2 border-black rounded-full text-base font-medium hover:bg-black hover:text-white transition">
            About
          </button>
        </div>
        <h1 className="text-6xl sm:text-7xl gap-3  p-8 font-extrabold leading-snug">
          I’ve been{' '}
          <span className="bg-black text-white px-4 py-2 rounded-lg">
            Developing
          </span>
          <br />
          Websites since{' '}
          <span className="bg-black text-white px-4 py-1 rounded-lg">2013</span>
        </h1>

        {/* Subtext */}
        <p className="mt-8 text-lg max-w-2xl mx-auto text-center text-black">
          We start every new client interaction with an in-depth discovery call
          where we get to know each other and recommend the best course of
          action.
        </p>
      </div>

      {/* Previously Worked On Logos */}
      <div className="mt-24 px-4">
        <h2 className="text-left font-bold text-lg mb-4">
          PREVIOUSLY <br /> WORKED ON
        </h2>
        <div className="flex flex-wrap gap-4 items-center">
          {[
            { name: 'awwwards.', rotate: true },
            { name: 'facebook' },
            { name: 'CSSDesignAwards' },
            { name: 'CSSWINNER' },
            { name: '/thoughtworks' },
            { name: 'AUTODESK' },
          ].map((item, i) => (
            <div
              key={i}
              className={`px-6 py-3 rounded-full border-2 border-black ${
                item.rotate ? 'bg-black text-white -rotate-12' : ''
              }`}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutExtra;
