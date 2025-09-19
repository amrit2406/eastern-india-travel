import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaComments, FaPaperPlane, FaClock, FaWhatsapp } from "react-icons/fa";

export default function ContactUsSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState({ name: false, email: false, message: false });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFocus = (field) => {
    setFocused({ ...focused, [field]: true });
  };

  const handleBlur = (field) => {
    if (!formData[field]) setFocused({ ...focused, [field]: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="relative py-18 px-6 sm:px-10 lg:px-20 bg-white overflow-hidden">
      {/* Decorative Background Elements */}
      {/* <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-200 rounded-full filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-yellow-300 rounded-full filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div> */}
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          {/* <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-yellow-100 mb-6">
            <FaComments className="text-4xl text-yellow-700" />
          </div> */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-800 mb-4 tracking-tight leading-tight">
            Get in <span className="text-yellow-600">Touch</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-yellow-600 to-yellow-700 mx-auto mt-6 rounded-full"></div>
          <p className="mt-6 text-lg text-yellow-900 font-light max-w-2xl mx-auto">
            Our team is ready to assist you. Whether you have a question or a custom tour request, we'd love to hear from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Contact Info */}
          <div className="flex flex-col justify-center space-y-10 order-2 lg:order-1">
            <div className="space-y-6 md:space-y-8">
              <h3 className="text-3xl font-bold text-yellow-800">
                Connect with our Travel Experts
              </h3>
              <p className="text-yellow-900 leading-relaxed text-lg">
                We're not just a booking platform; we're a team of passionate travelers dedicated to making your dream journey a reality.
              </p>
              
              <div className="space-y-6 mt-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-yellow-100 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                      <FaMapMarkerAlt className="text-2xl text-yellow-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-xl text-yellow-800">Our Office</h4>
                      <p className="text-yellow-700 mt-1">
                        Plot no - 1934/6866, Kishan Nagar, Satya Vihar, Rasulgarh, Bhubaneswar, Odisha 751010
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-yellow-100 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                      <FaPhoneAlt className="text-2xl text-yellow-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-xl text-yellow-800">Call Us</h4>
                      <a href="tel:+919337124745" className="text-yellow-700 mt-1 hover:text-yellow-600 transition-colors block">
                        +91 9337124745
                      </a>
                      <a href="tel:+918456840041" className="text-yellow-700 mt-1 hover:text-yellow-600 transition-colors block">
                        +91 8456840041
                      </a>
                      <div className="flex items-center text-yellow-600 text-sm mt-1">
                        <FaClock className="mr-1" />
                        <span>Mon-Sat: 9am-7pm</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-yellow-100 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                      <FaEnvelope className="text-2xl text-yellow-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-xl text-yellow-800">Email Us</h4>
                      <a href="mailto:info@easternindiatravels.com" className="text-yellow-700 mt-1 hover:text-yellow-600 transition-colors block">
                        info@easternindiatravels.com
                      </a>
                      <div className="text-yellow-600 text-sm mt-1">
                        Response within 24 hours
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-yellow-100 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                      <FaWhatsapp className="text-2xl text-yellow-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-xl text-yellow-800">WhatsApp</h4>
                      <a href="https://wa.me/919337124745" className="text-yellow-700 mt-1 hover:text-yellow-600 transition-colors block">
                        +91 9337124745
                      </a>
                      <div className="text-yellow-600 text-sm mt-1">
                        Available 24/7
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right: Contact Form */}
          <div className="relative p-8 md:p-12 lg:p-16 rounded-3xl shadow-xl order-1 lg:order-2 bg-gradient-to-br from-yellow-50 to-yellow-100 border border-yellow-200 transform transition-all duration-500 hover:-translate-y-2">
            <div className="absolute inset-0 bg-contain bg-right-bottom bg-no-repeat opacity-5 pointer-events-none" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542469811-13511877c442?q=80&w=2670&auto=format&fit=crop')" }}></div>
            
            <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-8">
              <h3 className="text-3xl md:text-4xl font-extrabold text-yellow-800 leading-tight">
                Send Us a Message
              </h3>
              <p className="text-yellow-900">
                Fill out the form below and one of our experts will get back to you within 24 hours.
              </p>
              
              {submitted && (
                <div className="bg-green-100 text-green-800 p-4 rounded-lg text-center font-semibold flex items-center justify-center gap-2 border border-green-200">
                  <FaPaperPlane />
                  <span>Thank you! Your message has been received.</span>
                </div>
              )}
              
              <div className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    placeholder=" "
                    required
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus('name')}
                    onBlur={() => handleBlur('name')}
                    className="w-full px-6 pt-6 pb-2 rounded-full border border-yellow-300 focus:border-yellow-600 focus:ring-2 focus:ring-yellow-400 outline-none transition-all duration-300 bg-white shadow-sm"
                  />
                  <label className={`absolute left-6 transition-all duration-300 ${focused.name || formData.name ? 'text-yellow-600 text-xs top-2' : 'text-yellow-700 top-4'}`}>
                    Your Name
                  </label>
                </div>
                
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    placeholder=" "
                    required
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={() => handleBlur('email')}
                    className="w-full px-6 pt-6 pb-2 rounded-full border border-yellow-300 focus:border-yellow-600 focus:ring-2 focus:ring-yellow-400 outline-none transition-all duration-300 bg-white shadow-sm"
                  />
                  <label className={`absolute left-6 transition-all duration-300 ${focused.email || formData.email ? 'text-yellow-600 text-xs top-2' : 'text-yellow-700 top-4'}`}>
                    Your Email
                  </label>
                </div>
                
                <div className="relative">
                  <textarea
                    name="message"
                    placeholder=" "
                    required
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={() => handleBlur('message')}
                    className="w-full px-6 pt-6 pb-2 rounded-3xl border border-yellow-300 focus:border-yellow-600 focus:ring-2 focus:ring-yellow-400 outline-none transition-all duration-300 resize-none bg-white shadow-sm"
                  />
                  <label className={`absolute left-6 transition-all duration-300 ${focused.message || formData.message ? 'text-yellow-600 text-xs top-2' : 'text-yellow-700 top-4'}`}>
                    Tell us about your trip idea or question...
                  </label>
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-600 to-yellow-800 text-white font-bold py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <span>Send Message</span>
                <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}