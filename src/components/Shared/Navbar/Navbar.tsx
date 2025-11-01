/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    if (pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(`/#${sectionId}`);
    }
    setIsMobileMenuOpen(false);
  };

  const handleLinkClick = (link: any) => {
    if (link.onclick) {
      link.onclick();
    } else {
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Gallery", path: "/gallery" },
    { name: "Team", path: "/team" },
    {
      name: "Contact",
      path: "/#contact-section",
      onclick: () => scrollToSection("contact-section"),
    },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#121212] backdrop-blur-md shadow-elegant"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto py-4 px-4 w-full">
          <div className="flex items-center justify-between w-full">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-serif text-third text-2xl font-bold">
                Zero Photography
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) =>
                link.onclick ? (
                  <button
                    key={link.name}
                    onClick={link.onclick}
                    className={`text-lg font-serif font-medium transition-colors hover:text-third ${
                      pathname === link.path ? "text-third" : "text-secondary"
                    }`}
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={`text-lg font-serif font-medium transition-colors hover:text-third ${
                      pathname === link.path ? "text-third" : "text-secondary"
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              )}
              <Button
                variant="default"
                size="default"
                className="bg-third hover:shadow-glow transition-all font-serif font-semibold text-secondary cursor-pointer hover:bg-third/80"
                onClick={() => {
                  router.push("/book-now");
                }}
              >
                Book Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-secondary z-60 relative"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu - Full Screen from Left */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 left-0 bottom-0 w-[280px] bg-[#121212] backdrop-blur-md shadow-xl z-50 md:hidden overflow-hidden"
              style={{ maxWidth: 'calc(100vw - 50px)' }}
            >
              <div className="flex flex-col h-full w-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-[#1e1e1e] w-full">
                  <Link
                    href="/"
                    className="flex items-center space-x-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="font-serif text-xl font-bold text-third">
                      Zero Photography
                    </span>
                  </Link>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-third hover:bg-[#1e1e1e] rounded-lg transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 p-6 w-full overflow-y-auto">
                  <div className="flex flex-col space-y-6 w-full">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.path || link.name}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="w-full"
                      >
                        {link.onclick ? (
                          <button
                            onClick={() => handleLinkClick(link)}
                            className={`block text-lg font-serif text-secondary font-medium transition-all duration-200 hover:text-third hover:translate-x-2 w-full text-left ${
                              pathname === link.path
                                ? "text-third border-l-4 border-third pl-4"
                                : "pl-4"
                            }`}
                          >
                            {link.name}
                          </button>
                        ) : (
                          <Link
                            href={link.path}
                            onClick={() => handleLinkClick(link)}
                            className={`block text-lg font-serif text-secondary font-medium transition-all duration-200 hover:text-third hover:translate-x-2 w-full ${
                              pathname === link.path
                                ? "text-third border-l-4 border-third pl-4"
                                : "pl-4"
                            }`}
                          >
                            {link.name}
                          </Link>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Footer with CTA */}
                <div className="p-6 border-t border-[#1e1e1e] w-full">
                  <Button
                    variant="default"
                    className="bg-third w-full font-serif text-[#0f0f0f] hover:shadow-glow transition-all"
                    size="lg"
                    onClick={() => {
                      router.push("/book-now");
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;