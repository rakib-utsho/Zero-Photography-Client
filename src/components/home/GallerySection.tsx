"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import weddingImg from "@/assets/images/gallery-wedding.jpg";
import corporateImg from "@/assets/images/gallery-corporate.jpg";
import portraitImg from "@/assets/images/gallery-portrait.jpg";

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const images = [
    { src: weddingImg, alt: "Wedding Photography", category: "Wedding" },
    { src: corporateImg, alt: "Corporate Event", category: "Corporate" },
    { src: portraitImg, alt: "Portrait Photography", category: "Portrait" },
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
          <h2 className="font-serif bg-secondary bg-clip-text text-transparent text-4xl md:text-5xl font-bold mb-4">
            Our{" "}
            <span className="bg-third bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="text-muted-foreground text-secondary/80 max-w-2xl mx-auto">
            Explore our collection of captured moments and visual stories.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {images.map((image, index) => (
            <motion.div
              key={image.alt}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group relative overflow-hidden rounded-lg aspect-3/4 cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                placeholder="blur"
                quality={90}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6">
                  <span className="text-primary font-semibold text-sm">
                    {image.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <Link href="/gallery">
            <Button
              size="lg"
              variant="outline"
              className="border-third/80 text-third hover:bg-third/80 hover:text-secondary cursor-pointer"
            >
              View Full Gallery
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
