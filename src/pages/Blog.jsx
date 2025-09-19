import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaUser, FaQuoteLeft, FaArrowRight } from "react-icons/fa";
// Import images from assets
import odishaTripImg from "../assets/OdishaRoad.jpg";
import konarkTempleImg from "../assets/konark.jpg";
import bhubaneswarImg from "../assets/lingaraj.jpg";
import WhatsAppFloatingButton from "../components/WhatsAppFloatButton";

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Explore Odisha's Hidden Gems: Your Ultimate Road Trip Guide",
      description:
        "Discover the lesser-known wonders of Odisha, from pristine beaches to ancient temples, all accessible with your rental car. Get ready for an unforgettable adventure!",
      imageUrl: odishaTripImg,
      date: "July 15, 2024",
      author: "Travel Enthusiast",
      content: `Odisha, often known as India's best-kept secret, is a treasure trove of breathtaking landscapes, ancient temples, serene beaches, lush forests, and vibrant tribal culture. A road trip through this eastern paradise offers an incredible mix of history, spirituality, and natural beauty. From the mystical Sun Temple of Konark and the spiritual aura of Puri to the unspoiled beaches of Gopalpur and the tranquil waters of Chilika Lake, Odisha is a dream destination for explorers and nature lovers alike.
This guide is designed to help you discover the unexplored side of Odisha — from scenic drives through verdant hills to lesser-known waterfalls hidden in the heart of the state. You'll find curated routes, must-visit destinations, local food recommendations, and cultural experiences that make Odisha unique. Whether you're chasing the sunrise at Chandrabhaga Beach, walking through the ruins of Ratnagiri, or watching migratory birds at Mangalajodi, this road trip promises unforgettable memories.
Pack your bags, fuel up your car, and embark on a journey where every turn reveals a new story, a hidden gem, or a mesmerizing view. Odisha's beauty is waiting to be explored — and there's no better way to experience it than on the open road.`,
    },
    {
      id: 2,
      title: "Why Renting a Car is Best for Your Konark Sun Temple Visit",
      description:
        "Experience the majestic Konark Sun Temple at your own pace. Learn why a rental car offers unparalleled flexibility and comfort for this iconic journey.",
      imageUrl: konarkTempleImg,
      date: "July 10, 2024",
      author: "Culture Explorer",
      content: `Visiting the iconic Konark Sun Temple, a UNESCO World Heritage Site, is a journey into India's rich history and architectural brilliance. Nestled near the Bay of Bengal, the temple is surrounded by stunning coastal roads, serene beaches, and picturesque landscapes. To truly enjoy this experience at your own pace, renting a car is the smartest choice.
Unlike crowded buses or fixed-schedule tours, a rented car offers freedom and flexibility. You can start early to witness a magical sunrise at Chandrabhaga Beach, make spontaneous stops at local markets, or take a detour to explore nearby attractions like Ramachandi Temple or the Marine Drive Eco Retreat. With a car at your disposal, you can avoid the hassle of waiting for public transport and enjoy a comfortable, private journey tailored to your preferences.
Moreover, the scenic drive from Bhubaneswar or Puri to Konark is a road trip you wouldn't want to rush. Renting a car allows you to soak in the coastal charm, stop for photography, or savor authentic Odia snacks along the way. Whether you're traveling with family or friends, the convenience and cost-effectiveness of self-drive rentals make it a perfect choice for a memorable Konark experience.`,
    },
    {
      id: 3,
      title: "Navigating Bhubaneswar: Tips for Your Rental Car",
      description:
        "First time driving in Bhubaneswar? Our essential tips will help you navigate the city with ease, making your urban exploration smooth and stress-free.",
      imageUrl: bhubaneswarImg,
      date: "July 05, 2024",
      author: "City Guide",
      content: `Bhubaneswar, often called the "Temple City of India," is a perfect blend of ancient heritage and modern infrastructure. Exploring this vibrant city in a rental car gives you the freedom to experience its famous landmarks—such as Lingaraj Temple, Dhauli Shanti Stupa, and Ekamra Kanan—at your own pace. However, driving in Bhubaneswar requires some local know-how to ensure a smooth and stress-free journey.
Start by familiarizing yourself with the city's major roads and landmarks. Areas like Janpath, KIIT Square, and Master Canteen can get busy during peak hours, so plan your routes with Google Maps or a reliable navigation app. Early mornings and late evenings are the best times to drive if you want to avoid heavy traffic.
Parking is generally available near major attractions and shopping areas, but always opt for designated parking zones to avoid fines. If you're new to the city, consider renting a car with GPS and a backup camera for added convenience. Be cautious around narrow lanes in Old Bhubaneswar and stay alert for two-wheelers and auto-rickshaws that often weave through traffic.
Lastly, fuel up before heading to distant attractions like Nandankanan Zoo or Khandagiri and Udayagiri Caves. With the right planning, a rental car in Bhubaneswar offers both comfort and flexibility, making it the best way to explore this culturally rich city.`,
    },
  ];

  const BlogPostCard = ({ post }) => {
    return (
      <motion.div
        className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:-translate-y-3 hover:shadow-xl group"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4 z-20">
            <span className="bg-yellow-700 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md flex items-center gap-1">
              <FaCalendarAlt className="text-xs" />
              {post.date}
            </span>
          </div>
        </div>
        
        <div className="p-6 flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <FaUser className="text-yellow-600" />
            <span className="text-sm text-yellow-700">{post.author}</span>
          </div>
          
          <h3 className="text-xl font-bold text-yellow-800 mb-3 group-hover:text-yellow-600 transition-colors">
            {post.title}
          </h3>
          
          <div className="relative mb-4">
            <FaQuoteLeft className="absolute -top-2 -left-2 text-yellow-200 text-2xl" />
            <p className="text-yellow-900 text-sm pl-4 line-clamp-3">
              {post.description}
            </p>
          </div>
          
          <div className="mt-auto pt-4">
            <Link
              to={`/blog/${post.id}`}
              state={{ post }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-600 to-yellow-800 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-md"
            >
              <span>Read More</span>
              <FaArrowRight className="text-sm" />
            </Link>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <>
      {/* Blog Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-yellow-300 via-yellow-100 to-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-200 rounded-full filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-yellow-300 rounded-full filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-block bg-yellow-700 text-yellow-100 text-sm font-medium px-4 py-1 rounded-full mb-6">
            TRAVEL INSIGHTS
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-800 mb-6 tracking-tight leading-tight">
            Our <span className="text-yellow-600">Travel Blog</span>
          </h1>
          <p className="text-lg md:text-xl text-yellow-900 font-light max-w-2xl mx-auto leading-relaxed">
            Discover travel tips, destination guides, and insider stories to inspire your next Eastern India adventure.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <div className="h-1 w-12 bg-yellow-500 rounded-full"></div>
            <div className="h-1 w-6 bg-yellow-300 rounded-full"></div>
            <div className="h-1 w-8 bg-yellow-400 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-800 mb-4">Latest Travel Stories</h2>
          <p className="text-yellow-700 max-w-2xl mx-auto">
            Get inspired by our collection of travel experiences, tips, and guides for exploring Eastern India.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-2 border-2 border-yellow-600 text-yellow-700 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:bg-yellow-600 hover:text-white">
            <span>View All Articles</span>
            <FaArrowRight className="text-sm" />
          </button>
        </div>
      </section>
      <WhatsAppFloatingButton />
    </>
  );
}

export default Blog;