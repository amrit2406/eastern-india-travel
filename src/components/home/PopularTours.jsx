import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import { Phone, ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { tours } from "../../data/Odtour";

const PopularTours = ({ showHeading = true }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };
  // Duplicate tours so Swiper can loop properly
  const duplicatedTours = [...tours.odisha, ...tours.odisha];

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Tour Card Renderer
  const renderTourCard = (tour) => (
    <SwiperSlide key={tour.id}>
      <motion.div
        variants={itemVariants}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="group relative my-6 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md border border-zinc-200 transition-all duration-500"
      >
        {/* Image Section */}
        <div className="relative h-54 w-full overflow-hidden shine-effect">
          <img
            src={tour.img}
            alt={tour.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>

        {/* Content Section */}
        <div className="px-3 py-4">
          {/* Tour Name */}
          <h4 className="text-xl font-bold tracking-tight text-zinc-900 mb-2 group-hover:text-yellow-700 transition-colors duration-300">
            {tour.name}
          </h4>

          {/* Location A → B */}
          <div className="flex items-center gap-2 text-sm text-zinc-600 mb-3">
            <MapPin size={16} className="text-yellow-600" />
            <span>
              {tour.start} → {tour.end}
            </span>
          </div>

          {/* Days & Nights */}
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-yellow-100 text-yellow-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-yellow-300">
              {tour.days} Days
            </span>
            <span className="bg-zinc-100 text-zinc-600 text-xs font-semibold px-2.5 py-1 rounded-full border border-zinc-200">
              {tour.nights} Nights
            </span>
          </div>

          {/* Golden Divider */}
          <div className="w-12 h-0.5 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 mb-4 rounded-full" />

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <a
              href="tel:+919337124745"
              className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-700 to-yellow-500 text-white py-3 rounded-lg font-medium shadow hover:from-yellow-600 hover:to-yellow-400 hover:shadow-lg transition-all duration-300"
            >
              <Phone size={16} /> Call
            </a>

            <Link
              to={`/tour-package/${tour.id}`}
              className="flex-1 flex items-center justify-center gap-2 border border-zinc-300 text-zinc-700 py-3 rounded-lg font-medium hover:border-yellow-600 hover:text-yellow-700 hover:shadow-md transition-all duration-300"
            >
              Details <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </motion.div>
    </SwiperSlide>
  );

  return (
    <section className="bg-gradient-to-b from-zinc-50 via-white to-zinc-100 text-zinc-900 py-18 px-6 sm:px-10 lg:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading (Optional) */}
        {showHeading && (
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="text-center mb-14"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight drop-shadow-sm bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent"
            >
              Popular Tours
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg text-zinc-600 font-light max-w-3xl mx-auto"
            >
              Discover handpicked travel experiences designed for comfort,
              culture, and unforgettable memories.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="h-1.5 w-28 bg-gradient-to-r from-amber-500 to-amber-700 mx-auto mt-4 rounded-full shadow-md"
            ></motion.div>
          </motion.div>
        )}

        {/* Odisha Tours */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold font-serif text-zinc-800 mb-4 border-l-4 border-amber-600 pl-4"
          >
            Odisha
          </motion.h3>
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 32 },
              1280: { slidesPerView: 4, spaceBetween: 16 },
            }}
            className="tour-swiper"
          >
            {duplicatedTours.map(renderTourCard)}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default PopularTours;
