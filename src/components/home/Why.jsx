import React from "react";
import { FaStar, FaHeadset, FaGlobeAsia, FaUserTie } from "react-icons/fa";

const reasons = [
  {
    icon: FaStar,
    title: "Award-Winning Service",
    description:
      "Trusted by thousands, our service is recognized for excellence and reliability, ensuring your journey is nothing short of perfect.",
  },
  {
    icon: FaHeadset,
    title: "24/7 Premium Support",
    description:
      "Our dedicated team is available around the clock to provide help, guidance, and peace of mind for every step of your adventure.",
  },
  {
    icon: FaGlobeAsia,
    title: "Deep Local Expertise",
    description:
      "Benefit from our deep knowledge of Eastern India, allowing us to craft authentic, tailored experiences you won't find anywhere else.",
  },
  {
    icon: FaUserTie,
    title: "Personalized Attention",
    description:
      "We don’t do one-size-fits-all. Every itinerary is meticulously designed to perfectly match your unique interests and travel style.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative bg-gradient-to-br from-[#0D0D0D] via-[#1A1A1A] to-black text-white py-20 px-6 sm:px-10 lg:px-20 overflow-hidden">
      {/* Glow Backgrounds */}
      {/* <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-amber-400 opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-yellow-500 opacity-20 blur-3xl animate-pulse"></div> */}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Why Travel With Us?
          </h2>
          <div className="h-1.5 w-28 bg-gradient-to-r from-amber-300 to-yellow-500 mx-auto mt-5 rounded-full shadow-md"></div>
          <p className="mt-6 text-lg md:text-xl text-yellow-100 font-light max-w-2xl mx-auto">
            We combine passion, expertise, and care to create unforgettable
            journeys that go beyond the ordinary.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-[#8F520B]/95 to-[#5A3003]/95 border border-[#A5661D]/90 
             rounded-3xl p-8 shadow-xl backdrop-blur-sm 
             hover:shadow-amber-400/50 hover:-translate-y-4 hover:scale-[1.02]
             transition-all duration-500 ease-out overflow-hidden"
            >
              {/* Glow Overlay on Hover */}
              <div
                className="absolute inset-0 bg-gradient-to-tr from-amber-400/10 via-transparent to-yellow-600/10 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ></div>

              {/* Floating Icon */}
              <div
                className="relative flex items-center justify-center w-16 h-16 rounded-full 
                  bg-gradient-to-br from-amber-400 to-yellow-600 mb-6 
                  shadow-lg group-hover:scale-110 transition-transform duration-500"
              >
                <reason.icon className="text-3xl text-white drop-shadow-md" />
              </div>

              {/* Title */}
              <h3
                className="text-2xl font-extrabold mb-4 tracking-tight 
                 text-white group-hover:text-amber-300 transition-colors duration-300"
              >
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-yellow-100/90 text-base leading-relaxed mb-6">
                {reason.description}
              </p>

              {/* Decorative Gradient Bar */}
              <div
                className="h-1.5 w-14 bg-gradient-to-r from-amber-400 to-yellow-600 rounded-full 
                  group-hover:w-24 transition-all duration-500"
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
