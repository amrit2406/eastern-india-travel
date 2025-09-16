import React, { useState } from "react";
import { FaMapMarkerAlt, FaStar, FaClock, FaUsers, FaCheck, FaPhone, FaEnvelope, FaArrowLeft, FaCalendarAlt, FaUser, FaChild, FaComment } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const packageDetails = {
  // Darjeeling Himalayan Odyssey Packages
  "darjeeling-1": {
    id: "darjeeling-1",
    name: "Heritage Tea Garden Experience",
    heroImage: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1920&q=80",
    introduction: "Immerse yourself in the world of Darjeeling tea with visits to heritage tea estates and exclusive tasting sessions. This premium package takes you through the lush tea gardens of Darjeeling, where you'll learn about the tea cultivation process, meet the tea planters, and sample some of the finest teas in the world.",
    whatToExpect: [
      "Guided tour of heritage tea estates with expert tea connoisseurs",
      "Interactive tea tasting sessions with premium Darjeeling teas",
      "Learn about the tea cultivation process from leaf to cup",
      "Meet local tea planters and hear their stories",
      "Enjoy scenic views of rolling tea gardens against the Himalayan backdrop",
      "Purchase exclusive teas directly from the gardens"
    ],
    itinerary: [
      "Day 1: Arrival in Darjeeling, check-in at heritage hotel",
      "Day 2: Morning visit to Happy Valley Tea Estate, afternoon tea tasting session",
      "Day 3: Full day tour of Makaibari Tea Estate, including lunch at the planter's bungalow",
      "Day 4: Visit to Glenburn Tea Estate and afternoon at leisure",
      "Day 5: Departure with tea souvenirs and memories"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1577968897966-3c6b3a5e5c7a?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1577968897966-3c6b3a5e5c7a?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1577968897966-3c6b3a5e5c7a?auto=format&fit=crop&w=700&q=80"
    ],
    location: "Darjeeling",
    duration: "5 Days",
    groupSize: "Max 8",
    rating: "4.9",
    price: "₹15,999 per person",
    includes: [
      "4 nights accommodation in premium heritage hotel",
      "Daily breakfast and dinner",
      "All transfers and sightseeing by private vehicle",
      "Tea estate tours and tasting sessions",
      "Expert tea connoisseur guide",
      "All applicable taxes"
    ],
    excludes: [
      "Airfare/train fare to/from Darjeeling",
      "Lunch and other meals not mentioned",
      "Personal expenses like tips, shopping, etc.",
      "Travel insurance"
    ]
  },
  "darjeeling-2": {
    id: "darjeeling-2",
    name: "Mountain Sunrise Trek",
    heroImage: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1920&q=80",
    introduction: "Trek to the best viewpoints for spectacular Himalayan sunrises and panoramic mountain vistas. This adventure takes you to Tiger Hill, the most famous viewpoint in Darjeeling, where you can witness the sunrise over the snow-capped peaks of Kanchenjunga and other Himalayan giants.",
    whatToExpect: [
      "Early morning trek to Tiger Hill for sunrise",
      "Panoramic views of Mount Kanchenjunga and other Himalayan peaks",
      "Visit to Ghoom Monastery, one of the oldest Tibetan Buddhist monasteries",
      "Breakfast with a view at a mountain cafe",
      "Guided trek with experienced mountain guides",
      "Photography opportunities of breathtaking landscapes"
    ],
    itinerary: [
      "Day 1: Arrival in Darjeeling, acclimatization walk",
      "Day 2: Early morning trek to Tiger Hill for sunrise, visit Ghoom Monastery",
      "Day 3: Trek to Senchal Lake and wildlife spotting",
      "Day 4: Visit to Rock Garden and Ganga Maya Park",
      "Day 5: Departure with memories of the Himalayas"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=700&q=80"
    ],
    location: "Tiger Hill",
    duration: "3 Days",
    groupSize: "Max 10",
    rating: "4.8",
    price: "₹12,499 per person",
    includes: [
      "4 nights accommodation in mountain lodge",
      "Daily breakfast and dinner",
      "All transfers and trekking arrangements",
      "Expert mountain guide",
      "Entrance fees to all viewpoints",
      "All applicable taxes"
    ],
    excludes: [
      "Airfare/train fare to/from Darjeeling",
      "Lunch and other meals not mentioned",
      "Personal expenses like tips, shopping, etc.",
      "Travel insurance",
      "Trekking equipment (can be rented)"
    ]
  },
  "darjeeling-3": {
    id: "darjeeling-3",
    name: "Toy Train Journey",
    heroImage: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1920&q=80",
    introduction: "Experience the charm of the UNESCO-listed Darjeeling Himalayan Railway on a scenic toy train ride. This journey takes you through the breathtaking landscapes of the Himalayas, across tea gardens, and through charming villages, offering a nostalgic travel experience like no other.",
    whatToExpect: [
      "Ride on the famous Darjeeling Himalayan Railway 'Toy Train'",
      "Spectacular views of the Himalayas and tea gardens",
      "Visit to the Darjeeling Railway Museum",
      "Photography opportunities of the steam locomotive",
      "Experience the unique loop and spiral railway tracks",
      "Journey through scenic landscapes and charming villages"
    ],
    itinerary: [
      "Day 1: Arrival in Darjeeling, visit to Railway Museum",
      "Day 2: Toy train ride from Darjeeling to Ghoom and back",
      "Day 3: Visit to Batasia Loop and War Memorial",
      "Day 4: Explore Kurseong and its tea gardens",
      "Day 5: Departure with toy train souvenirs"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1564939558297-6c79a58d9073?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1564939558297-6c79a58d9073?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1564939558297-6c79a58d9073?auto=format&fit=crop&w=700&q=80"
    ],
    location: "Darjeeling",
    duration: "2 Days",
    groupSize: "Max 15",
    rating: "4.7",
    price: "₹8,999 per person",
    includes: [
      "4 nights accommodation in heritage hotel",
      "Daily breakfast and dinner",
      "Toy train ride tickets",
      "All transfers and sightseeing by private vehicle",
      "Expert guide throughout the tour",
      "All applicable taxes"
    ],
    excludes: [
      "Airfare/train fare to/from Darjeeling",
      "Lunch and other meals not mentioned",
      "Personal expenses like tips, shopping, etc.",
      "Travel insurance"
    ]
  },
  "darjeeling-4": {
    id: "darjeeling-4",
    name: "Cultural Monastery Tour",
    heroImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1920&q=80",
    introduction: "Explore ancient Buddhist monasteries and learn about the spiritual heritage of the Himalayan region. This cultural journey takes you through some of the most revered monasteries in Darjeeling, offering insights into Tibetan Buddhism and the spiritual traditions of the region.",
    whatToExpect: [
      "Visit to Ghoom Monastery, famous for its 15-foot statue of Maitreya Buddha",
      "Explore the ancient Yiga Choling Monastery",
      "Learn about Tibetan Buddhism from resident monks",
      "Experience prayer ceremonies and meditation sessions",
      "Enjoy traditional butter tea and local snacks",
      "Purchase authentic Buddhist artifacts and souvenirs"
    ],
    itinerary: [
      "Day 1: Arrival in Darjeeling, visit to Ghoom Monastery",
      "Day 2: Full day tour of Yiga Choling and other monasteries",
      "Day 3: Meditation session with Buddhist monks",
      "Day 4: Visit to Tibetan Refugee Self-Help Center",
      "Day 5: Departure with spiritual blessings"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=700&q=80"
    ],
    location: "Ghoom",
    duration: "3 Days",
    groupSize: "Max 12",
    rating: "4.9",
    price: "₹10,999 per person",
    includes: [
      "4 nights accommodation in heritage hotel",
      "Daily breakfast and dinner",
      "All transfers and sightseeing by private vehicle",
      "Monastery entrance fees and donations",
      "Expert Buddhist guide",
      "All applicable taxes"
    ],
    excludes: [
      "Airfare/train fare to/from Darjeeling",
      "Lunch and other meals not mentioned",
      "Personal expenses like tips, shopping, etc.",
      "Travel insurance"
    ]
  },
  "darjeeling-5": {
    id: "darjeeling-5",
    name: "Local Market Exploration",
    heroImage: "https://images.unsplash.com/photo-1556740746-9b0d9a1f1d0a?auto=format&fit=crop&w=1920&q=80",
    introduction: "Discover vibrant local markets, taste authentic cuisine, and shop for unique handicrafts and souvenirs. This cultural immersion experience takes you through the bustling markets of Darjeeling, where you'll interact with local vendors and experience the authentic flavors of the region.",
    whatToExpect: [
      "Visit to Chowk Bazaar, the oldest market in Darjeeling",
      "Taste local delicacies like momos, thukpa, and churpee",
      "Shop for authentic Darjeeling tea and handicrafts",
      "Interact with local vendors and learn about their crafts",
      "Visit to the local vegetable and spice market",
      "Experience the vibrant culture and lifestyle of Darjeeling"
    ],
    itinerary: [
      "Day 1: Arrival in Darjeeling, evening market visit",
      "Day 2: Full day exploration of Chowk Bazaar and Mahakal Market",
      "Day 3: Visit to local tea shops and tasting sessions",
      "Day 4: Cooking class with a local family",
      "Day 5: Departure with local souvenirs and recipes"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1556740746-9b0d9a1f1d0a?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1556740746-9b0d9a1f1d0a?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1556740746-9b0d9a1f1d0a?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?auto=format&fit=crop&w=700&q=80"
    ],
    location: "Darjeeling",
    duration: "2 Days",
    groupSize: "Max 15",
    rating: "4.6",
    price: "₹6,999 per person",
    includes: [
      "4 nights accommodation in heritage hotel",
      "Daily breakfast and dinner",
      "All transfers and sightseeing by private vehicle",
      "Market tour with local guide",
      "Cooking class and food tasting",
      "All applicable taxes"
    ],
    excludes: [
      "Airfare/train fare to/from Darjeeling",
      "Lunch and other meals not mentioned",
      "Personal expenses like shopping, etc.",
      "Travel insurance"
    ]
  },
  "darjeeling-6": {
    id: "darjeeling-6",
    name: "Himalayan Photography",
    heroImage: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=1920&q=80",
    introduction: "Capture breathtaking landscapes and cultural moments with guidance from professional photographers. This specialized tour is designed for photography enthusiasts who want to capture the stunning beauty of the Himalayas and the rich cultural heritage of Darjeeling.",
    whatToExpect: [
      "Photography workshops with professional photographers",
      "Early morning and late afternoon shoots for best light",
      "Landscape photography of Himalayan peaks and tea gardens",
      "Cultural photography of local communities and monasteries",
      "Night photography of Darjeeling town",
      "Photo review and editing sessions"
    ],
    itinerary: [
      "Day 1: Arrival in Darjeeling, evening orientation and photo walk",
      "Day 2: Early morning sunrise shoot at Tiger Hill, monastery photography",
      "Day 3: Tea garden landscape photography, local village visit",
      "Day 4: Street photography in Darjeeling town, night photography",
      "Day 5: Photo review session and departure"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1516397281156-ca07cf9746fc?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1516397281156-ca07cf9746fc?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1516397281156-ca07cf9746fc?auto=format&fit=crop&w=700&q=80"
    ],
    location: "Darjeeling",
    duration: "3 Days",
    groupSize: "Max 8",
    rating: "4.9",
    price: "₹14,999 per person",
    includes: [
      "4 nights accommodation in heritage hotel",
      "Daily breakfast and dinner",
      "All transfers and sightseeing by private vehicle",
      "Photography workshops and guidance",
      "Entrance fees to all locations",
      "All applicable taxes"
    ],
    excludes: [
      "Airfare/train fare to/from Darjeeling",
      "Lunch and other meals not mentioned",
      "Personal expenses like tips, shopping, etc.",
      "Travel insurance",
      "Photography equipment"
    ]
  },
  
  // Sundarbans Jungle Adventure Packages
  "sundarbans-1": {
    id: "sundarbans-1",
    name: "Mangrove Boat Safari",
    heroImage: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1920&q=80",
    introduction: "Experience the thrill of navigating through the narrow creeks of the Sundarbans on a traditional boat. This adventure takes you deep into the world's largest mangrove forest, home to the Royal Bengal tiger and numerous other wildlife species.",
    whatToExpect: [
      "Boat safari through the mangrove forests",
      "Wildlife spotting opportunities including tigers, crocodiles, and birds",
      "Visit to watchtowers for better wildlife viewing",
      "Interaction with local fishermen and honey collectors",
      "Experience the unique ecosystem of the Sundarbans",
      "Overnight stay on a boat in the forest"
    ],
    itinerary: [
      "Day 1: Arrival at Kolkata, transfer to Sundarbans",
      "Day 2: Full day boat safari in the forest, overnight on boat",
      "Day 3: Visit to Sajnekhali Tiger Reserve and watchtower",
      "Day 4: Visit to local villages and return to Kolkata",
      "Day 5: Departure from Kolkata"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1548247772-8ba5cac50c4e?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1548247772-8ba5cac50c4e?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1548247772-8ba5cac50c4e?auto=format&fit=crop&w=700&q=80"
    ],
    location: "Sundarbans",
    duration: "3 Days",
    groupSize: "Max 8",
    rating: "4.8",
    price: "₹12,999 per person",
    includes: [
      "2 nights accommodation on boat, 2 nights in Kolkata hotel",
      "Daily breakfast and dinner",
      "All boat transfers and safaris",
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
    ]
  },
  "sundarbans-2": {
    id: "sundarbans-2",
    name: "Tiger Tracking Expedition",
    heroImage: "https://images.unsplash.com/photo-1548247772-8ba5cac50c4e?auto=format&fit=crop&w=1920&q=80",
    introduction: "Join expert naturalists on a quest to spot the elusive Royal Bengal tiger in its natural habitat. This specialized expedition takes you to the core areas of the Sundarbans Tiger Reserve, where you'll have the best chances of encountering the majestic tiger.",
    whatToExpect: [
      "Specialized tiger tracking with expert naturalists",
      "Visits to known tiger territories and watering holes",
      "Early morning and late afternoon safaris for best chances",
      "Learning about tiger behavior and conservation efforts",
      "Possible sightings of other wildlife like crocodiles and deer",
      "Interactive sessions with forest rangers and researchers"
    ],
    itinerary: [
      "Day 1: Arrival at Kolkata, transfer to Sundarbans",
      "Day 2: Full day tiger tracking expedition",
      "Day 3: Visit to tiger reserve areas and research centers",
      "Day 4: Community visit and return to Kolkata",
      "Day 5: Departure from Kolkata"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1548247772-8ba5cac50c4e?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1548247772-8ba5cac50c4e?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1548247772-8ba5cac50c4e?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1548247772-8ba5cac50c4e?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1548247772-8ba5cac50c4e?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1548247772-8ba5cac50c4e?auto=format&fit=crop&w=700&q=80"
    ],
    location: "Sundarbans",
    duration: "4 Days",
    groupSize: "Max 6",
    rating: "4.9",
    price: "₹18,999 per person",
    includes: [
      "2 nights accommodation on boat, 2 nights in Kolkata hotel",
      "Daily breakfast and dinner",
      "All boat transfers and specialized safaris",
      "Entry fees to core tiger reserve areas",
      "Expert tiger tracking naturalist",
      "All applicable taxes"
    ],
    excludes: [
      "Airfare/train fare to/from Kolkata",
      "Lunch and other meals not mentioned",
      "Personal expenses like tips, shopping, etc.",
      "Travel insurance",
      "Camera fees (where applicable)"
    ]
  },
  "sundarbans-3": {
    id: "sundarbans-3",
    name: "Bird Watching Tour",
    heroImage: "https://images.unsplash.com/photo-1610123283927-9d7c4f4b5c0e?auto=format&fit=crop&w=1920&q=80",
    introduction: "Discover the rich avian diversity of the Sundarbans with expert ornithologists. This specialized tour is designed for bird enthusiasts who want to spot and photograph the numerous bird species that inhabit this unique mangrove ecosystem.",
    whatToExpect: [
      "Bird watching with expert ornithologists",
      "Spotting of rare and migratory bird species",
      "Visit to Sajnekhali Bird Sanctuary",
      "Early morning and late afternoon birding sessions",
      "Photography opportunities of colorful birds",
      "Learning about bird behavior and habitat"
    ],
    itinerary: [
      "Day 1: Arrival at Kolkata, transfer to Sundarbans",
      "Day 2: Full day bird watching in Sajnekhali area",
      "Day 3: Visit to other bird-rich areas of the Sundarbans",
      "Day 4: Return to Kolkata and visit to Alipore Zoo",
      "Day 5: Departure from Kolkata"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1610123283927-9d7c4f4b5c0e?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1610123283927-9d7c4f4b5c0e?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1610123283927-9d7c4f4b5c0e?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=700&q=80"
    ],
    location: "Sajnekhali",
    duration: "3 Days",
    groupSize: "Max 10",
    rating: "4.7",
    price: "₹9,999 per person",
    includes: [
      "2 nights accommodation on boat, 2 nights in Kolkata hotel",
      "Daily breakfast and dinner",
      "All boat transfers and birding trips",
      "Entry fees to bird sanctuaries",
      "Expert ornithologist guide",
      "All applicable taxes"
    ],
    excludes: [
      "Airfare/train fare to/from Kolkata",
      "Lunch and other meals not mentioned",
      "Personal expenses like tips, shopping, etc.",
      "Travel insurance",
      "Camera fees (where applicable)"
    ]
  },
  "sundarbans-4": {
    id: "sundarbans-4",
    name: "Village Culture Experience",
    heroImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1920&q=80",
    introduction: "Immerse yourself in the unique culture and traditions of the Sundarbans' local communities. This cultural experience takes you to the villages that dot the Sundarbans, where you'll learn about the lifestyle, traditions, and challenges of living in harmony with the mangrove forest.",
    whatToExpect: [
      "Visit to local villages and interaction with residents",
      "Learn about traditional fishing and honey collection techniques",
      "Experience local folk music and dance performances",
      "Taste authentic Sundarbans cuisine",
      "Learn about the challenges of living in the delta region",
      "Participate in traditional craft making"
    ],
    itinerary: [
      "Day 1: Arrival at Kolkata, transfer to Sundarbans",
      "Day 2: Visit to local villages and cultural centers",
      "Day 3: Participation in traditional activities and crafts",
      "Day 4: Visit to local markets and return to Kolkata",
      "Day 5: Departure from Kolkata"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=700&q=80"
    ],
    location: "Sundarbans Villages",
    duration: "2 Days",
    groupSize: "Max 12",
    rating: "4.6",
    price: "₹7,999 per person",
    includes: [
      "2 nights accommodation on boat, 2 nights in Kolkata hotel",
      "Daily breakfast and dinner",
      "All boat transfers and village visits",
      "Cultural performances and activities",
      "Local guide",
      "All applicable taxes"
    ],
    excludes: [
      "Airfare/train fare to/from Kolkata",
      "Lunch and other meals not mentioned",
      "Personal expenses like tips, shopping, etc.",
      "Travel insurance"
    ]
  },
  
  // Kolkata Culture & Heritage Packages
  "kolkata-1": {
    id: "kolkata-1",
    name: "Colonial Heritage Walk",
    heroImage: "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?auto=format&fit=crop&w=1920&q=80",
    introduction: "Explore the colonial architecture of Kolkata with expert historians and architects. This walking tour takes you through the heart of the city, showcasing the magnificent buildings from the British era and telling the stories of Kolkata's colonial past.",
    whatToExpect: [
      "Guided walk through Dalhousie Square, the colonial heart of Kolkata",
      "Visit to Victoria Memorial, Indian Museum, and St. Paul's Cathedral",
      "Explore the Writer's Building, General Post Office, and other colonial landmarks",
      "Learn about the history of British India and Kolkata's role",
      "Photography opportunities of stunning colonial architecture",
      "Interactive sessions with historians and architects"
    ],
    itinerary: [
      "Day 1: Arrival in Kolkata, evening orientation walk",
      "Day 2: Full day colonial heritage walk in Dalhousie Square area",
      "Day 3: Visit to Victoria Memorial and Indian Museum",
      "Day 4: Explore Howrah Bridge and ghats of Hooghly River",
      "Day 5: Departure from Kolkata"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?auto=format&fit=crop&w=700&q=80"
    ],
    location: "Dalhousie Square",
    duration: "2 Days",
    groupSize: "Max 15",
    rating: "4.7",
    price: "₹8,999 per person",
    includes: [
      "4 nights accommodation in premium hotel",
      "Daily breakfast and dinner",
      "All transfers and sightseeing by private vehicle",
      "Entrance fees to all monuments",
      "Expert historian guide",
      "All applicable taxes"
    ],
    excludes: [
      "Airfare/train fare to/from Kolkata",
      "Lunch and other meals not mentioned",
      "Personal expenses like tips, shopping, etc.",
      "Travel insurance"
    ]
  },
  "kolkata-2": {
    id: "kolkata-2",
    name: "Bengali Culinary Journey",
    heroImage: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?auto=format&fit=crop&w=1920&q=80",
    introduction: "Taste authentic Bengali cuisine with visits to local eateries and cooking demonstrations. This culinary journey takes you through the streets of Kolkata to discover the rich flavors and traditions of Bengali food culture.",
    whatToExpect: [
      "Visit to famous sweet shops and sampling of Bengali sweets",
      "Street food tour of Kolkata's best eateries",
      "Cooking demonstration of traditional Bengali dishes",
      "Visit to local markets to learn about spices and ingredients",
      "Dinner at a traditional Bengali household",
      "Learn about the cultural significance of Bengali cuisine"
    ],
    itinerary: [
      "Day 1: Arrival in Kolkata, evening street food tour",
      "Day 2: Visit to sweet shops and local markets",
      "Day 3: Cooking demonstration and lunch",
      "Day 4: Visit to fish markets and seafood cooking class",
      "Day 5: Departure from Kolkata with recipes"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?auto=format&fit=crop&w=700&q=80"
    ],
    location: "Kolkata",
    duration: "2 Days",
    groupSize: "Max 10",
    rating: "4.8",
    price: "₹10,999 per person",
    includes: [
      "4 nights accommodation in premium hotel",
      "Daily breakfast and dinner",
      "All transfers and food tours",
      "Cooking classes and demonstrations",
      "Food expert guide",
      "All applicable taxes"
    ],
    excludes: [
      "Airfare/train fare to/from Kolkata",
      "Lunch and other meals not mentioned",
      "Personal expenses like tips, shopping, etc.",
      "Travel insurance"
    ]
  },
  "kolkata-3": {
    id: "kolkata-3",
    name: "Art & Culture Tour",
    heroImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1920&q=80",
    introduction: "Discover Kolkata's vibrant art scene with visits to galleries, artist studios, and cultural centers. This tour takes you through the artistic heart of the city, showcasing both traditional and contemporary art forms.",
    whatToExpect: [
      "Visit to Indian Museum and Victoria Memorial",
      "Explore contemporary art galleries in Kolkata",
      "Interaction with local artists and craftsmen",
      "Visit to Kumortuli, the potters' quarter",
      "Experience traditional music and dance performances",
      "Learn about the cultural heritage of Kolkata"
    ],
    itinerary: [
      "Day 1: Arrival in Kolkata, evening cultural performance",
      "Day 2: Visit to Indian Museum and Victoria Memorial",
      "Day 3: Explore contemporary art galleries",
      "Day 4: Visit to Kumortuli and artist studios",
      "Day 5: Departure from Kolkata"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=700&q=80"
    ],
    location: "Kolkata",
    duration: "2 Days",
    groupSize: "Max 12",
    rating: "4.7",
    price: "₹9,999 per person",
    includes: [
      "4 nights accommodation in premium hotel",
      "Daily breakfast and dinner",
      "All transfers and sightseeing by private vehicle",
      "Entrance fees to all museums and galleries",
      "Art expert guide",
      "All applicable taxes"
    ],
    excludes: [
      "Airfare/train fare to/from Kolkata",
      "Lunch and other meals not mentioned",
      "Personal expenses like tips, shopping, etc.",
      "Travel insurance"
    ]
  },
  
  // Meghalaya Living Root Bridges Packages
  "meghalaya-1": {
    id: "meghalaya-1",
    name: "Living Root Bridges Trek",
    heroImage: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1920&q=80",
    introduction: "Trek to the famous Double Decker Living Root Bridge and other unique root bridges in the region. This adventure takes you through the dense forests of Meghalaya to witness the incredible living root bridges, a testament to the ingenuity of the local Khasi people.",
    whatToExpect: [
      "Trek to the Double Decker Living Root Bridge in Nongriat",
      "Visit to other unique root bridges in the region",
      "Swim in natural pools beneath the bridges",
      "Experience the biodiversity of Meghalaya's forests",
      "Learn about the history and significance of the root bridges",
      "Interaction with local Khasi communities"
    ],
    itinerary: [
      "Day 1: Arrival in Shillong, city tour",
      "Day 2: Travel to Cherrapunji, trek to Single Decker Root Bridge",
      "Day 3: Full day trek to Double Decker Living Root Bridge",
      "Day 4: Visit to other root bridges and return to Shillong",
      "Day 5: Departure from Shillong"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=700&q=80"
    ],
    location: "Cherrapunji",
    duration: "3 Days",
    groupSize: "Max 8",
    rating: "4.9",
    price: "₹15,999 per person",
    includes: [
      "4 nights accommodation in premium hotels/resorts",
      "Daily breakfast and dinner",
      "All transfers and trekking arrangements",
      "Trekking permits and guide fees",
      "Expert local guide",
      "All applicable taxes"
    ],
    excludes: [
      "Airfare/train fare to/from Shillong",
      "Lunch and other meals not mentioned",
      "Personal expenses like tips, shopping, etc.",
      "Travel insurance",
      "Trekking equipment (can be rented)"
    ]
  },
  "meghalaya-2": {
    id: "meghalaya-2",
    name: "Waterfall Exploration",
    heroImage: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1920&q=80",
    introduction: "Visit some of the most spectacular waterfalls in Meghalaya, including Nohkalikai and Seven Sisters. This tour takes you through the wettest region on Earth to witness the breathtaking beauty of its cascading waterfalls.",
    whatToExpect: [
      "Visit to Nohkalikai Falls, the tallest plunge waterfall in India",
      "Explore Seven Sisters Falls and Elephant Falls",
      "Swim in natural pools at the base of waterfalls",
      "Photography opportunities of stunning waterfalls",
      "Learn about the geological formations of the region",
      "Experience the beauty of Meghalaya's monsoon-fed waterfalls"
    ],
    itinerary: [
      "Day 1: Arrival in Shillong, city tour",
      "Day 2: Visit to Nohkalikai and Seven Sisters Falls",
      "Day 3: Explore Elephant Falls and other waterfalls",
      "Day 4: Visit to Mawlynnong village and return to Shillong",
      "Day 5: Departure from Shillong"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=700&q=80"
    ],
    location: "Cherrapunji",
    duration: "2 Days",
    groupSize: "Max 10",
    rating: "4.8",
    price: "₹12,999 per person",
    includes: [
      "4 nights accommodation in premium hotels/resorts",
      "Daily breakfast and dinner",
      "All transfers and sightseeing by private vehicle",
      "Entrance fees to all waterfalls",
      "Expert local guide",
      "All applicable taxes"
    ],
    excludes: [
      "Airfare/train fare to/from Shillong",
      "Lunch and other meals not mentioned",
      "Personal expenses like tips, shopping, etc.",
      "Travel insurance"
    ]
  },
  "meghalaya-3": {
    id: "meghalaya-3",
    name: "Cleanest Village Experience",
    heroImage: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1920&q=80",
    introduction: "Visit Mawlynnong, acclaimed as the cleanest village in Asia, and experience local Khasi culture. This cultural immersion takes you to a village that has set an example for cleanliness and sustainable living.",
    whatToExpect: [
      "Visit to Mawlynnong, the cleanest village in Asia",
      "Experience the unique living root bridge at Riwai",
      "Explore the village and its innovative waste management system",
      "Interaction with local Khasi communities",
      "Taste traditional Khasi cuisine",
      "Learn about the matrilineal society of the Khasi people"
    ],
    itinerary: [
      "Day 1: Arrival in Shillong, city tour",
      "Day 2: Travel to Mawlynnong, visit the village",
      "Day 3: Explore Riwai root bridge and Dawki River",
      "Day 4: Visit to Shnongpdeng and return to Shillong",
      "Day 5: Departure from Shillong"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=700&q=80"
    ],
    location: "Mawlynnong",
    duration: "2 Days",
    groupSize: "Max 12",
    rating: "4.7",
    price: "₹10,999 per person",
    includes: [
      "4 nights accommodation in premium hotels/resorts",
      "Daily breakfast and dinner",
      "All transfers and sightseeing by private vehicle",
      "Village visits and cultural experiences",
      "Expert local guide",
      "All applicable taxes"
    ],
    excludes: [
      "Airfare/train fare to/from Shillong",
      "Lunch and other meals not mentioned",
      "Personal expenses like tips, shopping, etc.",
      "Travel insurance"
    ]
  },
  
  // Sikkim Himalayan Escape Packages
  "sikkim-1": {
    id: "sikkim-1",
    name: "High Altitude Lakes Tour",
    heroImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1920&q=80",
    introduction: "Visit the stunning high-altitude lakes of Sikkim, including Tsomgo and Gurudongmar. This journey takes you through the majestic Himalayas to witness the serene beauty of these sacred lakes.",
    whatToExpect: [
      "Visit to Tsomgo Lake, a glacial lake at 12,400 ft",
      "Journey to Gurudongmar Lake, one of the highest lakes in the world",
      "Experience the breathtaking beauty of the Himalayas",
      "Learn about the cultural and religious significance of the lakes",
      "Photography opportunities of stunning landscapes",
      "Interaction with local Tibetan communities"
    ],
    itinerary: [
      "Day 1: Arrival in Gangtok, city tour",
      "Day 2: Visit to Tsomgo Lake and Nathu La Pass",
      "Day 3: Travel to Lachung, acclimatization",
      "Day 4: Journey to Gurudongmar Lake",
      "Day 5: Return to Gangtok, visit Rumtek Monastery",
      "Day 6: Departure from Gangtok"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=700&q=80"
    ],
    location: "Gangtok",
    duration: "4 Days",
    groupSize: "Max 8",
    rating: "4.9",
    price: "₹18,999 per person",
    includes: [
      "5 nights accommodation in premium hotels/resorts",
      "Daily breakfast and dinner",
      "All transfers and sightseeing by private vehicle",
      "Permits for restricted areas",
      "Expert local guide",
      "All applicable taxes"
    ],
    excludes: [
      "Airfare/train fare to/from Gangtok",
      "Lunch and other meals not mentioned",
      "Personal expenses like tips, shopping, etc.",
      "Travel insurance",
      "Oxygen cylinders (if required)"
    ]
  },
  "sikkim-2": {
    id: "sikkim-2",
    name: "Monastery Circuit",
    heroImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1920&q=80",
    introduction: "Explore the ancient Buddhist monasteries of Sikkim and learn about Tibetan Buddhism. This spiritual journey takes you through some of the most revered monasteries in the region, offering insights into Buddhist philosophy and practices.",
    whatToExpect: [
      "Visit to Rumtek Monastery, the largest monastery in Sikkim",
      "Explore Pemayangtse Monastery, one of the oldest in Sikkim",
      "Experience prayer ceremonies and meditation sessions",
      "Learn about Tibetan Buddhism from resident monks",
      "Enjoy traditional butter tea and local snacks",
      "Purchase authentic Buddhist artifacts and souvenirs"
    ],
    itinerary: [
      "Day 1: Arrival in Gangtok, visit to Enchey Monastery",
      "Day 2: Full day tour of Rumtek Monastery",
      "Day 3: Travel to Pelling, visit Pemayangtse Monastery",
      "Day 4: Visit to Tashiding Monastery and return to Gangtok",
      "Day 5: Visit to Ranka Monastery and departure"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=700&q=80"
    ],
    location: "Gangtok",
    duration: "3 Days",
    groupSize: "Max 12",
    rating: "4.8",
    price: "₹12,999 per person",
    includes: [
      "4 nights accommodation in premium hotels/resorts",
      "Daily breakfast and dinner",
      "All transfers and sightseeing by private vehicle",
      "Monastery entrance fees and donations",
      "Expert Buddhist guide",
      "All applicable taxes"
    ],
    excludes: [
      "Airfare/train fare to/from Gangtok",
      "Lunch and other meals not mentioned",
      "Personal expenses like tips, shopping, etc.",
      "Travel insurance"
    ]
  },
  "sikkim-3": {
    id: "sikkim-3",
    name: "Yumthang Valley Experience",
    heroImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1920&q=80",
    introduction: "Experience the breathtaking beauty of Yumthang Valley, known as the 'Valley of Flowers'. This journey takes you through one of the most picturesque valleys in Sikkim, surrounded by snow-capped peaks and blooming rhododendrons.",
    whatToExpect: [
      "Visit to Yumthang Valley, the 'Valley of Flowers'",
      "Experience the stunning beauty of snow-capped peaks and blooming flowers",
      "Visit to the hot springs of Yumthang",
      "Photography opportunities of breathtaking landscapes",
      "Learn about the unique flora and fauna of the region",
      "Interaction with local Tibetan communities"
    ],
    itinerary: [
      "Day 1: Arrival in Gangtok, city tour",
      "Day 2: Travel to Lachung, acclimatization",
      "Day 3: Full day exploration of Yumthang Valley",
      "Day 4: Visit to Zero Point and return to Lachung",
      "Day 5: Return to Gangtok and departure"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=700&q=80"
    ],
    location: "Lachung",
    duration: "3 Days",
    groupSize: "Max 10",
    rating: "4.9",
    price: "₹15,999 per person",
    includes: [
      "4 nights accommodation in premium hotels/resorts",
      "Daily breakfast and dinner",
      "All transfers and sightseeing by private vehicle",
      "Permits for restricted areas",
      "Expert local guide",
      "All applicable taxes"
    ],
    excludes: [
      "Airfare/train fare to/from Gangtok",
      "Lunch and other meals not mentioned",
      "Personal expenses like tips, shopping, etc.",
      "Travel insurance",
      "Oxygen cylinders (if required)"
    ]
  },
  
  // Puri Beach & Temple Tour Packages
  "puri-1": {
    id: "puri-1",
    name: "Temple Heritage Tour",
    heroImage: "https://images.unsplash.com/photo-1516397281156-ca07cf9746fc?auto=format&fit=crop&w=1920&q=80",
    introduction: "Explore the ancient temples of Puri and learn about their rich history and architecture. This spiritual journey takes you to the famous Jagannath Temple and other significant temples in the region.",
    whatToExpect: [
      "Visit to Jagannath Temple, one of the Char Dham pilgrimage sites",
      "Explore the architecture and rituals of the temple",
      "Visit to other significant temples in Puri",
      "Learn about the history and mythology of the temples",
      "Experience the spiritual atmosphere of the pilgrimage site",
      "Interaction with temple priests and scholars"
    ],
    itinerary: [
      "Day 1: Arrival in Puri, visit to Jagannath Temple",
      "Day 2: Full day exploration of temples in Puri",
      "Day 3: Visit to Konark Sun Temple",
      "Day 4: Visit to Bhubaneswar temples and return to Puri",
      "Day 5: Departure from Puri"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1516397281156-ca07cf9746fc?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1516397281156-ca07cf9746fc?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1516397281156-ca07cf9746fc?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1516397281156-ca07cf9746fc?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1516397281156-ca07cf9746fc?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1516397281156-ca07cf9746fc?auto=format&fit=crop&w=700&q=80"
    ],
    location: "Puri",
    duration: "3 Days",
    groupSize: "Max 15",
    rating: "4.7",
    price: "₹9,999 per person",
    includes: [
      "4 nights accommodation in beachfront hotel",
      "Daily breakfast and dinner",
      "All transfers and sightseeing by private vehicle",
      "Temple entrance fees and donations",
      "Expert guide",
      "All applicable taxes"
    ],
    excludes: [
      "Airfare/train fare to/from Puri",
      "Lunch and other meals not mentioned",
      "Personal expenses like tips, shopping, etc.",
      "Travel insurance"
    ]
  },
  "puri-2": {
    id: "puri-2",
    name: "Beach Relaxation Package",
    heroImage: "https://images.unsplash.com/photo-1516397281156-ca07cf9746fc?auto=format&fit=crop&w=1920&q=80",
    introduction: "Relax on the pristine beaches of Puri with optional water sports activities. This beach vacation allows you to unwind and enjoy the beauty of the Bay of Bengal.",
    whatToExpect: [
      "Relaxation on the pristine beaches of Puri",
      "Optional water sports activities like swimming and surfing",
      "Beach walks and sunset viewing",
      "Visit to local fishing villages",
      "Taste fresh seafood at beachside shacks",
      "Experience the vibrant beach culture of Puri"
    ],
    itinerary: [
      "Day 1: Arrival in Puri, beach relaxation",
      "Day 2: Full day beach activities and water sports",
      "Day 3: Visit to fishing villages and local markets",
      "Day 4: Beach relaxation and sunset viewing",
      "Day 5: Departure from Puri"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1516397281156-ca07cf9746fc?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1516397281156-ca07cf9746fc?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1516397281156-ca07cf9746fc?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1516397281156-ca07cf9746fc?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1516397281156-ca07cf9746fc?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1516397281156-ca07cf9746fc?auto=format&fit=crop&w=700&q=80"
    ],
    location: "Puri Beach",
    duration: "2 Days",
    groupSize: "Max 12",
    rating: "4.6",
    price: "₹7,999 per person",
    includes: [
      "4 nights accommodation in beachfront hotel",
      "Daily breakfast and dinner",
      "All transfers by private vehicle",
      "Beach activities and equipment rental",
      "Local guide",
      "All applicable taxes"
    ],
    excludes: [
      "Airfare/train fare to/from Puri",
      "Lunch and other meals not mentioned",
      "Personal expenses like tips, shopping, etc.",
      "Travel insurance"
    ]
  },
  "puri-3": {
    id: "puri-3",
    name: "Konark Sun Temple Excursion",
    heroImage: "https://images.unsplash.com/photo-1516397281156-ca07cf9746fc?auto=format&fit=crop&w=1920&q=80",
    introduction: "Visit the magnificent Konark Sun Temple, a UNESCO World Heritage Site known for its intricate architecture. This excursion takes you to one of India's most stunning historical monuments.",
    whatToExpect: [
      "Visit to Konark Sun Temple, a UNESCO World Heritage Site",
      "Explore the intricate architecture and sculptures of the temple",
      "Learn about the history and mythology of the temple",
      "Visit to the Konark Archaeological Museum",
      "Experience the annual Konark Dance Festival (if timed right)",
      "Photography opportunities of this magnificent monument"
    ],
    itinerary: [
      "Day 1: Arrival in Puri, evening beach walk",
      "Day 2: Full day excursion to Konark Sun Temple",
      "Day 3: Visit to Konark Archaeological Museum",
      "Day 4: Explore Puri town and Jagannath Temple",
      "Day 5: Departure from Puri"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1516397281156-ca07cf9746fc?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1516397281156-ca07cf9746fc?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1516397281156-ca07cf9746fc?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1516397281156-ca07cf9746fc?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1516397281156-ca07cf9746fc?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1516397281156-ca07cf9746fc?auto=format&fit=crop&w=700&q=80"
    ],
    location: "Konark",
    duration: "2 Days",
    groupSize: "Max 15",
    rating: "4.8",
    price: "₹11,999 per person",
    includes: [
      "4 nights accommodation in beachfront hotel",
      "Daily breakfast and dinner",
      "All transfers and sightseeing by private vehicle",
      "Entrance fees to monuments",
      "Expert guide",
      "All applicable taxes"
    ],
    excludes: [
      "Airfare/train fare to/from Puri",
      "Lunch and other meals not mentioned",
      "Personal expenses like tips, shopping, etc.",
      "Travel insurance"
    ]
  }
};

