import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function TopHeader() {
  return (
    <div className="bg-yellow-900 text-white text-sm py-2 px-6 lg:px-16 flex justify-between items-center">
      {/* Left: Contact Info */}
      <div className="flex flex-wrap gap-6 items-center">
        <div className="flex items-center gap-2">
          <FaPhoneAlt className="text-yellow-300" />
          <span>+91 98765 43210</span>
        </div>
        <div className="flex items-center gap-2">
          <FaEnvelope className="text-yellow-300" />
          <span>info@easternindiatravels.com</span>
        </div>
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-yellow-300" />
          <span>Kolkata, West Bengal, India</span>
        </div>
      </div>

      {/* Right: Social Media Icons */}
      <div className="flex gap-4">
        <a
          href="#"
          aria-label="Facebook"
          className="hover:text-yellow-300 transition-colors"
        >
          <FaFacebookF />
        </a>
        <a
          href="#"
          aria-label="Twitter"
          className="hover:text-yellow-300 transition-colors"
        >
          <FaTwitter />
        </a>
        <a
          href="#"
          aria-label="Instagram"
          className="hover:text-yellow-300 transition-colors"
        >
          <FaInstagram />
        </a>
        <a
          href="#"
          aria-label="LinkedIn"
          className="hover:text-yellow-300 transition-colors"
        >
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  );
}
