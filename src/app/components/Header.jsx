"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes, FaSearch } from "react-icons/fa";


const Header = () => {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();
  const menu = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Popular", path: "/popular" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <header className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto  py-6 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">
          🍔 Food<span className="text-black">Zone</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          {menu.map((item, index) => (
            <Link 
              key={index}
              href={item.path}
              className={`cursor-pointer px-2 py-1 rounded-2xl hover:text-black transition duration-300 ${pathname == item.path ? "bg-red-600 text-white" : ""}`}
            >
              {item.name}
            </Link>
          ))}
        </ul>

        {/* Search + Cart */}
        <div className="flex items-center gap-5">
          {/* Search */}
          <div className="hidden lg:flex items-center bg-white text-black rounded-full px-3 py-1">
            <input
              type="text"
              placeholder="Search food..."
              className="outline-none px-2 text-sm bg-transparent"
            />
            <FaSearch />
          </div>

          {/* Cart */}
          <div className="relative cursor-pointer text-xl">
            <FaShoppingCart />
            
          </div>

          {/* Mobile Menu Icon */}
          <div
            className="md:hidden text-xl cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-orange-500">
          <ul className="flex flex-col items-center gap-6 py-6 font-medium">
            {menu.map((item, index) => (
              <li key={index} className="hover:text-black cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
