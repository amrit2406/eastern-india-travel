import React from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaUserFriends, FaRupeeSign, FaStar, FaCheck, FaArrowRight, FaLeaf, FaUsers, FaShieldAlt, FaMagic } from "react-icons/fa";
import PopularTours from "../components/home/PopularTours";
import PopularTours2 from "../components/home/PopularTours2";

const packages = [
  {
    name: "Mystic Sikkim Adventure",
    location: "Sikkim",
    duration: "7 Days / 6 Nights",
    price: "₹25,000",
    rating: 4.8,
    highlights: [
      "Gangtok city tour",
      "Visit Tsomgo Lake & Baba Mandir",
      "Nathula Pass Adventure",
      "Yumthang Valley Day trip"
    ],
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80"
  },
  {
    name: "Sundarbans Wildlife Escape",
    location: "Sundarbans",
    duration: "4 Days / 3 Nights",
    price: "₹16,500",
    rating: 4.7,
    highlights: [
      "Sundarbans Tiger Reserve",
      "Mangrove cruise",
      "Village walk experiences",
      "Bird & wildlife watching"
    ],
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=700&q=80"
  },
  {
    name: "Darjeeling Himalayan Sojourn",
    location: "Darjeeling",
    duration: "5 Days / 4 Nights",
    price: "₹19,500",
    rating: 4.9,
    highlights: [
      "Heritage Toy Train ride",
      "Tiger Hill sunrise",
      "Tea garden exploration",
      "Himalayan Mountaineering Institute"
    ],
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=700&q=80"
  }
];

const whyTravelWithUs = [
  {
    icon: <FaUsers className="text-yellow-600 text-xl" />,
    title: "Local Expert Guides",
    description: "Knowledgeable local guides who bring destinations to life with authentic insights."
  },
  {
    icon: <FaLeaf className="text-yellow-600 text-xl" />,
    title: "Meticulously Curated",
    description: "Thoughtfully designed itineraries that balance adventure, culture, and relaxation."
  },
  {
    icon: <FaShieldAlt className="text-yellow-600 text-xl" />,
    title: "24/7 Traveler Support",
    description: "Round-the-clock assistance to ensure your journey is safe and seamless."
  },
  {
    icon: <FaMagic className="text-yellow-600 text-xl" />,
    title: "Customizable Experiences",
    description: "Tailor-made journeys that match your interests, pace, and preferences."
  }
];

export default function ToursPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-yellow-300 via-yellow-100 to-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-200 rounded-full filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-yellow-300 rounded-full filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-block bg-yellow-700 text-yellow-100 text-sm font-medium px-4 py-1 rounded-full mb-6">
            FEATURED TOURS
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-800 mb-6 tracking-tight leading-tight">
            Our <span className="text-yellow-600">Featured Tours & Packages</span>
          </h1>
          <p className="text-lg md:text-xl text-yellow-900 font-light max-w-2xl mx-auto leading-relaxed">
            Explore handpicked journeys across Eastern India, each designed for unforgettable experiences filled with adventure, discovery, and comfort.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <div className="h-1 w-12 bg-yellow-500 rounded-full"></div>
            <div className="h-1 w-6 bg-yellow-300 rounded-full"></div>
            <div className="h-1 w-8 bg-yellow-400 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      {/* <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {packages.map((pkg, idx) => (
            <div 
              key={idx} 
              className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:-translate-y-3 hover:shadow-xl group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-yellow-700 text-white px-4 py-1 rounded-full text-sm font-bold shadow-md flex items-center gap-1">
                    <FaMapMarkerAlt className="text-xs" />
                    {pkg.location}
                  </span>
                </div>
                <div className="absolute top-4 right-4 z-20">
                  <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <FaCalendarAlt className="text-xs" />
                    {pkg.duration}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex items-center gap-1 text-white">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < Math.floor(pkg.rating) ? "text-yellow-400" : "text-white/50"} />
                    ))}
                    <span className="ml-1 text-sm font-medium">{pkg.rating}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex flex-col">
                <h2 className="text-2xl font-bold text-yellow-800 mb-3">{pkg.name}</h2>
                
                <div className="mb-4">
                  <h3 className="font-semibold text-yellow-700 mb-2">Tour Highlights:</h3>
                  <ul className="space-y-2">
                    {pkg.highlights.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <FaCheck className="text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-yellow-900">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-auto">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <FaRupeeSign className="text-yellow-700 text-xl" />
                      <span className="text-2xl font-bold text-yellow-800">{pkg.price}</span>
                      <span className="text-yellow-600 text-sm ml-1">per person</span>
                    </div>
                    <div className="flex items-center text-yellow-600">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={i < Math.floor(pkg.rating) ? "text-yellow-500" : "text-yellow-300"} />
                      ))}
                      <span className="ml-1 text-sm font-medium text-yellow-700">{pkg.rating}</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-yellow-600 to-yellow-800 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 group">
                    <span>Book Now</span>
                    <FaArrowRight className="transform group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section> */}
      <PopularTours showHeading={false}/>
      <PopularTours2 />

      {/* Why Travel With Us */}
      <section className="max-w-6xl mx-auto px-6 py-18">
        <div className="text-center mb-16">
          <div className="inline-block bg-yellow-700 text-yellow-100 text-sm font-medium px-4 py-1 rounded-full mb-6">
            WHY CHOOSE US
          </div>
          <h2 className="text-4xl font-bold text-yellow-800 mb-4">Why Travel With Eastern India Travels?</h2>
          <div className="w-24 h-1 bg-yellow-500 rounded-full mx-auto"></div>
        </div>
        
        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {whyTravelWithUs.map((item, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm transform transition-all duration-300 hover:-translate-y-2 hover:shadow-md">
                    <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-yellow-800 mb-2">{item.title}</h3>
                    <p className="text-yellow-700">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-300 rounded-lg transform rotate-12 z-0"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-yellow-400 rounded-lg transform -rotate-12 z-0"></div>
                <img
                  src="https://images.unsplash.com/photo-1429839671814-0f6a02b2e0ae?auto=format&fit=crop&w=700&q=80"
                  alt="Why Choose Us"
                  className="w-full max-w-md h-64 object-cover rounded-xl shadow-lg border-4 border-yellow-300 relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}