export default function PackageDetailsPage() {
  const { packageId } = useParams();
  const navigate = useNavigate();
  const pkg = packageDetails[packageId] || packageDetails["darjeeling-1"];
  
  // Generate tour information dynamically based on package data
  const tourInformation = [
    { label: "Package Name", value: pkg.name },
    { label: "Duration", value: pkg.duration },
    { label: "Group Size", value: pkg.groupSize },
    { label: "Location", value: pkg.location },
    { label: "Price", value: pkg.price },
    { label: "Rating", value: pkg.rating }
  ];
  
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    arrivalDate: '',
    departureDate: '',
    noOfPersons: 1,
    noOfChildren: 0,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'noOfPersons' || name === 'noOfChildren' ? parseInt(value) : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const message = `Hello, I'm interested in the ${pkg.name} package.%0A%0A` +
      `Name: ${formData.name}%0A` +
      `Number: ${formData.number}%0A` +
      `Email: ${formData.email}%0A` +
      `Arrival Date: ${formData.arrivalDate}%0A` +
      `Departure Date: ${formData.departureDate}%0A` +
      `Number of Persons: ${formData.noOfPersons}%0A` +
      `Number of Children: ${formData.noOfChildren}%0A` +
      `Message: ${formData.message}`;
    
    // Open WhatsApp with the pre-filled message
    const whatsappUrl = `https://wa.me/919876543210?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url(${pkg.heroImage})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {pkg.name}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-white">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#D4A017]" />
                <span>{pkg.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="text-[#D4A017]" />
                <span>{pkg.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaUsers className="text-[#D4A017]" />
                <span>{pkg.groupSize}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaStar className="text-[#D4A017]" />
                <span>{pkg.rating}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-12 px-6 sm:px-10 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Introduction Section */}
            <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-zinc-800 mb-4">Introduction</h2>
              <p className="text-zinc-700">
                {pkg.introduction}
              </p>
            </div>
            
            {/* What to Expect Section */}
            <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-zinc-800 mb-4">What to Expect</h2>
              <ul className="space-y-3">
                {pkg.whatToExpect.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="bg-[#D4A017] rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FaCheck className="text-white text-xs" />
                    </div>
                    <span className="text-zinc-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Tour Itinerary Section */}
            <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-zinc-800 mb-4">Tour Itinerary</h2>
              <ul className="space-y-4">
                {pkg.itinerary.map((day, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="bg-[#D4A017] text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-800">Day {index + 1}</h3>
                      <p className="text-zinc-700">{day}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Tour Gallery Section */}
            <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-zinc-800 mb-4">Tour Gallery</h2>
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={15}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                breakpoints={{
                  640: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  1024: { slidesPerView: 3 },
                }}
                className="package-gallery-swiper"
              >
                {pkg.gallery.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative overflow-hidden rounded-lg">
                      <img
                        src={image}
                        alt={`Gallery image ${index + 1}`}
                        className="w-full h-64 object-cover transition-transform duration-700 hover:scale-110"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/3">
            {/* Tour Information */}
            <div className="bg-gradient-to-br from-[#FFF9E6] to-white rounded-2xl shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-zinc-800 mb-4">Tour Information</h2>
              <div className="space-y-3">
                {tourInformation.map((info, index) => (
                  <div key={index} className="flex justify-between pb-2 border-b border-[#FFF9E6]">
                    <span className="text-zinc-600">{info.label}</span>
                    <span className="font-medium text-zinc-800">{info.value}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t border-[#FFF9E6]">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-zinc-600">Package Price</span>
                  <span className="text-xl font-bold text-[#D4A017]">{pkg.price}</span>
                </div>
                <p className="text-sm text-zinc-500 mb-4">Based on double occupancy</p>
                <button className="w-full bg-gradient-to-r from-[#D4A017] to-[#B8860B] text-white font-semibold py-3 px-6 rounded-full shadow-sm hover:from-[#B8860B] hover:to-[#966F1A] hover:shadow-md transition-all duration-300">
                  Book This Package
                </button>
              </div>
            </div>
            
            {/* Plan Your Journey */}
            <div className="bg-gradient-to-br from-[#D4A017] to-[#B8860B] rounded-2xl shadow-md p-6 text-white">
              <h2 className="text-2xl font-bold mb-4">Plan Your Journey</h2>
              <p className="mb-6">Fill out the form below to plan your journey with us.</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name *</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaUser className="text-white/70" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Number *</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaPhone className="text-white/70" />
                    </div>
                    <input
                      type="tel"
                      name="number"
                      value={formData.number}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Email *</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaEnvelope className="text-white/70" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                      placeholder="Your email address"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Arrival Date *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaCalendarAlt className="text-white/70" />
                      </div>
                      <input
                        type="date"
                        name="arrivalDate"
                        value={formData.arrivalDate}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Departure Date *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaCalendarAlt className="text-white/70" />
                      </div>
                      <input
                        type="date"
                        name="departureDate"
                        value={formData.departureDate}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">No. of Persons *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaUser className="text-white/70" />
                      </div>
                      <select
                        name="noOfPersons"
                        value={formData.noOfPersons}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                          <option key={num} value={num} className="text-zinc-800">{num}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">No. of Children</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaChild className="text-white/70" />
                      </div>
                      <select
                        name="noOfChildren"
                        value={formData.noOfChildren}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                      >
                        {[0, 1, 2, 3, 4].map(num => (
                          <option key={num} value={num} className="text-zinc-800">{num}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 pt-3 pointer-events-none">
                      <FaComment className="text-white/70" />
                    </div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full pl-10 pr-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                      placeholder="Any special requests or questions"
                    ></textarea>
                  </div>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-white text-[#B8860B] font-semibold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Submit to WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom Swiper Styles */}
      <style jsx>{`
        .package-gallery-swiper .swiper-pagination-bullet {
          background-color: #D4A017;
          opacity: 0.5;
        }
        .package-gallery-swiper .swiper-pagination-bullet-active {
          background-color: #D4A017;
          opacity: 1;
        }
        .package-gallery-swiper .swiper-button-next,
        .package-gallery-swiper .swiper-button-prev {
          color: #D4A017;
        }
      `}</style>
    </div>
  );
}