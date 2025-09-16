import React from "react";
import { useNavigate } from "react-router-dom";

const tours = [
  {
    id: "darjeeling-odyssey",
    title: "Darjeeling Himalayan Odyssey",
    description:
      "Experience the scenic beauty and misty mountains of Darjeeling, complete with heritage toy train rides.",
    location: "Darjeeling",
    duration: "5 Days",
    groupSize: "Max 12",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "sundarbans-adventure",
    title: "Sundarbans Jungle Adventure",
    description:
      "Explore the world's largest mangrove forest and spot Bengal tigers in a thrilling eco-tour.",
    location: "Sundarbans",
    duration: "4 Days",
    groupSize: "Max 10",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "kolkata-heritage",
    title: "Kolkata Culture & Heritage",
    description:
      "Dive into the vibrant culture, colonial architecture, and culinary delights of the 'City of Joy'.",
    location: "Kolkata",
    duration: "3 Days",
    groupSize: "Max 15",
    rating: "4.7",
    image:
      "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "meghalaya-bridges",
    title: "Meghalaya Living Root Bridges",
    description:
      "Discover the living root bridges, waterfalls, and misty landscapes of Meghalaya's dense forests.",
    location: "Meghalaya",
    duration: "6 Days",
    groupSize: "Max 8",
    rating: "5.0",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "sikkim-escape",
    title: "Sikkim Himalayan Escape",
    description:
      "Journey through the pristine landscapes of Sikkim, from ancient monasteries to glacial lakes.",
    location: "Sikkim",
    duration: "7 Days",
    groupSize: "Max 10",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "puri-tour",
    title: "Puri Beach & Temple Tour",
    description:
      "Experience the spiritual essence of Puri with its ancient temples and pristine beaches.",
    location: "Puri",
    duration: "4 Days",
    groupSize: "Max 12",
    rating: "4.6",
    image:
      "https://images.unsplash.com/photo-1516397281156-ca07cf9746fc?auto=format&fit=crop&w=700&q=80",
  },
];

export default function Tourgrid() {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-20 px-6 sm:px-10 lg:px-20">
    {/* <section className="bg-gradient-to-b from-[#FFF9E6] to-white py-20 px-6 sm:px-10 lg:px-20"> */}
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        {/* <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-800 tracking-tight leading-tight mb-4">
            Exclusive Destination
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-zinc-600 font-light">
            Embark on a voyage of discovery with our curated premium tours,
            crafted for the discerning traveler seeking authenticity and luxury.
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-0.5 w-16 bg-gradient-to-r from-transparent to-[#D4A017]"></div>
            <div className="w-3 h-3 rounded-full bg-[#D4A017]"></div>
            <div className="h-0.5 w-16 bg-gradient-to-l from-transparent to-[#D4A017]"></div>
          </div>
        </div> */}

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 h-full flex flex-col border border-[#FFF9E6]"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white leading-tight">
                    {tour.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-zinc-700 text-sm mb-6 line-clamp-3 flex-1">
                  {tour.description}
                </p>
                <button
                  onClick={() => navigate(`/packages/${tour.id}`)}
                  className="bg-gradient-to-r from-[#D4A017] to-[#B8860B] text-white font-semibold py-3 px-6 rounded-full shadow-sm hover:from-[#B8860B] hover:to-[#966F1A] hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
