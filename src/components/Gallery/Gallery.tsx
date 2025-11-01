"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Replace these with your actual image imports or use static imports
import weddingImg from "@/assets/images/gallery-wedding.jpg";
import corporateImg from "@/assets/images/gallery-corporate.jpg";
import portraitImg from "@/assets/images/gallery-portrait.jpg";

const GalleryComponent = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Wedding", "Corporate", "Portrait"];

  const galleryItems = [
    { src: weddingImg, category: "Wedding", title: "Wedding Ceremony" },
    { src: corporateImg, category: "Corporate", title: "Corporate Event" },
    { src: portraitImg, category: "Portrait", title: "Portrait Session" },
    { src: weddingImg, category: "Wedding", title: "Reception Moments" },
    { src: corporateImg, category: "Corporate", title: "Business Conference" },
    { src: portraitImg, category: "Portrait", title: "Fashion Portrait" },
    { src: weddingImg, category: "Wedding", title: "Couple Portraits" },
    { src: corporateImg, category: "Corporate", title: "Team Building" },
    { src: portraitImg, category: "Portrait", title: "Studio Session" },
  ];

  const filteredItems =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-serif text-secondary text-5xl md:text-6xl font-bold mb-6">
              Our{" "}
              <span className="bg-third bg-clip-text text-transparent">
                Gallery
              </span>
            </h1>
            <p className="text-muted-foreground text-secondary text-lg max-w-2xl mx-auto font-mono">
              Explore our portfolio of captured moments and visual stories
              across various events and occasions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b border-third/60 top-[73px] z-40 backdrop-blur-md bg-badgeColor/70 rounded-t-xl max-w-3xl mx-auto font-mono">
        <div className="px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className={
                  activeFilter === filter
                    ? "bg-third hover:bg-third"
                    : " bg-secondary hover:bg-third"
                }
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={`${item.title}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-lg aspect-4/5 cursor-pointer"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-secondary font-semibold text-sm">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-third stroke-2 stroke-black text-xl font-bold text-foreground mt-1">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryComponent;
