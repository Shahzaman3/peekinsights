import React, { Component } from "react";
import arrow from "../assets/arrow.png";

export default class Included extends Component {
  render() {
    return (
      <div className="w-full xl:h-[100vh] xl:overflow-y-scroll py-8 grid grid-cols-1 xl:grid-cols-2 bg-white scroll-container">
        <div className="flex flex-col justify-items-start">
          <div className="absolute h-6 bg-[#bbecff] w-[180px] items-center rounded-2xl flex gap-2 mx-6 py-2 px-4">
            <div className="h-4 w-4 ml-1">
              <svg
                fill="#000000"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.676,8.237-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,1,1,1.414-1.414l2.323,2.323,5.294-4.853a1,1,0,1,1,1.352,1.474Z"></path>
                </g>
              </svg>
            </div>
            <span className="font-sans text-sm font-light text-black uppercase">
              what's included
            </span>
          </div>
          <h1 className="absolute font-serif font-light text-3xl md:text-5xl px-6 py-10 leading-tight">
            A personalized action plan <br /> for growth
          </h1>
        </div>
        <div className="">
          <div className="flex mt-10">
            <div className="hidden md:block mx-6 w-[50vw] h-[50vh] rounded-full ">
              <img
                className="object-cover"
                src={arrow}
                alt=""
              />
            </div>
            <h4 className="font-sans font-light md:text-2xl px-6 pt-25 md:py-2 mb-6">
              Get a clear plan with actionable recommendations that prioritise
              user experience and lead to sustainable growth for your brand.
            </h4>
          </div>
          <div className="relative bg-[#f7f3ef] w-[90%] border-black border-1 mx-auto shadow-md mb-6 px-6 md:px-26">
            <img
              className="absolute object-cover top-0 left-0 h-12 w-12 md:h-16 md:w-16 bg-[#bbecff] p-4"
              src="https://peekinsights.co/wp-content/uploads/2024/09/icon-magnifying-glass.svg"
              alt=""
            />
            <h2 className="font-serif text-xl md:text-3xl md:mt-2 mt-12 py-2 mb-6">
              In-depth website analysis
            </h2>
            <p className="font-sans text-sm md:text-xl py-2 font-light mb-12">
              A deep dive into your customer journey, pinpointing the strengths
              and weaknesses of your home, collection, product, and cart pages.
              Uncover hidden obstacles and untapped opportunities for maximizing
              conversions.
            </p>
            <div className="flex items-center bg-white rounded-2xl gap-2 w-fit  px-2 my-2 mb-4 md:mb-6">
              <div className="h-4 w-4 md:h-5 md:w-5">
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
                      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                      stroke="#292D32"
                      stroke-width="0.792"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      d="M7.75 12L10.58 14.83L16.25 9.17004"
                      stroke="#292D32"
                      stroke-width="0.792"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <span className="text-sm md:text-xl font-sans font-light">
                Navigation and menu audit
              </span>
            </div>
            <div className="flex items-center bg-white rounded-2xl gap-2 w-fit  px-2 my-2 mb-4 md:mb-6">
              <div className="h-4 w-4 md:h-5 md:w-5">
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
                      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                      stroke="#292D32"
                      stroke-width="0.792"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      d="M7.75 12L10.58 14.83L16.25 9.17004"
                      stroke="#292D32"
                      stroke-width="0.792"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <span className="text-sm md:text-xl font-sans font-light">
                Home page audit
              </span>
            </div>
            <div className="flex items-center bg-white rounded-2xl gap-2 w-fit  px-2 my-2 mb-4 md:mb-6">
              <div className="h-4 w-4 md:h-5 md:w-5">
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
                      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                      stroke="#292D32"
                      stroke-width="0.792"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      d="M7.75 12L10.58 14.83L16.25 9.17004"
                      stroke="#292D32"
                      stroke-width="0.792"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <span className="text-sm md:text-xl font-sans font-light">
                Collection page audit
              </span>
            </div>
            <div className="flex items-center bg-white rounded-2xl gap-2 w-fit  px-2 my-2 mb-4 md:mb-6">
              <div className="h-4 w-4 md:h-5 md:w-5">
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
                      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                      stroke="#292D32"
                      stroke-width="0.792"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      d="M7.75 12L10.58 14.83L16.25 9.17004"
                      stroke="#292D32"
                      stroke-width="0.792"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <span className="text-sm md:text-xl font-sans font-light">
                Product page audit
              </span>
            </div>
            <div className="flex items-center bg-white rounded-2xl gap-2 w-fit  px-2 my-2 mb-4 md:mb-6">
              <div className="h-4 w-4 md:h-5 md:w-5">
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
                      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                      stroke="#292D32"
                      stroke-width="0.792"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      d="M7.75 12L10.58 14.83L16.25 9.17004"
                      stroke="#292D32"
                      stroke-width="0.792"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <span className="text-sm md:text-xl font-sans font-light">
                Cart & checkout process audit
              </span>
            </div>
          </div>
          <div className="relative bg-[#f7f3ef] w-[90%] border-black border-1 mx-auto shadow-md mb-6 px-6 md:px-26">
            <img
              className="absolute top-0 left-0 object-cover h-12 w-12 md:h-16 md:w-16 bg-[#ffd3c0] p-4"
              src="https://peekinsights.co/wp-content/uploads/2024/09/icon-opacity.svg"
              alt=""
            />
            <h2 className="font-serif text-xl mt-12 md:text-3xl md:mt-2 py-2 mb-6">
              Conversion-focused redesigns
            </h2>
            <p className="font-sans text-sm md:text-xl py-2 font-light mb-12">
              Visualise the impact of conversion-focused design with
              before-and-after mockups of 10 key sections of your site. Get
              expert recommendations on how to optimize each element for higher
              engagement.
            </p>
            <div className="flex items-center bg-white rounded-2xl gap-2 w-fit  px-2 my-2 mb-6">
              <div className="h-4 w-4 md:h-5 md:w-5">
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
                      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                      stroke="#292D32"
                      stroke-width="0.792"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      d="M7.75 12L10.58 14.83L16.25 9.17004"
                      stroke="#292D32"
                      stroke-width="0.792"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <span className="text-sm md:text-xl font-sans font-light">
                Redesign of 10x key sections
              </span>
            </div>
            <div className="flex items-center bg-white rounded-2xl gap-2 w-fit  px-2 my-2 mb-6">
              <div className="h-4 w-4 md:h-5 md:w-5">
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
                      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                      stroke="#292D32"
                      stroke-width="0.792"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      d="M7.75 12L10.58 14.83L16.25 9.17004"
                      stroke="#292D32"
                      stroke-width="0.792"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <span className="text-sm md:text-xl font-sans font-light">
                Before and After Mockups
              </span>
            </div>
            <div className="flex items-center bg-white rounded-2xl gap-2 w-fit  px-2 my-2 mb-6">
              <div className="h-4 w-4 md:h-5 md:w-5">
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
                      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                      stroke="#292D32"
                      stroke-width="0.792"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      d="M7.75 12L10.58 14.83L16.25 9.17004"
                      stroke="#292D32"
                      stroke-width="0.792"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <span className="text-sm md:text-xl font-sans font-light leading-tight">
                Access to developer-friendly design files
              </span>
            </div>
          </div>
          <div className="relative bg-[#f7f3ef] w-[90%] border-black border-1 mx-auto shadow-md mb-6 px-6 md:px-26">
            <img
              className="absolute top-0 left-0 object-cover h-12 w-12 md:h-16 md:w-16 bg-[#f7d681] p-4"
              src="https://peekinsights.co/wp-content/uploads/2024/09/icon-checklist.svg"
              alt=""
            />
            <h2 className="font-serif text-xl md:text-3xl mt-12 md:mt-2 py-2 mb-6">
              Actionable checklist
            </h2>
            <p className="font-sans text-sm md:text-xl py-2 font-light mb-12">
              Get a comprehensive list of practical steps you can take right now
              to start improving your website's conversion rates. Prioritized
              recommendations to help you focus on the most impactful changes.
            </p>
            <div className="flex items-center bg-white rounded-2xl gap-2 w-fit  px-2 my-2 mb-6">
              <div className="h-4 w-4 md:h-5 md:w-5">
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
                      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                      stroke="#292D32"
                      stroke-width="0.792"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      d="M7.75 12L10.58 14.83L16.25 9.17004"
                      stroke="#292D32"
                      stroke-width="0.792"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <span className="text-sm md:text-xl font-sans font-light">
                Up to 40+ actionable fixes
              </span>
            </div>
            <div className="flex items-center bg-white rounded-2xl gap-2 w-fit  px-2 my-2 mb-6">
              <div className="h-4 w-4 md:h-5 md:w-5">
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
                      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                      stroke="#292D32"
                      stroke-width="0.792"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      d="M7.75 12L10.58 14.83L16.25 9.17004"
                      stroke="#292D32"
                      stroke-width="0.792"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <span className="text-sm md:text-xl font-sans font-light">
                Top 5 priority fixes list
              </span>
            </div>
            <div className="flex items-center bg-white rounded-2xl gap-2 w-fit  px-2 my-2 mb-6">
              <div className="h-4 w-4 md:h-5 md:w-5">
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
                      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                      stroke="#292D32"
                      stroke-width="0.792"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      d="M7.75 12L10.58 14.83L16.25 9.17004"
                      stroke="#292D32"
                      stroke-width="0.792"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <span className="text-sm md:text-xl font-sans font-light leading-tight">
                Insights for CRO, AOV and UX improvements
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
