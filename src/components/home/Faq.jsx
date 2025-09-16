import React, { useState } from "react";
import { FaPlus, FaMinus, FaQuestionCircle } from "react-icons/fa";

const faqData = [
  {
    question: "What is the best time to visit Eastern India?",
    answer: "The best time to visit Eastern India is between October and March when the weather is pleasant and ideal for sightseeing. During this period, you can experience a variety of festivals and events.",
  },
  {
    question: "Do you offer customized tour packages?",
    answer: "Yes, we specialize in creating fully customized tours. Our team works closely with you to tailor every detail of the itinerary—from destinations and activities to accommodation and budget—ensuring a unique and personalized travel experience.",
  },
  {
    question: "Are the tours suitable for families with children?",
    answer: "Absolutely! We pride ourselves on designing family-friendly tours that are safe, engaging, and enjoyable for all ages. We can include kid-centric activities and ensure accommodations are comfortable and convenient for families.",
  },
  {
    question: "What COVID-19 safety measures are followed?",
    answer: "The health and safety of our travelers are our top priority. We strictly follow all government guidelines and recommended safety protocols, including frequent sanitization, social distancing measures, and providing personal protective equipment to all our guests.",
  },
  {
    question: "How do I book a tour with you?",
    answer: "Booking a tour is simple. You can reach out to our team directly through our website's contact form, email, or by phone. Our travel consultants will guide you through the process, answer any questions, and help you finalize your perfect itinerary.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "Our cancellation policy is designed to be as flexible as possible while being fair. For specific details regarding refunds and rescheduling, please refer to our full terms and conditions on our website or contact our support team.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-zinc-900 text-white py-18 px-6 sm:px-10 lg:px-20 relative overflow-hidden">
      {/* Background gradients for a premium feel */}
      {/* <div className="absolute inset-0 bg-cover bg-center opacity-5 pointer-events-none" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop')" }}></div> */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 opacity-95"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          {/* <FaQuestionCircle className="text-5xl text-amber-500 mx-auto mb-4" /> */}
          <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Commonly Asked Questions
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-amber-500 to-amber-800 mx-auto mt-6 rounded-full"></div>
          <p className="mt-6 text-lg text-zinc-400 font-light max-w-2xl mx-auto">
            Find quick answers to the questions our travelers ask most often. If you need further assistance, our team is always ready to help.
          </p>
        </div>

        <div className="space-y-6">
          {faqData.map((item, idx) => (
            <div
              key={idx}
              className="group rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
              style={{
                boxShadow: "0 10px 20px rgba(0,0,0,0.2), 0 6px 6px rgba(0,0,0,0.15)",
              }}
            >
              <button
                className={`w-full flex justify-between items-center px-6 md:px-8 py-5 transition-colors duration-300 focus:outline-none 
                  ${activeIndex === idx ? "bg-amber-400 text-yellow-800" : "bg-zinc-800 text-white hover:bg-zinc-700"}`}
                onClick={() => toggleIndex(idx)}
                aria-expanded={activeIndex === idx}
                aria-controls={`faq-panel-${idx}`}
                id={`faq-header-${idx}`}
              >
                <span className="text-lg md:text-xl font-semibold text-left">
                  {item.question}
                </span>
                <span className="ml-4 flex-shrink-0">
                  {activeIndex === idx ? (
                    <FaMinus className="text-xl" />
                  ) : (
                    <FaPlus className="text-xl" />
                  )}
                </span>
              </button>
              <div
                id={`faq-panel-${idx}`}
                role="region"
                aria-labelledby={`faq-header-${idx}`}
                className={`
                  bg-zinc-800 px-6 md:px-8 overflow-hidden transition-all duration-500 ease-in-out 
                  ${activeIndex === idx ? "max-h-screen pt-4 pb-6" : "max-h-0 pt-0 pb-0"}`}
              >
                <p className="text-zinc-400 text-base leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="mt-16 text-center">
            <p className="text-zinc-500 text-lg">
                Can't find your answer? <a href="#" className="text-amber-500 font-semibold hover:underline">Contact our support team</a>.
            </p>
        </div> */}
      </div>
    </section>
  );
}