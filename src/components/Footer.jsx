import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  const [form, setForm] = useState({
    name: "",
    email: "", // ✅ Added email state
    number: "",
    arrival: "",
    departure: "",
    adults: "",
    children: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "919337124745";
    const message = encodeURIComponent(
      `Booking Request:
        Name: ${form.name}
        Email: ${form.email}            // ✅ Included email
        Phone: ${form.number}
        Arrival: ${form.arrival}
        Departure: ${form.departure}
        Adults: ${form.adults}
        Children: ${form.children}
        Message: ${form.message}`
    );

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    const whatsappUrl = isMobile
      ? `whatsapp://send?phone=${phoneNumber}&text=${message}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <footer className="bg-gradient-to-br from-zinc-900 to-zinc-950 text-white py-16 px-6 sm:px-10 lg:px-20 relative overflow-hidden">
      {/* Background radial gradients */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-amber-400 opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-yellow-300 opacity-10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Left Column: Contact Info + Quick Links */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-extrabold text-amber-500 mb-4">
              Eastern India Travels
            </h3>
            <address className="space-y-4 not-italic text-zinc-400">
              <div className="flex  gap-3">
                <FaMapMarkerAlt className="text-amber-500 text-xl" />
                <span>
                  Address - Plot no - 1934/6866, Kishan Nagar, Satya Vihar,{" "}
                  <br /> Rasulgarh, Bhubaneswar, Odisha 751010
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-amber-500 text-xl" />
                <span>info@easternindiatravels.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-amber-500 text-xl" />
                <span>+91 9337124745,+91 8456840041</span>
              </div>
            </address>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4 uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <a
                  href="/"
                  className="hover:text-amber-500 transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/tours"
                  className="hover:text-amber-500 transition-colors duration-300"
                >
                  Tours
                </a>
              </li>
              <li>
                <a
                  href="/gallery"
                  className="hover:text-amber-500 transition-colors duration-300"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="/destination"
                  className="hover:text-amber-500 transition-colors duration-300"
                >
                  Destination
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-amber-500 transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="hover:text-amber-500 transition-colors duration-300"
                >
                  Blog
                </a>
              </li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://www.facebook.com/people/Eastern-India-Travels/61567136137827/?sk=grid"
                aria-label="Facebook"
                className="text-zinc-500 hover:text-amber-500 transition-colors duration-300 text-xl"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/easternindiatravels/"
                aria-label="Instagram"
                className="text-zinc-500 hover:text-amber-500 transition-colors duration-300 text-xl"
              >
                <FaInstagram />
              </a>
              {/* <a
                href="#"
                aria-label="Twitter"
                className="text-zinc-500 hover:text-amber-500 transition-colors duration-300 text-xl"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-zinc-500 hover:text-amber-500 transition-colors duration-300 text-xl"
              >
                <FaLinkedinIn />
              </a> */}
            </div>
          </div>
        </div>

        {/* Middle Columns: Tour Packages */}
        <div className="lg:col-span-2 grid grid-cols-2 gap-8 text-zinc-400">
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">Odisha</h4>
            <p className="flex flex-col gap-1">
              <Link
                to="/tour-package/devotional"
                className="hover:text-yellow-400"
              >
                Devotional Tours
              </Link>
              <Link to="/tour-package/tribal" className="hover:text-yellow-400">
                Tribal Tours
              </Link>
              <Link to="/tour-package/wild" className="hover:text-yellow-400">
                Wildlife & Adventure Tours
              </Link>
              <Link to="/tour-package/senior" className="hover:text-yellow-400">
                Senior Citizen Tours
              </Link>
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-2">
              North East (Sikkim & Darjeeling)
            </h4>
            <p className="flex flex-col gap-1">
              <Link
                to="/popular-tours/north-east/offbeat"
                className="hover:text-yellow-400"
              >
                Offbeat & Scenic Excursion
              </Link>
              <Link
                to="/popular-tours/north-east/honeymoon"
                className="hover:text-yellow-400"
              >
                Honeymoon Special Tours
              </Link>
              <Link
                to="/popular-tours/north-east/combo"
                className="hover:text-yellow-400"
              >
                Northeast Combo Tours
              </Link>
              <Link
                to="/popular-tours/north-east/arunachal"
                className="hover:text-yellow-400"
              >
                Arunchal Pradesh Tour
              </Link>
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-2">
              <Link to="/packages/assam" className="hover:text-yellow-400">
                Assam
              </Link>
            </h4>
            <p>
              Wildlife <br /> Spiritual Tours <br /> Scenic Tours
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-2">
              <Link to="/packages/kolkata" className="hover:text-yellow-400">
                Kolkata
              </Link>
            </h4>
            <p>
              City Tours <br /> Sundarban Tours <br /> Gangasagar Tours
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-2">
              <Link to="/packages/up" className="hover:text-yellow-400">
                Uttar Pradesh
              </Link>
            </h4>
            <p>
              Varanasi <br /> Prayagraj <br /> Mathura <br /> Agra Tours
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-2">
              <Link to="/packages/vizag" className="hover:text-yellow-400">
                Vizag
              </Link>
            </h4>
            <p>Vizag & Araku Valley Tours</p>
          </div>
        </div>

        {/* Right Column: Booking Form */}
        <div className="bg-zinc-800 p-3 rounded-xl shadow-lg space-y-4">
          <h3 className="text-xl font-bold text-white mb-4 uppercase">
            Booking Request
          </h3>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-700 focus:outline-none focus:border-amber-500"
          />
          <input
            type="tel"
            name="number"
            placeholder="Phone Number"
            value={form.number}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-700 focus:outline-none focus:border-amber-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-700 focus:outline-none focus:border-amber-500"
          />
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="arrival" className="text-sm text-zinc-400 mb-1">
                Arrival Date
              </label>
              <input
                type="datetime-local"
                id="arrival"
                name="arrival"
                value={form.arrival}
                onChange={handleChange}
                className="px-2 py-2 rounded-lg bg-zinc-900 border border-zinc-700 focus:outline-none focus:border-amber-500"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="departure" className="text-sm text-zinc-400 mb-1">
                Departure Date
              </label>
              <input
                type="datetime-local"
                id="departure"
                name="departure"
                value={form.departure}
                onChange={handleChange}
                className="px-2 py-2 rounded-lg bg-zinc-900 border border-zinc-700 focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-1 grid-cols-2 gap-4">
            <input
              type="number"
              name="adults"
              placeholder="No. of Persons"
              value={form.adults}
              onChange={handleChange}
              className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-700 focus:outline-none focus:border-amber-500"
            />
            <input
              type="number"
              name="children"
              placeholder="No. of Children"
              value={form.children}
              onChange={handleChange}
              className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-700 focus:outline-none focus:border-amber-500"
            />
          </div>
          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-700 focus:outline-none focus:border-amber-500"
          />
          <button
            onClick={handleWhatsAppClick}
            className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg font-semibold transition-colors duration-300"
          >
            Send via WhatsApp
          </button>
        </div>
      </div>

      <div className="mt-6 border-t border-zinc-700 text-zinc-500 text-center py-6 text-sm">
        <p>
          &copy; {new Date().getFullYear()} Eastern India Travels. All rights
          reserved.
        </p>
        {/* <p className="mt-2">
          <a href="#" className="hover:text-amber-500 transition-colors duration-300">
            Privacy Policy
          </a>{" "}
          <span className="mx-2">|</span>
          <a href="#" className="hover:text-amber-500 transition-colors duration-300">
            Terms of Service
          </a>
        </p> */}
      </div>
    </footer>
  );
}
