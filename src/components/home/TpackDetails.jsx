import React from "react";
import { FaMapMarkerAlt, FaStar, FaClock, FaUsers, FaCheck, FaPhone, FaEnvelope, FaArrowLeft } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";

// Complete tour details for all tours
const tourDetails = {
  "darjeeling-odyssey": {
    title: "Darjeeling Himalayan Odyssey",
    heroImage: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1920&q=80",
    description: "Experience the scenic beauty and misty mountains of Darjeeling, complete with heritage toy train rides. This premium tour takes you through the breathtaking landscapes of the Himalayas, offering stunning views of Mount Kanchenjunga, visits to tea plantations, and rides on the famous Darjeeling Himalayan Railway, a UNESCO World Heritage Site.",
    highlights: [
      "Heritage toy train ride through the mountains",
      "Sunrise view at Tiger Hill",
      "Visit to tea plantations and tea tasting",
      "Explore monasteries and local markets",
      "Stay in premium heritage hotels"
    ],
    itinerary: [
      "Day 1: Arrival in Darjeeling, check-in at heritage hotel",
      "Day 2: Early morning Tiger Hill sunrise, visit to Ghoom Monastery",
      "Day 3: Toy train ride, tea plantation tour and tasting",
      "Day 4: Explore local markets, visit Himalayan Mountaineering Institute",
      "Day 5: Departure with memories to cherish"
    ],
    includes: [
      "4 nights accommodation in premium heritage hotel",
      "Daily breakfast and dinner",
      "All transfers and sightseeing by private vehicle",
      "Toy train ride tickets",
      "Tea plantation tour with tasting",
      "Expert guide throughout the tour"
    ],
    excludes: [
      "Airfare/train fare to/from Darjeeling",
      "Lunch and other meals not mentioned",
      "Personal expenses like tips, shopping, etc.",
      "Travel insurance"
    ],
    location: "Darjeeling",
    duration: "5 Days",
    groupSize: "Max 12",
    rating: "4.8",
    price: "₹42,999 per person",
    packages: [
      {
        id: 1,
        name: "Heritage Tea Garden Experience",
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=700&q=80",
        description: "Immerse yourself in the world of Darjeeling tea with visits to heritage tea estates and exclusive tasting sessions.",
        location: "Darjeeling",
        members: "Max 8",
        price: "₹15,999"
      },
      {
        id: 2,
        name: "Mountain Sunrise Trek",
        image: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=700&q=80",
        description: "Trek to the best viewpoints for spectacular Himalayan sunrises and panoramic mountain vistas.",
        location: "Tiger Hill",
        members: "Max 10",
        price: "₹12,499"
      },
      {
        id: 3,
        name: "Toy Train Journey",
        image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=700&q=80",
        description: "Experience the charm of the UNESCO-listed Darjeeling Himalayan Railway on a scenic toy train ride.",
        location: "Darjeeling",
        members: "Max 15",
        price: "₹8,999"
      },
      {
        id: 4,
        name: "Cultural Monastery Tour",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=700&q=80",
        description: "Explore ancient Buddhist monasteries and learn about the spiritual heritage of the Himalayan region.",
        location: "Ghoom",
        members: "Max 12",
        price: "₹10,999"
      },
      {
        id: 5,
        name: "Local Market Exploration",
        image: "https://images.unsplash.com/photo-1556740746-9b0d9a1f1d0a?auto=format&fit=crop&w=700&q=80",
        description: "Discover vibrant local markets, taste authentic cuisine, and shop for unique handicrafts and souvenirs.",
        location: "Darjeeling",
        members: "Max 15",
        price: "₹6,999"
      },
      {
        id: 6,
        name: "Himalayan Photography",
        image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=700&q=80",
        description: "Capture breathtaking landscapes and cultural moments with guidance from professional photographers.",
        location: "Darjeeling",
        members: "Max 8",
        price: "₹14,999"
      }
    ]
  },
  "sundarbans-adventure": {
    title: "Sundarbans Jungle Adventure",
    heroImage: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1920&q=80",
    description: "Explore the world's largest mangrove forest and spot Bengal tigers in a thrilling eco-tour. This adventure takes you deep into the Sundarbans, a UNESCO World Heritage Site, where you'll navigate through narrow creeks and dense forests in search of the elusive Royal Bengal tiger.",
    highlights: [
      "Boat safari through mangrove forests",
      "Wildlife spotting opportunities",
      "Visit to local villages",
      "Bird watching at Sajnekhali",
      "Experience the unique ecosystem of Sundarbans"
    ],
    itinerary: [
      "Day 1: Arrival at Kolkata, transfer to Sundarbans",
      "Day 2: Full day boat safari in the forest",
      "Day 3: Visit watchtowers and wildlife sanctuaries",
      "Day 4: Explore local culture and return to Kolkata",
      "Day 5: Departure from Kolkata"
    ],
    includes: [
      "4 nights accommodation (2 in Sundarbans, 2 in Kolkata)",
      "Daily breakfast and dinner",
      "All transfers and boat safaris",
      "Entry fees to parks and sanctuaries",
      "Expert naturalist guide",
      "All applicable taxes"
    ],
    excludes: [
      "Airfare/train fare to/from Kolkata",
      "Lunch and other meals not mentioned",
      "Personal expenses like tips, shopping, etc.",
      "Travel insurance",
      "Camera fees (where applicable)"
    ],
    location: "Sundarbans",
    duration: "4 Days",
    groupSize: "Max 10",
    rating: "4.9",
    price: "₹38,999 per person",
    packages: [
      {
        id: 1,
        name: "Mangrove Boat Safari",
        image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=700&q=80",
        description: "Experience the thrill of navigating through the narrow creeks of the Sundarbans on a traditional boat.",
        location: "Sundarbans",
        members: "Max 8",
        price: "₹12,999"
      },
      {
        id: 2,
        name: "Tiger Tracking Expedition",
        image: "https://images.unsplash.com/photo-1548247772-8ba5cac50c4e?auto=format&fit=crop&w=700&q=80",
        description: "Join expert naturalists on a quest to spot the elusive Royal Bengal tiger in its natural habitat.",
        location: "Sundarbans",
        members: "Max 6",
        price: "₹18,999"
      },
      {
        id: 3,
        name: "Bird Watching Tour",
        image: "https://images.unsplash.com/photo-1610123283927-9d7c4f4b5c0e?auto=format&fit=crop&w=700&q=80",
        description: "Discover the rich avian diversity of the Sundarbans with expert ornithologists.",
        location: "Sajnekhali",
        members: "Max 10",
        price: "₹9,999"
      },
      {
        id: 4,
        name: "Village Culture Experience",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=700&q=80",
        description: "Immerse yourself in the unique culture and traditions of the Sundarbans' local communities.",
        location: "Sundarbans Villages",
        members: "Max 12",
        price: "₹7,999"
      }
    ]
  },
  "kolkata-culture": {
    title: "Kolkata Culture & Heritage",
    heroImage: "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?auto=format&fit=crop&w=1920&q=80",
    description: "Dive into the vibrant culture, colonial architecture, and culinary delights of the 'City of Joy'. This tour takes you through the heart of Kolkata, exploring its rich history, artistic heritage, and bustling markets.",
    highlights: [
      "Visit Victoria Memorial and Indian Museum",
      "Explore colonial architecture in Dalhousie Square",
      "Experience the vibrant Durga Puja culture",
      "Taste authentic Bengali cuisine",
      "Visit the Howrah Bridge and ghats of Hooghly River"
    ],
    itinerary: [
      "Day 1: Arrival in Kolkata, city orientation tour",
      "Day 2: Visit Victoria Memorial, Indian Museum, and St. Paul's Cathedral",
      "Day 3: Explore Dalhousie Square, Writer's Building, and Howrah Bridge",
      "Day 4: Visit Kalighat Temple, Dakshineswar, and Belur Math",
      "Day 5: Departure from Kolkata"
    ],
    includes: [
      "4 nights accommodation in premium hotel",
      "Daily breakfast and dinner",
      "All transfers and sightseeing by private vehicle",
      "Entry fees to all monuments",
      "Expert guide throughout the tour",
      "All applicable taxes"
    ],
    excludes: [
      "Airfare/train fare to/from Kolkata",
      "Lunch and other meals not mentioned",
      "Personal expenses like tips, shopping, etc.",
      "Travel insurance"
    ],
    location: "Kolkata",
    duration: "3 Days",
    groupSize: "Max 15",
    rating: "4.7",
    price: "₹28,999 per person",
    packages: [
      {
        id: 1,
        name: "Colonial Heritage Walk",
        image: "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?auto=format&fit=crop&w=700&q=80",
        description: "Explore the colonial architecture of Kolkata with expert historians and architects.",
        location: "Dalhousie Square",
        members: "Max 15",
        price: "₹8,999"
      },
      {
        id: 2,
        name: "Bengali Culinary Journey",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?auto=format&fit=crop&w=700&q=80",
        description: "Taste authentic Bengali cuisine with visits to local eateries and cooking demonstrations.",
        location: "Kolkata",
        members: "Max 10",
        price: "₹10,999"
      },
      {
        id: 3,
        name: "Art & Culture Tour",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=700&q=80",
        description: "Discover Kolkata's vibrant art scene with visits to galleries, artist studios, and cultural centers.",
        location: "Kolkata",
        members: "Max 12",
        price: "₹9,999"
      }
    ]
  },
  "meghalaya-bridges": {
    title: "Meghalaya Living Root Bridges",
    heroImage: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1920&q=80",
    description: "Discover the living root bridges, waterfalls, and misty landscapes of Meghalaya's dense forests. This unique tour takes you to one of India's wettest regions, home to the incredible living root bridges and breathtaking natural beauty.",
    highlights: [
      "Trek to the famous Double Decker Living Root Bridge",
      "Visit crystal-clear rivers and natural pools",
      "Explore the cleanest village in Asia, Mawlynnong",
      "Experience the beauty of Cherrapunji and Mawsynram",
      "Interact with local Khasi tribes"
    ],
    itinerary: [
      "Day 1: Arrival in Shillong, city tour",
      "Day 2: Travel to Cherrapunji, visit Nohkalikai Falls",
      "Day 3: Trek to Double Decker Living Root Bridge",
      "Day 4: Visit Mawlynnong village and Dawki River",
      "Day 5: Return to Shillong and departure",
      "Day 6: Optional extension to more remote villages"
    ],
    includes: [
      "5 nights accommodation in premium hotels/resorts",
      "Daily breakfast and dinner",
      "All transfers and sightseeing by private vehicle",
      "Trekking permits and guide fees",
      "Expert local guide throughout the tour",
      "All applicable taxes"
    ],
    excludes: [
      "Airfare/train fare to/from Shillong",
      "Lunch and other meals not mentioned",
      "Personal expenses like tips, shopping, etc.",
      "Travel insurance"
    ],
    location: "Meghalaya",
    duration: "6 Days",
    groupSize: "Max 8",
    rating: "5.0",
    price: "₹48,999 per person",
    packages: [
      {
        id: 1,
        name: "Living Root Bridges Trek",
        image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=700&q=80",
        description: "Trek to the famous Double Decker Living Root Bridge and other unique root bridges in the region.",
        location: "Cherrapunji",
        members: "Max 8",
        price: "₹15,999"
      },
      {
        id: 2,
        name: "Waterfall Exploration",
        image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=700&q=80",
        description: "Visit some of the most spectacular waterfalls in Meghalaya, including Nohkalikai and Seven Sisters.",
        location: "Cherrapunji",
        members: "Max 10",
        price: "₹12,999"
      },
      {
        id: 3,
        name: "Cleanest Village Experience",
        image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=700&q=80",
        description: "Visit Mawlynnong, acclaimed as the cleanest village in Asia, and experience local Khasi culture.",
        location: "Mawlynnong",
        members: "Max 12",
        price: "₹10,999"
      }
    ]
  },
  "sikkim-escape": {
    title: "Sikkim Himalayan Escape",
    heroImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1920&q=80",
    description: "Journey through the pristine landscapes of Sikkim, from ancient monasteries to glacial lakes. This tour takes you through the Himalayan state of Sikkim, offering stunning mountain views, serene monasteries, and vibrant local culture.",
    highlights: [
      "Visit Tsomgo Lake and Nathu La Pass",
      "Explore ancient Buddhist monasteries",
      "Experience the beauty of Yumthang Valley",
      "Taste authentic Sikkimese cuisine",
      "Enjoy panoramic views of the Himalayas"
    ],
    itinerary: [
      "Day 1: Arrival in Gangtok, city tour",
      "Day 2: Visit Tsomgo Lake and Nathu La Pass",
      "Day 3: Travel to Lachung, visit Yumthang Valley",
      "Day 4: Explore Lachen and Gurudongmar Lake",
      "Day 5: Return to Gangtok, visit Rumtek Monastery",
      "Day 6: Visit Pelling and departure",
      "Day 7: Optional extension to Darjeeling"
    ],
    includes: [
      "6 nights accommodation in premium hotels/resorts",
      "Daily breakfast and dinner",
      "All transfers and sightseeing by private vehicle",
      "Permits for restricted areas",
      "Expert local guide throughout the tour",
      "All applicable taxes"
    ],
    excludes: [
      "Airfare/train fare to/from Gangtok",
      "Lunch and other meals not mentioned",
      "Personal expenses like tips, shopping, etc.",
      "Travel insurance"
    ],
    location: "Sikkim",
    duration: "7 Days",
    groupSize: "Max 10",
    rating: "4.9",
    price: "₹52,999 per person",
    packages: [
      {
        id: 1,
        name: "High Altitude Lakes Tour",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=700&q=80",
        description: "Visit the stunning high-altitude lakes of Sikkim, including Tsomgo and Gurudongmar.",
        location: "Gangtok",
        members: "Max 8",
        price: "₹18,999"
      },
      {
        id: 2,
        name: "Monastery Circuit",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=700&q=80",
        description: "Explore the ancient Buddhist monasteries of Sikkim and learn about Tibetan Buddhism.",
        location: "Gangtok",
        members: "Max 12",
        price: "₹12,999"
      },
      {
        id: 3,
        name: "Yumthang Valley Experience",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=700&q=80",
        description: "Experience the breathtaking beauty of Yumthang Valley, known as the 'Valley of Flowers'.",
        location: "Lachung",
        members: "Max 10",
        price: "₹15,999"
      }
    ]
  },
  "puri-tour": {
    title: "Puri Beach & Temple Tour",
    heroImage: "https://images.unsplash.com/photo-1516397281156-ca07cf9746fc?auto=format&fit=crop&w=1920&q=80",
    description: "Experience the spiritual essence of Puri with its ancient temples and pristine beaches. This tour takes you to the holy city of Puri, home to the famous Jagannath Temple and beautiful beaches along the Bay of Bengal.",
    highlights: [
      "Visit the famous Jagannath Temple",
      "Relax on the pristine beaches of Puri",
      "Explore the Konark Sun Temple, a UNESCO World Heritage Site",
      "Experience the vibrant culture of Odisha",
      "Taste authentic Odia cuisine"
    ],
    itinerary: [
      "Day 1: Arrival in Puri, visit Jagannath Temple",
      "Day 2: Beach relaxation and local market tour",
      "Day 3: Day trip to Konark Sun Temple",
      "Day 4: Visit Chilika Lake and return to Puri",
      "Day 5: Departure from Puri"
    ],
    includes: [
      "4 nights accommodation in beachfront hotel",
      "Daily breakfast and dinner",
      "All transfers and sightseeing by private vehicle",
      "Entry fees to all monuments",
      "Expert guide throughout the tour",
      "All applicable taxes"
    ],
    excludes: [
      "Airfare/train fare to/from Puri",
      "Lunch and other meals not mentioned",
      "Personal expenses like tips, shopping, etc.",
      "Travel insurance"
    ],
    location: "Puri",
    duration: "4 Days",
    groupSize: "Max 12",
    rating: "4.6",
    price: "₹32,999 per person",
    packages: [
      {
        id: 1,
        name: "Temple Heritage Tour",
        image: "https://images.unsplash.com/photo-1516397281156-ca07cf9746fc?auto=format&fit=crop&w=700&q=80",
        description: "Explore the ancient temples of Puri and learn about their rich history and architecture.",
        location: "Puri",
        members: "Max 15",
        price: "₹9,999"
      },
      {
        id: 2,
        name: "Beach Relaxation Package",
        image: "https://images.unsplash.com/photo-1516397281156-ca07cf9746fc?auto=format&fit=crop&w=700&q=80",
        description: "Relax on the pristine beaches of Puri with optional water sports activities.",
        location: "Puri Beach",
        members: "Max 12",
        price: "₹7,999"
      },
      {
        id: 3,
        name: "Konark Sun Temple Excursion",
        image: "https://images.unsplash.com/photo-1516397281156-ca07cf9746fc?auto=format&fit=crop&w=700&q=80",
        description: "Visit the magnificent Konark Sun Temple, a UNESCO World Heritage Site known for its intricate architecture.",
        location: "Konark",
        members: "Max 15",
        price: "₹11,999"
      }
    ]
  }
};

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
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {tour.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-white">
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
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-12 px-6 sm:px-10 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content - Explore Tour Packages */}
          <div className="lg:w-2/3">
            {/* Tour Overview */}
            {/* <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-zinc-800 mb-4">About This Tour</h2>
              <p className="text-zinc-700 mb-6">
                {tour.description}
              </p>
              
              <h3 className="text-xl font-bold text-zinc-800 mb-3">Tour Highlights</h3>
              <ul className="space-y-2 mb-6">
                {tour.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <FaCheck className="text-[#D4A017] mt-1 flex-shrink-0" />
                    <span className="text-zinc-700">{highlight}</span>
                  </li>
                ))}
              </ul>
              
              <h3 className="text-xl font-bold text-zinc-800 mb-3">Itinerary</h3>
              <ul className="space-y-3 mb-6">
                {tour.itinerary.map((day, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="bg-[#D4A017] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-zinc-700">{day}</span>
                  </li>
                ))}
              </ul>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-zinc-800 mb-3">What's Included</h3>
                  <ul className="space-y-2">
                    {tour.includes.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <FaCheck className="text-[#D4A017] mt-1 flex-shrink-0" />
                        <span className="text-zinc-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-zinc-800 mb-3">What's Excluded</h3>
                  <ul className="space-y-2">
                    {tour.excludes.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="text-red-500 mt-1 flex-shrink-0">×</div>
                        <span className="text-zinc-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div> */}
            
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
                      
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-lg font-bold text-[#D4A017]">{pkg.price}</span>
                        <span className="text-xs text-zinc-500">per person</span>
                      </div>
                      
                      <div className="flex gap-3">
                        <button 
                          onClick={() => handleViewPackageDetails(pkg.id)}
                          className="flex-1 bg-gradient-to-r from-[#D4A017] to-[#B8860B] text-white font-medium py-2 px-4 rounded-full text-sm shadow-sm hover:from-[#B8860B] hover:to-[#966F1A] hover:shadow-md transition-all duration-300"
                        >
                          View Details
                        </button>
                        <button 
                          onClick={() => handleCallNow(pkg.name)}
                          className="flex-1 bg-white border border-[#D4A017] text-[#D4A017] font-medium py-2 px-4 rounded-full text-sm shadow-sm hover:bg-[#FFF9E6] transition-all duration-300"
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
              
              <button className="mt-6 w-full bg-white text-[#B8860B] font-semibold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
                Request Callback
              </button>
            </div>
            
            {/* Price Box */}
            <div className="bg-white rounded-2xl shadow-md p-6 mt-8 border border-[#FFF9E6]">
              <div className="flex justify-between items-center mb-2">
                <span className="text-zinc-600">Tour Price</span>
                <span className="text-2xl font-bold text-[#D4A017]">{tour.price}</span>
              </div>
              <p className="text-sm text-zinc-500 mb-4">Based on double occupancy</p>
              <button className="w-full bg-gradient-to-r from-[#D4A017] to-[#B8860B] text-white font-semibold py-3 px-6 rounded-full shadow-sm hover:from-[#B8860B] hover:to-[#966F1A] hover:shadow-md transition-all duration-300">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}