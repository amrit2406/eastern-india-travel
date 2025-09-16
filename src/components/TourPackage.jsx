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
  odisha: [
    {
      id: "puri-konark",
      name: "Devotional Tours",
      packages: [
        {
          id: "basic",
          name: "2 Nights 3 Days Package",
          days: 3,
          nights: 2,
          img: "https://media.istockphoto.com/id/1444924249/photo/konark-sun-temple-at-sunrise-konark-temple-is-a-unesco-world-heritage-site-at-puri-odisha.jpg?s=612x612&w=0&k=20&c=5Gd3UDpZeYh8DejD4a4TTrpAZLoPw5SARAUFT7hfwRk=",
          start: "Puri",
          end: "Konark",
          description:
            "Perfect for first-time visitors. Explore the sacred Jagannath Temple, Konark Sun Temple, and Puri beach.",
        },
        {
          id: "premium",
          name: "4 Nights 5 Days Package",
          days: 5,
          nights: 4,
          img: "https://www.holidify.com/images/cmsuploads/compressed/attr_2321_20200217143815.jpg",
          start: "Puri",
          end: "Bhubaneswar",
          description:
            "Includes temples, beaches, and heritage sites. Covers Bhubaneswar temples, Konark, and Chilika Lake.",
        },
      ],
    },
    {
      id: "bhubaneswar-city",
      name: "Tribal Tours",
      packages: [
        {
          id: "basic",
          name: "2 Nights 3 Days Package",
          days: 3,
          nights: 2,
          img: "https://dulcimertours.com/wp-content/uploads/2020/08/New-Image.jpg",
          start: "Bhubaneswar",
          end: "Koraput",
          description:
            "Explore Bhubaneswar’s ancient temples and tribal art museums. Short but enriching experience.",
        },
        {
          id: "premium",
          name: "5 Nights 6 Days Package",
          days: 6,
          nights: 5,
          img: "https://odishatourism.gov.in/content/dam/tourism/home/discover/tribes-of-odisha.jpg",
          start: "Bhubaneswar",
          end: "Koraput",
          description:
            "Extended journey covering tribal villages, handicrafts, and vibrant festivals with cultural immersion.",
        },
      ],
    },
    {
      id: "chilika-lake",
      name: "Wildlife and Adventure Tours",
      packages: [
        {
          id: "basic",
          name: "2 Nights 3 Days Package",
          days: 3,
          nights: 2,
          img: "https://www.indiadrivertours.com/wp-content/uploads/2022/05/raj-tigerleopardtour.jpg",
          start: "Chilika",
          end: "Satapada",
          description:
            "Enjoy boat rides on Chilika Lake, spot migratory birds, and visit dolphin hotspots.",
        },
        {
          id: "premium",
          name: "4 Nights 5 Days Package",
          days: 5,
          nights: 4,
          img: "https://images.unsplash.com/photo-1599058917212-6dcf2ce2743d",
          start: "Chilika",
          end: "Satapada",
          description:
            "Extended adventure with Chilika Lake, dolphin watching, trekking, and wildlife sanctuaries.",
        },
      ],
    },
    {
      id: "simlipal",
      name: "Senior Citizen Tours",
      packages: [
        {
          id: "basic",
          name: "3 Nights 4 Days Package",
          days: 4,
          nights: 3,
          img: "https://img.freepik.com/free-photo/seniors-with-map_1098-14988.jpg",
          start: "Cuttack",
          end: "Simlipal",
          description:
            "Relaxing tour designed for seniors. Covers Simlipal forest safari and peaceful nature walks.",
        },
        {
          id: "premium",
          name: "6 Nights 7 Days Package",
          days: 7,
          nights: 6,
          img: "https://i.ytimg.com/vi/tQkhtjfiVno/maxresdefault.jpg",
          start: "Cuttack",
          end: "Simlipal",
          description:
            "Leisurely journey with more time in Simlipal, nature resorts, and assisted guided experiences.",
        },
      ],
    },
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

export default function TourPackage() {
  const { tourId } = useParams(); // Only tourId now
  const navigate = useNavigate();

  // Search tour across all categories
  let tour;
  let tourCategory = "";
  for (const category in toursData) {
    const found = toursData[category].find((t) => t.id === tourId);
    if (found) {
      tour = found;
      tourCategory = category;
      break;
    }
  }

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="max-w-xl text-center">
          <h2 className="text-2xl font-bold mb-4">Tour not found</h2>
          <p className="text-zinc-600 mb-6">We couldn't find that tour.</p>
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

  const handleViewPackageDetails = (packageId) => {
    navigate(`/tour-details/${tour.id}/${packageId}`);
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
          style={{ backgroundImage: `url(${tour.packages[0].img})` }}
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
                  {tour.packages[0].start} → {tour.packages[0].end}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="text-yellow-500" />
                <span>
                  {tour.packages[0].days} Days / {tour.packages[0].nights}{" "}
                  Nights
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
                        src={pkg.img}
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
                          <span>
                            {pkg.start} → {pkg.end}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-zinc-600">
                          <FaUsers className="text-yellow-600" />
                          <span>Group Tour</span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center mb-4">
                        <span className="text-lg font-bold text-yellow-600">
                          {pkg.days} Days / {pkg.nights} Nights
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
