"use client";
import { motion } from "framer-motion";
import {
  CheckCircle,
  ArrowRight,
  Sparkles,
  CloudSun,
  Calendar,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";


function TravelGuides() {
  const features = [
    {
      icon: CloudSun,
      title: "WEATHER",
      description:
        "Odisha, known as the land of temples, offers a blend of ancient traditions and scenic coastal beauty. Its tropical climate with warm temperatures and high humidity throughout the year is influenced by the nearby sea.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      delay: 0.1,
    },
    {
      icon: Calendar,
      title: "FESTIVALS & EVENTS",
      description:
        "With a rich cultural heritage, Odisha attracts travelers from across the globe. Famous for vibrant festivals like the Rath Yatra in Puri, we ensure you experience the festivities and traditions that make this region unforgettable.",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      delay: 0.2,
    },
    {
      icon: MapPin,
      title: "TRAVEL ACCESS",
      description:
        "Odisha, celebrated for its spiritual and natural treasures, welcomes visitors with ancient temples, pristine beaches, wildlife sanctuaries, and cultural landmarks. It’s easily accessible for tourists from all over the world.",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      delay: 0.3,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-yellow-50 via-white to-sky-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-200/15 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-orange-100 shadow-lg backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-black mb-6">
              <Sparkles className="w-4 h-4" />
              Travel Insights
            </div>

            <h2 className="text-2xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="text-gray-900 roboto">Explore Odisha</span>
              <span className="bg-gradient-to-r from-yellow-400 to-[#fe6a21] bg-clip-text text-transparent">
                Travel Tips
              </span>
              <br />
              <span className="text-gray-900 roboto">For Every Journey</span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the essence of India with detailed travel advice on
              weather, celebrations, and how to get around.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
          >
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Card */}
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/20 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                    {/* Background gradient on hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />

                    {/* Content */}
                    <div className="relative z-10 space-y-6">
                      {/* Icon */}
                      <motion.div
                        className={`relative w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: 5 }}
                      >
                        <IconComponent className="w-8 h-8 text-white" />

                        {/* Icon glow effect */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`}
                        />
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold  text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                        {feature.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed  group-hover:text-gray-700 transition-colors duration-300">
                        {feature.description}
                      </p>

                      {/* Learn More Link */}
                      {/* <motion.div
                        className="flex items-center gap-2 text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer"
                        whileHover={{ x: 5 }}
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 text-blue-600" />
                      </motion.div> */}
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div
                        className={`w-2 h-2 bg-gradient-to-r ${feature.color} rounded-full animate-pulse`}
                      />
                    </div>

                    {/* Bottom border accent */}
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                    />
                  </div>

                  {/* Floating badge */}
                  <motion.div
                    className="absolute -top-3 -right-3 bg-white rounded-full p-2 shadow-lg border border-gray-100 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ delay: feature.delay + 0.5, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Bottom CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <div className="bg-gradient-to-r shadow-lg from-yellow-600 to-yellow-400 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:20px_20px] opacity-30" />

              <div className="relative">
                <h3 className="text-2xl md:text-4xl roboto lg:text:5xl font-bold mb-4">
                  Ready to Explore with Us?
                </h3>
                <p className="text-black text-xl mb-8 max-w-2xl mx-auto">
                  Join thousands of happy travelers who’ve discovered the beauty
                  of India with Eastern India Travels' customized and
                  unforgettable journeys.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    className="bg-white  text-yellow-700 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group mx-auto sm:mx-0"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link to="/contact"> Get Started Today</Link>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default TravelGuides;
