"use client";

import Link from "next/link";
import { useRef, useState } from "react";

const navItems = ["Products", "Solutions", "Resources", "Pricing"];

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
  });

  const navRef = useRef(null);

  const handleMouseEnter = (e: any, item: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const navRect = navRef.current.getBoundingClientRect();

    setPosition({
      left: rect.left - navRect.left,
      width: rect.width,
    });

    setActiveItem(item);
  };

  return (
    <div className="container py-4">
      <div className="flex items-center justify-between">
        <div>EdgeForm</div>

        <div
          ref={navRef}
          className="relative hidden md:flex items-center gap-7"
          onMouseLeave={() => setActiveItem(null)}
        >
          <div
            className={`
              pointer-events-none
              absolute
              top-1/2
              h-11
              -translate-y-1/2
              rounded-lg
              border
              border-[#2f2f2f]
              transition-all
              duration-300
              ease-out
              ${activeItem ? "opacity-100" : "opacity-0"}
            `}
            style={{
              left: position.left,
              width: position.width,
            }}
          />
          <div className="flex flex-row items-center gap-2">
            {navItems.map((item) => (
              <Link
              key={item}
                href="#"
                className="flex flex-row items-center justify-center gap-2 relative z-10 px-3 py-2"
                onMouseEnter={(e) => handleMouseEnter(e, item)}
              >
                {item}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevrons-up-down preview-icon"
                >
                  <path d="m7 15 5 5 5-5" />
                  <path d="m7 9 5-5 5 5" />
                </svg>
              </Link>
          ))}
          </div>
          
        </div>

        <div className="hidden md:flex items-center gap-1">
          <Link
            className="border-1 border-[#2f2f2f] rounded-full px-3 py-1 "
            href="#"
          >
            Login
          </Link>
          <Link
            className="border-1 border-[#2f2f2f] rounded-full px-3 py-1"
            href="#"
          >
            Contact Sales
          </Link>

          <Link
            className="border-1 border-[#2f2f2f] rounded-full h-8 w-8 flex items-center justify-center"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
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
