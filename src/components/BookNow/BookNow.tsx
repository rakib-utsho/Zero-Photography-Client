"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Calendar,
  Clock,
  Camera,
} from "lucide-react";

export default function BookNow() {
  return (
    <div className="min-h-screen bg-linear-to-b from-[#0f0f0f] to-[#1e1e1e] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-serif text-secondary text-5xl md:text-6xl font-bold mb-6">
            Book Your{" "}
            <span className="bg-third bg-clip-text text-transparent">
              Session
            </span>
          </h1>
          <p className="text-[#f5f5f5]/80 font-mono text-lg max-w-3xl mx-auto leading-relaxed">
            Ready to capture your special moments? Get in touch to schedule your
            perfect photography session
          </p>
        </motion.div>

        {/* Booking Methods */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="font-serif text-3xl font-bold text-[#f5f5f5] text-center mb-12">
            How to Book Your Session
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Phone,
                title: "Call to Book",
                description: "Speak directly with our team",
                details: "Discuss your requirements and preferred time slot",
                action: "+880 1XXX-XXXXXX",
                color: "from-third to-[#d4a300]",
              },
              {
                icon: MessageCircle,
                title: "WhatsApp",
                description: "Instant messaging booking",
                details: "Quick responses and easy scheduling",
                action: "Start Chat on WhatsApp",
                color: "from-[#25D366] to-[#128C7E]",
              },
              {
                icon: MapPin,
                title: "Visit Office",
                description: "In-person consultation",
                details: "Meet us and see our portfolio",
                action: "Mirpur, Dhaka, Bangladesh",
                color: "from-third to-[#d4a300]",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#1e1e1e] rounded-2xl p-8 shadow-lg border border-[#2a2a2a] hover:border-third transition-all duration-300 hover:transform hover:scale-105 group font-mono"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-linear-to-br ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-semibold text-2xl text-[#f5f5f5] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#f5f5f5] font-medium mb-2">
                  {item.description}
                </p>
                <p className="text-[#f5f5f5]/70 text-sm mb-4">{item.details}</p>
                <div className="mt-4 p-3 bg-[#0f0f0f] rounded-lg border border-[#2a2a2a]">
                  <p className="text-third font-mono font-semibold text-center">
                    {item.action}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div className="bg-badgeColor rounded-2xl p-8 shadow-lg border border-[#2a2a2a] font-mono">
              <h3 className="font-playfair text-2xl font-bold text-[#f5f5f5] mb-6">
                Get In Touch
              </h3>
              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    title: "Office Phone",
                    content: "+880 1XXX-XXXXXX",
                    subtext: "Available during business hours",
                  },
                  {
                    icon: Mail,
                    title: "Email Us",
                    content: "info@zerophotography.com",
                    subtext: "We'll respond within 24 hours",
                  },
                  {
                    icon: MapPin,
                    title: "Studio Location",
                    content: "Mirpur, Dhaka, Bangladesh",
                    subtext: "Visit us for personal consultation",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start space-x-4 p-4 rounded-xl bg-primary border border-[#2a2a2a] hover:border-third transition-colors"
                  >
                    <div className="bg-[#E6B800] w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#f5f5f5] text-lg">
                        {item.title}
                      </h4>
                      <p className="text-[#f5f5f5] font-medium">
                        {item.content}
                      </p>
                      <p className="text-[#f5f5f5]/60 text-sm mt-1">
                        {item.subtext}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Hours - Updated for Friday Events */}
            <div className="bg-[#0f0f0f] rounded-2xl p-8 shadow-lg border border-[#1e1e1e] font-mono">
              <div className="flex items-center mb-6">
                <Clock className="w-6 h-6 text-[#E6B800] mr-3" />
                <h3 className="font-playfair text-2xl font-bold text-[#f5f5f5]">
                  Availability
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-[#2a2a2a]">
                  <div>
                    <span className="text-[#f5f5f5] block">
                      Saturday - Thursday
                    </span>
                    <span className="text-[#f5f5f5]/60 text-sm">
                      Studio Hours & Events
                    </span>
                  </div>
                  <span className="font-semibold text-[#E6B800] bg-[#1e1e1e] px-3 py-1 rounded-full">
                    9:00 AM - 8:00 PM
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 bg-linear-to-r from-[#1e1e1e] to-[#2a2a2a] rounded-lg px-4 border border-[#E6B800]/30">
                  <div>
                    <span className="text-[#f5f5f5] block">Friday</span>
                    <span className="text-[#E6B800] text-sm font-medium">
                      Special Event Bookings Only
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="font-semibold text-[#E6B800] block">
                      Event Slots
                    </span>
                    <span className="text-[#f5f5f5]/60 text-sm">
                      By Appointment
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-4 bg-[#1e1e1e] rounded-lg border border-[#E6B800]/20">
                <div className="flex items-start space-x-3">
                  <Camera className="w-5 h-5 text-[#E6B800] mt-0.5 shrink-0" />
                  <p className="text-[#f5f5f5]/80 text-sm">
                    <span className="text-[#E6B800] font-semibold">Note:</span>{" "}
                    While our office is closed on Fridays, we still accept event
                    bookings and photography sessions by special appointment.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Map & Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 font-mono"
          >
            {/* Quick Booking Action */}
            <div className="bg-linear-to-br from-[#1e1e1e] to-[#0f0f0f] rounded-2xl p-8 shadow-lg border border-[#2a2a2a]">
              <div className="flex items-center mb-6">
                <Calendar className="w-6 h-6 text-[#E6B800] mr-3" />
                <h3 className="font-playfair text-2xl font-bold text-[#f5f5f5]">
                  Quick Booking
                </h3>
              </div>
              <p className="text-[#f5f5f5]/80 mb-6 leading-relaxed">
                Contact us via phone or WhatsApp to book your session. We&#39;re
                available for events
                <span className="text-[#E6B800] font-semibold">
                  {" "}
                  every day of the week
                </span>
                , including Fridays for special event bookings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+8801XXXXXXXXX"
                  className="flex-1 bg-[#E6B800] hover:bg-[#d4a300] text-[#0f0f0f] px-6 py-4 rounded-xl font-semibold text-center transition-all hover:scale-105 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
                <a
                  href="https://wa.me/8801XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-4 rounded-xl font-semibold text-center transition-all hover:scale-105 flex items-center justify-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Friday Special Notice */}
            <div className="bg-linear-to-br from-[#1e1e1e] to-[#0f0f0f] rounded-2xl p-8 shadow-lg border border-[#E6B800]/30">
              <div className="flex items-center mb-4">
                <div className="bg-[#E6B800] w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Calendar className="w-6 h-6 text-[#0f0f0f]" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-[#f5f5f5]">
                  Friday Event Bookings
                </h3>
              </div>
              <div className="space-y-3">
                <p className="text-[#f5f5f5] font-medium">
                  We&#39;re available for events on Fridays!
                </p>
                <ul className="text-[#f5f5f5]/80 space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-[#E6B800] mr-2">•</span>
                    Special event photography sessions
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E6B800] mr-2">•</span>
                    Wedding and ceremony coverage
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E6B800] mr-2">•</span>
                    Corporate events and functions
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E6B800] mr-2">•</span>
                    Outdoor and location shoots
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-[#0f0f0f] rounded-lg border border-[#E6B800]/20">
                  <p className="text-[#E6B800] text-sm font-semibold text-center">
                    Contact us to discuss Friday event availability
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-[#1e1e1e] rounded-2xl overflow-hidden shadow-lg border border-[#2a2a2a]">
              <div className="p-6 border-b border-[#2a2a2a]">
                <h3 className="font-playfair text-xl font-bold text-[#f5f5f5] flex items-center">
                  <MapPin className="w-5 h-5 text-[#E6B800] mr-2" />
                  Visit Our Studio
                </h3>
                <p className="text-[#f5f5f5]/70 mt-2">
                  Come meet us in person to discuss your photography needs
                  (Saturday-Thursday)
                </p>
              </div>
              <div className="h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.264404952953!2d90.35280!3d23.8223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0c1f3b7d5d5%3A0x2b3b9b6e6e6e6e6e!2sMirpur%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    filter: "invert(90%) hue-rotate(180deg)",
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
