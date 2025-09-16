// src/pages/PTPackage.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaClock,
  FaUsers,
  FaStar,
  FaArrowLeft,
  FaPhone,
  FaEnvelope,
  FaCheck,
} from "react-icons/fa";

const toursData = {
  northeast: [
    {
      id: "meghalaya",
      name: "Meghalaya Tour",
      days: 5,
      nights: 4,
      start: "Shillong",
      end: "Cherrapunji",
      img: "https://source.unsplash.com/600x400/?meghalaya,india",
      packages: [
        {
          id: "pkg1",
          name: "Standard Meghalaya",
          description: "5 days exploring Shillong, Dawki, and Cherrapunji.",
          location: "Shillong → Cherrapunji",
          members: "10-15 people",
          price: "₹15,999",
          image: "https://source.unsplash.com/600x400/?shillong",
        },
        {
          id: "pkg2",
          name: "Luxury Meghalaya",
          description:
            "Premium stays with Dawki river boating and cave exploration.",
          location: "Shillong → Cherrapunji",
          members: "6-10 people",
          price: "₹25,999",
          image: "https://source.unsplash.com/600x400/?cherrapunji",
        },
      ],
    },
    {
      id: "assam-safari",
      name: "Assam Wildlife Safari",
      days: 4,
      nights: 3,
      start: "Guwahati",
      end: "Kaziranga",
      img: "https://source.unsplash.com/600x400/?assam,india",
      packages: [
        {
          id: "pkg1",
          name: "Kaziranga Adventure",
          description: "Jeep safari & river cruise with local village visit.",
          location: "Guwahati → Kaziranga",
          members: "12-18 people",
          price: "₹18,499",
          image: "https://source.unsplash.com/600x400/?kaziranga",
        },
      ],
    },
    {
      id: "sikkim-adventure",
      name: "Sikkim Adventure",
      days: 6,
      nights: 5,
      start: "Gangtok",
      end: "Lachung",
      img: "https://source.unsplash.com/600x400/?sikkim,india",
      packages: [
        {
          id: "pkg1",
          name: "Budget Sikkim",
          description: "Gangtok sightseeing and Nathula Pass trip.",
          location: "Gangtok → Lachung",
          members: "15-20 people",
          price: "₹12,999",
          image: "https://source.unsplash.com/600x400/?gangtok",
        },
        {
          id: "pkg2",
          name: "Premium Sikkim",
          description: "Yumthang Valley + Gurudongmar Lake + Luxury stay.",
          location: "Gangtok → Lachung",
          members: "8-12 people",
          price: "₹28,999",
          image: "https://source.unsplash.com/600x400/?lachung",
        },
        {
          id: "pkg3",
          name: "Adventure Sikkim",
          description: "Includes trekking & river rafting experience.",
          location: "Gangtok → Lachung",
          members: "10-14 people",
          price: "₹22,500",
          image: "https://source.unsplash.com/600x400/?sikkim,trekking",
        },
      ],
    },
    // add Arunachal, Nagaland, Tripura etc in same way
  ],
};

const whyBookWithUs = [
  "Expertly crafted itineraries by travel specialists",
  "Premium accommodations with authentic local experiences",
  "Small group sizes for personalized attention",
  "24/7 customer support during your journey",
  "Flexible booking and cancellation policies",
  "Best price guarantee",
];

export default function PTPackage() {
  const { category: rawCategory, tourId } = useParams();
  const navigate = useNavigate();

  // Normalize category key to match toursData.js
  const categoryKey = (rawCategory || "").replace(/[-\s]/g, "").toLowerCase();
  const categoryList = toursData[categoryKey] || [];

  // Find tour by id
  const tour = categoryList.find((t) => t.id === tourId);

  // Defensive fallback
  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="max-w-xl text-center">
          <h2 className="text-2xl font-bold mb-4">Tour not found</h2>
          <p className="text-zinc-600 mb-6">
            We couldn't find that tour in the "{rawCategory}" category.
          </p>
          <div className="flex gap-3 justify-center">
            <button
              onClick={() => navigate(-1)}
              className="px-4 py-2 rounded-md bg-amber-500 text-white"
            >
              Go Back
            </button>
            <button
              onClick={() => navigate("/")}
              className="px-4 py-2 rounded-md border border-zinc-300"
            >
              Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  const packages = tour.packages || [];

  // ✅ Navigate to PTPDetails
  const handleViewPackageDetails = (packageId) => {
    navigate(`/popular-tours/${rawCategory}/${tour.id}/${packageId}`);
  };

  const handleCallNow = (packageName) => {
    alert(`Calling about ${packageName} package`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${tour.img})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {tour.name}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-white">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-yellow-500" />
                <span>
                  {tour.start} → {tour.end}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="text-yellow-500" />
                <span>
                  {tour.days} Days / {tour.nights} Nights
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaUsers className="text-yellow-500" />
                <span>Group Tour</span>
              </div>
              <div className="flex items-center gap-2">
                <FaStar className="text-yellow-500" />
                <span>4.8/5</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-12 px-6 sm:px-10 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Packages */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-zinc-800">
                  Explore {tour.name} Packages
                </h2>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-yellow-600 hover:text-yellow-700 transition-colors"
                  >
                    <FaArrowLeft />
                    <span>Back</span>
                  </button>
                  <button
                    onClick={() => navigate(`/popular-tours/${rawCategory}`)}
                    className="px-3 py-2 rounded-md border border-zinc-200 text-zinc-700"
                  >
                    View all {rawCategory}
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {packages.map((pkg) => (
                  <div
                    key={pkg.id}
                    className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border"
                  >
                    <div className="relative">
                      <img
                        src={pkg.image}
                        alt={pkg.name}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
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
                          <FaMapMarkerAlt className="text-yellow-600" />
                          <span>{pkg.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-zinc-600">
                          <FaUsers className="text-yellow-600" />
                          <span>{pkg.members}</span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center mb-4">
                        <span className="text-lg font-bold text-yellow-600">
                          {pkg.price}
                        </span>
                        <span className="text-xs text-zinc-500">
                          per person
                        </span>
                      </div>

                      <div className="flex gap-3">
                        <button
                          onClick={() => handleViewPackageDetails(pkg.id)}
                          className="flex-1 bg-gradient-to-r from-yellow-700 to-yellow-500 text-white font-medium py-2 px-4 rounded-full text-sm shadow-sm hover:from-yellow-600 hover:to-yellow-400 hover:shadow-md transition-all duration-300"
                        >
                          View Details
                        </button>
                        <button
                          onClick={() => handleCallNow(pkg.name)}
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
            <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-zinc-800 mb-4">
                Why Book With Us?
              </h2>
              <ul className="space-y-3">
                {whyBookWithUs.map((reason, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="bg-yellow-600 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FaCheck className="text-white text-xs" />
                    </div>
                    <span className="text-zinc-700">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact CTA */}
            <div className="bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-2xl shadow-md p-6 text-white">
              <h2 className="text-2xl font-bold mb-4">Get a Quotation?</h2>
              <p className="mb-6">
                Contact us for a personalized quote and special offers for this
                tour.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 rounded-full w-10 h-10 flex items-center justify-center">
                    <FaPhone />
                  </div>
                  <div>
                    <p className="text-sm opacity-80">Call us now</p>
                    <p className="font-semibold">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 rounded-full w-10 h-10 flex items-center justify-center">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="text-sm opacity-80">Email us</p>
                    <p className="font-semibold">info@premiumtours.com</p>
                  </div>
                </div>
              </div>
              <button className="mt-6 w-full bg-white text-yellow-700 font-semibold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
                Request Callback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
