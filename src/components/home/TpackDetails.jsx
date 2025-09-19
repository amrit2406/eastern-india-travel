import React from "react";
import { FaMapMarkerAlt, FaStar, FaClock, FaUsers, FaCheck, FaPhone, FaEnvelope, FaArrowLeft } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";
import {tourDetails} from "../../data/Tpack";

const whyBookWithUs = [
  "Expertly crafted itineraries by travel specialists",
  "Premium accommodations with authentic local experiences",
  "Small group sizes for personalized attention",
  "24/7 customer support during your journey",
  "Flexible booking and cancellation policies",
  "Best price guarantee"
];

export default function TourDetailsPage() {
  const { tourId } = useParams();
  const navigate = useNavigate();
  const tour = tourDetails[tourId] || tourDetails["darjeeling-odyssey"]; // Fallback to a default tour

  const handleViewPackageDetails = (packageId) => {
    // In a real app, this would navigate to package details page
    // console.log(`Viewing details for package ${packageId}`);
    navigate(`/package/${packageId}`);
  };

  const handleCallNow = (packageName) => {
    // In a real app, this would trigger a call or open a contact form
    alert(`Calling about ${packageName} package`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url(${tour.heroImage})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-white text-center mb-4">
              {tour.title}
            </h1>
            {/* <div className="flex flex-wrap items-center gap-4 text-white">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#D4A017]" />
                <span>{tour.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="text-[#D4A017]" />
                <span>{tour.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaUsers className="text-[#D4A017]" />
                <span>{tour.groupSize}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaStar className="text-[#D4A017]" />
                <span>{tour.rating}</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-12 px-6 sm:px-10 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content - Explore Tour Packages */}
          <div className="lg:w-2/3">
            {/* Tour Packages Section */}
            <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-zinc-800">Explore Tour Packages</h2>
                <button 
                  onClick={() => navigate('/')}
                  className="flex items-center gap-2 text-[#D4A017] hover:text-[#B8860B] transition-colors"
                >
                  <FaArrowLeft />
                  <span>Back to Tours</span>
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tour.packages.map((pkg) => (
                  <div key={pkg.id} className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-[#FFF9E6]">
                    <div className="relative">
                      <img
                        src={pkg.image}
                        alt={pkg.name}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-white leading-tight">
                          {pkg.name}
                        </h3>
                      </div>
                    </div>
                    
                    <div className="p-5">
                      <p className="text-zinc-700 text-sm mb-4 line-clamp-2">
                        {pkg.description}
                      </p>
                      
                      <div className="flex justify-between items-center mb-4 text-sm">
                        <div className="flex items-center gap-2 text-zinc-600">
                          <FaMapMarkerAlt className="text-[#D4A017]" />
                          <span>{pkg.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-zinc-600">
                          <FaUsers className="text-[#D4A017]" />
                          <span>{pkg.members}</span>
                        </div>
                      </div>
                      
                      {/* <div className="flex justify-between items-center mb-4">
                        <span className="text-lg font-bold text-[#D4A017]">{pkg.price}</span>
                        <span className="text-xs text-zinc-500">per person</span>
                      </div> */}
                      
                      <div className="flex gap-3">
                        <button 
                          onClick={() => handleViewPackageDetails(pkg.id)}
                          className="flex-1 bg-gradient-to-r from-[#D4A017] to-[#B8860B] text-white font-medium py-2 px-4 rounded-full text-sm shadow-sm hover:from-[#B8860B] hover:to-[#966F1A] hover:shadow-md transition-all duration-300"
                        >
                          View Details
                        </button>
                        <button
                          onClick={() =>
                            (window.location.href = "tel:+919337124745")
                          }
                          className="flex-1 bg-white border border-yellow-600 text-yellow-700 font-medium py-2 px-4 rounded-full text-sm shadow-sm hover:bg-yellow-50 transition-all duration-300"
                        >
                          Call Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/3">
            {/* Why Book With Us */}
            <div className="bg-gradient-to-br from-[#FFF9E6] to-white rounded-2xl shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-zinc-800 mb-4">Why Book With Us?</h2>
              <ul className="space-y-3">
                {whyBookWithUs.map((reason, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="bg-[#D4A017] rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FaCheck className="text-white text-xs" />
                    </div>
                    <span className="text-zinc-700">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* CTA - Get a Quotation */}
            <div className="bg-gradient-to-br from-[#D4A017] to-[#B8860B] rounded-2xl shadow-md p-6 text-white">
              <h2 className="text-2xl font-bold mb-4">Get a Quotation?</h2>
              <p className="mb-6">Contact us for a personalized quote and special offers for this tour.</p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 rounded-full w-10 h-10 flex items-center justify-center">
                    <FaPhone />
                  </div>
                  <div>
                    <p className="text-sm opacity-80">Call us now</p>
                    <p className="font-semibold">+91 9337124745</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 rounded-full w-10 h-10 flex items-center justify-center">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="text-sm opacity-80">Email us</p>
                    <p className="font-semibold">info@easternindiatravels.com</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => (window.location.href = "tel:+919337124745")}
                className="mt-6 w-full bg-white text-yellow-700 font-semibold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              >
                Request Callback
              </button>
            </div>
            
            {/* Price Box */}
            {/* <div className="bg-white rounded-2xl shadow-md p-6 mt-8 border border-[#FFF9E6]">
              <div className="flex justify-between items-center mb-2">
                <span className="text-zinc-600">Tour Price</span>
                <span className="text-2xl font-bold text-[#D4A017]">{tour.price}</span>
              </div>
              <p className="text-sm text-zinc-500 mb-4">Based on double occupancy</p>
              <button className="w-full bg-gradient-to-r from-[#D4A017] to-[#B8860B] text-white font-semibold py-3 px-6 rounded-full shadow-sm hover:from-[#B8860B] hover:to-[#966F1A] hover:shadow-md transition-all duration-300">
                Book Now
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}