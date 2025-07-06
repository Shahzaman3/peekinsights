import React, { Component } from "react";

export default class Insight extends Component {
  render() {
    return (
      <div className="w-full border-b grid grid-cols-1 lg:grid-cols-2">
        <div className="w-full bg-[#dcfebc] pt-10 flex flex-col gap-6">
          <div className="h-8 px-12">
            <img
              className="h-12 w-12 object-cover"
              src="https://peekinsights.co/wp-content/themes/starter/img/magnifying-glass.svg"
              alt=""
            />
          </div>
          <h3 className="font-serif font-light text-xl px-6 mt-15 mb-4">
            Get valuable insights to increase
            your conversions, average order
            value and build brand trust.
          </h3>
        </div>
        <div className="w-full py-6 pt-20">
          <h4 className="font-sans font-light text-xl mt-15 px-6">
            Turn your website visitors into happy customers. We
            analyze your store, identify friction points, and craft
            a plan to improve conversions tailor made for your
            brand.
          </h4>
          <button className="flex items-center h-14 ml-6 mt-15 bg-black text-white rounded-xl justify-between border-2 border-black hover:bg-white hover:text-black">
            <a className="px-4 text-md font-semibold" href="">
              Get your FREE Audit
            </a>
            <div className="h-6 w-6 mr-4">
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
        </div>
      </div>
    );
  }
}
