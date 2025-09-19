import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPlaneDeparture,
  FaCompass,
  FaGem,
  FaCrown,
  FaEnvelope,
  FaPhoneAlt,
  FaCalendarAlt,
  FaUser,
  FaChild,
  FaPaperPlane,
} from "react-icons/fa";
import { Link } from "react-router-dom";

// Components
const FloatingOrb = ({ delay = 0, duration = 6, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 0.6, 0.8, 0.6, 0],
      scale: [0, 1, 1.2, 1, 0],
      y: [0, -20, -40, -20, 0],
      x: [0, 10, -10, 5, 0],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className={`absolute rounded-full blur-xl ${className}`}
  />
);

const PremiumBadge = ({ icon: Icon, text, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.8 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    className="flex items-center gap-3 bg-gradient-to-r from-[#D4AF37]/20 to-[#FFBF00]/20 backdrop-blur-md px-6 py-3 rounded-full border border-[#D4AF37]/30 shimmer"
  >
    <Icon className="text-[#D4AF37] text-lg" />
    <span className="text-[#F9E076] font-medium tracking-wide">{text}</span>
  </motion.div>
);

const FormInput = ({
  icon: Icon,
  type,
  name,
  placeholder,
  required = false,
  ...props
}) => (
  <div className="relative">
    <Icon className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400" />
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      {...props} // ✅ Pass value and onChange
      className="w-full pl-12 pr-4 py-3 bg-white/10 text-white rounded-lg border border-white/20 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all duration-300 placeholder-gray-400"
    />
  </div>
);

const FormTextarea = ({ name, placeholder, ...props }) => (
  <textarea
    name={name}
    placeholder={placeholder}
    rows="4"
    {...props} // ✅ Pass value and onChange
    className="w-full px-4 py-3 bg-white/10 text-white rounded-lg border border-white/20 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all duration-300 placeholder-gray-400"
  />
);

export default function HeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    arrivalDate: "",
    departureDate: "",
    persons: "",
    children: "",
    message: "",
  });

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = "919337124745"; // ✅ use correct number with country code

    const message = `
*New Booking Enquiry*
---------------------------------
👤 Name: ${formData.name}
📞 Phone: ${formData.phone}
📧 Email: ${formData.email}
📅 Arrival: ${formData.arrivalDate}
📅 Departure: ${formData.departureDate}
👥 Persons: ${formData.persons}
👶 Children: ${formData.children}
📝 Message: ${formData.message || "N/A"}
---------------------------------
    `;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");

    // reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      arrivalDate: "",
      departureDate: "",
      persons: "",
      children: "",
      message: "",
    });
  };

  return (
    <section className="relative py-14 flex items-center justify-center overflow-hidden min-h-screen">
      {/* Hero Background with Premium Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1121&auto=format&fit=crop&ixlib=rb-4.1.0"
          alt="Eastern India landscape"
          className="w-full h-full object-cover scale-105 transition-transform duration-[20s] hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#9B870C]/95 via-gray-900/80 to-[#CD7F32]/90"></div>
        <FloatingOrb
          delay={0}
          duration={8}
          className="top-20 right-20 w-96 h-96 bg-gradient-to-r from-[#D4AF37]/30 to-[#D4AF37]/30"
        />
        <FloatingOrb
          delay={2}
          duration={10}
          className="bottom-20 left-20 w-72 h-72 bg-gradient-to-r from-[#FFBF00]/25 to-[#F9E076]/25"
        />
        <FloatingOrb
          delay={4}
          duration={12}
          className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#CD7F32]/20 to-[#D4AF37]/20"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
        {/* Left Section: Content */}
        <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-8 flex flex-wrap justify-center lg:justify-start gap-4"
          >
            <PremiumBadge icon={FaCrown} text="Luxury Experiences" delay={0.2} />
            <PremiumBadge icon={FaGem} text="Curated Journeys" delay={0.4} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white mb-6"
          >
            <span className="bg-gradient-to-r from-[#F9E076] via-[#D4AF37] to-[#FFBF00] bg-clip-text text-transparent">
              Discover
            </span>{" "}
            <span className="text-white">Eastern India</span>
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1, ease: "easeOut" }}
              className="block md:inline-block mt-2 md:mt-0 ml-0 md:ml-2 text-[#F9E076] font-normal italic"
            >
              with Unmatched Elegance
            </motion.span>
          </motion.h1>

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "200px", opacity: 1 }}
            transition={{ delay: 1.2, duration: 1.5, ease: "easeOut" }}
            className="h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent rounded-full mb-8 shadow-[0_0_20px_rgba(212,175,55,0.5)]"
          ></motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
            className="max-w-4xl text-xl font-light text-[#F9E076]/90 leading-relaxed mb-12"
          >
            Embark on extraordinary journeys through untouched landscapes,
            ancient heritage, and vibrant cultures.{" "}
            <span className="text-[#D4AF37] font-medium">
              Eastern India Travels
            </span>{" "}
            curates exclusive, bespoke experiences for the most discerning
            travelers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 1, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6 mb-16"
          >
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/booking"
                className="group relative overflow-hidden flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-[#D4AF37] to-[#FFBF00] text-white font-semibold rounded-xl shadow-[0_10px_30px_rgba(212,175,55,0.3)] hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all duration-500 border border-[#D4AF37]/30"
              >
                <FaPlaneDeparture className="text-xl group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-lg">Begin Your Journey</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/destination"
                className="group flex items-center gap-4 px-10 py-5 bg-white/10 text-[#F9E076] font-semibold rounded-xl shadow-[0_5px_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all duration-500 border border-[#D4AF37]/30 backdrop-blur-md"
              >
                <FaCompass className="text-xl group-hover:rotate-180 transition-transform duration-500" />
                <span className="text-lg">Explore Destinations</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Section: Booking Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.6, ease: "easeOut" }}
          className="w-full max-w-md bg-gradient-to-br from-[#9B870C]/20 to-[#CD7F32]/20 backdrop-blur-md p-6 rounded-3xl border border-[#D4AF37]/30 shadow-2xl"
        >
          <h2 className="text-2xl font-bold text-center text-white mb-6">
            Book Your Exclusive Trip
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <FormInput
              icon={FaUser}
              type="text"
              name="name"
              placeholder="Name *"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <FormInput
              icon={FaPhoneAlt}
              type="tel"
              name="phone"
              placeholder="Phone Number *"
              required
              value={formData.phone}
              onChange={handleChange}
            />
            <FormInput
              icon={FaEnvelope}
              type="email"
              name="email"
              placeholder="Email *"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <FormInput
              icon={FaCalendarAlt}
              type="date"
              name="arrivalDate"
              required
              value={formData.arrivalDate}
              onChange={handleChange}
            />
            <FormInput
              icon={FaCalendarAlt}
              type="date"
              name="departureDate"
              required
              value={formData.departureDate}
              onChange={handleChange}
            />
            <div className="grid grid-cols-2 gap-4">
              <FormInput
                icon={FaUser}
                type="number"
                name="persons"
                placeholder="No. of Persons *"
                required
                value={formData.persons}
                onChange={handleChange}
              />
              <FormInput
                icon={FaChild}
                type="number"
                name="children"
                placeholder="No. of Children"
                value={formData.children}
                onChange={handleChange}
              />
            </div>
            <FormTextarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            />
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full relative overflow-hidden flex items-center justify-center gap-4 px-10 py-4 bg-gradient-to-r from-[#D4AF37] to-[#FFBF00] text-white font-semibold rounded-xl shadow-[0_10px_30px_rgba(212,175,55,0.3)] hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all duration-500 border border-[#D4AF37]/30 group"
            >
              <FaPaperPlane className="text-xl group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-lg">Send</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
