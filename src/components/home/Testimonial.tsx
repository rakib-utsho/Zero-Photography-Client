/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function TestimonialSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Anika & Rafiq",
      role: "Wedding Client",
      image:
        "https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=400",
      text: "Zero Photography captured our wedding beautifully. Every moment was perfect, and the team was so professional. We couldn't have asked for better memories!",
    },
    {
      name: "Fahim Ahmed",
      role: "Corporate Client",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      text: "Outstanding service for our annual corporate event. The photos were delivered on time and exceeded our expectations. Highly recommended!",
    },
    {
      name: "Nusrat Jahan",
      role: "Portrait Session",
      image:
        "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400",
      text: "My portfolio shoot was amazing! The team made me feel comfortable and brought out my best angles. The results were stunning.",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section ref={ref} className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-secondary mb-4">
            Client{" "}
            <span className="bg-third bg-clip-text text-transparent">
              Stories
            </span>
          </h2>
          <p className="text-secondary/60 font-mono text-lg">What our clients say about us</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative bg-badgeColor rounded-2xl shadow-xl p-8 md:p-12"
        >
          <Quote className="w-12 h-12 text-third/40 absolute top-8 left-8" />

          <div className="relative z-10 text-center">
            <div className="mb-8">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-20 h-20 rounded-full object-cover mx-auto mb-4 ring-4 ring-third"
              />
              <h4 className="font-semibold font-serif text-xl text-secondary">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-secondary/70 font-mono text-sm">
                {testimonials[currentIndex].role}
              </p>
            </div>

            <p className="text-secondary/50 font-mono text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              &#34;{testimonials[currentIndex].text}&#34;
            </p>

            <div className="flex justify-center items-center space-x-4">
              <button
                onClick={prevTestimonial}
                className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "bg-yellow-500 w-8"
                        : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
