"use client";

import Image from "next/image";
import React, { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/app/data";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(64); // Default to 64px

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setNavbarHeight(310);
      } else {
        setNavbarHeight(94);
      }
    };

    // Initial check on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = useCallback(
    (id: string) => {
      const section = document.getElementById(id);
      if (section) {
        const sectionPosition = section.getBoundingClientRect().top;
        const offsetPosition =
          sectionPosition + window.pageYOffset - navbarHeight;

        // Close the menu before scrolling
        setIsMenuOpen(false);

        // Use setTimeout to ensure the menu is closed before scrolling
        setTimeout(() => {
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }, 100);
      } else {
        console.error(`Section with id "${id}" not found`);
      }
    },
    [navbarHeight]
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-8xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          <div className="flex flex-shrink-0 flex-row space-x-3 md:space-x-10">
            <div className="relative w-[180px] h-[40px] md:w-[310px] md:h-[70px] ">
              <Image
                src="/assets/logos/TCE-Logo.svg"
                alt="TCE Logo"
                // width={280}
                // height={40}
                layout="fill" // required
                objectFit="cover" // change to suit your needs
                priority
              />
            </div>
            <div className="relative w-[95px] h-[40px] md:h-[70px] md:w-[170px]">
              <Image
                src="/assets/logos/iiclogo.webp"
                alt="TCE Logo"
                // width={280}
                // height={40}
                layout="fill" // required
                objectFit="cover" // change to suit your needs
                priority
              />
            </div>
            <div className="relative w-[40px] h-[40px] md:h-[70px] md:w-[70px]">
              <Image
                src="/assets/logos/NAAC_LOGO.png"
                alt="TCE Logo"
                // width={280}
                // height={40}
                layout="fill" // required
                objectFit="cover" // change to suit your needs
                priority
              />
            </div>
          </div>
          <div className="hidden ">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-[0.95rem] font-medium transition-colors duration-200 active:bg-gray-200"
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          <div className="">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 active:bg-gray-200"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">
                {isMenuOpen ? "Close main menu" : "Open main menu"}
              </span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isMenuOpen ? "auto" : 0,
          opacity: isMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className=""
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium w-full text-left active:bg-gray-200"
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
