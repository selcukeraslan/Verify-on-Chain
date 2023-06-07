import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActivePath = (pathname) => {
    return location.pathname === pathname ? "!text-blue-500" : "!text-white md:!text-black";
  };

  return (
    <header>
      <nav className="flex">
        <div className="logo">
          <Link to="/">
            <img src="images/logo_yeni_cut.png" className="u-logo-image u-logo-image-1 w-[300px] h-30 " />
          </Link>
        </div>
        <div
          className={`menu ${
            isMobileMenuOpen ? "open !-left-10" : ""
          } absolute md:relative !translate-x-0 !translate-y-0 -left-0 duration-300 -top-10 w-fit px-20 h-screen md:h-fit md:top-auto md:left-auto z-30 bg-black/80 md:bg-white`}
        >
          <ul className="flex flex-col md:flex-row gap-5  items-center">
            <li></li>
            <li>
              <Link to="/" className={isActivePath("/")}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={isActivePath("/about")}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className={isActivePath("/contact")}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/explore" className={isActivePath("/explore")}>
                Explore
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 cursor-pointer md:hidden" onClick={handleMobileMenuToggle}>
          <span className="w-[30px] h-1 bg-black"></span>
          <span className="w-[30px] h-1 bg-black"></span>
          <span className="w-[30px] h-1 bg-black"></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
