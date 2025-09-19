import React from "react";
import { motion } from "framer-motion";
import { FaBuilding, FaPlane, FaSmile } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";

export default function AboutSection() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <section className="bg-white text-zinc-900 py-18 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-16 lg:gap-24">
        
        {/* Left: Image & Decorative Elements */}
        <motion.div
          className="relative order-2 lg:order-1"
          initial={{ opacity: 0, x: isMobile ? 0 : -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="w-full h-96 md:h-[500px] overflow-hidden rounded-3xl shadow-3xl transform -rotate-3"
            whileHover={{ rotate: 0, scale: 1.02 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="https://img.freepik.com/free-photo/travel-concept-with-landmarks_23-2149153256.jpg?ga=GA1.1.968781606.1742631930&semt=ais_hybrid&w=740&q=80" 
              alt="Misty landscape of Eastern India"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-full bg-[#b8860b] opacity-20 blur-2xl z-0"></div>
          <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-rose-500 opacity-20 blur-2xl z-0"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-green-500 opacity-20 blur-2xl z-0 hidden md:block"></div>
        </motion.div>

        {/* Right: Text Content */}
        <motion.div
          className="order-1 lg:order-2"
          initial={{ opacity: 0, x: isMobile ? 0 : 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 leading-tight tracking-tight">
              Crafting Unforgettable Journeys
            </h2>
          </div>
          <motion.div
            className="h-1.5 w-24 bg-gradient-to-r from-[#b8860b] to-[#8b6508] rounded-full mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6 }}
          ></motion.div>
          <p className="text-xl text-zinc-600 mb-6 font-light">
            With decades of experience, we are your premier choice for curated adventures across the mesmerizing landscapes of Eastern India.
          </p>
          <p className="text-base text-zinc-700 mb-8 leading-relaxed">
            Our passion lies in revealing the soul of the region, from the misty hills of Darjeeling to the enigmatic Sundarbans, and the vibrant heritage of Kolkata. We promise not just a trip, but an <b>authentic, luxurious, and personalized</b> experience that will create cherished memories for a lifetime.
          </p>
          
          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 }
              }
            }}
          >
            {[
              { icon: <FaBuilding />, value: "15+", label: "Years in Business" },
              { icon: <FaPlane />, value: "2500+", label: "Happy Travelers" },
              { icon: <FaSmile />, value: "100%", label: "Satisfaction Rate" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-3xl text-[#b8860b] mb-2">{stat.icon}</div>
                <span className="text-3xl font-bold text-zinc-900">{stat.value}</span>
                <span className="text-sm text-zinc-600">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
