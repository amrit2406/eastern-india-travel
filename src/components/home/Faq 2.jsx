import React, { useState } from "react";
import {
  Plus,
  Minus,
  MessageCircleQuestion,
  Plane,
  MapPin,
  Globe,
  Compass,
} from "lucide-react";
import { Link } from "react-router-dom";

const faqData = [
  {
    question: "What is the best time to visit Eastern India?",
    answer:
      "The best time to visit Eastern India is between October and March when the weather is pleasant and ideal for sightseeing. During this period, you can experience a variety of festivals and events.",
  },
  {
    question: "Do you offer customized tour packages?",
    answer:
      "Yes, we specialize in creating fully customized tours. Our team works closely with you to tailor every detail of the itinerary—from destinations and activities to accommodation and budget—ensuring a unique and personalized travel experience.",
  },
  {
    question: "Are the tours suitable for families with children?",
    answer:
      "Absolutely! We pride ourselves on designing family-friendly tours that are safe, engaging, and enjoyable for all ages. We can include kid-centric activities and ensure accommodations are comfortable and convenient for families.",
  },
  {
    question: "What COVID-19 safety measures are followed?",
    answer:
      "The health and safety of our travelers are our top priority. We strictly follow all government guidelines and recommended safety protocols, including frequent sanitization, social distancing measures, and providing personal protective equipment to all our guests.",
  },
  {
    question: "How do I book a tour with you?",
    answer:
      "Booking a tour is simple. You can reach out to our team directly through our website's contact form, email, or by phone. Our travel consultants will guide you through the process, answer any questions, and help you finalize your perfect itinerary.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Our cancellation policy is designed to be as flexible as possible while being fair. For specific details regarding refunds and rescheduling, please refer to our full terms and conditions on our website or contact our support team.",
  },
];

export default function Faq2() {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Split FAQs into two columns
  const mid = Math.ceil(faqData.length / 2);
  const leftFaqs = faqData.slice(0, mid);
  const rightFaqs = faqData.slice(mid);

  return (
    <div className="relative bg-gradient-to-br from-yellow-50 via-white to-yellow-100 min-h-screen font-sans p-6 sm:p-10 lg:p-20 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-yellow-200 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-yellow-300 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Plane className="absolute top-10 left-20 w-8 h-8 text-yellow-600 opacity-40 animate-float1" />
        <MapPin className="absolute top-1/3 right-24 w-10 h-10 text-yellow-600 opacity-35 animate-float2" />
        <Globe className="absolute bottom-20 left-1/4 w-12 h-12 text-yellow-600 opacity-30 animate-float3" />
        <Compass className="absolute bottom-10 right-1/3 w-8 h-8 text-yellow-600 opacity-35 animate-float4" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          {/* <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-yellow-100 mb-6">
            <MessageCircleQuestion className="text-4xl text-yellow-700" />
          </div> */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-800 mb-4 tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-yellow-600 to-yellow-700 mx-auto mt-6 rounded-full"></div>
          <p className="mt-6 text-lg text-yellow-900 max-w-2xl mx-auto">
            Find quick answers to the questions our travelers ask most often. If
            you need further assistance, our team is always ready to help.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {leftFaqs.map((item, idx) => {
              const index = idx; // keep unique index
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl border border-yellow-100"
                >
                  <button
                    className={`w-full flex justify-between items-center px-6 md:px-8 py-6 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-400/50 
                      ${
                        activeIndex === index
                          ? "bg-gradient-to-r from-yellow-600 to-yellow-700 text-white"
                          : "text-yellow-900 hover:bg-yellow-50"
                      }`}
                    onClick={() => toggleIndex(index)}
                  >
                    <span className="text-lg md:text-xl font-semibold text-left">
                      {item.question}
                    </span>
                    {activeIndex === index ? <Minus /> : <Plus />}
                  </button>
                  <div
                    className={`bg-white px-6 md:px-8 overflow-hidden transition-all duration-500 ease-in-out 
                      ${
                        activeIndex === index
                          ? "max-h-screen pt-4 pb-6 border-t border-yellow-100"
                          : "max-h-0 pt-0 pb-0"
                      }`}
                  >
                    <p className="text-yellow-800 text-base leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {rightFaqs.map((item, idx) => {
              const index = idx + mid; // shift index for right column
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl border border-yellow-100"
                >
                  <button
                    className={`w-full flex justify-between items-center px-6 md:px-8 py-6 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-400/50 
                      ${
                        activeIndex === index
                          ? "bg-gradient-to-r from-yellow-600 to-yellow-700 text-white"
                          : "text-yellow-900 hover:bg-yellow-50"
                      }`}
                    onClick={() => toggleIndex(index)}
                  >
                    <span className="text-lg md:text-xl font-semibold text-left">
                      {item.question}
                    </span>
                    {activeIndex === index ? <Minus /> : <Plus />}
                  </button>
                  <div
                    className={`bg-white px-6 md:px-8 overflow-hidden transition-all duration-500 ease-in-out 
                      ${
                        activeIndex === index
                          ? "max-h-screen pt-4 pb-6 border-t border-yellow-100"
                          : "max-h-0 pt-0 pb-0"
                      }`}
                  >
                    <p className="text-yellow-800 text-base leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            to="/contact"
            className="inline-block bg-gradient-to-r from-yellow-600 to-yellow-700 
               text-white font-medium px-6 py-3 rounded-full shadow-md 
               hover:shadow-lg transition-all duration-300 transform 
               hover:-translate-y-1"
          >
            Still have questions? Contact us
          </Link>
        </div>
      </div>

      {/* Floating Animations */}
      <style jsx>{`
        @keyframes float1 {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes float2 {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes float3 {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes float4 {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-25px);
          }
        }
        .animate-float1 {
          animation: float1 6s ease-in-out infinite;
        }
        .animate-float2 {
          animation: float2 7s ease-in-out infinite;
        }
        .animate-float3 {
          animation: float3 5s ease-in-out infinite;
        }
        .animate-float4 {
          animation: float4 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
