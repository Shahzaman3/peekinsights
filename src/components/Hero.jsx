import React from "react";
import tick from "../assets/tick.jpg";

const Hero = () => {
  return (
    <div>
      <div className="w-full mb-4 grid grid-cols-1 md:grid-cols-2 md:h-[110vh] place-items-center linear-grid">
        <div>
          <h1 className="mt-20 px-6 text-[5vh] md:text-[8vh] font-serif leading-tight">
            Actionable insights to help your store convert m
            <span>
              ore
              <img
                className="object-cover h-8 md:h-12 inline-block gap-2"
                src={tick}
                alt="tick"
              />
            </span>
          </h1>
          <h4 className="px-6 mt-10 text-xl">
            Grow your e-commerce brand with a CRO audit designed to boost
            conversions and drive growth.
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <button className="flex items-center w-[90%] h-14 ml-6 mt-10 md:mt-30 bg-black text-white rounded-xl justify-between border-2 border-black hover:bg-white hover:text-black">
              <a className="px-4 text-xl" href="">
                Get your FREE Audit
              </a>
              <div className="h-8 w-8 mr-4">
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </g>
                </svg>
              </div>
            </button>
            <button className="flex items-center w-[90%] h-14 ml-6 mt-5 md:mt-30 bg-white text-black rounded-xl justify-between border-2 border-black hover:bg-black hover:text-white">
              <a className="px-4 text-xl" href="">
                View Audit Pricing
              </a>
              <div className="h-8 w-8 mr-4">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"
                      stroke="currentColor"
                      stroke-width="1"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
                      stroke="currentColor"
                      stroke-width="1"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
            </button>
          </div>
        </div>
        <div className="relative w-full h-[80vh] mt-10 flex justify-center">
          <div className=" absolute border-1 border-black rounded-[22vh] lg:rounded-[29vh] w-[45vh] lg:w-[60%] h-full items-center">
            <img
              className="w-full h-full rounded-[22vh] lg:rounded-[29vh] object-cover"
              src="https://peekinsights.co/wp-content/uploads/2024/09/peek-insights-hero.jpg.webp"
              alt=""
            />
          </div>
          <div className="absolute w-[28vh] h-[24vh] z-10 top-[8%] left-[62%]">
            <img
              className="rounded-lg object-cover"
              src="https://peekinsights.co/wp-content/themes/starter/img/cro-increase.svg"
              alt=""
            />
          </div>
          <div className="absolute w-[28vh] h-[20vh] z-10 bottom-[12%] right-[62%]">
            <img
              className="rounded-lg object-cover"
              src="https://peekinsights.co/wp-content/themes/starter/img/add-to-cart.svg"
              alt=""
            />
          </div>
          <div className="absolute w-[28vh] h-[10vh] z-10 bottom-[5%] left-1/2">
            <img
              className="rounded-lg object-cover"
              src="https://peekinsights.co/wp-content/themes/starter/img/brandgrowth.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="relative w-full overflow-hidden py-6 border-t border-b bg-white flex">
        <div className="absolute top-1/2 p-4 -translate-y-1/2 bg-scroller text-black font-medium z-20">
          Trusted by <br /> top brands
        </div>

        <div className="w-full pl-[25%]">
          <div className="flex gap-16 w-max items-center animate-marquee">
            {Array(2)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="flex gap-16">
                  <img
                    className="h-14 object-contain"
                    src="https://peekinsights.co/wp-content/uploads/2024/09/logo-brewlander.svg"
                    alt=""
                  />
                  <img
                    className="h-14 object-contain"
                    src="https://peekinsights.co/wp-content/uploads/2024/09/logo-bta.svg"
                    alt=""
                  />
                  <img
                    className="h-14 object-contain"
                    src="https://peekinsights.co/wp-content/uploads/2024/09/logo-cheeky-bonsai.svg"
                    alt=""
                  />
                  <img
                    className="h-14 object-contain"
                    src="https://peekinsights.co/wp-content/uploads/2024/09/logo-sundae.svg"
                    alt=""
                  />
                  <img
                    className="h-14 object-contain"
                    src="https://peekinsights.co/wp-content/uploads/2024/09/logo-morreale-paris.svg"
                    alt=""
                  />
                  <img
                    className="h-14 object-contain"
                    src="https://peekinsights.co/wp-content/uploads/2024/09/logo-just-enough.svg"
                    alt=""
                  />
                  <img
                    className="h-14 object-contain"
                    src="https://peekinsights.co/wp-content/uploads/2024/09/logo-the-fox-tan.svg"
                    alt=""
                  />
                  <img
                    className="h-14 object-contain"
                    src="https://peekinsights.co/wp-content/uploads/2024/09/logo-omorfie.svg"
                    alt=""
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
