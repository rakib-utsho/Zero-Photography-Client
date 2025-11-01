import AboutSection from "@/components/Home/AboutSection";
import GallerySection from "@/components/Home/GallerySection";
import HeroSection from "@/components/Home/HeroSection";
import ServicesSection from "@/components/Home/ServiceSection";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
    </div>
  );
};

export default HomePage;
