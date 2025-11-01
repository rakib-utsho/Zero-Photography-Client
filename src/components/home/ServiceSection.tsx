"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Briefcase, User, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Heart,
      title: "Wedding Photography",
      description:
        "Capture your special day with cinematic elegance and timeless romance.",
    },
    {
      icon: Briefcase,
      title: "Corporate Events",
      description:
        "Professional coverage for conferences, seminars, and business gatherings.",
    },
    {
      icon: User,
      title: "Portrait Sessions",
      description:
        "Individual and model photoshoots with creative direction and styling.",
    },
    {
      icon: Sparkles,
      title: "Custom Packages",
      description:
        "Tailored photography solutions designed specifically for your needs.",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-secondary text-4xl md:text-5xl font-bold mb-4">
            Our{" "}
            <span className="bg-gradient-gold text-third bg-clip-text">
              Services
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-mono text-secondary">
            From weddings to corporate events, we offer comprehensive
            photography services tailored to your needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <Card className="bg-badgeColor/60 border border-badgeColor hover:border-third transition-all duration-300 group hover:shadow-glow h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-third/10 flex items-center justify-center group-hover:bg-third/20 transition-colors">
                    <service.icon className="w-8 h-8 text-third" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-secondary font-mono">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground text-secondary/60 font-mono">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
