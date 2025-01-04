import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpIcon } from "@heroicons/react/solid";
import PropTypes from 'prop-types';

export default function FloatingNav({ theme }) {
    const [isVisible, setIsVisible] = useState(false);
    const [isNearFooter, setIsNearFooter] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // Show button when page is scrolled up 300px
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }

            // Check if we're near the footer
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollPosition = window.scrollY + windowHeight;
            const buffer = 100; // Adjust this value to change when the button moves

            setIsNearFooter(documentHeight - scrollPosition < buffer);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    onClick={scrollToTop}
                    className={`fixed ${isNearFooter ? 'bottom-20' : 'bottom-8'} right-8 p-3 rounded-full ${theme.button.primary} shadow-lg z-50 transition-all duration-300`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Scroll to top of page"
                >
                    <ArrowUpIcon className="h-6 w-6 text-white" />
                </motion.button>
            )}
        </AnimatePresence>
    );
}

FloatingNav.propTypes = {
    theme: PropTypes.shape({
        button: PropTypes.shape({
            primary: PropTypes.string.isRequired
        }).isRequired
    }).isRequired
}; 