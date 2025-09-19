import React from "react";
import { FaMapMarkerAlt, FaStar, FaClock, FaUsers } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { tours } from "../../data/Tour";

export default function PremiumToursSection() {
  const navigate = useNavigate();
  return (
    <section className="bg-gradient-to-b from-[#FFF9E6] to-white py-20 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-800 tracking-tight leading-tight mb-4">
            Exclusive Destination
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
          loop={true} // Add this line
          loopedSlides={4} // This is recommended
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="premium-tours-swiper"
        >
          {tours.map((tour) => (
            <SwiperSlide key={tour.title}>
              <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 h-full flex flex-col border border-[#FFF9E6]">
                {/* Image with Badge */}
                <div className="relative overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>

                  {/* Premium Badge */}
                  {/* <div className="absolute top-4 right-4 bg-gradient-to-r from-[#D4A017] to-[#B8860B] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                    PREMIUM
                  </div> */}

                  {/* Rating Badge */}
                  {/* <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#B8860B] text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                    <FaStar className="text-[#D4A017]" />
                    {tour.rating}
                  </div> */}

                  {/* Location & Title */}
                  <div className="absolute bottom-4 left-4 right-4">
                    {/* <div className="flex items-center gap-2 text-[#FFF9E6] text-sm font-medium mb-1">
                      <FaMapMarkerAlt />
                      <span>{tour.location}</span>
                    </div> */}
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

                  {/* Tour Details */}
                  {/* <div className="flex justify-between mb-6 text-sm">
                    <div className="flex items-center gap-2 text-zinc-600">
                      <FaClock className="text-[#D4A017]" />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-600">
                      <FaUsers className="text-[#D4A017]" />
                      <span>{tour.groupSize}</span>
                    </div>
                  </div> */}

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
