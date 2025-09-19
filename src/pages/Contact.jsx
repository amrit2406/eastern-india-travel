import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPaperPlane,
  FaClock,
} from "react-icons/fa";
import WhatsAppFloatingButton from "../components/WhatsAppFloatButton";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleFocus = (field) => setFocused({ ...focused, [field]: true });

  const handleBlur = (field) => {
    if (!form[field]) setFocused({ ...focused, [field]: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <main className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-yellow-300 via-yellow-100 to-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-200 rounded-full filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-yellow-300 rounded-full filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-block bg-yellow-700 text-yellow-100 text-sm font-medium px-4 py-1 rounded-full mb-6">
            GET IN TOUCH
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-800 mb-6 tracking-tight leading-tight">
            Contact{" "}
            <span className="text-yellow-600">Eastern India Travels</span>
          </h1>
          <p className="text-lg md:text-xl text-yellow-900 font-light max-w-2xl mx-auto leading-relaxed">
            Reach out for custom trips, inquiries, and support. Our team is here
            to make your Eastern India journey seamless and memorable.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <div className="h-1 w-12 bg-yellow-500 rounded-full"></div>
            <div className="h-1 w-6 bg-yellow-300 rounded-full"></div>
            <div className="h-1 w-8 bg-yellow-400 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Info + Form Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info Panel */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl shadow-lg p-8 transform transition-all duration-300 hover:-translate-y-2">
              <h2 className="text-3xl font-bold text-yellow-800 mb-8">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-yellow-600 flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-yellow-800 text-lg">
                      Our Location
                    </h3>
                    <p className="text-yellow-900 mt-1">
                      Plot no - 1934/6866, Kishan Nagar, Satya Vihar, Rasulgarh,
                      Bhubaneswar, Odisha 751010
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-yellow-600 flex items-center justify-center flex-shrink-0">
                    <FaPhoneAlt className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-yellow-800 text-lg">
                      Phone Number
                    </h3>
                    <p className="text-yellow-900 mt-1">+91 9337124745</p>
                    <p className="text-yellow-900 mt-1">+91 8456840041</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-yellow-600 flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-yellow-800 text-lg">
                      Email Address
                    </h3>
                    <p className="text-yellow-900 mt-1">
                      info@easternindiatravels.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="font-bold text-yellow-800 text-lg mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/people/Eastern-India-Travels/61567136137827/?sk=grid"
                    className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-700 hover:bg-yellow-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                    aria-label="Facebook"
                  >
                    <FaFacebookF className="text-xl" />
                  </a>
                  <a
                    href="https://www.instagram.com/easternindiatravels/"
                    className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-700 hover:bg-yellow-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="text-xl" />
                  </a>
                  {/* <a 
                    href="#" 
                    className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-700 hover:bg-yellow-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                    aria-label="Twitter"
                  >
                    <FaTwitter className="text-xl" />
                  </a> */}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-yellow-600 flex items-center justify-center flex-shrink-0">
                  <FaClock className="text-white text-xl" />
                </div>
                <h3 className="font-bold text-yellow-800 text-xl">
                  Office Hours
                </h3>
              </div>
              <ul className="text-yellow-900 space-y-2 pl-16">
                <li className="flex items-center">
                  <span className="font-medium">Monday - Saturday:</span>
                  <span className="ml-2">9:00 AM - 7:00 PM</span>
                </li>
                <li className="flex items-center">
                  <span className="font-medium">Sunday & Holidays:</span>
                  <span className="ml-2">Closed</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl shadow-lg p-8 transform transition-all duration-300 hover:-translate-y-2">
            <h2 className="text-3xl font-bold text-yellow-800 mb-2">
              Send Us a Message
            </h2>
            <p className="text-yellow-700 mb-8">
              Have questions? We'd love to hear from you.
            </p>

            {submitted && (
              <div className="bg-green-100 text-green-800 text-center font-semibold p-4 rounded-lg mb-6 flex items-center justify-center gap-2">
                <FaPaperPlane />
                <span>Thank you! We'll be in touch soon.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  placeholder=" "
                  required
                  value={form.name}
                  onChange={handleChange}
                  onFocus={() => handleFocus("name")}
                  onBlur={() => handleBlur("name")}
                  className="w-full px-4 pt-6 pb-2 rounded-lg border border-yellow-300 focus:border-yellow-600 focus:ring-2 focus:ring-yellow-400 transition outline-none bg-white"
                />
                <label
                  className={`absolute left-4 transition-all duration-300 ${
                    focused.name || form.name
                      ? "text-yellow-600 text-xs top-2"
                      : "text-yellow-700 top-4"
                  }`}
                >
                  Your Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder=" "
                  required
                  value={form.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus("email")}
                  onBlur={() => handleBlur("email")}
                  className="w-full px-4 pt-6 pb-2 rounded-lg border border-yellow-300 focus:border-yellow-600 focus:ring-2 focus:ring-yellow-400 transition outline-none bg-white"
                />
                <label
                  className={`absolute left-4 transition-all duration-300 ${
                    focused.email || form.email
                      ? "text-yellow-600 text-xs top-2"
                      : "text-yellow-700 top-4"
                  }`}
                >
                  Your Email
                </label>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  placeholder=" "
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus("message")}
                  onBlur={() => handleBlur("message")}
                  className="w-full px-4 pt-6 pb-2 rounded-lg border border-yellow-300 focus:border-yellow-600 focus:ring-2 focus:ring-yellow-400 transition outline-none resize-none bg-white"
                />
                <label
                  className={`absolute left-4 transition-all duration-300 ${
                    focused.message || form.message
                      ? "text-yellow-600 text-xs top-2"
                      : "text-yellow-700 top-4"
                  }`}
                >
                  Your Message
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-600 to-yellow-800 text-white font-semibold py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <span>Send Message</span>
                <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-yellow-800 mb-6 text-center">
            Find Us on the Map
          </h2>
          <div className="rounded-xl overflow-hidden shadow-md h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.5693737137276!2d85.86764577506065!3d20.31140978116444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190b0b21553449%3A0xfe9c7317982e08e1!2sEastern%20India%20Travels!5e1!3m2!1sen!2sin!4v1758278282810!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
      <WhatsAppFloatingButton />
    </main>
  );
}
