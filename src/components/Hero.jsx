import { FaTwitter, FaInstagram, FaFacebook, FaPhoneAlt } from 'react-icons/fa';
// import {  } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen bg-white mt-4 "
      style={{
        backgroundImage: "url('/22.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* HEADER */}
      <header className="flex justify-between items-center px-6 py-4">
        <h1 className="text-3xl font-extrabold">DEVLOP.ME</h1>
        <nav className="flex space-x-8 items-center">
          <a href="#" className="text-black font-medium">
            Home
          </a>
          <a href="#" className="text-black font-normal">
            About
          </a>
          <a href="#" className="text-black font-medium">
            Portfolio
          </a>
          <a href="#" className="text-black font-medium">
            Blog
          </a>
          <button className="flex items-center gap-2 border border-black  px-5 py-2  rounded-full transition">
            <span className="inline-block bg-white text-black ml-[-22px] rounded-full border border-black">
              <svg
                width="38"
                height="38"
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="37"
                  height="37"
                  rx="18.5"
                  fill="white"
                  stroke="black"
                />
                <path
                  d="M8 18.5H30M30 18.5C27.5905 18.0455 22.7714 15.9091 22.7714 11M30 18.5C27.5905 18.9545 22.7714 21.0909 22.7714 26"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            Start Project
          </button>
        </nav>
      </header>

      {/* HERO CONTENT */}
      <div className="max-w-5xl mt-16 px-6 relative">
        <h2 className="text-6xl md:text-7xl font-extrabold w-max p-2 leading-relaxed mt-[69px] ">
          Trusted{' '}
          <span className="bg-black text-white rounded-lg mb-3">Partner</span>{' '}
          for <br />
          Your Website{' '}
          <span className="bg-black text-white rounded">Develop.</span>
        </h2>
      </div>
      <div className="mt-16 px-6 relative mx-auto flex flex-col">
        <div className="absolute left-6 flex flex-cols-reverse   items-center space-y-4 ">
          <span className="-rotate-90 text-sm font-medium mt-[80px]">
            @williamrey
          </span>
          <div className=" grid grid-cols-1 gap-2 p-2">
            <a href="#">
              {/* <img src="/twitter.svg" alt="Twitter" className="w-6 h-6" /> */}
              <FaTwitter className="w-5 h-5" />
            </a>
            <a href="#">
              {/* <img src="/instagram.svg" alt="Instagram" className="w-6 h-6" /> */}
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="#">
              <FaFacebook className="w-5 h-5" />{' '}
            </a>
            <div className="w-[2px] h-10 bg-black mt-2 items-center ml-2 justify-center" />
          </div>
        </div>
        <div className="relative w-full max-h-screen ">
          <div className="absolute h-[66px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <p className="mt-6 text-lg text-black max-w-xl ">
              Building the world’s best marketing websites for over a decade.
              Your trusted partner for strategy, design, and dev.
            </p>
            <div className="mt-4 ">
              {' '}
              {/* Reduced margin here */}{' '}
              <button className="flex items-center border border-black rounded-full  px-4 py-4  transition">
                <FaPhoneAlt className="h-[44px] w-[44px] p-2 border border-black rounded-full mr-2 m-[-16px] cursor-pointer" />
                Schedule a Call
              </button>
            </div>
          </div>
        </div>

        {/* SOCIALS LEFT SIDE */}
      </div>
      {/* </div> */}
    </section>
  );
}

{
  /* <div className="fixed left-4 top-1/3 flex flex-col space-y-4">
        <a href="#"><img src="/twitter.svg" alt="Twitter" className="w-5 h-5" /></a>
        <a href="#"><img src="/instagram.svg" alt="Instagram" className="w-5 h-5" /></a>
        <a href="#"><img src="/facebook.svg" alt="Facebook" className="w-5 h-5" /></a>
        <span className="rotate-90 text-sm mt-2">@williamrey</span>
        <div className="w-px h-10 bg-black mx-auto"></div>
      </div> */
}
