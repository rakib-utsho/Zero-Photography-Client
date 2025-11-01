"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Award, Camera } from "lucide-react";
import Image from "next/image";
import aboutTeam from "@/assets/images/about-team.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Users, label: "Team Members", value: "15+" },
    { icon: Award, label: "Years Experience", value: "5+" },
    { icon: Camera, label: "Projects Completed", value: "500+" },
  ];

  return (
    <section ref={ref} className="py-20 bg-badgeColor">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-elegant">
              <Image
                src={aboutTeam}
                alt="Zero Photography Team"
                className="w-full h-auto"
                placeholder="blur"
                quality={90}
              />
              <div className="absolute inset-0 bg-linear-to-t from-badgeColor/80 to-transparent" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-serif text-secondary text-4xl md:text-5xl font-bold mb-6">
              About{" "}
              <span className="bg-third bg-clip-text text-transparent">
                Zero Photography
              </span>
            </h2>
            <p className="text-secondary mb-6 font-mono text-justify">
              Founded in 2019, Zero Photography has been capturing life&#39;s
              most precious moments across Dhaka. Our team of 15 dedicated
              professionals specializes in wedding photography, corporate
              events, and individual photo-shoots.
            </p>
            <p className="text-secondary mb-8 font-mono text-justify">
              We believe in telling stories through our lens, creating timeless
              memories that you&#39;ll cherish forever. Our commitment to
              excellence and artistic vision sets us apart in the industry.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-2">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-8 h-8 text-third  mx-auto mb-2" />
                  <div className="font-display text-secondary text-4xl font-bold text-foreground font-serif mb-2">
                    {stat.value}
                  </div>
                  <div className="text-md font-mono text-secondary">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
