import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Phone, MapPin, Calendar, ArrowRight, Star } from 'lucide-react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TourCarousel = () => {
  const [activeTab, setActiveTab] = useState('odisha');

  // Sample data for tours
  const tourData = {
    odisha: [
      {
        id: 1,
        image: "https://images.unsplash.com/photo-1580135390424-701bd6cce890?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        name: "Puri Konark Tour",
        from: "Bhubaneswar",
        to: "Puri",
        days: 3,
        nights: 2,
        price: "₹12,999",
        rating: 4.8
      },
      {
        id: 2,
        image: "https://images.unsplash.com/photo-1599315498193-3c583a5c5ef5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        name: "Chilika Lake Experience",
        from: "Bhubaneswar",
        to: "Chilika",
        days: 2,
        nights: 1,
        price: "₹8,499",
        rating: 4.5
      },
      {
        id: 3,
        image: "https://images.unsplash.com/photo-1596436889106-be35e8435c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        name: "Tribal Odisha Expedition",
        from: "Bhubaneswar",
        to: "Rayagada",
        days: 5,
        nights: 4,
        price: "₹18,999",
        rating: 4.9
      },
      {
        id: 4,
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=873&q=80",
        name: "Bhitarkanika Wildlife",
        from: "Bhubaneswar",
        to: "Bhitarkanika",
        days: 3,
        nights: 2,
        price: "₹11,499",
        rating: 4.7
      },
      {
        id: 5,
        image: "https://images.unsplash.com/photo-1464822759849-e0e100921dae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        name: "Western Odisha Heritage",
        from: "Bhubaneswar",
        to: "Sambalpur",
        days: 4,
        nights: 3,
        price: "₹15,999",
        rating: 4.6
      },
      {
        id: 6,
        image: "https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        name: "Simlipal Forest Tour",
        from: "Bhubaneswar",
        to: "Simlipal",
        days: 4,
        nights: 3,
        price: "₹16,499",
        rating: 4.8
      }
    ],
    northeast: [
      {
        id: 101,
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        name: "Sikkim Himalayan Tour",
        from: "Gangtok",
        to: "Nathula Pass",
        days: 5,
        nights: 4,
        price: "₹22,999",
        rating: 4.9
      },
      {
        id: 102,
        image: "https://images.unsplash.com/photo-1574362849075-1a29f488e310?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=c crop&w=870&q=80",
        name: "Assam Wildlife Safari",
        from: "Guwahati",
        to: "Kaziranga",
        days: 4,
        nights: 3,
        price: "₹18,499",
        rating: 4.7
      },
      {
        id: 103,
        image: "https://images.unsplash.com/photo-1580135390424-701bd6cce890?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        name: "Meghalaya Wonders",
        from: "Shillong",
        to: "Cherrapunji",
        days: 6,
        nights: 5,
        price: "₹24,999",
        rating: 4.8
      },
      {
        id: 104,
        image: "https://images.unsplash.com/photo-1623058458876-2d28a87a9210?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        name: "Arunachal Adventure",
        from: "Guwahati",
        to: "Tawang",
        days: 7,
        nights: 6,
        price: "₹28,499",
        rating: 4.9
      },
      {
        id: 105,
        image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=874&q=80",
        name: "Nagaland Cultural Tour",
        from: "Dimapur",
        to: "Kohima",
        days: 5,
        nights: 4,
        price: "₹21,999",
        rating: 4.6
      },
      {
        id: 106,
        image: "https://images.unsplash.com/photo-1586500036706-41963c3f1791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        name: "Manipur Exploration",
        from: "Imphal",
        to: "Loktak Lake",
        days: 4,
        nights: 3,
        price: "₹19,499",
        rating: 4.7
      }
    ]
  };

  // Golden color theme
  const goldenColor = {
    primary: '#B8860B', // DarkGoldenrod
    light: '#DAA520',   // Goldenrod
    dark: '#996515',    // Dark Goldenrod
    text: '#5E4200'     // Dark text for contrast
  };

  return (
    <div className="py-12 px-4 md:px-8 lg:px-16 bg-amber-50">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">Discover Incredible Tours</h2>
        <p className="text-amber-800 max-w-2xl mx-auto">
          Experience the rich cultural heritage and natural beauty of India with our handpicked tour packages.
        </p>
      </motion.div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            onClick={() => setActiveTab('odisha')}
            className={`px-6 py-3 text-sm font-medium rounded-l-lg ${
              activeTab === 'odisha'
                ? 'bg-amber-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Odisha Tours
          </button>
          <button
            onClick={() => setActiveTab('northeast')}
            className={`px-6 py-3 text-sm font-medium rounded-r-lg ${
              activeTab === 'northeast'
                ? 'bg-amber-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            North East Tours
          </button>
        </div>
      </div>

      {/* Show only the active tab content */}
      {activeTab === 'odisha' && (
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-1 bg-amber-600 mr-4"></div>
            <h3 className="text-2xl md:text-3xl font-bold text-amber-900">Odisha Tours</h3>
            <div className="w-16 h-1 bg-amber-600 ml-4"></div>
          </div>
          
          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              navigation={{
                nextEl: '.odisha-next',
                prevEl: '.odisha-prev',
              }}
              pagination={{
                clickable: true,
                el: '.odisha-pagination',
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={true}
            >
              {tourData.odisha.map((tour) => (
                <SwiperSlide key={tour.id}>
                  <TourCard tour={tour} color={goldenColor} />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Buttons */}
            <div className="odisha-prev swiper-button-prev !text-amber-700 after:!text-xl"></div>
            <div className="odisha-next swiper-button-next !text-amber-700 after:!text-xl"></div>
            
            {/* Pagination */}
            <div className="odisha-pagination swiper-pagination !relative mt-8"></div>
          </div>
        </div>
      )}

      {activeTab === 'northeast' && (
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-1 bg-amber-600 mr-4"></div>
            <h3 className="text-2xl md:text-3xl font-bold text-amber-900">North East Tours</h3>
            <div className="w-16 h-1 bg-amber-600 ml-4"></div>
          </div>
          
          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              navigation={{
                nextEl: '.northeast-next',
                prevEl: '.northeast-prev',
              }}
              pagination={{
                clickable: true,
                el: '.northeast-pagination',
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={true}
            >
              {tourData.northeast.map((tour) => (
                <SwiperSlide key={tour.id}>
                  <TourCard tour={tour} color={goldenColor} />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Buttons */}
            <div className="northeast-prev swiper-button-prev !text-amber-700 after:!text-xl"></div>
            <div className="northeast-next swiper-button-next !text-amber-700 after:!text-xl"></div>
            
            {/* Pagination */}
            <div className="northeast-pagination swiper-pagination !relative mt-8"></div>
          </div>
        </div>
      )}
    </div>
  );
};

// Tour Card Component
const TourCard = ({ tour, color }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-amber-200"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={tour.image} 
          alt={tour.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-amber-700 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {tour.price}
        </div>
        <div className="absolute top-4 left-4 flex items-center bg-white px-2 py-1 rounded-full">
          <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
          <span className="text-amber-900 text-sm font-medium ml-1">{tour.rating}</span>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold text-amber-900 mb-2">{tour.name}</h3>
        
        <div className="flex items-center text-amber-800 mb-3">
          <FaMapMarkerAlt className="mr-2 text-amber-600" />
          <span>{tour.from} to {tour.to}</span>
        </div>
        
        <div className="flex items-center text-amber-800 mb-4">
          <Calendar className="h-4 w-4 mr-2 text-amber-600" />
          <span>{tour.days} Days / {tour.nights} Nights</span>
        </div>
        
        <div className="flex justify-between mt-6">
          <button 
            className="flex items-center text-amber-700 font-semibold text-sm hover:text-amber-900 transition-colors"
            style={{ color: color.primary }}
          >
            <Phone className="h-4 w-4 mr-1" />
            Call Now
          </button>
          <Link 
            to={`/tour/${tour.id}`}
            className="flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            style={{ backgroundColor: color.primary, color: 'white' }}
            onMouseOver={(e) => e.target.style.backgroundColor = color.dark}
            onMouseOut={(e) => e.target.style.backgroundColor = color.primary}
          >
            Details
            <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default TourCarousel;