import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./../../Testi.css";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Manjunath Rao",
    time: "3 Days Ago",
    rating: 5,
    review:
      "We had an amazing 4-day trip with Siddhi Kalyani Holidays. The itinerary was well-planned, covering all the important and...",
    initials: "MR",
    color: "bg-yellow-400",
  },
  {
    name: "Mahesh Patil",
    time: "4 Days Ago",
    rating: 5,
    review:
      "It was a wonderful experience for us. All your arrangements were up to the mark. All hotels and transportation arrange...",
    initials: "MP",
    color: "bg-green-400",
  },
  {
    name: "Sanjay",
    time: "3 Weeks Ago",
    rating: 5,
    review:
      "Our trip was superb, well organized and timed. Thoroughly covered all the holy pilgrimage sites of Jagannath Puri, near...",
    initials: "SA",
    color: "bg-purple-500",
  },
  {
    name: "Priya Sharma",
    time: "1 Week Ago",
    rating: 5,
    review:
      "Excellent service and support throughout the trip. Hotels and transportation were very comfortable and timely.",
    initials: "PS",
    color: "bg-pink-400",
  },
  {
    name: "Rakesh Gupta",
    time: "2 Weeks Ago",
    rating: 5,
    review:
      "Amazing arrangements with proper planning. The staff was cooperative and made the journey hassle-free.",
    initials: "RG",
    color: "bg-blue-400",
  },
  {
    name: "Neha Verma",
    time: "5 Days Ago",
    rating: 5,
    review:
      "Great experience! All holy places were covered nicely with good accommodations and transport services.",
    initials: "NV",
    color: "bg-orange-400",
  },
  {
    name: "Ajay Singh",
    time: "3 Weeks Ago",
    rating: 5,
    review:
      "Professional team, excellent itinerary, and very smooth travel experience. Highly recommended!",
    initials: "AS",
    color: "bg-red-400",
  },
  {
    name: "Kavita Joshi",
    time: "1 Month Ago",
    rating: 5,
    review:
      "The entire trip was very well organized. Good hotels, clean transport, and amazing sightseeing arrangements.",
    initials: "KJ",
    color: "bg-teal-400",
  },
  {
    name: "Vikram Patel",
    time: "2 Months Ago",
    rating: 5,
    review:
      "Outstanding planning and arrangements. All tours were smooth and memorable. Worth every penny spent.",
    initials: "VP",
    color: "bg-indigo-400",
  },
];

function Testi2() {
  return (
    <div className="relative py-18 px-4 text-center bg-white overflow-hidden">
      {/* Decorative Background Elements */}
      {/* <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-200 rounded-full filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-yellow-300 rounded-full filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div> */}
      
      {/* Decorative Quote Icons */}
      <div className="absolute top-20 left-10 text-yellow-200 opacity-40">
        <FaQuoteLeft className="text-6xl transform rotate-180" />
      </div>
      <div className="absolute bottom-20 right-10 text-yellow-200 opacity-40">
        <FaQuoteLeft className="text-6xl" />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16">
          <div className="inline-block bg-yellow-700 text-yellow-100 text-sm font-medium px-4 py-1 rounded-full mb-6">
            TESTIMONIALS
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-800 mb-6 tracking-tight leading-tight">
            What Our <span className="text-yellow-600">Travelers Say</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-yellow-600 to-yellow-700 mx-auto mt-6 rounded-full"></div>
          <p className="mt-6 text-lg text-yellow-900 max-w-2xl mx-auto">
            Real experiences from real travelers who choose Eastern India Travels for their journey
          </p>
        </div>
        
        <a
          href="https://www.google.com/search?sca_esv=1cd912c63e8479c3&rlz=1C1YTUH_enIN977IN981&sxsrf=AE3TifNUGJPeORXZz67Uu7eZETaS53bXLw:1757676715228&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-EwKKx39wQYU_adR8vXOgHjJy6z3x12q2eqbLHU9LGkYE8dZX2_BZjlqg8ZAiE7yXLXn-52IbQuU6MWoFun1PQTAg3UlIfIuGRs_BH2vvKu7bWWdYNg%3D%3D&q=Eastern+India+Travels+Reviews&sa=X&ved=2ahUKEwi5yPaBkNOPAxWpUGwGHXiDKE0Q0bkNegQINRAE&biw=1536&bih=738&dpr=1.25"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 mb-12 border border-yellow-200"
        >
          <img
            src="https://www.gstatic.com/images/branding/product/1x/googleg_32dp.png"
            alt="Google"
            className="w-6 mr-3"
          />
          <span className="font-semibold text-yellow-800">Google Rating</span>
          <div className="ml-3 flex items-center">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400" />
            ))}
          </div>
          <span className="ml-3 text-gray-600">4.9 (100+ reviews)</span>
        </a>
        
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            // navigation
            // pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-16"
          >
            {testimonials.map((testi, index) => (
              <SwiperSlide key={index}>
                {/* Card design remains exactly the same */}
                <div className="bg-white border border-yellow-600 my-5 rounded-xl shadow-md p-6 text-left">
                  <div className="flex items-center mb-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mr-4 ${testi.color}`}
                    >
                      {testi.initials}
                    </div>
                    <div>
                      <h5 className="font-bold">{testi.name}</h5>
                      <p className="text-sm text-gray-500">{testi.time}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    {[...Array(testi.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm">{testi.review}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Testi2;