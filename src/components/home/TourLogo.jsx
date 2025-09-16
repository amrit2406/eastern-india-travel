// LogoSlider.jsx
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ✅ Import images from assets folder
import otaiLogo from "../../assets/otoai.png";
import ecotourLogo from "../../assets/ecotour.jpeg";
import atoaiLogo from "../../assets/atoai.png";
import iataLogo from "../../assets/iata.png";
import ecoretreatLogo from "../../assets/ecoretreat.png";
import msmeLogo from "../../assets/msme.png";
import irctc from "../../assets/irctc.png";
import ministry from "../../assets/ministry.jpg";
import nidhi from "../../assets/nidhi.png";

const logos = [
  { id: 1, src: otaiLogo, alt: "OTAI" },
  { id: 2, src: ecotourLogo, alt: "Eco Tour Odisha" },
  { id: 3, src: atoaiLogo, alt: "Adventure Tour Operators" },
  { id: 4, src: iataLogo, alt: "IATA" },
  { id: 5, src: msmeLogo, alt: "MSME" },
  { id: 6, src: ecoretreatLogo, alt: "ecoretreat" },
  { id: 6, src: irctc, alt: "irctc" },
  { id: 6, src: nidhi, alt: "nidhi" },
  { id: 6, src: ministry, alt: "ministry" },
];

export default function LogoSlider() {
  const swiperRef = useRef(null);

  const slideNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  const slidePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  return (
    <section className="py-12  relative">
      <div className="max-w-7xl mx-auto text-center px-4">
        <h2 className="text-2xl md:text-4xl bg-gradient-to-r from-yellow-600 to-amber-400 bg-clip-text text-transparent font-bold mb-2">
          Trusted and Certified by Industry Leaders
        </h2>
        <p className="text-gray-600 md:text-xl mb-8">
          Partnering with top global travel organizations to deliver exceptional
          experiences
        </p>

        <div className="relative">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={4}
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {logos.map((logo) => (
              <SwiperSlide key={logo.id}>
                <div className="flex my-2 items-center justify-center p-4 bg-white rounded-lg shadow-md">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-20 object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ✅ Custom Navigation Arrows */}
          <button
            onClick={slidePrev}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-amber-500 hover:text-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={slideNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-amber-500 hover:text-white transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
