import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#hero", label: "Home" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="w-full bg-black fixed top-0 left-0 z-50 shadow-md">
      <div className="w-full px-6 sm:px-8 py-4 flex justify-between items-center">
        <div className="text-[#564E58] font-bold text-lg">MyPortfolio</div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex space-x-4 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#564E58] px-3 py-1 rounded-md hover:bg-[#1f1f1f] hover:text-[#3e3940] transition duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden text-[#564E58] focus:outline-none"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden flex flex-col px-6 pb-4 space-y-2 bg-black">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-[#564E58] px-3 py-2 rounded-md hover:bg-[#1f1f1f] hover:text-[#3e3940] transition duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Header;
