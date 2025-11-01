"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import heroBackground from "@/assets/hero/hero-background.jpg";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

const HeroSection = () => {
  const pathname = usePathname();
  const router = useRouter();
  const portfolioClick = () => {
    router.push("/gallery");
  };

  const handleContactClick = () => {
    if (pathname === "/") {
      // If we're on home page, scroll to contact section
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      // If we're on another page, navigate to home with hash
      router.push("/#contact");
    }
  };
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={heroBackground}
          alt="Photography Studio"
          className="w-full h-full object-cover"
          priority
          fill
          sizes="100vw"
          quality={90}
          placeholder="blur"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="font-serif text-secondary text-5xl md:text-8xl font-bold mb-10">
            Capturing Stories,
            <br />
            <span className="text-third">Not Just Photos</span>
          </h1>
          <p className="text-lg font-mono md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-quoteColor">
            Professional photography and cinematography services in Dhaka.
            Creating timeless memories since 2019.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-third text-secondary hover:bg-third hover:scale-105 transition-transform group cursor-pointer font-serif"
              onClick={portfolioClick}
            >
              View Portfolio
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-third text-third hover:bg-third hover:text-secondary font-serif cursor-pointer"
              onClick={handleContactClick}
            >
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-third rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-third rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
