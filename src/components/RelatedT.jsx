import React from "react";
import { FaMapMarkerAlt, FaStar, FaClock, FaUsers } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { tours } from "../data/Tour";

export default function PremiumToursSection() {
  const navigate = useNavigate();
  
  // Duplicate tours array to create enough slides for smooth looping
  const duplicatedTours = [...tours, ...tours, ...tours]; // Creates 12 slides (3 sets of 4)
  
  return (
    <section className="bg-gradient-to-b from-[#FFF9E6] to-white py-20 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-800 tracking-tight leading-tight mb-4">
            Related Tours
            {/* Exclusive Journeys */}
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
        </div>

        {/* Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          loopedSlides={tours.length} // Set to original tours count
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="premium-tours-swiper"
        >
          {duplicatedTours.map((tour, index) => (
            <SwiperSlide key={`${tour.title}-${index}`}>
              <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 h-full flex flex-col border border-[#FFF9E6]">
                {/* Image with Badge */}
                <div className="relative overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>

                  {/* Location & Title */}
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

                  {/* Button */}
                  <button
                    onClick={() => navigate(`/packages/${tour.id}`)}
                    className="bg-gradient-to-r from-[#D4A017] to-[#B8860B] text-white font-semibold py-3 px-6 rounded-full shadow-sm hover:from-[#B8860B] hover:to-[#966F1A] hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Swiper Styles */}
        <style jsx>{`
          .premium-tours-swiper .swiper-pagination-bullet {
            background-color: #d4a017;
            opacity: 0.5;
          }
          .premium-tours-swiper .swiper-pagination-bullet-active {
            background-color: #d4a017;
            opacity: 1;
          }
          .premium-tours-swiper .swiper-button-next,
          .premium-tours-swiper .swiper-button-prev {
            color: #d4a017;
          }
        `}</style>
      </div>
    </section>
  );
}