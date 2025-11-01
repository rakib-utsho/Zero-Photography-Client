"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message Sent!", {
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+880 170 000 0000",
      href: "tel:+8801700000000",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@zerophotography.com",
      href: "mailto:info@zerophotography.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Mirpur, Dhaka, Bangladesh",
      href: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-primary w-full overflow-hidden" id="contact-section">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-dark w-full">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center w-full"
          >
            <h1 className="font-serif text-secondary text-4xl md:text-6xl font-bold mb-6">
              Contact With{" "}
              <span className="bg-third bg-clip-text text-transparent">Us</span>
            </h1>
            <p className="text-muted-foreground text-secondary font-mono text-lg max-w-2xl mx-auto">
              Let&lsquo;s discuss your photography needs. We&lsquo;re here to
              help capture your special moments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={ref} className="py-10 bg-background w-full">
        <div className="container mx-auto px-4 w-full">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto w-full">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 w-full"
            >
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start space-x-4 p-4 rounded-lg bg-badgeColor border border-secondary/20 hover:border-third transition-colors group w-full"
                >
                  <div className="w-12 h-12 rounded-full bg-third/20 flex items-center justify-center shrink-0 group-hover:bg-third/40 transition-colors">
                    <info.icon className="w-6 h-6 text-third" />
                  </div>
                  <div className="font-mono flex-1 min-w-0">
                    <h3 className="font-semibold text-secondary text-foreground mb-1 truncate">
                      {info.label}
                    </h3>
                    <p className="text-secondary/60 text-muted-foreground break-words">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="pt-6 w-full"
              >
                <a
                  href="https://wa.me/8801570220316"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button className="w-full bg-third hover:shadow-glow hover:bg-third cursor-pointer text-secondary font-bold font-mono">
                    <Phone className="mr-2" size={20} />
                    WhatsApp Us
                  </Button>
                </a>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="space-y-6 font-mono w-full"
            >
              <div className="w-full">
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full bg-badgeColor border-secondary/60 hover:border-third"
                />
              </div>
              <div className="w-full">
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full bg-badgeColor border-secondary/60 hover:border-third"
                />
              </div>
              <div className="w-full">
                <Input
                  type="tel"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                  className="w-full bg-badgeColor border-secondary/60 hover:border-third"
                />
              </div>
              <div className="w-full">
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={5}
                  className="w-full bg-badgeColor border-secondary/60 hover:border-third resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-third hover:shadow-glow hover:bg-third cursor-pointer text-secondary font-bold font-mono"
              >
                <Send className="mr-2" size={20} />
                Send Message
              </Button>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;