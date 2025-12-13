import AboutSection from "@/components/home/AboutSection";
import ContactSection from "@/components/home/ContactSection";
import GallerySection from "@/components/home/GallerySection";
import HeroSection from "@/components/home/HeroSection";
import PricingSection from "@/components/home/PriceSection";
import ServicesSection from "@/components/home/ServiceSection";
import TestimonialSection from "@/components/home/Testimonial";
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
      <ContactSection/>
    </div>
  );
};

export default HomePage;
