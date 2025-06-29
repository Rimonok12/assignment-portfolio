export default function WorkProcess() {
  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Flex container for button + heading */}
        <div className="flex items-center justify-center relative mb-10">
          {/* Button on the left */}
          <div className="absolute left-0">
            <button className="flex items-center border border-white rounded-full px-4 py-1 hover:bg-white hover:text-black transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <span className="text-sm font-medium">Work Process</span>
            </button>
          </div>

          {/* Centered heading */}
          <h2 className="text-4xl font-bold">My Work Process</h2>
        </div>

        {/* The grid section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Discovery */}
          <div className="bg-[#111] rounded-2xl p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="bg-[#A7FFE1] text-black font-semibold px-3 py-1 rounded-full">
                Discovery
              </span>
              <a href="#" className="flex items-center text-sm underline">
                <span>→</span>
                <span className="ml-1">Read More</span>
              </a>
            </div>
            <p className="text-gray-300">
              We start every new client interaction with an in-depth discovery
              call where we get to know each other, discuss your current and
              future objectives, and recommend the best course of action.
            </p>
          </div>

          {/* Strategy */}
          <div className="bg-[#C1FF36] text-black rounded-2xl p-6 transform rotate-2">
            <div className="flex justify-between items-center mb-4">
              <span className="bg-black text-white font-semibold px-3 py-1 rounded-full">
                Strategy
              </span>
              <a href="#" className="flex items-center text-sm underline">
                <span>→</span>
                <span className="ml-1">Read More</span>
              </a>
            </div>
            <p>
              Every end-to-end project of ours begins with a bespoke pre-build
              strategy. From brand ID consultation to in-depth code reviews,
              we’re here to set the stage for success.
            </p>
          </div>

          {/* Design */}
          <div className="bg-[#111] rounded-2xl p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="bg-[#A7FFE1] text-black font-semibold px-3 py-1 rounded-full">
                Design
              </span>
              <a href="#" className="flex items-center text-sm underline">
                <span>→</span>
                <span className="ml-1">Read More</span>
              </a>
            </div>
            <p className="text-gray-300">
              After we have a comprehensive understanding of your brand, we'll
              be ready to move onto design. Each page will be designed,
              reviewed, and given your stamp of approval.
            </p>
          </div>

          {/* Build */}
          <div className="bg-[#111] rounded-2xl p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="bg-[#A7FFE1] text-black font-semibold px-3 py-1 rounded-full">
                Build
              </span>
              <a href="#" className="flex items-center text-sm underline">
                <span>→</span>
                <span className="ml-1">Read More</span>
              </a>
            </div>
            <p className="text-gray-300">
              Whether we've just finished designing your new site or you're
              handing off finished designs for us to develop in Webflow, we're
              here to apply our trusted development process to your project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
