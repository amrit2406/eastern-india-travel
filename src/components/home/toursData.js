// src/data/toursData.js

const tours = {
  odisha: [
    {
      id: 1,
      name: "Puri & Konark Tour",
      banner: "https://source.unsplash.com/1600x600/?puri,beach",
      intro:
        "Explore the spiritual heart of Odisha with visits to the sacred city of Puri and the magnificent Sun Temple of Konark.",
      shortItinerary: [
        "Day 1: Arrival in Bhubaneswar & Transfer to Puri",
        "Day 2: Visit Jagannath Temple & Konark Sun Temple",
        "Day 3: Chilika Lake Excursion & Departure",
      ],
      expect: [
        "Jagannath Temple experience",
        "UNESCO World Heritage Sun Temple",
        "Chilika Lake boat ride",
        "Comfortable stay & guided tours",
      ],
      itinerary: [
        { day: "Day 1", detail: "Arrival at Bhubaneswar, transfer to Puri. Evening beach walk." },
        { day: "Day 2", detail: "Darshan at Jagannath Temple, visit Konark Sun Temple." },
        { day: "Day 3", detail: "Chilika Lake excursion. Evening departure." },
      ],
      gallery: [
        "https://source.unsplash.com/600x400/?puri,temple",
        "https://source.unsplash.com/600x400/?konark",
        "https://source.unsplash.com/600x400/?chilika",
      ],
    },
    {
      id: 2,
      name: "Bhubaneswar City Tour",
      banner: "https://source.unsplash.com/1600x600/?temple,odisha",
      intro: "Discover the ancient temples and cultural landmarks of Bhubaneswar.",
      shortItinerary: [
        "Day 1: Arrival & Local Temples",
        "Day 2: Nandankanan Zoo & Departure",
      ],
      expect: [
        "Lingaraj Temple",
        "Mukteswar Temple",
        "Nandankanan Zoo",
        "Local markets",
      ],
      itinerary: [
        { day: "Day 1", detail: "Visit Lingaraj, Rajarani, and Mukteswar Temples." },
        { day: "Day 2", detail: "Explore Nandankanan Zoo, then departure." },
      ],
      gallery: [
        "https://source.unsplash.com/600x400/?lingaraj",
        "https://source.unsplash.com/600x400/?bhubaneswar",
      ],
    },
    {
      id: 3,
      name: "Chilika Lake Tour",
      banner: "https://source.unsplash.com/1600x600/?lake,odisha",
      intro: "Enjoy the tranquility of Asia’s largest brackish water lagoon.",
      shortItinerary: [
        "Day 1: Arrival at Chilika",
        "Day 2: Bird watching & Dolphin spotting",
      ],
      expect: ["Boating experience", "Migratory birds", "Irrawaddy dolphins"],
      itinerary: [
        { day: "Day 1", detail: "Arrival and boating at Chilika." },
        { day: "Day 2", detail: "Early morning bird watching, then departure." },
      ],
      gallery: [
        "https://source.unsplash.com/600x400/?chilika",
        "https://source.unsplash.com/600x400/?odisha,lake",
      ],
    },
    {
      id: 4,
      name: "Simlipal National Park",
      banner: "https://source.unsplash.com/1600x600/?forest,simlipal",
      intro: "A wildlife adventure amidst lush greenery and waterfalls.",
      shortItinerary: [
        "Day 1: Arrival & Jungle Safari",
        "Day 2: Waterfalls & Wildlife Exploration",
        "Day 3: Departure",
      ],
      expect: ["Tiger reserve safari", "Barehipani waterfalls", "Flora & fauna"],
      itinerary: [
        { day: "Day 1", detail: "Safari and wildlife spotting." },
        { day: "Day 2", detail: "Visit waterfalls, explore tribal culture." },
        { day: "Day 3", detail: "Departure." },
      ],
      gallery: [
        "https://source.unsplash.com/600x400/?simlipal",
        "https://source.unsplash.com/600x400/?tiger",
      ],
    },
  ],

  northeast: [
    {
      id: 5,
      name: "Meghalaya Tour",
      banner: "https://source.unsplash.com/1600x600/?meghalaya,hills",
      intro: "Experience the land of waterfalls and living root bridges.",
      shortItinerary: [
        "Day 1: Shillong Arrival",
        "Day 2: Cherrapunji",
        "Day 3: Dawki & Mawlynnong",
        "Day 4: Shillong Tour",
        "Day 5: Departure",
      ],
      expect: ["Living root bridges", "Waterfalls", "Dawki river"],
      itinerary: [
        { day: "Day 1", detail: "Arrival at Shillong." },
        { day: "Day 2", detail: "Cherrapunji sightseeing." },
        { day: "Day 3", detail: "Dawki boating & Mawlynnong village." },
        { day: "Day 4", detail: "Shillong local sightseeing." },
        { day: "Day 5", detail: "Departure." },
      ],
      gallery: [
        "https://source.unsplash.com/600x400/?meghalaya,waterfall",
        "https://source.unsplash.com/600x400/?shillong",
      ],
    },
    {
      id: 6,
      name: "Assam Wildlife Safari",
      banner: "https://source.unsplash.com/1600x600/?assam,jungle",
      intro: "Explore Assam’s rich wildlife with a safari adventure.",
      shortItinerary: [
        "Day 1: Kaziranga Arrival",
        "Day 2: Jeep Safari",
        "Day 3: Elephant Safari & Departure",
      ],
      expect: ["One-horned rhinos", "Wild elephants", "Birds"],
      itinerary: [
        { day: "Day 1", detail: "Arrival at Kaziranga." },
        { day: "Day 2", detail: "Morning jeep safari." },
        { day: "Day 3", detail: "Elephant ride, then departure." },
      ],
      gallery: [
        "https://source.unsplash.com/600x400/?rhino",
        "https://source.unsplash.com/600x400/?kaziranga",
      ],
    },
    {
      id: 7,
      name: "Sikkim Adventure",
      banner: "https://source.unsplash.com/1600x600/?sikkim,mountains",
      intro: "A journey through the Himalayan beauty of Sikkim.",
      shortItinerary: [
        "Day 1: Gangtok Arrival",
        "Day 2: Tsomgo Lake & Baba Mandir",
        "Day 3: Nathula Pass",
        "Day 4: Departure",
      ],
      expect: ["Himalayan views", "Lakes", "Snow peaks"],
      itinerary: [
        { day: "Day 1", detail: "Arrival at Gangtok." },
        { day: "Day 2", detail: "Tsomgo Lake & Baba Mandir." },
        { day: "Day 3", detail: "Nathula Pass excursion." },
        { day: "Day 4", detail: "Departure." },
      ],
      gallery: [
        "https://source.unsplash.com/600x400/?sikkim",
        "https://source.unsplash.com/600x400/?himalayas",
      ],
    },
    {
      id: 8,
      name: "Arunachal Pradesh Tour",
      banner: "https://source.unsplash.com/1600x600/?arunachal,mountains",
      intro: "Discover the unspoiled beauty of Arunachal Pradesh.",
      shortItinerary: [
        "Day 1: Arrival at Itanagar",
        "Day 2: Tawang Monastery",
        "Day 3: Bum La Pass",
        "Day 4: Departure",
      ],
      expect: ["Tawang Monastery", "Snowy passes", "Scenic valleys"],
      itinerary: [
        { day: "Day 1", detail: "Arrival at Itanagar." },
        { day: "Day 2", detail: "Visit Tawang Monastery." },
        { day: "Day 3", detail: "Excursion to Bum La Pass." },
        { day: "Day 4", detail: "Departure." },
      ],
      gallery: [
        "https://source.unsplash.com/600x400/?tawang",
        "https://source.unsplash.com/600x400/?arunachal",
      ],
    },
  ],
};

export default tours;
