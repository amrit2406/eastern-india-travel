// src/pages/PTPDetails.jsx
import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import RelatedT from "./RelatedT";
import Testi2 from "./home/Testi2";

/**
 * PTPDetails.jsx
 * - Route expected: /popular-tours/:category/:tourId/:packageId?
 * - Matches the exact TourDetails design you provided.
 *
 * Note: move the toursData object to a shared file later if desired.
 */

// sample tours data matching the fields used in the design
const toursData = {
  northeast: [
    {
      id: "meghalaya",
      name: "Meghalaya Tour",
      banner: "https://source.unsplash.com/1600x900/?meghalaya,waterfall",
      intro:
        "Discover Meghalaya — the abode of clouds. Waterfalls, living root bridges, crystal clear rivers and lush green landscapes. A rejuvenating and scenic getaway.",
      shortItinerary: [
        "Arrival at Shillong & local sightseeing",
        "Cherrapunji — waterfalls & viewpoints",
        "Dawki — Umngot River boating",
        "Mawlynnong — Asia's cleanest village",
        "Departure via Guwahati",
      ],
      expect: [
        "Comfortable stays with local experiences",
        "Expert local guides & private transport",
        "Easy-moderate walking and viewpoint visits",
        "Authentic tribal food tastings",
      ],
      itinerary: [
        {
          day: "Day 1 - Arrival & Shillong",
          detail:
            "Arrive Shillong, check-in at the hotel, visit Ward's Lake & local markets. Evening cultural walk and dinner at a local cafe.",
        },
        {
          day: "Day 2 - Cherrapunji & Nohkalikai Falls",
          detail:
            "Drive to Cherrapunji, visit Nohkalikai Falls, Seven Sisters Falls and Mawsmai Caves. Sunset viewpoint at Eco Park.",
        },
        {
          day: "Day 3 - Dawki & Umngot",
          detail:
            "Drive to Dawki for boating on the crystal-clear Umngot river and visit the India-Bangladesh border viewpoint.",
        },
        {
          day: "Day 4 - Mawlynnong & Living Root Bridge (optional)",
          detail:
            "Visit Mawlynnong village, explore living root bridge area or nearby trails and enjoy village life.",
        },
        {
          day: "Day 5 - Departure",
          detail:
            "Return to Guwahati / Shillong for onward journey. Drop at airport / railway station.",
        },
      ],
      gallery: [
        "https://source.unsplash.com/800x600/?shillong",
        "https://source.unsplash.com/800x600/?cherrapunji",
        "https://source.unsplash.com/800x600/?dawki",
        "https://source.unsplash.com/800x600/?meghalaya",
        "https://source.unsplash.com/800x600/?mawlynnong",
      ],
      shortDescription:
        "5 Days • Comfortable hotels • Local meals • Small group tours",
      priceFrom: "₹15,999",
      groupSize: "Up to 12 people",
      bestTime: "Oct - Mar",
      packages: [
        {
          id: "pkg1",
          name: "Standard Package",
          price: "₹15,999",
          description: "Comfort stays, standard meals, shared transport.",
        },
        {
          id: "pkg2",
          name: "Luxury Package",
          price: "₹24,999",
          description: "Premium stays, private transport & experiences.",
        },
      ],
    },

    {
      id: "assam-safari",
      name: "Assam Wildlife Safari",
      banner: "https://source.unsplash.com/1600x900/?kaziranga,elephant",
      intro:
        "Explore Assam's wild heart — Kaziranga National Park, tea gardens, and riverine landscapes. Ideal for wildlife lovers and nature photographers.",
      shortItinerary: [
        "Guwahati arrival & city highlights",
        "Kaziranga Safari experience",
        "Tea garden visit & local culture",
        "Departure via Guwahati",
      ],
      expect: [
        "Multiple jeep/elephant safaris (park entry included)",
        "Comfortable lodge stays near the park",
        "Local Assamese cuisine & cultural visits",
      ],
      itinerary: [
        {
          day: "Day 1 - Arrive Guwahati",
          detail:
            "Arrive Guwahati, visit Kamakhya Temple and local markets. Overnight in Guwahati.",
        },
        {
          day: "Day 2 - Travel to Kaziranga",
          detail: "Drive to Kaziranga, evening nature walk and lodge check-in.",
        },
        {
          day: "Day 3 - Safaris in Kaziranga",
          detail:
            "Early morning elephant/jeep safari, afternoon jeep safari and bird watching.",
        },
        {
          day: "Day 4 - Local excursions",
          detail:
            "Visit tea gardens, interact with local communities and return to Guwahati.",
        },
      ],
      gallery: [
        "https://source.unsplash.com/800x600/?kaziranga",
        "https://source.unsplash.com/800x600/?assam,tea",
        "https://source.unsplash.com/800x600/?elephant",
      ],
      shortDescription: "4 Days • Wildlife Safaris • Lodge stays",
      priceFrom: "₹12,499",
      groupSize: "Up to 12 people",
      bestTime: "Nov - Apr",
      packages: [
        {
          id: "pkg1",
          name: "Safari Standard",
          price: "₹12,499",
          description: "Two safaris + stay.",
        },
      ],
    },
  ],
};

