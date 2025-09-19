import React from "react";
import {
  FaCrown,
  FaMapMarkerAlt,
  FaUserTie,
  FaAward,
  FaLeaf,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import WhyChooseUs from "../components/home/Why";
import TravelGuides from "../components/home/TravelGuides";
import Faq2 from "../components/home/Faq 2";
import WhatsAppFloatingButton from "../components/WhatsAppFloatButton";

// const team = [
//   {
//     name: "Rahul Das",
//     role: "Founder & Director",
//     image: "https://randomuser.me/api/portraits/men/46.jpg"
//   },
//   {
//     name: "Priya Sanyal",
//     role: "Travel Design Expert",
//     image: "https://randomuser.me/api/portraits/women/65.jpg"
//   },
//   {
//     name: "Amitav Bose",
//     role: "Tour Operations Lead",
//     image: "https://randomuser.me/api/portraits/men/76.jpg"
//   }
// ];

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-yellow-300 via-yellow-100 to-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-200 rounded-full filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-yellow-300 rounded-full filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-block bg-yellow-700 text-yellow-100 text-sm font-medium px-4 py-1 rounded-full mb-6">
            ESTABLISHED 2008
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-800 mb-6 tracking-tight leading-tight">
            About <span className="text-yellow-600">Eastern India Travels</span>
          </h1>
          <p className="text-lg md:text-xl text-yellow-900 font-light max-w-2xl mx-auto leading-relaxed">
            Crafting unforgettable journeys through the heart of Eastern India,
            blending authentic adventures with luxury and care.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <div className="h-1 w-12 bg-yellow-500 rounded-full"></div>
            <div className="h-1 w-6 bg-yellow-300 rounded-full"></div>
            <div className="h-1 w-8 bg-yellow-400 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Our Story & Stats */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-200 rounded-lg transform rotate-12 z-0"></div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-300 rounded-lg transform -rotate-12 z-0"></div>
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80"
            alt="About us Eastern India"
            className="rounded-xl shadow-xl object-cover w-full h-80 md:h-96 border-4 border-yellow-300 relative z-10"
          />
        </div>

        <div>
          <h2 className="text-4xl font-bold text-yellow-800 mb-6">Our Story</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-yellow-700 to-yellow-400 rounded-full mb-8"></div>
          <p className="text-yellow-900 font-light text-lg mb-6 leading-relaxed">
            Founded over a decade ago in Kolkata, Eastern India Travels grew
            from a passion for authentic journeys across the region's
            breathtaking landscapes. Our team consists of local experts who love
            to share the hidden gems, vibrant cultures, and mesmerizing nature
            Eastern India offers.
          </p>

          <div className="grid grid-cols-3 gap-6 mt-12">
            <div className="text-center p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors duration-300">
              <span className="text-4xl font-bold text-yellow-800 block">
                15+
              </span>
              <span className="block text-yellow-700 text-sm mt-1">
                Years Experience
              </span>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors duration-300">
              <span className="text-4xl font-bold text-yellow-800 block">
                2500+
              </span>
              <span className="block text-yellow-700 text-sm mt-1">
                Happy Travelers
              </span>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors duration-300">
              <FaAward className="text-yellow-600 text-3xl mx-auto mb-2" />
              <span className="block text-yellow-700 text-sm">
                Award Winning
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl shadow-lg p-8 transform transition-transform duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 rounded-full bg-yellow-600 flex items-center justify-center mb-6">
              <FaCrown className="text-white text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-yellow-800 mb-4">
              Our Mission
            </h3>
            <p className="text-yellow-900 font-light leading-relaxed">
              To create memorable, safe, and meaningful travel experiences
              connecting travelers with the vibrant soul of Eastern India.
            </p>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl shadow-lg p-8 transform transition-transform duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 rounded-full bg-yellow-600 flex items-center justify-center mb-6">
              <FaMapMarkerAlt className="text-white text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-yellow-800 mb-4">
              Our Vision
            </h3>
            <p className="text-yellow-900 font-light leading-relaxed">
              To be the leading travel curator for Eastern India, inspiring
              discovery and a deeper appreciation of our region's natural and
              cultural treasures.
            </p>
          </div>
        </div>
      </section>

      {/* Sustainability & Responsibility */}
      <section className="max-w-6xl mx-auto px-6 py-20 mb-10 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-2xl shadow-lg">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-yellow-800 mb-4">
            Sustainability & Responsibility
          </h2>
          <div className="w-24 h-1 bg-yellow-500 rounded-full mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-1 bg-white rounded-xl shadow-md p-8 transform transition-all duration-300 hover:shadow-xl">
            <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mb-6">
              <FaLeaf className="text-yellow-700 text-3xl" />
            </div>
            <h3 className="text-2xl font-bold text-yellow-800 mb-3">
              Eco-Friendly Tours
            </h3>
            <p className="text-yellow-900 leading-relaxed">
              We prioritize sustainable tourism, ensuring minimal impact on the
              environment while promoting responsible travel.
            </p>
          </div>

          <div className="flex-1 bg-white rounded-xl shadow-md p-8 transform transition-all duration-300 hover:shadow-xl">
            <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mb-6">
              <FaUsers className="text-yellow-700 text-3xl" />
            </div>
            <h3 className="text-2xl font-bold text-yellow-800 mb-3">
              Community Engagement
            </h3>
            <p className="text-yellow-900 leading-relaxed">
              We work closely with local communities to support livelihoods and
              cultural preservation initiatives.
            </p>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <TravelGuides />
      <Faq2 />

      {/* Our Team */}
      {/* <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-yellow-800 mb-4">Meet Our Team</h2>
          <div className="w-24 h-1 bg-yellow-500 rounded-full mx-auto"></div>
          <p className="text-yellow-700 mt-4 max-w-2xl mx-auto">
            Our passionate team of travel experts is dedicated to creating unforgettable experiences for you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name} className="bg-gradient-to-br from-yellow-50 to-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="p-8">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto border-4 border-yellow-300 object-cover"
                  />
                  <div className="absolute bottom-2 right-1/2 transform translate-x-16 w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center">
                    <FaUserTie className="text-white text-sm" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-yellow-800 text-center">{member.name}</h3>
                <p className="text-yellow-600 text-center mt-1">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl shadow-xl p-10 md:p-16 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Explore Eastern India?
          </h2>
          <p className="text-lg md:text-xl font-light mb-8 max-w-2xl mx-auto">
            Join thousands of happy travelers and experience the beauty,
            culture, and adventure that Eastern India has to offer.
          </p>
          <Link
            to="/contact"
            className="bg-white text-yellow-700 px-8 py-4 rounded-full font-bold text-lg 
             shadow-lg transform transition-all duration-300 
             hover:scale-105 hover:shadow-xl"
          >
            Contact Us Today
          </Link>
        </div>
      </section>

      <WhatsAppFloatingButton />
    </main>
  );
}
