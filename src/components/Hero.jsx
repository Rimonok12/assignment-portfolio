'use client';

import { FaTwitter, FaInstagram, FaFacebook, FaPhoneAlt } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 bg-[url('/22.png')] ">
      {/* Social Icons on Left */}
      <div className="absolute left-6 top-1/2 transform -translate-y-1/2 hidden md:flex flex-col items-center space-y-4 text-black">
        <span className="-rotate-90 tracking-wide text-sm">@wiliianrey</span>
        <div className="flex flex-col items-center space-y-4 mt-4">
          <a href="#" className="hover:text-black transition-colors">
            <FaTwitter className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-black transition-colors">
            <FaInstagram className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-black transition-colors">
            <FaFacebook className="w-5 h-5" />
          </a>
        </div>
        <div className="h-16 border-l border-black mt-4" />
      </div>

      {/* Hero Text */}
      <div className="max-w-5xl mx-auto text-center md:text-left z-10 relative">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-black">
          Trusted{' '}
          <span className="bg-black text-white px-2 rounded-md">Partner</span>{' '}
          for
          <br />
          Your Website{' '}
          <span className="bg-black text-white px-2 rounded-md">Develop.</span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg md:text-xl text-black/80">
          Building the world’s best marketing websites for over a decade. <br />
          Your trusted partner for strategy, design, and dev.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex gap-6 justify-center md:justify-start">
          {/* Exact "Schedule a Call" Button */}
          <div className="inline-flex items-center gap-3 border-2 border-black px-6 py-3 rounded-full cursor-pointer hover:bg-black hover:text-white transition">
            <div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center">
              <FaPhoneAlt className="text-xl" />
            </div>
            <span className="text-lg font-medium">Schedule a Call</span>
          </div>

          {/* "Start Project" Button */}
          <div className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-full cursor-pointer hover:bg-gray-800 transition">
            <span className="text-lg font-medium">Start Project</span>
          </div>
        </div>
      </div>

      {/* Decorative Gradient Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-[#a7ffec] via-[#66ff66] to-[#00d8d8] opacity-30 z-0" /> */}
    </section>
  );
};

export default Hero;
