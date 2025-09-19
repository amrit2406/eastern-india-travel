import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  Facebook,
  Instagram,
  Twitter,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Tours & Packages", href: "/tours" },
  { name: "Destination", href: "/destination" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blogs", href: "/blog" },
  { name: "Contact", href: "/contact" },
  {
    name: "Book Now",
    href: "/booking",
    style:
      "bg-gradient-to-r from-yellow-700 to-yellow-900 text-white px-4 py-2 rounded-full font-semibold shadow-md",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* 🔹 Topbar */}
      <div className="hidden md:block w-full bg-gradient-to-r from-yellow-900 to-yellow-700 text-yellow-100 text-sm py-2 px-6 fixed top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Left: Contact Info */}
          <div className="flex flex-wrap gap-6 items-center">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>info@easternindiatravels.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+91 9337124745</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Bhubaneswar, Odisha 751010</span>
            </div>
          </div>

          {/* Right: Social Media */}
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/people/Eastern-India-Travels/61567136137827/?sk=grid"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/easternindiatravels/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition"
            >
              <Instagram className="w-5 h-5" />
            </a>
            {/* <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition"
            >
              <Twitter className="w-5 h-5" />
            </a> */}
          </div>
        </div>
      </div>

      {/* 🔹 Main Navbar */}
      <nav className="fixed w-full z-40 bg-white shadow-lg mt-0 md:mt-8">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-22">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Eastern India Travels Logo"
              className="w-24 h-20 object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={
                  link.style
                    ? link.style
                    : "text-black font-medium hover:text-yellow-800 transition-all duration-150"
                }
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="text-black text-3xl" />
            ) : (
              <Menu className="text-black text-3xl" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className="md:hidden bg-white shadow-xl py-4 px-6 rounded-b-lg"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={
                    link.style
                      ? link.style + " w-fit"
                      : "text-black font-medium hover:text-yellow-800 transition"
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Spacer to prevent content overlap */}
      <div className="md:h-30 h-22"></div>
    </>
  );
}
