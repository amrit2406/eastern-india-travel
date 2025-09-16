import React from "react";
import { motion } from "framer-motion";
import {
  FaPlaneDeparture,
  FaCompass,
  FaStar,
  FaGem,
  FaFeatherAlt,
  FaCrown,
} from "react-icons/fa";
import { Link } from "react-router-dom";

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

export default function HeroSection() {
  return (
    <section className="relative  py-14 flex items-center justify-center overflow-hidden">
      {/* Hero Background with Premium Overlay */}
      <div className="absolute inset-0 z-0">
        {/* <div className="w-full h-full bg-gradient-to-br from-[#9B870C] via-gray-900 to-[#CD7F32] scale-105"></div> */}
        <img
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1121&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Eastern India landscape"
          className="w-full h-full object-cover scale-105 transition-transform duration-[20s] hover:scale-110"
        />
        {/* Premium Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#9B870C]/95 via-gray-900/80 to-[#CD7F32]/90"></div>

        {/* Animated Luxury Orbs */}
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

        {/* Sophisticated Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 flex flex-col items-center justify-center min-h-screen text-center">
        {/* Premium Badges */}
        <div className="mb-8 flex flex-wrap justify-center gap-4 hidden md:flex">
          <PremiumBadge icon={FaCrown} text="Luxury Experiences" delay={0.2} />
          <PremiumBadge icon={FaGem} text="Curated Journeys" delay={0.4} />
          <PremiumBadge icon={FaFeatherAlt} text="Bespoke Travel" delay={0.6} />
        </div>

        {/* Main Heading with Stunning Typography */}
        <motion.h1
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white mb-6 text-center"
        >
          <span className="bg-gradient-to-r from-[#F9E076] via-[#D4AF37] to-[#FFBF00] bg-clip-text text-transparent">
            Discover
          </span>{" "}
          <span className="text-white">Eastern India</span>
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
            className="ml-2 text-[#F9E076] font-normal italic"
          >
            with Unmatched Elegance
          </motion.span>
        </motion.h1>

        {/* Animated Luxury Divider */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "200px", opacity: 1 }}
          transition={{ delay: 1.2, duration: 1.5, ease: "easeOut" }}
          className="h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent rounded-full mb-8 shadow-[0_0_20px_rgba(212,175,55,0.5)]"
        ></motion.div>

        {/* Premium Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
          className="max-w-4xl text-xl md:text-xl font-light text-[#F9E076]/90 leading-relaxed mb-12"
        >
          Embark on extraordinary journeys through untouched landscapes, ancient
          heritage, and vibrant cultures.
          <span className="text-[#D4AF37] font-medium">
            {" "}
            Eastern India Travels{" "}
          </span>
          curates exclusive, bespoke experiences for the most discerning
          travelers.
        </motion.p>

        {/* Premium Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 1, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-6 mb-16"
        >
          <div className="flex gap-6">
            {/* Begin Your Journey Button */}
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to="/booking"
                className="group relative overflow-hidden flex items-center gap-4 px-10 py-5 
                     bg-gradient-to-r from-[#D4AF37] to-[#FFBF00] text-white font-semibold 
                     rounded-xl shadow-[0_10px_30px_rgba(212,175,55,0.3)] 
                     hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] 
                     transition-all duration-500 border border-[#D4AF37]/30"
              >
                <FaPlaneDeparture className="text-xl group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-lg">Begin Your Journey</span>
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                          translate-x-[-100%] group-hover:translate-x-[100%] 
                          transition-transform duration-700"
                ></div>
              </Link>
            </motion.div>

            {/* Explore Destinations Button */}
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to="/destination"
                className="group flex items-center gap-4 px-10 py-5 
                     bg-white/10 text-[#F9E076] font-semibold rounded-xl 
                     shadow-[0_5px_15px_rgba(255,255,255,0.1)] 
                     hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] 
                     transition-all duration-500 border border-[#D4AF37]/30 
                     backdrop-blur-md"
              >
                <FaCompass className="text-xl group-hover:rotate-180 transition-transform duration-500" />
                <span className="text-lg">Explore Destinations</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Premium Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16"
        >
          {[
            { number: "25+", label: "Exclusive Destinations", icon: FaCompass },
            { number: "99%", label: "Satisfied Travelers", icon: FaStar },
            { number: "24/7", label: "Concierge Support", icon: FaGem },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2 + index * 0.2, duration: 0.6 }}
              className="text-center group"
            >
              <stat.icon className="text-[#D4AF37] text-2xl mb-3 mx-auto group-hover:scale-110 transition-transform duration-300" />
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#F9E076] via-[#D4AF37] to-[#FFBF00] bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-[#F9E076]/80 text-lg font-medium tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Premium Bottom Fade */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 2.5, duration: 1.5 }}
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#9B870C]/50 to-transparent"
      ></motion.div>

      {/* Floating Decorative Elements */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute top-20 left-20 w-6 h-6 border-2 border-[#D4AF37]/40 rounded-full"
      ></motion.div>

      <motion.div
        animate={{
          rotate: -360,
          y: [0, -20, 0],
        }}
        transition={{
          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-32 right-32 w-4 h-4 bg-[#D4AF37]/60 rounded-full"
      ></motion.div>

      <motion.div
        animate={{
          x: [0, 30, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 right-16 w-2 h-16 bg-gradient-to-b from-[#D4AF37]/60 to-transparent rounded-full"
      ></motion.div>

      {/* Add CSS for shimmer effect */}
      <style>
        {`
          .shimmer {
            position: relative;
            overflow: hidden;
          }
          
          .shimmer::after {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(
              to bottom right,
              rgba(255, 255, 255, 0) 0%,
              rgba(255, 255, 255, 0.8) 50%,
              rgba(255, 255, 255, 0) 100%
            );
            transform: rotate(30deg);
            animation: shimmer 3s infinite;
          }
          
          @keyframes shimmer {
            0% { transform: translateX(-100%) rotate(30deg); }
            100% { transform: translateX(100%) rotate(30deg); }
          }
        `}
      </style>
    </section>
  );
}
