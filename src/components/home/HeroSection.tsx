"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import heroBackground from "@/assets/hero/hero-background.jpg";
import { usePathname, useRouter } from "next/navigation";

const HeroSection = () => {
  const pathname = usePathname();
  const router = useRouter();
  
  const portfolioClick = () => {
    router.push("/gallery");
  };

  const handleContactClick = () => {
    if (pathname === "/") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      router.push("/#contact");
    }
  };

  return (
    <section className="relative min-h-screen h-dvh max-h-[100dvh] flex items-center justify-center overflow-hidden">
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
          style={{
            objectFit: 'cover',
            objectPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full"
        >
          <h1 className="font-serif text-secondary text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-10 px-4">
            Capturing Stories,
            <br />
            <span className="text-third">Not Just Photos</span>
          </h1>
          <p className="text-base font-mono sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 md:mb-8 text-quoteColor px-4">
            Professional photography and cinematography services in Dhaka.
            Creating timeless memories since 2019.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <Button
              size="lg"
              className="bg-third text-secondary hover:bg-third hover:scale-105 transition-transform group cursor-pointer font-serif text-sm sm:text-base"
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
              className="border-third text-third hover:bg-third hover:text-secondary font-serif cursor-pointer text-sm sm:text-base"
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
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-third rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-third rounded-full mt-1 sm:mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;