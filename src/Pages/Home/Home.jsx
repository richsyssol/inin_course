import React from "react";
import HeroSection from "./HeroSection";
import OurServices from "./OurServices";
import Testimonials from "./Testimonial";
import FAQSection from "./FAQSection";
import AppleNotification from "./AppleNotification";
import BottomPopUp from "./BottomPopUp";
import BookSlider from "./BookSlider";
import MobileRepairCourse from "./MobileRepairCourse";
import MobileRepairBooksCarousel from "./MobileRepairBooksCarousel";

function Home() {
  return (
    <div>
      <HeroSection />
      <MobileRepairBooksCarousel />
      <OurServices />
      <Testimonials />
      <MobileRepairCourse />
      <FAQSection />
      <AppleNotification />
      <BottomPopUp />
    </div>
  );
}

export default Home;
