import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Calendar, 
  Users, 
  Star, 
  ChevronRight,
  Phone,
  Mail,
  User
} from 'lucide-react';
import { FaMapMarkerAlt, FaChild } from 'react-icons/fa';

const TourDetails = () => {
  const { id } = useParams(); // Get the tour ID from the URL
  const [tour, setTour] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    arrivalDate: '',
    departureDate: '',
    persons: '',
    children: '',
    message: ''
  });

  // Sample tour data for all tours
  const allTours = {
    1: {
      id: 1,
      name: "Puri Konark Tour",
      location: "Odisha, India",
      duration: "3 Days / 2 Nights",
      price: "₹12,999",
      rating: 4.8,
      reviews: 124,
      images: [
        "https://images.unsplash.com/photo-1580135390424-701bd6cce890?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        "https://images.unsplash.com/photo-1599315498193-3c583a5c5ef5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        "https://images.unsplash.com/photo-1596436889106-be35e8435c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
      ],
      overview: "Experience the spiritual and cultural heart of Odisha with our Puri Konark Tour. This journey takes you to the famous Jagannath Temple in Puri and the magnificent Sun Temple in Konark, both UNESCO World Heritage Sites. Enjoy the pristine beaches, local cuisine, and rich cultural heritage of this coastal region.",
      quickGlance: [
        "Visit the famous Jagannath Temple in Puri",
        "Explore the architectural marvel of Sun Temple, Konark",
        "Relax at the golden beaches of Puri",
        "Witness the traditional art and craft of the region",
        "Enjoy authentic Odia cuisine"
      ],
      expectations: [
        "Comfortable accommodation in 3-star hotels",
        "Expert local guide throughout the tour",
        "All entrance fees to monuments included",
        "Daily breakfast and two dinners",
        "AC vehicle for all transfers and sightseeing"
      ],
      itinerary: [
        {
          day: "Day 1",
          title: "Arrival in Bhubaneswar and transfer to Puri",
          description: "Arrive at Bhubaneswar airport/railway station, meet our representative and proceed to Puri (60 km, approx 1.5 hrs). Check into hotel. Later visit Jagannath Temple and enjoy the beach. Overnight at Puri."
        },
        {
          day: "Day 2",
          title: "Puri to Konark and back",
          description: "After breakfast, proceed to Konark (35 km, approx 1 hr). Visit the magnificent Sun Temple, a UNESCO World Heritage site. Also visit Pipli, famous for its applique work. Return to Puri in the evening. Overnight at Puri."
        },
        {
          day: "Day 3",
          title: "Departure",
          description: "After breakfast, check out from hotel and proceed to Bhubaneswar. Visit Lingaraj Temple and Khandagiri & Udayagiri caves. Drop at airport/railway station for your onward journey."
        }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1580135390424-701bd6cce890?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        "https://images.unsplash.com/photo-1599315498193-3c583a5c5ef5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        "https://images.unsplash.com/photo-1596436889106-be35e8435c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=873&q=80",
        "https://images.unsplash.com/photo-1464822759849-e0e100921dae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=c crop&w=870&q=80",
        "https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
      ]
    },
    2: {
      id: 2,
      name: "Chilika Lake Experience",
      location: "Odisha, India",
      duration: "2 Days / 1 Night",
      price: "₹8,499",
      rating: 4.5,
      reviews: 89,
      images: [
        "https://images.unsplash.com/photo-1599315498193-3c583a5c5ef5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        "https://images.unsplash.com/photo-1580135390424-701bd6cce890?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        "https://images.unsplash.com/photo-1596436889106-be35e8435c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
      ],
      overview: "Discover the largest coastal lagoon in India and the second largest in the world. Chilika Lake is a biodiversity hotspot and a haven for bird watchers and nature lovers.",
      quickGlance: [
        "Boat ride on Chilika Lake",
        "Visit Kalijai Temple",
        "Bird watching at Nalabana Bird Sanctuary",
        "Dolphin spotting",
        "Enjoy fresh seafood"
      ],
      expectations: [
        "Comfortable accommodation",
        "Expert naturalist guide",
        "All boat charges included",
        "Meals included",
        "Transportation from Bhubaneswar"
      ],
      itinerary: [
        {
          day: "Day 1",
          title: "Bhubaneswar to Chilika",
          description: "Depart from Bhubaneswar to Chilika Lake. Check into hotel. After lunch, enjoy a boat ride on the lake, visit Kalijai Temple, and spot dolphins. Overnight at Chilika."
        },
        {
          day: "Day 2",
          title: "Bird watching and return",
          description: "Early morning bird watching at Nalabana Bird Sanctuary. After breakfast, visit nearby fishing villages. Return to Bhubaneswar in the afternoon."
        }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1599315498193-3c583a5c5ef5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        "https://images.unsplash.com/photo-1580135390424-701bd6cce890?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        "https://images.unsplash.com/photo-1596436889106-be35e8435c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
      ]
    },
    // Add more tours as needed (3, 4, 5, 6, 101, 102, etc.)
    101: {
      id: 101,
      name: "Sikkim Himalayan Tour",
      location: "Sikkim, India",
      duration: "5 Days / 4 Nights",
      price: "₹22,999",
      rating: 4.9,
      reviews: 156,
      images: [
        "https://images.unsplash.com/photo-1544735716-392fe2489ffc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        "https://images.unsplash.com/photo-1574362849075-1a29f488e310?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        "https://images.unsplash.com/photo-1580135390424-701bd6cce890?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
      ],
      overview: "Explore the stunning Himalayan landscapes of Sikkim, known for its monasteries, stunning vistas, and rich cultural heritage.",
      quickGlance: [
        "Visit Gangtok, the capital city",
        "Explore Rumtek Monastery",
        "Experience the beauty of Tsomgo Lake",
        "Visit Baba Harbhajan Singh Mandir",
        "Enjoy local Sikkimese cuisine"
      ],
      expectations: [
        "Comfortable accommodation in 3-star hotels",
        "Expert local guide throughout the tour",
        "All entrance fees included",
        "Daily breakfast and dinner",
        "AC vehicle for all transfers and sightseeing"
      ],
      itinerary: [
        {
          day: "Day 1",
          title: "Arrival in Gangtok",
          description: "Arrive at Bagdogra Airport or New Jalpaiguri Railway Station. Transfer to Gangtok (124 km, approx 4-5 hrs). Check into hotel. Rest of the day at leisure. Overnight at Gangtok."
        },
        {
          day: "Day 2",
          title: "Gangtok Local Sightseeing",
          description: "After breakfast, visit Tashi Viewpoint, Ganesh Tok, Hanuman Tok, Flower Show, and Directorate of Handicrafts & Handlooms. Overnight at Gangtok."
        },
        {
          day: "Day 3",
          title: "Excursion to Tsomgo Lake & Baba Mandir",
          description: "Full day excursion to Tsomgo Lake (12,400 ft) and Baba Harbhajan Singh Mandir (13,200 ft). Overnight at Gangtok."
        },
        {
          day: "Day 4",
          title: "Gangtok to Kalimpong",
          description: "After breakfast, drive to Kalimpong (80 km, approx 3 hrs). Visit Durpin Monastery, Deolo Hill, and flower nurseries. Overnight at Kalimpong."
        },
        {
          day: "Day 5",
          title: "Departure",
          description: "After breakfast, transfer to Bagdogra Airport or New Jalpaiguri Railway Station for your onward journey."
        }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1544735716-392fe2489ffc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        "https://images.unsplash.com/photo-1574362849075-1a29f488e310?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        "https://images.unsplash.com/photo-1580135390424-701bd6cce890?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
      ]
    }
    // Add more tours for other IDs as needed
  };

  useEffect(() => {
    // Simulate API call to fetch tour details based on ID
    const fetchTourDetails = () => {
      const tourDetails = allTours[id];
      if (tourDetails) {
        setTour(tourDetails);
      } else {
        // Handle tour not found
        console.error('Tour not found');
        // You can set a default tour or show an error message
        setTour(allTours[1]); // Default to first tour
      }
    };

    fetchTourDetails();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your enquiry! We will contact you soon.');
    // Reset form
    setFormData({
      name: '',
      number: '',
      email: '',
      arrivalDate: '',
      departureDate: '',
      persons: '',
      children: '',
      message: ''
    });
  };

  if (!tour) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Banner */}
      <div 
        className="h-96 relative bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${tour.images[0]})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            {tour.name}
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center justify-center space-x-4 flex-wrap"
          >
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-1" />
              <span>{tour.location}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-1" />
              <span>{tour.duration}</span>
            </div>
            <div className="flex items-center">
              <Star className="h-5 w-5 mr-1 fill-yellow-400 text-yellow-400" />
              <span>{tour.rating} ({tour.reviews} reviews)</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Tour Details Section */}
          <div className="lg:w-2/3">
            {/* Tab Navigation */}
            <div className="sticky top-0 z-10 bg-white shadow-md rounded-lg mb-6">
              <div className="flex overflow-x-auto">
                {['overview', 'quickGlance', 'expectations', 'itinerary', 'gallery'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${
                      activeTab === tab 
                        ? 'text-amber-700 border-b-2 border-amber-700' 
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab === 'overview' && 'Overview'}
                    {tab === 'quickGlance' && 'Quick Glance'}
                    {tab === 'expectations' && 'What to Expect'}
                    {tab === 'itinerary' && 'Detailed Itinerary'}
                    {tab === 'gallery' && 'Gallery'}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              {activeTab === 'overview' && (
                <div>
                  <h2 className="text-2xl font-bold text-amber-900 mb-4">Tour Overview</h2>
                  <p className="text-gray-700 leading-relaxed">{tour.overview}</p>
                </div>
              )}

              {activeTab === 'quickGlance' && (
                <div>
                  <h2 className="text-2xl font-bold text-amber-900 mb-4">Quick Glance</h2>
                  <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    {tour.quickGlance.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === 'expectations' && (
                <div>
                  <h2 className="text-2xl font-bold text-amber-900 mb-4">What to Expect</h2>
                  <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    {tour.expectations.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === 'itinerary' && (
                <div>
                  <h2 className="text-2xl font-bold text-amber-900 mb-4">Detailed Itinerary</h2>
                  <div className="space-y-6">
                    {tour.itinerary.map((day, index) => (
                      <div key={index} className="border-l-4 border-amber-500 pl-4 py-2">
                        <h3 className="text-lg font-semibold text-amber-800">{day.day}: {day.title}</h3>
                        <p className="text-gray-700 mt-2">{day.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'gallery' && (
                <div>
                  <h2 className="text-2xl font-bold text-amber-900 mb-4">Gallery</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {tour.gallery.map((image, index) => (
                      <div key={index} className="overflow-hidden rounded-lg">
                        <img 
                          src={image} 
                          alt={`${tour.name} ${index + 1}`} 
                          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110 cursor-pointer"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-2xl font-bold text-amber-900 mb-6">Plan Your Journey</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="pl-10 w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                      placeholder="Your full name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      name="number"
                      value={formData.number}
                      onChange={handleInputChange}
                      required
                      className="pl-10 w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="pl-10 w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                      placeholder="Your email address"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Arrival Date *
                    </label>
                    <input
                      type="date"
                      name="arrivalDate"
                      value={formData.arrivalDate}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Departure Date *
                    </label>
                    <input
                      type="date"
                      name="departureDate"
                      value={formData.departureDate}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Number of Persons *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Users className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="number"
                        name="persons"
                        value={formData.persons}
                        onChange={handleInputChange}
                        required
                        min="1"
                        className="pl-10 w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                        placeholder="Adults"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Number of Children
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaChild className="h-4 w-4 text-gray-400 mt-1" />
                      </div>
                      <input
                        type="number"
                        name="children"
                        value={formData.children}
                        onChange={handleInputChange}
                        min="0"
                        className="pl-10 w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                        placeholder="Children"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                    placeholder="Any special requirements or questions"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-amber-700 transition-colors flex items-center justify-center"
                >
                  Send Enquiry
                  <ChevronRight className="h-5 w-5 ml-2" />
                </button>
              </form>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-amber-900 mb-4">Need Help?</h3>
                <p className="text-gray-600 mb-4">Our travel experts are here to help you plan your perfect trip.</p>
                <div className="flex items-center text-amber-700 font-medium">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center text-amber-700 font-medium mt-2">
                  <Mail className="h-5 w-5 mr-2" />
                  <span>info@odishatours.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetails;