import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown, CheckCircle, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import RelatedT from "./RelatedT";
import Testi2 from "./home/Testi2";

// Import the tours data
const toursData = {
  odisha: [
    {
      id: "puri-konark",
      name: "Devotional Tours",
      days: 3,
      nights: 2,
      start: "Puri",
      end: "Konark",
      img: "https://media.istockphoto.com/id/1444924249/photo/konark-sun-temple-at-sunrise-konark-temple-is-a-unesco-world-heritage-site-at-puri-odisha.jpg?s=612x612&w=0&k=20&c=5Gd3UDpZeYh8DejD4a4TTrpAZLoPw5SARAUFT7hfwRk=",
      packages: {
        basic: {
          id: "basic",
          name: "2 Nights 3 Days Package",
          days: 3,
          nights: 2,
          img: "https://media.istockphoto.com/id/1444924249/photo/konark-sun-temple-at-sunrise-konark-temple-is-a-unesco-world-heritage-site-at-puri-odisha.jpg?s=612x612&w=0&k=20&c=5Gd3UDpZeYh8DejD4a4TTrpAZLoPw5SARAUFT7hfwRk=",
          start: "Puri",
          end: "Konark",
          banner: "https://source.unsplash.com/1600x600/?puri,beach",
          description:
            "Perfect for first-time visitors. Explore the sacred Jagannath Temple, Konark Sun Temple, and Puri beach.",
          intro:
            "Explore the sacred city of Puri and the magnificent Konark Sun Temple. This tour offers a perfect mix of spirituality, heritage, and coastal charm.",
          shortItinerary: [
            "Day 1: Arrival in Bhubaneswar & transfer to Puri",
            "Day 2: Jagannath Temple & Konark Sun Temple",
            "Day 3: Chilika Lake excursion & departure",
          ],
          expect: [
            "Darshan at Jagannath Temple",
            "UNESCO Konark Sun Temple visit",
            "Scenic boat ride at Chilika",
            "Puri Beach leisure walk",
          ],
          itinerary: [
            {
              day: "Day 1",
              detail:
                "Arrival at Bhubaneswar, transfer to Puri. Evening walk on Puri Beach.",
            },
            {
              day: "Day 2",
              detail:
                "Morning visit to Jagannath Temple. Afternoon excursion to Konark Sun Temple. Evening free in Puri.",
            },
            {
              day: "Day 3",
              detail:
                "Day trip to Chilika Lake for dolphin spotting. Drop at Bhubaneswar for departure.",
            },
          ],
          gallery: [
            "https://source.unsplash.com/600x400/?puri",
            "https://source.unsplash.com/600x400/?konark",
            "https://source.unsplash.com/600x400/?chilika",
          ],
        },
        premium: {
          id: "premium",
          name: "4 Nights 5 Days Package",
          days: 5,
          nights: 4,
          img: "https://www.holidify.com/images/cmsuploads/compressed/attr_2321_20200217143815.jpg",
          start: "Puri",
          end: "Bhubaneswar",
          banner: "https://source.unsplash.com/1600x600/?bhubaneswar,temple",
          description:
            "Includes temples, beaches, and heritage sites. Covers Bhubaneswar temples, Konark, and Chilika Lake.",
          intro:
            "Experience the spiritual heart of Odisha with this extended tour covering Puri, Konark, Bhubaneswar temples, and Chilika Lake.",
          shortItinerary: [
            "Day 1: Arrival in Bhubaneswar & transfer to Puri",
            "Day 2: Jagannath Temple & Konark Sun Temple",
            "Day 3: Chilika Lake excursion",
            "Day 4: Bhubaneswar temple tour",
            "Day 5: Departure",
          ],
          expect: [
            "Jagannath Temple darshan",
            "Konark Sun Temple exploration",
            "Chilika Lake dolphin spotting",
            "Lingaraj Temple visit",
            "Udayagiri caves exploration",
          ],
          itinerary: [
            {
              day: "Day 1",
              detail:
                "Arrival at Bhubaneswar, transfer to Puri. Evening walk on Puri Beach.",
            },
            {
              day: "Day 2",
              detail:
                "Morning visit to Jagannath Temple. Afternoon excursion to Konark Sun Temple. Evening free in Puri.",
            },
            {
              day: "Day 3",
              detail:
                "Full day excursion to Chilika Lake for dolphin spotting and bird watching.",
            },
            {
              day: "Day 4",
              detail:
                "Transfer to Bhubaneswar. Visit Lingaraj Temple, Rajarani Temple, and Udayagiri caves.",
            },
            {
              day: "Day 5",
              detail: "Morning at leisure. Departure from Bhubaneswar.",
            },
          ],
          gallery: [
            "https://source.unsplash.com/600x400/?puri",
            "https://source.unsplash.com/600x400/?konark",
            "https://source.unsplash.com/600x400/?chilika",
            "https://source.unsplash.com/600x400/?bhubaneswar",
            "https://source.unsplash.com/600x400/?lingaraj",
          ],
        },
      },
    },
    {
      id: "bhubaneswar-city",
      name: "Tribal Tours",
      days: 2,
      nights: 1,
      start: "Bhubaneswar",
      end: "Koraput",
      img: "https://dulcimertours.com/wp-content/uploads/2020/08/New-Image.jpg",
      packages: {
        basic: {
          id: "basic",
          name: "2 Nights 3 Days Package",
          days: 3,
          nights: 2,
          img: "https://dulcimertours.com/wp-content/uploads/2020/08/New-Image.jpg",
          start: "Bhubaneswar",
          end: "Koraput",
          banner: "https://source.unsplash.com/1600x600/?bhubaneswar,temple",
          description:
            "Explore Bhubaneswar's ancient temples and tribal art museums. Short but enriching experience.",
          intro:
            "Bhubaneswar, the 'Temple City of India', is filled with ancient temples, caves, and museums reflecting Odisha's rich heritage.",
          shortItinerary: [
            "Day 1: Arrival & Bhubaneswar sightseeing",
            "Day 2: Tribal village visit",
            "Day 3: Departure",
          ],
          expect: [
            "Ancient Lingaraj Temple",
            "Udayagiri & Khandagiri caves",
            "Odisha State Museum",
            "Tribal village interaction",
          ],
          itinerary: [
            {
              day: "Day 1",
              detail:
                "Visit Lingaraj Temple, Mukteshwar Temple, and Rajarani Temple.",
            },
            {
              day: "Day 2",
              detail:
                "Explore Udayagiri & Khandagiri caves, Odisha State Museum, and visit a tribal village.",
            },
            {
              day: "Day 3",
              detail: "Morning leisure and departure.",
            },
          ],
          gallery: [
            "https://source.unsplash.com/600x400/?lingaraj,temple",
            "https://source.unsplash.com/600x400/?bhubaneswar",
            "https://source.unsplash.com/600x400/?tribal,village",
          ],
        },
        premium: {
          id: "premium",
          name: "5 Nights 6 Days Package",
          days: 6,
          nights: 5,
          img: "https://odishatourism.gov.in/content/dam/tourism/home/discover/tribes-of-odisha.jpg",
          start: "Bhubaneswar",
          end: "Koraput",
          banner: "https://source.unsplash.com/1600x600/?koraput,tribal",
          description:
            "Extended journey covering tribal villages, handicrafts, and vibrant festivals with cultural immersion.",
          intro:
            "Immerse yourself in the rich tribal culture of Odisha with visits to remote villages, interaction with tribal communities, and exploration of ancient heritage sites.",
          shortItinerary: [
            "Day 1: Arrival in Bhubaneswar",
            "Day 2: Bhubaneswar sightseeing",
            "Day 3: Journey to Koraput",
            "Day 4: Tribal village visits",
            "Day 5: Tribal markets & handicrafts",
            "Day 6: Return to Bhubaneswar & departure",
          ],
          expect: [
            "Multiple tribal village visits",
            "Tribal dance performances",
            "Handicraft workshops",
            "Interaction with tribal communities",
            "Tribal cuisine experience",
          ],
          itinerary: [
            {
              day: "Day 1",
              detail: "Arrival at Bhubaneswar. Evening at leisure.",
            },
            {
              day: "Day 2",
              detail:
                "Full day Bhubaneswar sightseeing including temples, caves, and museums.",
            },
            {
              day: "Day 3",
              detail:
                "Drive to Koraput. Enroute visit tribal villages. Evening at Koraput.",
            },
            {
              day: "Day 4",
              detail:
                "Full day tribal village visits including interaction with tribal communities.",
            },
            {
              day: "Day 5",
              detail:
                "Visit tribal markets and handicraft workshops. Tribal cultural evening.",
            },
            {
              day: "Day 6",
              detail: "Return to Bhubaneswar. Departure.",
            },
          ],
          gallery: [
            "https://source.unsplash.com/600x400/?tribal,dance",
            "https://source.unsplash.com/600x400/?koraput",
            "https://source.unsplash.com/600x400/?tribal,market",
            "https://source.unsplash.com/600x400/?handicrafts",
            "https://source.unsplash.com/600x400/?tribal,village",
          ],
        },
      },
    },
    {
      id: "chilika-lake",
      name: "Wildlife and Adventure Tours",
      days: 2,
      nights: 1,
      start: "Chilika",
      end: "Satapada",
      img: "https://www.indiadrivertours.com/wp-content/uploads/2022/05/raj-tigerleopardtour.jpg",
      packages: {
        basic: {
          id: "basic",
          name: "2 Nights 3 Days Package",
          days: 3,
          nights: 2,
          img: "https://www.indiadrivertours.com/wp-content/uploads/2022/05/raj-tigerleopardtour.jpg",
          start: "Chilika",
          end: "Satapada",
          banner: "https://source.unsplash.com/1600x600/?chilika,lake",
          description:
            "Enjoy boat rides on Chilika Lake, spot migratory birds, and visit dolphin hotspots.",
          intro:
            "Chilika Lake is Asia's largest brackish water lagoon, home to dolphins, migratory birds, and scenic islands.",
          shortItinerary: [
            "Day 1: Arrival & transfer to Chilika",
            "Day 2: Nalaban Bird Sanctuary & Satapada",
            "Day 3: Departure",
          ],
          expect: [
            "Scenic boat ride at Satapada",
            "Dolphin spotting",
            "Birdwatching at Nalaban Sanctuary",
            "Sunset views over the lake",
          ],
          itinerary: [
            {
              day: "Day 1",
              detail:
                "Arrival at Bhubaneswar, transfer to Chilika. Evening boat ride.",
            },
            {
              day: "Day 2",
              detail:
                "Morning visit to Nalaban Bird Sanctuary. Afternoon dolphin spotting at Satapada.",
            },
            {
              day: "Day 3",
              detail: "Return journey after breakfast.",
            },
          ],
          gallery: [
            "https://source.unsplash.com/600x400/?chilika",
            "https://source.unsplash.com/600x400/?dolphin",
            "https://source.unsplash.com/600x400/?birdwatching",
          ],
        },
        premium: {
          id: "premium",
          name: "4 Nights 5 Days Package",
          days: 5,
          nights: 4,
          img: "https://images.unsplash.com/photo-1599058917212-6dcf2ce2743d",
          start: "Chilika",
          end: "Satapada",
          banner: "https://source.unsplash.com/1600x600/?satapada,dolphin",
          description:
            "Extended adventure with Chilika Lake, dolphin watching, trekking, and wildlife sanctuaries.",
          intro:
            "Experience the best of Chilika Lake and surrounding wildlife sanctuaries with this extended adventure package.",
          shortItinerary: [
            "Day 1: Arrival & transfer to Chilika",
            "Day 2: Chilika Lake exploration",
            "Day 3: Nalaban Bird Sanctuary",
            "Day 4: Satapada & dolphin watching",
            "Day 5: Departure",
          ],
          expect: [
            "Multiple boat rides on Chilika",
            "Dolphin spotting at Satapada",
            "Birdwatching at Nalaban",
            "Island hopping",
            "Sunset cruise",
          ],
          itinerary: [
            {
              day: "Day 1",
              detail:
                "Arrival at Bhubaneswar, transfer to Chilika. Evening at leisure.",
            },
            {
              day: "Day 2",
              detail:
                "Full day Chilika Lake exploration including boat rides and island visits.",
            },
            {
              day: "Day 3",
              detail:
                "Morning visit to Nalaban Bird Sanctuary. Afternoon at leisure.",
            },
            {
              day: "Day 4",
              detail:
                "Full day at Satapada for dolphin watching and sunset cruise.",
            },
            {
              day: "Day 5",
              detail: "Return to Bhubaneswar for departure.",
            },
          ],
          gallery: [
            "https://source.unsplash.com/600x400/?chilika",
            "https://source.unsplash.com/600x400/?dolphin",
            "https://source.unsplash.com/600x400/?birdwatching",
            "https://source.unsplash.com/600x400/?sunset,lake",
            "https://source.unsplash.com/600x400/?island",
          ],
        },
      },
    },
    {
      id: "simlipal",
      name: "Senior Citizen Tours",
      days: 3,
      nights: 2,
      start: "Cuttack",
      end: "Simlipal",
      img: "https://img.freepik.com/free-photo/seniors-with-map_1098-14988.jpg",
      packages: {
        basic: {
          id: "basic",
          name: "3 Nights 4 Days Package",
          days: 4,
          nights: 3,
          img: "https://img.freepik.com/free-photo/seniors-with-map_1098-14988.jpg",
          start: "Cuttack",
          end: "Simlipal",
          banner: "https://source.unsplash.com/1600x600/?simlipal,forest",
          description:
            "Relaxing tour designed for seniors. Covers Simlipal forest safari and peaceful nature walks.",
          intro:
            "Simlipal National Park is a tiger reserve and biosphere, known for dense forests, waterfalls, and rich wildlife.",
          shortItinerary: [
            "Day 1: Arrival & transfer to Simlipal",
            "Day 2: Jungle safari",
            "Day 3: Nature walks",
            "Day 4: Departure",
          ],
          expect: [
            "Jungle safari experience",
            "Nature walks",
            "Waterfall visits",
            "Wildlife spotting",
          ],
          itinerary: [
            {
              day: "Day 1",
              detail:
                "Arrival at Baripada, transfer to Simlipal. Evening nature walk.",
            },
            {
              day: "Day 2",
              detail: "Morning jungle safari. Afternoon at leisure.",
            },
            {
              day: "Day 3",
              detail:
                "Visit to Barehipani and Joranda waterfalls. Nature walk.",
            },
            {
              day: "Day 4",
              detail: "Morning at leisure. Departure.",
            },
          ],
          gallery: [
            "https://source.unsplash.com/600x400/?simlipal",
            "https://source.unsplash.com/600x400/?waterfall,forest",
            "https://source.unsplash.com/600x400/?nature,walk",
          ],
        },
        premium: {
          id: "premium",
          name: "6 Nights 7 Days Package",
          days: 7,
          nights: 6,
          img: "https://i.ytimg.com/vi/tQkhtjfiVno/maxresdefault.jpg",
          start: "Cuttack",
          end: "Simlipal",
          banner: "https://source.unsplash.com/1600x600/?simlipal,tiger",
          description:
            "Leisurely journey with more time in Simlipal, nature resorts, and assisted guided experiences.",
          intro:
            "Experience the tranquility of Simlipal with this extended tour designed for seniors, featuring comfortable stays and guided nature experiences.",
          shortItinerary: [
            "Day 1: Arrival & transfer to Simlipal",
            "Day 2: Jungle safari",
            "Day 3: Waterfall tour",
            "Day 4: Tribal village visit",
            "Day 5: Nature walks",
            "Day 6: Leisure day",
            "Day 7: Departure",
          ],
          expect: [
            "Multiple jungle safaris",
            "Waterfall visits",
            "Tribal village interaction",
            "Guided nature walks",
            "Bird watching",
            "Leisure time at resort",
          ],
          itinerary: [
            {
              day: "Day 1",
              detail:
                "Arrival at Baripada, transfer to Simlipal. Evening at resort.",
            },
            {
              day: "Day 2",
              detail: "Morning jungle safari. Afternoon at leisure.",
            },
            {
              day: "Day 3",
              detail: "Full day tour of Barehipani and Joranda waterfalls.",
            },
            {
              day: "Day 4",
              detail: "Visit to a local tribal village. Cultural evening.",
            },
            {
              day: "Day 5",
              detail: "Guided nature walks and bird watching.",
            },
            {
              day: "Day 6",
              detail: "Leisure day at resort. Optional spa treatments.",
            },
            {
              day: "Day 7",
              detail: "Morning at leisure. Departure.",
            },
          ],
          gallery: [
            "https://source.unsplash.com/600x400/?simlipal",
            "https://source.unsplash.com/600x400/?tiger",
            "https://source.unsplash.com/600x400/?waterfall,forest",
            "https://source.unsplash.com/600x400/?tribal,village",
            "https://source.unsplash.com/600x400/?resort,nature",
          ],
        },
      },
    },
  ],
};

const TourDetails = () => {
  const { tourId, packageId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  // Find the tour across all regions
  let tour = null;
  let tourRegion = null;

  for (const region in toursData) {
    const foundTour = toursData[region].find((t) => t.id === tourId);
    if (foundTour) {
      tour = foundTour;
      tourRegion = region;
      break;
    }
  }

  // Get the specific package
  const pkg = tour?.packages?.[packageId];

  // Refs for scrolling to sections
  const overviewRef = useRef(null);
  const glanceRef = useRef(null);
  const itineraryRef = useRef(null);
  const galleryRef = useRef(null);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    arrivalDate: "",
    departureDate: "",
    persons: "",
    children: "",
    message: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your enquiry! We'll get back to you soon.");
    setFormData({
      name: "",
      number: "",
      email: "",
      arrivalDate: "",
      departureDate: "",
      persons: "",
      children: "",
      message: "",
    });
  };

  // Scroll to section function
  const scrollToSection = (section) => {
    setActiveTab(section);
    const refs = {
      overview: overviewRef,
      glance: glanceRef,
      itinerary: itineraryRef,
      gallery: galleryRef,
    };

    if (refs[section]?.current) {
      const y =
        refs[section].current.getBoundingClientRect().top +
        window.scrollY -
        140; // adjust sticky height
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Effect to handle scroll and update active tab
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // match scrollToSection offset

      const sections = [
        { key: "overview", offset: overviewRef.current?.offsetTop },
        { key: "glance", offset: glanceRef.current?.offsetTop },
        { key: "itinerary", offset: itineraryRef.current?.offsetTop },
        { key: "gallery", offset: galleryRef.current?.offsetTop },
      ];

      let current = "overview"; // default
      for (let i = 0; i < sections.length; i++) {
        if (sections[i].offset && scrollPosition >= sections[i].offset) {
          current = sections[i].key;
        }
      }

      if (current !== activeTab) setActiveTab(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeTab]);

  if (!tour || !pkg) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8 bg-gradient-to-br from-stone-50 to-amber-50">
        <div className="max-w-xl text-center">
          <h2 className="text-2xl font-bold mb-4 text-red-500">
            Tour or package not found
          </h2>
          <p className="text-zinc-600 mb-6">
            We couldn't find that tour or package.
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-amber-50 text-gray-800 font-inter antialiased relative overflow-hidden">
      {/* Hero Banner */}
      <div className="relative h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-10000 hover:scale-110"
          style={{ backgroundImage: `url(${pkg.banner})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-800/60 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center z-10 px-4"
          >
            <h1
              className="text-5xl md:text-5xl font-bold mb-4 tracking-wide"
              style={{
                color: "#e8bb47ff", // Darker golden color
                textShadow: "0 4px 12px rgba(0,0,0,0.3)",
              }}
            >
              {tour.name} - {pkg.name}
            </h1>
            <div
              className="w-24 h-1.5 mx-auto rounded-full"
              style={{ backgroundColor: "#efb010ff" }}
            ></div>
          </motion.div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 relative z-10 flex flex-col lg:flex-row gap-4">
        {/* Left Content */}
        <div className="w-full lg:w-2/3">
          {/* Sticky Tabs Navigation */}
          <div className="sticky top-20 z-30 bg-white/90 backdrop-blur-md rounded-xl shadow-md mb-8 border border-amber-200">
            <div className="flex overflow-x-auto">
              <button
                onClick={() => scrollToSection("overview")}
                className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                  activeTab === "overview"
                    ? "text-amber-900 bg-amber-100"
                    : "text-gray-600 hover:text-amber-800"
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => scrollToSection("glance")}
                className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                  activeTab === "glance"
                    ? "text-amber-900 bg-amber-100"
                    : "text-gray-600 hover:text-amber-800"
                }`}
              >
                Quick Glance
              </button>
              <button
                onClick={() => scrollToSection("itinerary")}
                className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                  activeTab === "itinerary"
                    ? "text-amber-900 bg-amber-100"
                    : "text-gray-600 hover:text-amber-800"
                }`}
              >
                Itinerary
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                  activeTab === "gallery"
                    ? "text-amber-900 bg-amber-100"
                    : "text-gray-600 hover:text-amber-800"
                }`}
              >
                Gallery
              </button>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-amber-100">
            {/* Introduction */}
            <div
              ref={overviewRef}
              className="relative p-8 px-2 bg-gradient-to-br from-stone-50 via-amber-50/30 to-stone-100 border-b border-amber-100"
            >
              {/* Left Golden Accent Line */}
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-yellow-700 via-[#B8860B] to-yellow-500 rounded-r-full shadow-lg"></div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="pl-4"
              >
                {/* Heading */}
                <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
                  <h2 className="text-3xl font-extrabold text-[#B8860B] flex items-center gap-3">
                    Overview
                  </h2>

                  <span className="text-sm font-medium px-5 py-2 rounded-full bg-yellow-100 text-yellow-800 border border-yellow-300 shadow-sm">
                    {pkg.days} Days / {pkg.nights} Nights
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-700 text-lg md:text-md leading-relaxed p-2 transition-all duration-300">
                  {pkg.intro}
                </p>
              </motion.div>
            </div>

            {/* Quick Glance Section */}
            <section
              ref={glanceRef}
              className="relative bg-gradient-to-r from-stone-50 to-amber-50 border-b border-amber-100"
            >
              <div className="max-w-6xl mx-auto p-8 px-6">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Heading */}
                  <div className="flex items-center justify-between mb-10">
                    <h2 className="text-3xl font-extrabold tracking-tight text-[#B8860B] flex items-center">
                      <span className="bg-gradient-to-r from-yellow-700 to-yellow-500 bg-clip-text text-transparent">
                        Quick Glance
                      </span>
                    </h2>
                    <span className="ml-4 text-sm font-semibold px-4 py-1.5 rounded-full bg-yellow-100 text-yellow-800 border border-yellow-300 shadow-sm">
                      {pkg.shortItinerary.length} Days
                    </span>
                  </div>

                  {/* Items */}
                  <div className="flex flex-col gap-6">
                    {pkg.shortItinerary.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start p-6 rounded-2xl bg-white shadow-md border border-amber-100 hover:shadow-xl hover:border-yellow-400 transition-all duration-300"
                      >
                        {/* Number Badge */}
                        <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center mr-5 bg-gradient-to-br from-yellow-100 to-yellow-50 border border-yellow-300 shadow-inner">
                          <span className="font-bold text-[#B8860B] text-lg">
                            {idx + 1}
                          </span>
                        </div>

                        {/* Item Text */}
                        <p className="font-medium text-gray-800 text-base leading-relaxed">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Pricing & Inclusions Section */}
            <section className="relative bg-gradient-to-r from-stone-50 to-amber-50 border-b border-amber-100">
              <div className="max-w-4xl mx-auto p-8 px-6">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  {/* Heading */}
                  {/* <h2 className="text-3xl font-extrabold mb-10 text-[#B8860B] flex items-center gap-3">
                    <span className="bg-gradient-to-r from-yellow-700 to-yellow-500 bg-clip-text text-transparent">
                      Tour Inclusions & Details
                    </span>
                  </h2> */}

                  {/* Cards in Column */}
                  <div className="flex flex-col gap-6">
                    {/* Price Includes */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-amber-100 hover:shadow-lg hover:border-yellow-400 transition-all duration-300">
                      <h3 className="text-xl font-semibold text-[#B8860B] mb-4">
                        Price Includes
                      </h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Welcome drink on arrival (Non-alcoholic)</li>
                        <li>Well-appointed A/C Accommodation</li>
                        <li>Bed Tea and Breakfast on Paid Nights</li>
                        <li>
                          Transportation by well-conditioned Private AC Vehicle
                        </li>
                        <li>
                          Driver allowance, Toll Tax, Parking, and State Govt.
                          Tax
                        </li>
                        <li>
                          Railway Station / Airport Pick up and Drop and Hotel
                          Taxes
                        </li>
                      </ul>
                    </div>

                    {/* Price Excludes */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-amber-100 hover:shadow-lg hover:border-yellow-400 transition-all duration-300">
                      <h3 className="text-xl font-semibold text-[#B8860B] mb-4">
                        Price Excludes
                      </h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>
                          Any personal expenses Fees for Camera & Video Camera
                        </li>
                        <li>Monument entry fees, Boating & Guide charges</li>
                        <li>Porterage at hotels and airports</li>
                        <li>
                          Birthday Celebrations, tips, insurance & laundry
                        </li>
                        <li>Liquors, wine & telephone charges</li>
                        <li>
                          Air / Train fare and Any other which was not mentioned
                          in tour inclusion
                        </li>
                      </ul>
                    </div>

                    {/* Complementaries */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-amber-100 hover:shadow-lg hover:border-yellow-400 transition-all duration-300">
                      <h3 className="text-xl font-semibold text-[#B8860B] mb-4">
                        Complementaries
                      </h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Jagannath Darshan by our Temple priest</li>
                        <li>Sanitizer</li>
                        <li>T-Shirt</li>
                        <li>One Entrance Fees (Optional)</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* What to Expect Section */}
            <section className="relative bg-gradient-to-r from-stone-50 to-amber-50">
              <div className="max-w-6xl mx-auto p-8 px-6">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Heading */}
                  <h2 className="text-3xl font-extrabold mb-10 text-[#B8860B] flex items-center gap-3">
                    <span className="bg-gradient-to-r from-yellow-700 to-yellow-500 bg-clip-text text-transparent">
                      What to Expect
                    </span>
                  </h2>

                  {/* Items */}
                  <div className="grid gap-4">
                    {pkg.expect.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start p-6 rounded-2xl bg-white shadow-md border border-amber-100 hover:shadow-lg hover:border-yellow-400 transition-all duration-300 group"
                      >
                        {/* Icon Badge */}
                        <div className="flex-shrink-0 mr-5">
                          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-yellow-100 to-yellow-50 border border-yellow-300 shadow-inner transition-transform duration-300 group-hover:scale-110">
                            <svg
                              className="w-6 h-6 text-[#B8860B]"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                        </div>

                        {/* Text */}
                        <p className="text-gray-800 text-md font-medium leading-relaxed">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Detailed Itinerary */}
            <div
              ref={itineraryRef}
              className="p-8 px-6 bg-gradient-to-br from-amber-50 to-stone-50"
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-10">
                  <h2 className="text-3xl font-extrabold text-[#B8860B]">
                    Detailed Itinerary
                  </h2>
                  <span className="text-sm font-semibold px-5 py-2 rounded-full bg-yellow-100 text-yellow-800 border border-yellow-300 shadow-sm">
                    Day by Day
                  </span>
                </div>

                {/* Timeline */}
                <div className="relative pl-10">
                  {/* Vertical Line */}
                  <div className="absolute top-0 left-16 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400 to-yellow-600"></div>

                  {/* Itinerary Items */}
                  <div className="space-y-10">
                    {pkg.itinerary.map((day, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="relative flex items-start gap-6"
                      >
                        {/* Day Badge */}
                        <div className="relative z-10">
                          <span className="w-12 h-12 flex items-center justify-center rounded-full text-white font-bold text-lg shadow-md bg-gradient-to-br from-yellow-700 to-yellow-500">
                            {idx + 1}
                          </span>
                        </div>

                        {/* Card Content */}
                        <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-amber-100 hover:shadow-lg hover:border-yellow-400 transition-all duration-300">
                          <h3 className="text-xl font-semibold text-[#B8860B] mb-2">
                            {day.day}
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            {day.detail}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Gallery */}
            <div
              ref={galleryRef}
              className="p-8 px-6 bg-gradient-to-br from-amber-50 via-stone-50 to-amber-100/20"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-12">
                  <h2 className="text-3xl font-extrabold text-[#B8860B] flex items-center gap-3">
                    Gallery
                  </h2>
                  <span className="text-sm font-semibold px-5 py-2 rounded-full bg-yellow-100 text-yellow-800 border border-yellow-300 shadow-sm">
                    {pkg.gallery.length} Photos
                  </span>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {pkg.gallery.map((img, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="relative group overflow-hidden rounded-2xl shadow-lg border border-amber-100 hover:border-amber-300 hover:shadow-xl transition-all duration-500"
                    >
                      {/* Image */}
                      <img
                        src={img}
                        alt={`gallery-${idx}`}
                        className="w-full h-60 object-cover rounded-xl transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Overlay */}
                      {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6 rounded-xl">
                        <button className="px-4 py-2 bg-[#B8860B] text-white text-sm font-semibold rounded-full shadow-md hover:bg-yellow-600 transition-all duration-300">
                          View Image
                        </button>
                      </div> */}

                      {/* Subtle Top Reflection Effect */}
                      <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-full lg:w-1/3">
          <div className="sticky top-32 space-y-8">
            {/* Back Button */}
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-amber-700 hover:text-amber-900 transition-colors font-medium"
            >
              <ArrowLeft size={16} />
              <span>Back to Packages</span>
            </button>

            {/* Tour Information */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-amber-100">
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: "#B8860B" }}
              >
                Tour Information
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium">
                    {pkg.days} Days / {pkg.nights} Nights
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Start Point:</span>
                  <span className="font-medium">{pkg.start}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">End Point:</span>
                  <span className="font-medium">{pkg.end}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Group Size:</span>
                  <span className="font-medium">Up to 12 people</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Best Time:</span>
                  <span className="font-medium">Oct - Mar</span>
                </div>
              </div>
            </div>

            {/* Plan Your Journey Form */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-amber-100">
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: "#B8860B" }}
              >
                Plan Your Journey
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="number"
                    value={formData.number}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>
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
                    className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
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
                    className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Number of Persons *
                  </label>
                  <input
                    type="number"
                    name="persons"
                    value={formData.persons}
                    onChange={handleInputChange}
                    required
                    min="1"
                    className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Number of Children
                  </label>
                  <input
                    type="number"
                    name="children"
                    value={formData.children}
                    onChange={handleInputChange}
                    min="0"
                    className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-amber-700 text-white font-medium rounded-lg hover:bg-amber-800 transition-colors"
                >
                  Send Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <RelatedT />
      <Testi2 />
    </div>
  );
};

export default TourDetails;
