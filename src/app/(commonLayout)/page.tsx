import AboutSection from "@/components/Home/AboutSection";
import GallerySection from "@/components/Home/GallerySection";
import HeroSection from "@/components/Home/HeroSection";
import PricingSection from "@/components/Home/PriceSection";
import ServicesSection from "@/components/Home/ServiceSection";
import TestimonialSection from "@/components/Home/Testimonial";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <PricingSection />
      <TestimonialSection/>
    </div>
  );
};

export default HomePage;
