// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import { Home } from "./pages/Home";
import Footer from "./components/Footer";
import AboutPage from "./pages/About";
import ToursPage from "./pages/Tours";
import GalleryPage from "./pages/Gallery";
import ContactPage from "./pages/Contact";
import BookingPage from "./pages/Book";
import TourDetails from "./components/TourDetail";
import ScrollToTop from "./components/ScrollToTop";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import TourDetailsPage from "./components/home/TpackDetails";
import PackageDetailsPage from "./components/home/TpdDetails";
import DestinationPage from "./pages/Destination";
import TourDetails2 from "./components/PTPackage";
import PTPackage from "./components/PTPackage";
import PTPDetails from "./components/PTPDetails";
import TourPackage from "./components/TourPackage";
// import Td2 from "./components/Td2";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Navbar />
        <main className="flex-1">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/tours" element={<ToursPage />} />
              <Route path="/destination" element={<DestinationPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/booking" element={<BookingPage />} />
              <Route path="/tour-package/:tourId" element={<TourPackage  />} />
              <Route path="/tour-details/:tourId/:packageId" element={<TourDetails />} />
              <Route path="/popular-tours/:category/:tourId" element={<PTPackage />} />
              <Route path="/popular-tours/:category/:tourId/:packageId" element={<PTPDetails />} />
              {/* <Route path="/tour/:id" element={<Td2 />} /> */}
              <Route path="/packages/:tourId" element={<TourDetailsPage />} />
              <Route path="/package/:packageId" element={<PackageDetailsPage />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              {/* <Route path="/services/:serviceId" element={<ServiceDetailPage />} /> */}
              {/* <Route path="/terms" element={<TermsAndConditions />} />  */}
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