const PTPDetails = () => {
  const navigate = useNavigate();
  const { category, tourId, packageId } = useParams();

  // normalize category for lookup ("north-east" -> "northeast")
  const categoryKey = (category || "").replace(/[-\s]/g, "").toLowerCase();

  // find tour
  const tour =
    (toursData[categoryKey] || []).find((t) => t.id === (tourId || "")) || null;

  // find package (optional)
  const pkg =
    tour?.packages?.find((p) => p.id === (packageId || "")) ||
    (tour?.packages && tour.packages[0]) ||
    null;

  const [activeTab, setActiveTab] = useState("overview");

  // Refs for scrolling to sections
  const overviewRef = useRef(null);
  const glanceRef = useRef(null);
  const itineraryRef = useRef(null);
  const galleryRef = useRef(null);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    arrivalDate: "",
    departureDate: "",
    persons: "",
    children: "",
    message: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app you'd POST this to backend / send email / etc.
    console.log("Form submitted:", formData, { tourId, packageId });
    alert("Thank you for your enquiry! We'll get back to you soon.");
    // Reset form
    setFormData({
      name: "",
      number: "",
      email: "",
      arrivalDate: "",
      departureDate: "",
      persons: "",
      children: "",
      message: "",
    });
  };

  // Scroll to section function (keeps same offset as your design)
  const scrollToSection = (section) => {
    setActiveTab(section);
    const refs = {
      overview: overviewRef,
      glance: glanceRef,
      itinerary: itineraryRef,
      gallery: galleryRef,
    };

    if (refs[section]?.current) {
      const y =
        refs[section].current.getBoundingClientRect().top +
        window.scrollY -
        140; // adjust sticky height
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Effect to handle scroll and update active tab
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // match scrollToSection offset

      const sections = [
        { key: "overview", offset: overviewRef.current?.offsetTop },
        { key: "glance", offset: glanceRef.current?.offsetTop },
        { key: "itinerary", offset: itineraryRef.current?.offsetTop },
        { key: "gallery", offset: galleryRef.current?.offsetTop },
      ];

      let current = "overview"; // default
      for (let i = 0; i < sections.length; i++) {
        if (sections[i].offset && scrollPosition >= sections[i].offset) {
          current = sections[i].key;
        }
      }

      if (current !== activeTab) setActiveTab(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeTab]);

  // not found UI
  if (!tour) {
    return (
      <div className="bg-white text-gray-800 h-screen flex items-center justify-center">
        <h1 className="text-2xl text-red-500">Tour not found</h1>
      </div>
    );
  }

  // hero banner image
  const heroBanner = tour.banner || tour.gallery?.[0] || "";

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-amber-50 text-gray-800 font-inter antialiased relative overflow-hidden">
      {/* Hero Banner */}
      <div className="relative h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-10000 hover:scale-110"
          style={{ backgroundImage: `url(${heroBanner})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-800/60 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center z-10 px-4"
          >
            <h1
              className="text-5xl md:text-5xl font-bold mb-4 tracking-wide"
              style={{
                color: "#e8bb47ff",
                textShadow: "0 4px 12px rgba(0,0,0,0.3)",
              }}
            >
              {tour.name}
            </h1>

            {/* show selected package (if present) */}
            {pkg && (
              <div className="mt-3 flex items-center justify-center gap-3">
                <span className="px-4 py-2 rounded-full bg-yellow-100 text-yellow-800 border border-yellow-300 shadow-sm font-semibold">
                  {pkg.name}
                </span>
                {/* <span className="px-4 py-2 rounded-full bg-white/10 text-white/90 font-bold">
                  {pkg.price}
                </span> */}
              </div>
            )}

            <div
              className="w-24 h-1.5 mx-auto rounded-full mt-4"
              style={{ backgroundColor: "#efb010ff" }}
            ></div>
          </motion.div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 relative z-10 flex flex-col lg:flex-row gap-4">
        {/* Left Content */}
        <div className="w-full lg:w-2/3">
          {/* Sticky Tabs Navigation */}
          <div className="sticky top-20 z-30 bg-white/90 backdrop-blur-md rounded-xl shadow-md mb-8 border border-amber-200">
            <div className="flex overflow-x-auto">
              <button
                onClick={() => scrollToSection("overview")}
                className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                  activeTab === "overview"
                    ? "text-amber-900 bg-amber-100"
                    : "text-gray-600 hover:text-amber-800"
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => scrollToSection("glance")}
                className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                  activeTab === "glance"
                    ? "text-amber-900 bg-amber-100"
                    : "text-gray-600 hover:text-amber-800"
                }`}
              >
                Quick Glance
              </button>
              <button
                onClick={() => scrollToSection("itinerary")}
                className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                  activeTab === "itinerary"
                    ? "text-amber-900 bg-amber-100"
                    : "text-gray-600 hover:text-amber-800"
                }`}
              >
                Itinerary
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                  activeTab === "gallery"
                    ? "text-amber-900 bg-amber-100"
                    : "text-gray-600 hover:text-amber-800"
                }`}
              >
                Gallery
              </button>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-amber-100">
            {/* Introduction */}
            <div
              ref={overviewRef}
              className="relative p-8 px-2 bg-gradient-to-br from-stone-50 via-amber-50/30 to-stone-100 border-b border-amber-100"
            >
              {/* Left Golden Accent Line */}
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-yellow-700 via-[#B8860B] to-yellow-500 rounded-r-full shadow-lg"></div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="pl-4"
              >
                {/* Heading */}
                <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
                  <h2 className="text-3xl  font-extrabold text-[#B8860B] flex items-center gap-3">
                    Overview
                  </h2>

                  <span className="text-sm font-medium px-5 py-2 rounded-full bg-yellow-100 text-yellow-800 border border-yellow-300 shadow-sm">
                    Journey Highlights
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-700 text-lg md:text-md leading-relaxed p-2 transition-all duration-300">
                  {tour.intro}
                </p>
              </motion.div>
            </div>

            {/* Quick Glance Section */}
            <section
              ref={glanceRef}
              className="relative bg-gradient-to-r from-stone-50 to-amber-50 border-b border-amber-100"
            >
              <div className="max-w-6xl mx-auto p-8 px-6">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Heading */}
                  <div className="flex items-center justify-between mb-10">
                    <h2 className="text-3xl font-extrabold tracking-tight text-[#B8860B] flex items-center">
                      <span className="bg-gradient-to-r from-yellow-700 to-yellow-500 bg-clip-text text-transparent">
                        Quick Glance
                      </span>
                    </h2>
                    <span className="ml-4 text-sm font-semibold px-4 py-1.5 rounded-full bg-yellow-100 text-yellow-800 border border-yellow-300 shadow-sm">
                      {tour.shortItinerary.length} Days
                    </span>
                  </div>

                  {/* Items */}
                  <div className="flex flex-col gap-6">
                    {tour.shortItinerary.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start p-6 rounded-2xl bg-white shadow-md border border-amber-100 hover:shadow-xl hover:border-yellow-400 transition-all duration-300"
                      >
                        {/* Number Badge */}
                        <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center mr-5 bg-gradient-to-br from-yellow-100 to-yellow-50 border border-yellow-300 shadow-inner">
                          <span className="font-bold text-[#B8860B] text-lg">
                            {idx + 1}
                          </span>
                        </div>

                        {/* Item Text */}
                        <p className="font-medium text-gray-800 text-base leading-relaxed">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Pricing & Inclusions Section */}
            <section className="relative bg-gradient-to-r from-stone-50 to-amber-50 border-b border-amber-100">
              <div className="max-w-4xl mx-auto p-8 px-6">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  {/* Heading */}
                  {/* <h2 className="text-3xl font-extrabold mb-10 text-[#B8860B] flex items-center gap-3">
                    <span className="bg-gradient-to-r from-yellow-700 to-yellow-500 bg-clip-text text-transparent">
                      Tour Inclusions & Details
                    </span>
                  </h2> */}

                  {/* Cards in Column */}
                  <div className="flex flex-col gap-6">
                    {/* Price Includes */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-amber-100 hover:shadow-lg hover:border-yellow-400 transition-all duration-300">
                      <h3 className="text-xl font-semibold text-[#B8860B] mb-4">
                        Price Includes
                      </h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Welcome drink on arrival (Non-alcoholic)</li>
                        <li>Well-appointed A/C Accommodation</li>
                        <li>Bed Tea and Breakfast on Paid Nights</li>
                        <li>
                          Transportation by well-conditioned Private AC Vehicle
                        </li>
                        <li>
                          Driver allowance, Toll Tax, Parking, and State Govt.
                          Tax
                        </li>
                        <li>
                          Railway Station / Airport Pick up and Drop and Hotel
                          Taxes
                        </li>
                      </ul>
                    </div>

                    {/* Price Excludes */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-amber-100 hover:shadow-lg hover:border-yellow-400 transition-all duration-300">
                      <h3 className="text-xl font-semibold text-[#B8860B] mb-4">
                        Price Excludes
                      </h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>
                          Any personal expenses Fees for Camera & Video Camera
                        </li>
                        <li>Monument entry fees, Boating & Guide charges</li>
                        <li>Porterage at hotels and airports</li>
                        <li>
                          Birthday Celebrations, tips, insurance & laundry
                        </li>
                        <li>Liquors, wine & telephone charges</li>
                        <li>
                          Air / Train fare and Any other which was not mentioned
                          in tour inclusion
                        </li>
                      </ul>
                    </div>

                    {/* Complementaries */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-amber-100 hover:shadow-lg hover:border-yellow-400 transition-all duration-300">
                      <h3 className="text-xl font-semibold text-[#B8860B] mb-4">
                        Complementaries
                      </h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Jagannath Darshan by our Temple priest</li>
                        <li>Sanitizer</li>
                        <li>T-Shirt</li>
                        <li>One Entrance Fees (Optional)</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>
            
            {/* What to Expect Section */}
            <section className="relative bg-gradient-to-r from-stone-50 to-amber-50">
              <div className="max-w-6xl mx-auto p-8 px-6">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Heading */}
                  <h2 className="text-3xl font-extrabold mb-10 text-[#B8860B] flex items-center gap-3">
                    <span className="bg-gradient-to-r from-yellow-700 to-yellow-500 bg-clip-text text-transparent">
                      What to Expect
                    </span>
                  </h2>

                  {/* Items */}
                  <div className="grid gap-4">
                    {tour.expect.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start p-6 rounded-2xl bg-white shadow-md border border-amber-100 hover:shadow-lg hover:border-yellow-400 transition-all duration-300 group"
                      >
                        {/* Icon Badge */}
                        <div className="flex-shrink-0 mr-5">
                          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-yellow-100 to-yellow-50 border border-yellow-300 shadow-inner transition-transform duration-300 group-hover:scale-110">
                            <svg
                              className="w-6 h-6 text-[#B8860B]"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                        </div>

                        {/* Text */}
                        <p className="text-gray-800 text-md font-medium leading-relaxed">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Detailed Itinerary */}
            <div
              ref={itineraryRef}
              className="p-8 px-6 bg-gradient-to-br from-amber-50 to-stone-50"
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-10">
                  <h2 className="text-3xl font-extrabold text-[#B8860B]">
                    Detailed Itinerary
                  </h2>
                  <span className="text-sm font-semibold px-5 py-2 rounded-full bg-yellow-100 text-yellow-800 border border-yellow-300 shadow-sm">
                    Day by Day
                  </span>
                </div>

                {/* Timeline */}
                <div className="relative pl-10">
                  {/* Vertical Line */}
                  <div className="absolute top-0 left-16 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400 to-yellow-600"></div>

                  {/* Itinerary Items */}
                  <div className="space-y-10">
                    {tour.itinerary.map((day, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="relative flex items-start gap-6"
                      >
                        {/* Day Badge */}
                        <div className="relative z-10">
                          <span className="w-12 h-12 flex items-center justify-center rounded-full text-white font-bold text-lg shadow-md bg-gradient-to-br from-yellow-700 to-yellow-500">
                            {idx + 1}
                          </span>
                        </div>

                        {/* Card Content */}
                        <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-amber-100 hover:shadow-lg hover:border-yellow-400 transition-all duration-300">
                          <h3 className="text-xl font-semibold text-[#B8860B] mb-2">
                            {day.day}
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            {day.detail}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Gallery */}
            <div
              ref={galleryRef}
              className="p-8 px-6 bg-gradient-to-br from-amber-50 via-stone-50 to-amber-100/20"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-12">
                  <h2 className="text-3xl font-extrabold text-[#B8860B] flex items-center gap-3">
                    Gallery
                  </h2>
                  <span className="text-sm font-semibold px-5 py-2 rounded-full bg-yellow-100 text-yellow-800 border border-yellow-300 shadow-sm">
                    {tour.gallery.length} Photos
                  </span>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {tour.gallery.map((img, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="relative group overflow-hidden rounded-2xl shadow-lg border border-amber-100 hover:border-amber-300 hover:shadow-xl transition-all duration-500"
                    >
                      {/* Image */}
                      <img
                        src={img}
                        alt={`gallery-${idx}`}
                        className="w-full h-60 object-cover rounded-xl transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Overlay */}
                      {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6 rounded-xl">
                        <button className="px-4 py-2 bg-[#B8860B] text-white text-sm font-semibold rounded-full shadow-md hover:bg-yellow-600 transition-all duration-300">
                          View Image
                        </button>
                      </div> */}

                      {/* Subtle Top Reflection Effect */}
                      <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-full lg:w-1/3">
          <div className="sticky top-32 space-y-8">
            {/* Tour Information */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-amber-100">
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: "#B8860B" }}
              >
                Tour Information
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium">
                    {tour.shortItinerary.length} Days
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Group Size:</span>
                  <span className="font-medium">{tour.groupSize}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Best Time:</span>
                  <span className="font-medium">{tour.bestTime}</span>
                </div>
              </div>
            </div>

            {/* Plan Your Journey Form */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-amber-100">
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: "#B8860B" }}
              >
                Plan Your Journey
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="number"
                    value={formData.number}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Arrival Date *
                  </label>
                  <input
                    type="date"
                    name="arrivalDate"
                    value={formData.arrivalDate}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Departure Date *
                  </label>
                  <input
                    type="date"
                    name="departureDate"
                    value={formData.departureDate}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Number of Persons *
                  </label>
                  <input
                    type="number"
                    name="persons"
                    value={formData.persons}
                    onChange={handleInputChange}
                    required
                    min="1"
                    className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Number of Children
                  </label>
                  <input
                    type="number"
                    name="children"
                    value={formData.children}
                    onChange={handleInputChange}
                    min="0"
                    className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-amber-700 text-white font-medium rounded-lg hover:bg-amber-800 transition-colors"
                >
                  Send Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <RelatedT />
      <Testi2 />
    </div>
  );
};

export default PTPDetails;
