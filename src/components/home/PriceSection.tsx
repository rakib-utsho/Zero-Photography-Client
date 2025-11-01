"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const packages = [
    {
      name: "Basic",
      price: "৳25,000",
      features: [
        "4 Hours Coverage",
        "200 Edited Photos",
        "Online Gallery",
        "Basic Retouching",
      ],
    },
    {
      name: "Premium",
      price: "৳45,000",
      features: [
        "8 Hours Coverage",
        "400 Edited Photos",
        "Online Gallery",
        "Advanced Retouching",
        "Printed Album (20 Pages)",
        "Video Highlights",
      ],
      featured: true,
    },
    {
      name: "Elite",
      price: "৳75,000",
      features: [
        "Full Day Coverage",
        "Unlimited Photos",
        "Premium Online Gallery",
        "Professional Retouching",
        "Luxury Album (40 Pages)",
        "Cinematic Video",
        "Drone Coverage",
      ],
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
            <span className="bg-third bg-clip-text text-transparent">
              Packages
            </span>
          </h2>
          <p className="text-muted-foreground text-secondary/60 max-w-2xl mx-auto font-mono">
            Choose the perfect package for your needs. All packages include
            professional editing and delivery.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <Card
                className={`relative h-full bg-badgeColor ${
                  pkg.featured
                    ? "border-third shadow-2xl"
                    : "border border-secondary/30 hover:border-third/70"
                } transition-all duration-300`}
              >
                {pkg.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-third text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold font-mono">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-8 pt-8">
                  <h3 className="font-serif text-secondary text-2xl font-bold mb-2">
                    {pkg.name}
                  </h3>
                  <div className="font-serif text-third text-4xl font-bold">
                    {pkg.price}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="w-5 h-5 text-third mr-2 shrink-0 mt-0.5" />
                        <span className="text-sm text-secondary">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full cursor-pointer ${
                      pkg.featured
                        ? "bg-third hover:shadow hover:bg-third/60"
                        : "bg-secondary hover:bg-secondary/80"
                    }`}
                  >
                    Choose Package
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center text-secondary/70 mt-8"
        >
          Need something different?{" "}
          <span className="text-third font-semibold">
            Contact us for custom packages
          </span>
        </motion.p>
      </div>
    </section>
  );
};

export default PricingSection;
