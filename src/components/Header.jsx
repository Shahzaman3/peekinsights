import React, { useEffect, useState } from "react";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowHeader(false); // Scrolling down
      } else {
        setShowHeader(true); // Scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-white z-50 transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="w-full h-18 lg:h-20 border-b flex justify-between items-center">
        <a href="">
          <img
            className="items-center p-4 object-cover h-20 md:h-24"
            src="https://peekinsights.co/wp-content/themes/starter/img/peek-insights-logo.svg"
            alt="Peek Insights Logo"
          />
        </a>
        <div className="flex items-center gap-8 mr-4 text-xl font-light">
            <a
              className="hidden font-normal text-lg lg:block relative overflow-hidden group"
              href="#whatwedo"
            >
              <span className="relative inline-block after:block after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 group-hover:after:w-full">
                Benefits
              </span>
            </a>
            <a
              className="hidden font-normal text-lg lg:block relative overflow-hidden group"
              href="#testimonials"
            >
              <span className="relative inline-block after:block after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 group-hover:after:w-full">
                Testimonials
              </span>
            </a>
            <a
              className="hidden font-normal text-lg lg:block relative overflow-hidden group"
              href="https://nocodenest.vercel.app/"
              target="_blank"
            >
              <span className="relative inline-block after:block after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 group-hover:after:w-full">
                What's Included
              </span>
            </a>
            <a
              className="hidden font-normal text-lg lg:block relative overflow-hidden group"
              href="#ourgoals"
            >
              <span className="relative inline-block after:block after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 group-hover:after:w-full">
                How It Works
              </span>
            </a>
            <a
              className="hidden font-normal text-lg lg:block relative overflow-hidden group"
              href="#whatwedo"
            >
              <span className="relative inline-block after:block after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 group-hover:after:w-full">
                Pricing
              </span>
            </a>
            <button
              className="hidden py-2 px-4 rounded-lg font-normal text-lg md:block relative overflow-hidden group bg-black text-white hover:bg-white hover:text-black"
            >
              <span className="relative inline-block after:block after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 group-hover:after:w-full">
                Get a Free Audit
              </span>
            </button>
            <div className="h-12 w-12 mr-4 cursor-pointer lg:hidden">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 12H20M4 8H20M4 16H12"
                  stroke="#000000"
                  strokeWidth="0.696"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Header;
