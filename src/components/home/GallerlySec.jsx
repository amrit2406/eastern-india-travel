import React, { useState } from "react";
import { FaImage, FaExpand, FaHeart, FaSearch, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import g1 from "../../assets/g1.png";
import g2 from "../../assets/g2.png";
import g3 from "../../assets/g3.png";
import g4 from "../../assets/g4.png";
import g5 from "../../assets/g5.png";
import g6 from "../../assets/g6.png";
import g7 from "../../assets/g7.png";
import g8 from "../../assets/g8.png";
import g9 from "../../assets/g9.png";

const galleryImages = [
  { id: 1, src: g1, title: "Majestic Himalayas", category: "nature" },
  { id: 2, src: g2, title: "Cultural Festival", category: "culture" },
  { id: 3, src: g3, title: "Tea Gardens", category: "nature" },
  { id: 4, src: g4, title: "Ancient Temple", category: "heritage" },
  { id: 5, src: g5, title: "Wildlife Safari", category: "wildlife" },
  { id: 6, src: g6, title: "River Cruise", category: "adventure" },
  { id: 7, src: g7, title: "Local Cuisine", category: "culture" },
  { id: 8, src: g8, title: "Sunset View", category: "nature" },
  // { id: 9, src: g9, title: "Traditional Dance", category: "culture" }
];

const categories = [
  { id: "all", name: "All Photos" },
  { id: "nature", name: "Nature" },
  { id: "culture", name: "Culture" },
  { id: "heritage", name: "Heritage" },
  { id: "wildlife", name: "Wildlife" },
  { id: "adventure", name: "Adventure" }
];

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % filteredImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <section className="relative py-18 px-6 sm:px-10 lg:px-20 bg-white overflow-hidden">
      {/* Decorative Background Elements */}
      {/* <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-200 rounded-full filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-yellow-300 rounded-full filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div> */}
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          {/* <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-yellow-100 mb-6">
            <FaImage className="text-4xl text-yellow-700" />
          </div> */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-800 mb-4 tracking-tight leading-tight">
            Moments of <span className="text-yellow-600">Splendor</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-yellow-600 to-yellow-700 mx-auto mt-6 rounded-full"></div>
          <p className="mt-6 text-lg text-yellow-900 font-light max-w-2xl mx-auto">
            A curated collection of unforgettable moments captured during our journeys through Eastern India.
          </p>
        </div>
        
        {/* Category Filter */}
        {/* <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-yellow-600 text-white shadow-md"
                  : "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div> */}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="relative group rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              onClick={() => openLightbox(image, index)}
            >
              <div className="aspect-w-4 aspect-h-3 relative">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {/* <h3 className="text-white font-bold text-lg">{image.title}</h3> */}
                  <div className="mt-1 flex items-center text-yellow-300 text-sm">
                    <FaSearch className="mr-1" />
                    <span>Click to view</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 border-2 border-yellow-600 text-yellow-700 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:bg-yellow-600 hover:text-white">
            <span>Load More</span>
          </button>
        </div> */}
      </div>
      
      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white bg-black/30 hover:bg-black/50 rounded-full p-3 transition-colors duration-300"
            aria-label="Close lightbox"
          >
            <FaTimes className="text-xl" />
          </button>
          
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 rounded-full p-3 transition-colors duration-300"
            aria-label="Previous image"
          >
            <FaChevronLeft className="text-xl" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 rounded-full p-3 transition-colors duration-300"
            aria-label="Next image"
          >
            <FaChevronRight className="text-xl" />
          </button>
          
          <div className="max-w-4xl w-full">
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-h-[80vh] w-auto mx-auto rounded-lg shadow-2xl"
            />
            <div className="mt-4 text-center">
              <h3 className="text-white text-2xl font-bold">{selectedImage.title}</h3>
              <p className="text-yellow-300 mt-1">
                {currentIndex + 1} of {filteredImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}