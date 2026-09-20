import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div id="container" className="container ">
      <div
        id="nav-items-container"
        className="flex flex-row items-center justify-between"
      >
        <div id="logo">EdgeForm</div>

        <div
          id="nav-links-container"
          className="hidden md:flex flex-row items-center justify-center gap-7"
        >
          <div id="products">
            <Link href="#">Products</Link>
          </div>

          <div id="solutions">
            <Link href="#">Solutions</Link>
          </div>

          <div id="resources">
            <Link href="#">Resources</Link>
          </div>

          <div id="pricing">
            <Link href="#">Pricing</Link>
          </div>
        </div>

        <div
          id="navbar-cta-container"
          className="hidden md:flex flex-row items-center justify-center gap-7"
        >
          <Link href="#">Login</Link>
          <Link href="#">Contact Sales</Link>

          <Link href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m21 21-4.34-4.34" />
              <circle cx="11" cy="11" r="8" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
