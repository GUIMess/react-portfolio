import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar({ theme, isDarkMode, handleThemeChange, isRainbowMode }) {
  return (
    <header className={theme.primary}>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <a href="#projects" className={`mr-5 hover:text-indigo-500 transition-colors ${isDarkMode ? 'text-white' : theme.hover}`}>
            Past Work
          </a>
          <a href="#skills" className={`mr-5 hover:text-indigo-500 transition-colors ${isDarkMode ? 'text-white' : theme.hover}`}>
            Skills
          </a>
          <a href="#testimonials" className={`mr-5 hover:text-indigo-500 transition-colors ${isDarkMode ? 'text-white' : theme.hover}`}>
            Testimonials
          </a>
          <a href="#contact" className={`hover:text-indigo-500 transition-colors ${isDarkMode ? 'text-white' : theme.hover}`}>
            Contact
          </a>
        </nav>
        <a href="#about" className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center lg:items-center lg:justify-center mb-4 md:mb-0">
          <span className={`ml-3 text-xl ${isDarkMode ? 'text-white' : theme.text.primary}`}>
            Catalin Siegling
          </span>
        </a>
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleThemeChange}
            className="cursor-pointer p-2"
          >
            {isRainbowMode ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                <circle cx="12" cy="12" r="5" fill="white"/>
              </svg>
            ) : !isDarkMode ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            )}
          </motion.div>
        </div>
      </div>
    </header>
  );
}
