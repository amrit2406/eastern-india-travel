import React, { useState } from "react";
import {
  FaUser,
  FaCalendarAlt,
  FaUserFriends,
  FaPhoneAlt,
  FaEnvelope,
  FaInfoCircle,
  FaPaperPlane,
  FaCheckCircle,
  FaWhatsapp,
} from "react-icons/fa";

export default function BookingPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    tour: "",
    start: "",
    travelers: 1,
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState({
    name: false,
    phone: false,
    email: false,
    tour: false,
    start: false,
    travelers: false,
    message: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFocus = (field) => {
    setFocused({ ...focused, [field]: true });
  };

  const handleBlur = (field) => {
    if (!form[field]) {
      setFocused({ ...focused, [field]: false });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({
      name: "",
      phone: "",
      email: "",
      tour: "",
      start: "",
      travelers: 1,
      message: "",
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <main className="bg-white min-h-screen">
      {/* Booking Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-yellow-300 via-yellow-100 to-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-200 rounded-full filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-yellow-300 rounded-full filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-block bg-yellow-700 text-yellow-100 text-sm font-medium px-4 py-1 rounded-full mb-6">
            BOOK YOUR JOURNEY
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-800 mb-6 tracking-tight leading-tight">
            Book Your{" "}
            <span className="text-yellow-600">Eastern India Adventure</span>
          </h1>
          <p className="text-lg md:text-xl text-yellow-900 font-light max-w-2xl mx-auto leading-relaxed">
            Easy, secure, and personalized tour booking for your next journey in
            Eastern India.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <div className="h-1 w-12 bg-yellow-500 rounded-full"></div>
            <div className="h-1 w-6 bg-yellow-300 rounded-full"></div>
            <div className="h-1 w-8 bg-yellow-400 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl shadow-xl p-8 md:p-10 transform transition-all duration-300 hover:-translate-y-2">
              <h2 className="text-3xl font-bold text-yellow-800 mb-2">
                Book Your Adventure
              </h2>
              <p className="text-yellow-700 mb-8">
                Fill in the details below to start your journey
              </p>

              {submitted && (
                <div className="bg-green-100 text-green-800 text-center font-semibold p-4 rounded-lg mb-6 flex items-center justify-center gap-2">
                  <FaCheckCircle />
                  <span>
                    Thank you for booking with us! We'll contact you soon.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name + Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="flex flex-col">
                    <label className="text-sm font-medium text-yellow-800 mb-2 flex items-center gap-1">
                      <FaUser /> Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-3 rounded-lg border border-yellow-300 focus:border-yellow-600 focus:ring-2 focus:ring-yellow-400 outline-none bg-white text-sm sm:text-base"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-sm font-medium text-yellow-800 mb-2 flex items-center gap-1">
                      <FaPhoneAlt /> Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-3 rounded-lg border border-yellow-300 focus:border-yellow-600 focus:ring-2 focus:ring-yellow-400 outline-none bg-white text-sm sm:text-base"
                    />
                  </div>
                </div>

                {/* Email + Tour */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="flex flex-col">
                    <label className="text-sm font-medium text-yellow-800 mb-2 flex items-center gap-1">
                      <FaEnvelope /> Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-3 rounded-lg border border-yellow-300 focus:border-yellow-600 focus:ring-2 focus:ring-yellow-400 outline-none bg-white text-sm sm:text-base"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-sm font-medium text-yellow-800 mb-2">
                      Tour / Package
                    </label>
                    <input
                      type="text"
                      name="tour"
                      required
                      value={form.tour}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-3 rounded-lg border border-yellow-300 focus:border-yellow-600 focus:ring-2 focus:ring-yellow-400 outline-none bg-white text-sm sm:text-base"
                    />
                  </div>
                </div>

                {/* Start Date + Travelers */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="flex flex-col">
                    <label className="text-sm font-medium text-yellow-800 mb-2 flex items-center gap-1">
                      <FaCalendarAlt /> Start Date
                    </label>
                    <input
                      type="date"
                      name="start"
                      required
                      value={form.start}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-3 rounded-lg border border-yellow-300 focus:border-yellow-600 focus:ring-2 focus:ring-yellow-400 outline-none bg-white text-sm sm:text-base"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-sm font-medium text-yellow-800 mb-2 flex items-center gap-1">
                      <FaUserFriends /> Travelers
                    </label>
                    <input
                      type="number"
                      min="1"
                      name="travelers"
                      required
                      value={form.travelers}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-3 rounded-lg border border-yellow-300 focus:border-yellow-600 focus:ring-2 focus:ring-yellow-400 outline-none bg-white text-sm sm:text-base"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-yellow-800 mb-2">
                    Additional Details
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-3 rounded-lg border border-yellow-300 focus:border-yellow-600 focus:ring-2 focus:ring-yellow-400 outline-none resize-none bg-white text-sm sm:text-base"
                    rows="4"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-600 to-yellow-800 text-white font-semibold py-3 sm:py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <span>Confirm Booking</span>
                  <FaPaperPlane />
                </button>
              </form>
            </div>
          </div>

          {/* Booking Assistance/Info */}
          <div className="col-span-1 lg:col-span-1">
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl shadow-xl p-6 sm:p-8 h-full transform transition-all duration-300 hover:-translate-y-2">
              {/* Header */}
              <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-yellow-600 flex items-center justify-center mb-4">
                  <FaInfoCircle className="text-white text-xl sm:text-2xl" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-yellow-800">
                  Need Assistance?
                </h3>
                <p className="text-yellow-700 mt-2 text-sm sm:text-base">
                  Our team is here to help
                </p>
              </div>

              {/* Contact Options */}
              <div className="space-y-5 sm:space-y-6">
                {/* Call Us */}
                <div className="bg-white rounded-xl p-4 sm:p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-2 sm:mb-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                      <FaPhoneAlt className="text-yellow-600 text-sm sm:text-base" />
                    </div>
                    <h4 className="font-bold text-yellow-800 text-sm sm:text-base">
                      Call Us
                    </h4>
                  </div>
                  <p className="text-yellow-900 font-medium text-sm sm:text-base">
                    +91 9337124745
                  </p>
                  <p className="text-yellow-700 text-xs sm:text-sm mt-1">
                    Mon-Sat: 9am-7pm
                  </p>
                </div>

                {/* WhatsApp */}
                <div className="bg-white rounded-xl p-4 sm:p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-2 sm:mb-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                      <FaWhatsapp className="text-yellow-600 text-sm sm:text-base" />
                    </div>
                    <h4 className="font-bold text-yellow-800 text-sm sm:text-base">
                      WhatsApp
                    </h4>
                  </div>
                  <p className="text-yellow-900 font-medium text-sm sm:text-base">
                    +91 9337124745
                  </p>
                  <p className="text-yellow-700 text-xs sm:text-sm mt-1">
                    Available 24/7
                  </p>
                </div>

                {/* Email */}
                <div className="bg-white rounded-xl p-4 sm:p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-2 sm:mb-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                      <FaEnvelope className="text-yellow-600 text-sm sm:text-base" />
                    </div>
                    <h4 className="font-bold text-yellow-800 text-sm sm:text-base">
                      Email Us
                    </h4>
                  </div>
                  <p className="text-yellow-900 font-medium text-sm sm:text-base break-words">
                    bookings@easternindiatravels.com
                  </p>
                  <p className="text-yellow-700 text-xs sm:text-sm mt-1">
                    Response within 24 hours
                  </p>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-yellow-200">
                <h4 className="font-bold text-yellow-800 mb-3 text-sm sm:text-base">
                  Frequently Asked Questions
                </h4>
                <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                  <li className="flex items-start">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">
                      <FaCheckCircle className="text-white text-[10px] sm:text-xs" />
                    </div>
                    <span className="text-yellow-900">
                      Flexible payment & cancellation options
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">
                      <FaCheckCircle className="text-white text-[10px] sm:text-xs" />
                    </div>
                    <span className="text-yellow-900">
                      All bookings confirmed by email & phone
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">
                      <FaCheckCircle className="text-white text-[10px] sm:text-xs" />
                    </div>
                    <span className="text-yellow-900">
                      Support team helps with itinerary & travel docs
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
