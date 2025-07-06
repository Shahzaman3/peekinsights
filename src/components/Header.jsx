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
        <div className="flex items-center gap-4 mr-4 text-xl font-light">
          <a className="hidden text-base lg:block" href="">Beneifts</a>
          <a className="hidden text-base lg:block" href="">Testimonials</a>
          <a className="hidden text-base lg:block" href="">What's Included</a>
          <a className="hidden text-base lg:block" href="">How It Works</a>
          <a className="hidden text-base lg:block" href="">Pricing</a>
          <button className="hidden md:block items-center my-auto py-1 bg-black text-white rounded-xl border-2 border-black hover:bg-white hover:text-black">
            <a className="px-4 text-sm" href="">
              Get a free Audit
            </a>
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
