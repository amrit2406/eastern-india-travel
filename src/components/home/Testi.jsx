import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const testimonials = [
  {
    name: "Anjali Mukherjee",
    location: "Kolkata",
    feedback:
      "Eastern India Travels crafted an unforgettable journey for me through Darjeeling and Sikkim. The service was impeccable and every step felt personal.",
    rating: 5,
  },
  {
    name: "Ravi Sharma",
    location: "Shillong",
    feedback:
      "The Sundarbans tour was thrilling and expertly organized. The guides were knowledgeable and the accommodations luxurious.",
    rating: 5,
  },
  {
    name: "Sahana Das",
    location: "Patna",
    feedback:
      "From planning to execution, the team at Eastern India Travels made my first trip seamless and special. Highly recommended!",
    rating: 5,
  },
  {
    name: "Priya Singh",
    location: "Guwahati",
    feedback:
      "A truly mesmerizing experience exploring the living root bridges. Everything was perfect, from the itinerary to the local guides.",
    rating: 5,
  },
  {
    name: "Vikram Mehta",
    location: "Mumbai",
    feedback:
      "My heritage tour of Kolkata was a cultural masterpiece. The team went above and beyond to make sure I experienced the city's true essence.",
    rating: 5,
  },
];

export default function TestimonialSection() {
  return (
    <section className="bg-white py-18 px-6 sm:px-10 lg:px-20 relative overflow-hidden">
      {/* Background radial gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-100 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-100 opacity-20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-extrabold text-zinc-900 mb-4 tracking-tight leading-tight">
          Voices of Our Travelers
        </h2>
        <div className="h-1.5 w-24 bg-gradient-to-r from-yellow-500 to-amber-600 mx-auto mb-16 rounded-full"></div>
        <p className="my-6 text-lg text-zinc-600 font-light max-w-2xl mx-auto">
          Hear firsthand from the adventurers who chose us to craft their
          perfect journey. Their words are our greatest reward.
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          effect="coverflow"
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 150,
            modifier: 1,
            slideShadows: true,
          }}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          spaceBetween={40}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }} // <-- changed to 4 sec
          className="py-12"
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 40 },
          }}
        >
          {testimonials.map(({ name, location, feedback, rating }, idx) => (
            <SwiperSlide key={idx}>
              {({ isActive }) => (
                <div
                  className={`
                    relative flex flex-col justify-between rounded-3xl m-2 p-4 md:p-6 shadow-md transition-transform duration-300 h-full
                    ${
                      isActive
                        ? "bg-amber-600 text-white transform scale-105 shadow-amber-500/50"
                        : "bg-amber-300 text-yellow-950 opacity-90"
                    }
                  `}
                >
                  {/* Quote icon */}
                  <FaQuoteLeft
                    className={`
                      text-5xl md:text-6xl opacity-20 mb-4
                      ${isActive ? "text-white" : "text-amber-500"}
                    `}
                  />

                  {/* Feedback */}
                  <p className="text-md md:text-lg leading-relaxed font-light italic mb-6">
                    "{feedback}"
                  </p>

                  {/* Rating */}
                  <div className="flex justify-center mb-4">
                    {[...Array(rating)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`text-xl md:text-2xl mx-1 ${
                          isActive ? "text-white" : "text-amber-500"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Name and location */}
                  <div className="text-center mt-4">
                    <h4 className="font-semibold text-lg md:text-xl">{name}</h4>
                    <span className="uppercase tracking-wide text-xs md:text-sm opacity-80">
                      {location}
                    </span>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
