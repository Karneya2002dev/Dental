import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";
import logo from "../assets/logo.jpeg"

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      isActive
        ? "text-primary font-semibold"
        : "text-gray-700 hover:text-primary"
    }
  >
    {children}
  </NavLink>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3">
          {/* Image Logo */}
          <img
            src={logo}// 👈 place your logo file inside "public/logo.png"
            alt="DentCare Logo"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <div className="text-lg font-semibold">DentCare Clinic</div>
            <div className="text-xs text-gray-500">Trusted dental care</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/services">Services</NavItem>
          <NavItem to="/team">Team</NavItem>
          
          <NavItem to="/contact">Contact</NavItem>
          <Link
            to="/contact"
            className="ml-4 px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden border-t bg-white shadow-sm">
          <div className="flex flex-col gap-2 p-4">
            <Link to="/" className="py-2 hover:text-primary">
              Home
            </Link>
            <Link to="/about" className="py-2 hover:text-primary">
              About
            </Link>
            <Link to="/services" className="py-2 hover:text-primary">
              Services
            </Link>
            <Link to="/team" className="py-2 hover:text-primary">
              Team
            </Link>
           
            <Link to="/contact" className="py-2 hover:text-primary">
              Contact
            </Link>
            <Link
              to="/contact"
              className="mt-2 px-4 py-2 rounded-lg bg-primary text-white text-center hover:bg-primary/90 transition"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
