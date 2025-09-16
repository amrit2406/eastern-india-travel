import AboutSection from "../components/home/AboutSec";
import ContactUsSection from "../components/home/Contact";
import FAQSection from "../components/home/Faq";
import Faq2 from "../components/home/Faq 2";
import GallerySection from "../components/home/GallerlySec";
import HeroSection from "../components/home/Hero";
import PopularTours from "../components/home/PopularTours";
import PopularTours2 from "../components/home/PopularTours2";
// import Pt from "../components/home/Pt2";
import TestimonialSection from "../components/home/Testi";
import Testi2 from "../components/home/Testi2";
import TourDestinations from "../components/home/TourDestinations";
import LogoSlider from "../components/home/TourLogo";
import ToursSection from "../components/home/Tours";
import TravelGuides from "../components/home/TravelGuides";
import WhyChooseUs from "../components/home/Why";


export const Home = () => {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <PopularTours />
      <PopularTours2 />
      {/* <Pt /> */}
      <ToursSection />
      <AboutSection />
      <WhyChooseUs />
      {/* <TourDestinations /> */}
      <TravelGuides />
      {/* <TestimonialSection /> */}
      <Testi2 />
      <GallerySection />
      {/* <FAQSection /> */}
      <Faq2 />
      <ContactUsSection />
      <LogoSlider />
    </main>
  );
};