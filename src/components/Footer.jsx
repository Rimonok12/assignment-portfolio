const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="max-w-screen-xl mx-auto grid grid-flow-col md:grid-row justify-between items-start">
        {/* Left Section (DEVLOP.ME) */}
        <div className="mb-8 md:mb-0 flex flex-col">
          <h2 className="text-5xl font-extrabold text-green-500">DEVLOP.ME</h2>
          <div class="mt-[339px] font-sans font-extrabold text-[24px] leading-[34px] tracking-[-2%] uppercase">
            BESNIK
          </div>
        </div>

        {/* Middle and Right Section with 'As You Can' */}
        <div className="w-full md:grid md:grid-cols-1 md:gap-8">
          {/* 'As You Can' Title */}
          <div className="w-[486px] h-[54px] mb-8 md:mb-0 text-center md:text-left">
            <h3 className="text-3xl font-semibold">As you can</h3>
          </div>

          {/* Middle Section (Say Hello & Call) */}
          <div className="grid mt-10  md:grid-cols-3 justify-between items-start w-full gap-4 md:w-auto">
            <div className="mb-8 md:mb-0">
              <h4 className="text-lg font-semibold">Say hello</h4>
              <ul className="mt-4 space-y-2 text-sm ">
                <li>HELLO@DEVLOP.ME.COM</li>
                <li>MAHBUBUL@ME.COM</li>
              </ul>
              <div className="mb-8 md:mb-0">
                <h4 className="text-lg font-semibold">Call</h4>
                <ul className="mt-4 space-y-2 text-sm">
                  <li>+784549 4981 00</li>
                  <li>+8845 0100 211</li>
                </ul>
              </div>
              <div>
                <p className="mt-20 text-base leading-6 font-normal tracking-tight text-left text-gray-700 align-middle">
                  © devlop.me 2022
                </p>
              </div>
            </div>
            <div className="ml-14">
              <h4 className="text-lg font-semibold">Menu</h4>
              <ul className="mt-4 space-y-2 text-sm">
                <li>HOME</li>
                <li>ABOUT</li>
                <li>PORTFOLIO</li>
                <li>BLOG</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold">Social</h4>
              <ul className="mt-4 space-y-2 text-sm">
                <li>TWITTER</li>
                <li>INSTAGRAM</li>
                <li>FACEBOOK</li>
                <li>BEHANCE</li>
                <li>DRIBBBLE</li>
              </ul>
              <p className="mt-20 text-base leading-6 font-normal tracking-tight text-left text-gray-700 align-middle">
                PRIVACY - TERMS
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section (Privacy & Terms) */}
    </footer>
  );
};

export default Footer;
