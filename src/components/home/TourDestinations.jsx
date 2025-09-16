"use client"

import { motion } from "framer-motion"

const tourData = [
  {
    name: "ODISHA",
    categories: [
      {
        title: "Devotional Tours",
        tours: [
          "1 Night 2 Days Puri & Konark Tour",
          "1 Night 2 Days Puri & Bhubaneshwar Tour",
          "2 Night 3 Days Puri, Konark & Bhubaneshwar Tour",
          "2 Nights 3 Days Golden Triangle of Odisha Tour",
          "3 Nights 4 Days Golden Triangle of Odisha Tour",
          "4 Nights 5 Days Golden Triangle of Odisha with Jajpur Tour",
          "4 Nights 5 Days Golden Triangle of Odisha Tour (Less Hectic)",
          "5 Nights 6 Days Puri, Konark, Bhubaneshwar, Chilika, Gopalpur Tour",
          "5 Nights 6 Days Puri, Konark, Bhubaneshwar, Chilika, Cuttack, Jajpur Tour",
        ],
      },
      {
        title: "Tribal Tours",
        tours: [
          "1 Night 2 Days Koraput Tour",
          "2 Nights 3 Days Koraput Tour",
          "3 Nights 4 Days Koraput with Malkangiri Tour",
          "3 Nights 4 Days Koraput & Aaraku Valley Tour",
          "3 Nights 4 Days Koraput, Aaraku Valley & Vizag Tour",
        ],
      },
      {
        title: "Wildlife & Adventure Tours",
        tours: [
          "1 Day Chandaka Elephant Safari Tour",
          "1 Night 2 Days Satkosia Tour",
          "1 Night 2 Days Bhitarkanika Tour",
          "1 Night 2 Days Shimlipal Tour",
          "1 Night 2 Days Debrigarh with Hirakud Tour",
          "1 Night 2 Days Daringbadi Tour",
          "2 Nights 3 Days Bhitarkanika Tour",
          "2 Nights 3 Days Shimilipal Tour",
          "2 Nights 3 Days Daringbadi Tour",
          "3 Nights 4 Days Gopalpur & Daringbadi Tour",
          "4 Nights 5 Days Bhitarkanika & Shimlipal Tour",
          "5 Nights 6 Days Bhitarkanika & Shimlipal Tour",
        ],
      },
      {
        title: "Senior Citizen Tours",
        tours: [
          "2 Nights 3 Days Puri & Konark Tour",
          "3 Nights 4 Days Puri, Konark & Bhubaneshwar Tour",
          "4 Nights 5 Days Puri, Konark, Bhubaneshwar & Chilika Lake Tour",
          "5 Nights 6 Days Puri, Konark, Bhubaneshwar, Chilika & Jajpur Tour",
        ],
      },
    ],
  },
  {
    name: "NORTH EAST (SIKKIM & DARJEELING)",
    categories: [
      {
        title: "Offbeat & Scenic Excursion Tours",
        tours: [
          "4 Nights 5 Days Gangtok & Lachen Tour",
          "4 Nights 5 Days Gangtok & Lachung Tour",
          "5 Nights 6 Days Gangtok, Lachen & Lachung Tour",
        ],
      },
      {
        title: "Honeymoon Special Tours",
        tours: [
          "2 Nights 3 Days Darjeeling Honeymoon Special Tour",
          "2 Nights 3 Days Gangtok Honeymoon Special Tour",
          "3 Nights 4 Days Darjeeling with Mirik Honeymoon Special Tour",
          "4 Nights 5 Days Darjeeling & Gangtok Honeymoon Special Tour",
        ],
      },
      {
        title: "Northeast Combo Tours",
        tours: [
          "4 Nights 5 Days Darjeeling & Gangtok Tour",
          "5 Nights 6 Days Darjeeling & Gangtok Tour",
          "6 Nights 7 Days Darjeeling, Gangtok, Lachen Tour",
          "7 Nights 8 Days Darjeeling, Gangtok, Lachen & Lachung Tour",
          "9 Nights 10 Days Darjeeling, Gangtok, Lachen, Lachung, Pelling Tour",
          "11 Nights 12 Days Darjeeling, Gangtok, Lachen, Lachung, Pelling, Namchi Tour",
        ],
      },
    ],
  },
  {
    name: "ASSAM",
    categories: [
      {
        title: "Assam Tours",
        tours: [
          "1 Night 2 Days Guwahati & Kamakhya Temple Tour",
          "1 Night 2 Days Pobitora Wildlife Sanctuary & Brahmaputra Cruise Tour",
          "2 Nights 3 Days Kaziranga Wildlife Safari Tour",
          "2 Nights 3 Days Guwahati – Shillong Scenic Tour",
          "2 Nights 3 Days Golden Triangle of Assam (Guwahati – Kaziranga – Tezpur)",
          "3 Nights 4 Days Guwahati – Kaziranga – Majuli Tour",
          "3 Nights 4 Days Assam Wildlife & Spiritual Tour (Kaziranga + Kamakhya)",
          "4 Nights 5 Days Assam Golden Heritage Trail (Guwahati – Majuli – Kaziranga – Tezpur)",
          "4 Nights 5 Days Assam & Meghalaya Combo (Guwahati – Shillong – Cherrapunji)",
          "4 Nights 5 Days Kamakhya Yatra + Wildlife + Tea Garden Experience",
          "5 Nights 6 Days Wildlife & Brahmaputra Cruise Tour (Kaziranga + River Safari + Cultural Stops)",
        ],
      },
    ],
  },
  {
    name: "KOLKATA",
    categories: [
      {
        title: "Kolkata Tours",
        tours: [
          "1 Night 2 Days Kolkata Tour",
          "2 Night 3 Days Kolkata Tour",
          "2 Nights 3 Days Sundarban Tour",
          "3 Nights 4 Days Kolkata & Gangasagar Tour",
          "4 Nights 5 Days Kolkata & Sundarban Tour",
          "5 Nights 6 Days Kolkata, Gangasagar, Sundarban Tour",
        ],
      },
    ],
  },
  {
    name: "UTTAR PRADESH",
    categories: [
      {
        title: "UP Tours",
        tours: [
          "1 Night 2 Days Varanasi Tour",
          "1 Night 2 Days Prayagraj Special Tour",
          "2 Nights 3 Days Varanasi, Prayagraj Tour",
          "3 Nights 4 Days Varanasi, Prayagraj, Chitrakoot Tour",
          "4 Nights 5 Days Varanasi, Prayagraj, Chitrakoot, Ayodhya Special Tour",
          "6 Nights 7 Days Varanasi, Gaya, Prayagraj, Chitrakoot, Ayodhya Special Tour",
          "2 Nights 3 Days Mathura & Vrindaban Tour",
          "3 Nights 4 Days Mathura, Vrindaban & Agra Special Tour",
        ],
      },
    ],
  },
  {
    name: "VIZAG",
    categories: [
      {
        title: "Vizag Tours",
        tours: [
          "2 Nights 3 Days Vizag Special Tour",
          "3 Nights 4 Days Vizag & Araku Valley Tour",
          "5 Nights 6 Days Vizag, Araku Valley with Koraput Special Tour",
        ],
      },
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function TourDestinations() {
  return (
    <section className="relative bg-gradient-to-br from-yellow-50 via-white to-orange-50 py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4" variants={itemVariants}>
            Explore Our Tour Destinations
          </motion.h2>
          <motion.p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" variants={itemVariants}>
            Eastern India Travels brings you curated tours across India’s iconic and offbeat destinations. Discover spirituality, nature, and adventure like never before.
          </motion.p>
        </motion.div>

        {/* Destinations Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {tourData.map((destination, idx) => (
            <motion.div
              key={idx}
              className="relative bg-white rounded-3xl shadow-lg p-6 md:p-8 overflow-hidden group hover:shadow-2xl transition-shadow duration-500"
              variants={itemVariants}
            >
              {/* Decorative floating circle */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-tr from-yellow-200/40 to-orange-300/30 rounded-full blur-3xl animate-pulse opacity-50 group-hover:opacity-80 transition-opacity duration-500" />

              <h3 className="text-2xl font-bold text-gray-900 mb-4">{destination.name}</h3>

              {destination.categories.map((cat, i) => (
                <div key={i} className="mb-4">
                  <h4 className="text-lg font-semibold text-yellow-700 mb-2">{cat.title}</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm md:text-base">
                    {cat.tours.map((tour, j) => (
                      <li key={j}>{tour}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
