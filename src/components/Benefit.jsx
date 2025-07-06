import React, { Component } from "react";

export default class Benefit extends Component {
  render() {
    return (
      <div className="w-full py-10 items-center grid bg-[#f7f3ef] justify-center">
        <div className="bg-[#bbecff] items-center rounded-2xl flex gap-2 mx-auto py-2 px-4">
          <div className="h-4 w-4 ml-1">
            <img className="object-cover" src="./src/assets/star.svg" alt="" />
          </div>
          <span className="font-sans text-sm uppercase">
            benefits
          </span>
        </div>
        <h1 className="font-serif font-light text-3xl md:text-5xl px-6 py-10 text-center leading-tight">
          Transform your e-commerce <br />
          site with a CRO audit.
        </h1>
        <div className="bg-white w-[96%] lg:h-[100vh] border mx-auto mt-10 grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h2 className="font-serif font-light text-2xl md:text-4xl px-6 pt-8">
              Uncover hidden conversion killers
            </h2>
            <h4 className="font-sans font-light text-xl md:text-2xl px-6 py-6">
              A deep dive into your website to uncover user <br />
              friction points. We’ll help you gain insights <br />
              and help prioritize areas of improvement to <br />
              streamline the conversion process.
            </h4>
          </div>
          <div className="p-3 md:p-4 relative w-[90%] h-[60vh] my-auto py-10 mx-auto grid-pattern">
            <div className="absolute w-[40%] h-[80%] bottom-[10%] right-[2%] z-10 ">
              <img
                src="https://peekinsights.co/wp-content/themes/starter/img/cro-uplift.svg"
                alt=""
              />
            </div>
              <svg
                className="absolute top-[15%] right-[15%]"
                width="70%"
                height="70%"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <defs>
                  <clipPath id="clip0_224_605">
                    <path d="M50 50.5H50.5V50V49.5C23.2199 49.5 1.04241 27.6526 0.509799 0.5H199.491C198.957 27.6526 176.781 49.5 149.5 49.5V50V50.5H150C177.338 50.5 199.5 72.6619 199.5 100C199.5 125.033 180.918 145.726 156.795 149.038L156.791 150.028C180.949 153.556 199.5 174.363 199.5 199.5H0.5C0.5 174.363 19.0509 153.556 43.2094 150.028L43.2051 149.038C19.0823 145.726 0.5 125.033 0.5 100C0.5 72.6619 22.6619 50.5 50 50.5Z"></path>
                  </clipPath>
                </defs>
                <image
                  href="https://peekinsights.co/wp-content/uploads/2024/09/store-front.jpg.webp"
                  width="200"
                  height="200"
                  clipPath="url(#clip0_224_605)"
                  preserveAspectRatio="xMidYMid slice"
                  loading="lazy"
                ></image>
                <path
                  d="M50 50.5H50.5V50V49.5C23.2199 49.5 1.04241 27.6526 0.509799 0.5H199.491C198.957 27.6526 176.781 49.5 149.5 49.5V50V50.5H150C177.338 50.5 199.5 72.6619 199.5 100C199.5 125.033 180.918 145.726 156.795 149.038L156.791 150.028C180.949 153.556 199.5 174.363 199.5 199.5H0.5C0.5 174.363 19.0509 153.556 43.2094 150.028L43.2051 149.038C19.0823 145.726 0.5 125.033 0.5 100C0.5 72.6619 22.6619 50.5 50 50.5Z"
                  fill="none"
                  stroke="black"
                  vectorEffect="non-scaling-stroke"
                ></path>
              </svg>
          </div>
        </div>
        <div className="bg-white w-[96%] lg:h-[100vh] border mx-auto mt-10 grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h2 className="font-serif font-light text-2xl md:text-4xl px-6 pt-8">
              Increase AOV and boosting brand trust
            </h2>
            <h4 className="font-sans font-light text-xl md:text-2xl px-6 py-6">
              Optimize product recommendations to help boost average order value
              (AOV). Enhance user experience, streamline checkout, and build
              trust to foster customer loyalty and repeat business.
            </h4>
          </div>
          <div className="pt-7 relative h-[60vh] sm:h-[80vh] md:h-[80vh] w-[90%] my-auto mx-auto grid-pattern">
              <div className=" absolute border-2 border-black h-[90%] md:h-[80%] md:w-[35%] rounded-[22vh] sm:w-[40%] w-[60%] left-[25%] items-center">
                <img
                  className="w-full h-full rounded-[22vh] object-cover"
                  src="https://peekinsights.co/wp-content/uploads/2024/09/aov-edit.jpg.webp"
                  alt=""
                />
              </div>
              <div className="absolute w-[40%] top-[15%] right-[5%]">
                <img
                  src="https://peekinsights.co/wp-content/themes/starter/img/aov-chart.svg"
                  alt=""
                />
              </div>
              <div className="absolute rounded-full w-[10%] bottom-[15%] right-[20%] md:right-[24%]">
                <img
                  className="rounded-full object-cover"
                  src="https://peekinsights.co/wp-content/uploads/2024/09/profile-image.jpg"
                  alt=""
                />
              </div>
          </div>
        </div>
      </div>
    );
  }
}
