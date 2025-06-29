import { FaReact } from 'react-icons/fa'; // Optional, keep if needed for icons
import { ArrowRight } from 'lucide-react';
import { FiArrowLeft, FiArrowRight, FiArrowDown } from 'react-icons/fi';

const About = () => {
  return (
    <section className="bg-[rgba(0,0,0,1)] text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Why Choose Me Button */}
        <div className="mb-10 relative flex flex-row">
          <FiArrowDown
            className="
          w-[auto] h-[44px] top-[917px] left-[80px]
          p-2
          border-2 border-current space-x-4
          rounded-full
          cursor-pointer
          
        "
          />
          <button className="flex items-center justify-start space-x-4 border-2 border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300">
            {/* <div className="w-6 h-6 bg-white text-black rounded-full flex items-center justify-center"></div> */}
            <span className="text-sm">Why Choose me</span>
          </button>
        </div>

        {/* Flex Layout for Skills and Description */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="w-[516px] h-[172px] top-[1001px] font-sporting left-[80px] font-bold text-[58px] leading-[86px] tracking-[-3%]">
              My Extensive
              <br />
              List of Skills
            </h2>
          </div>

          <div>
            <p className="text-xl">
              Building the world’s best marketing websites. Your
              <br /> trusted partner for strategy, design, and dev.
            </p>
            <hr className="border-t border-current" />
            <div className="relative my-4 p-5">
              <div className="absolute top-1/2 right-5 transform -translate-y-1/2 flex items-center">
                <FiArrowLeft
                  className="
          w-[auto] h-[60px] 
          p-2
          border-2 border-current
          rounded-full
          cursor-pointer
        "
                />
                <FiArrowRight
                  className="
          w-[auto] h-[60px] top-[1137px] left-[1220px]
          p-2
          border-2 border-current
          rounded-full
          cursor-pointer
        "
                />
              </div>
            </div>
          </div>
        </div>

        {/* Skills Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
          <div className="bg-[#131313] overflow-hidden text-white p-8 w-[430px] h-[365px]  rounded-[30px]">
            <div className="flex items-center justify-center mb-4">
              <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <svg
                  width="99"
                  height="99"
                  viewBox="0 0 99 99"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="49.5"
                    cy="49.5024"
                    rx="48.5"
                    ry="15"
                    stroke="white"
                    stroke-width="2"
                  />
                  <ellipse
                    cx="49.5001"
                    cy="49.5024"
                    rx="48.5"
                    ry="15"
                    transform="rotate(-60 49.5001 49.5024)"
                    stroke="white"
                    stroke-width="2"
                  />
                  <ellipse
                    cx="49.4999"
                    cy="49.5022"
                    rx="48.5"
                    ry="15"
                    transform="rotate(60 49.4999 49.5022)"
                    stroke="white"
                    stroke-width="2"
                  />
                  <circle cx="50" cy="50" r="7" fill="#C5FF41" />
                </svg>
              </div>
            </div>
            <div class="w-[223px] h-[34px] top-[1419px] left-[115px] font-[Sporting Grotesque] font-bold text-[26px] leading-[34px] tracking-[0%] align-middle">
              HTML & CSS
            </div>
            <p className="w-[340px] h-[81px] top-[1473px] left-[115px] opacity-[0.7] font-[Sporting Grotesque] font-normal text-[16px] leading-[27px] tracking-[0%]">
              Duis aute irure dolor in
              <br /> reprehenderit in voluptate. Ut
              <br />
              enim ad minim veniam, quis.
            </p>
          </div>

          <div className="bg-[#131313] overflow-hidden text-white p-8 w-[430px] h-[365px]  transform translate-z-2 rounded-[30px]  rotate-[6.74deg]">
            <div className="flex items-center justify-center mb-4">
              <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <svg
                  width="99"
                  height="99"
                  viewBox="0 0 99 99"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="49.5"
                    cy="49.5024"
                    rx="48.5"
                    ry="15"
                    stroke="white"
                    stroke-width="2"
                  />
                  <ellipse
                    cx="49.5001"
                    cy="49.5024"
                    rx="48.5"
                    ry="15"
                    transform="rotate(-60 49.5001 49.5024)"
                    stroke="white"
                    stroke-width="2"
                  />
                  <ellipse
                    cx="49.4999"
                    cy="49.5022"
                    rx="48.5"
                    ry="15"
                    transform="rotate(60 49.4999 49.5022)"
                    stroke="white"
                    stroke-width="2"
                  />
                  <circle cx="50" cy="50" r="7" fill="#C5FF41" />
                </svg>
              </div>
            </div>
            <div class="w-[223px] h-[34px] font-[Sporting Grotesque] font-bold text-[26px] leading-[34px] tracking-[0%] align-middle">
              JAVASCRIPT
            </div>
            <p className="w-[340px] h-[81px] opacity-[0.7] font-[Sporting Grotesque] font-normal text-[16px] leading-[27px] tracking-[0%]">
              Duis aute irure dolor in
              <br /> reprehenderit in voluptate. Ut
              <br />
              enim ad minim veniam, quis.
            </p>
          </div>

          <div className="bg-[#131313] overflow-hidden text-white p-8 w-[430px] h-[365px] top-[1237px] left-[80px] rounded-[30px]">
            <div className="flex items-center justify-center mb-4">
              <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <svg
                  width="99"
                  height="99"
                  viewBox="0 0 99 99"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="49.5"
                    cy="49.5024"
                    rx="48.5"
                    ry="15"
                    stroke="white"
                    stroke-width="2"
                  />
                  <ellipse
                    cx="49.5001"
                    cy="49.5024"
                    rx="48.5"
                    ry="15"
                    transform="rotate(-60 49.5001 49.5024)"
                    stroke="white"
                    stroke-width="2"
                  />
                  <ellipse
                    cx="49.4999"
                    cy="49.5022"
                    rx="48.5"
                    ry="15"
                    transform="rotate(60 49.4999 49.5022)"
                    stroke="white"
                    stroke-width="2"
                  />
                  <circle cx="50" cy="50" r="7" fill="#C5FF41" />
                </svg>
              </div>
            </div>
            <div class="w-[223px] h-[34px] top-[1419px] left-[115px] font-[Sporting Grotesque] font-bold text-[26px] leading-[34px] tracking-[0%] align-middle">
              Webflow
            </div>
            <p className="w-[340px] h-[81px] top-[1473px] left-[115px] opacity-[0.7] font-[Sporting Grotesque] font-normal text-[16px] leading-[27px] tracking-[0%]">
              Duis aute irure dolor in
              <br /> reprehenderit in voluptate. Ut
              <br />
              enim ad minim veniam, quis.
            </p>
          </div>
        </div>

        {/* Navigation Arrows */}
        {/* <div className="flex justify-center mt-8">
          <button className="text-gray-400 hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button className="text-gray-400 hover:text-white ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default About;
