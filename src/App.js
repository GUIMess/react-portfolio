import React, { useState, useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { ArrowUpIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";

// Components
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Toast from "./components/Toast";
import KonamiToast from "./components/KonamiToast";
import LoadingState from "./components/LoadingState";
import SEO from "./SEO";
import ErrorBoundary from "./components/ErrorBoundary";

// Styles
import "./rainbow.css";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("appIsDarkMode");
    if (savedTheme !== null) {
      return JSON.parse(savedTheme);
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const [isRainbowMode, setIsRainbowMode] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const [showToast, setShowToast] = useState(false);
  const [konamiBuffer, setKonamiBuffer] = useState("");
  const [shakeScreen, setShakeScreen] = useState(false);
  const [showKonamiToast, setShowKonamiToast] = useState(false);

  const [isBouncing, setIsBouncing] = useState(false);
  const [isPartyMode, setIsPartyMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const theme = {
    primary: isRainbowMode
      ? "bg-transparent"
      : isDarkMode
      ? "bg-gray-900"
      : "bg-gray-100",
    secondary: isRainbowMode
      ? "bg-white/10 backdrop-blur-sm"
      : isDarkMode
      ? "bg-gray-800"
      : "bg-white",
    button: {
      primary: isRainbowMode
        ? "bg-indigo-600 hover:bg-indigo-700"
        : isDarkMode
        ? "bg-indigo-600 hover:bg-indigo-700"
        : "bg-indigo-700 hover:bg-indigo-800",
      secondary: "bg-gray-800 hover:bg-gray-700",
    },
    text: {
      primary: isRainbowMode || isDarkMode ? "text-white" : "text-gray-900",
      secondary: isRainbowMode
        ? "text-white/90"
        : isDarkMode
        ? "text-gray-400"
        : "text-gray-600",
      accent: isDarkMode ? "text-indigo-400" : "text-indigo-600",
    },
    hover: isRainbowMode
      ? "text-white hover:text-pink-200"
      : isDarkMode
      ? "text-gray-400 hover:text-white"
      : "text-gray-600 hover:text-gray-900",
    border: isDarkMode ? "border-gray-800" : "border-gray-200",
    badge: isDarkMode
      ? "bg-gray-800 text-gray-300"
      : "bg-gray-200 text-gray-700",
  };

  const handleThemeChange = () => {
    setClickCount((prev) => {
      const newCount = prev + 1;
      if (newCount === 5) {
        setIsRainbowMode(true);
        setIsDarkMode(false);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 5000);
        return 0;
      }
      return newCount;
    });

    if (isRainbowMode) {
      setIsRainbowMode(false);
    } else if (clickCount !== 4) {
      setIsDarkMode((prev) => !prev);
    }
  };

  useEffect(() => {
    localStorage.setItem("appIsDarkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  useEffect(() => {
    const konamiCode =
      "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba";
    let lastKeyTime = 0;
    const keyTimeout = 1000;

    const handleKeyDown = (e) => {
      const currentTime = Date.now();
      if (currentTime - lastKeyTime > keyTimeout) {
        setKonamiBuffer("");
      }
      lastKeyTime = currentTime;

      const newBuffer = konamiBuffer + e.key;
      setKonamiBuffer(newBuffer.slice(-konamiCode.length));

      if (newBuffer.includes(konamiCode)) {
        setShakeScreen(true);
        setShowKonamiToast(true);
        setTimeout(() => {
          setShakeScreen(false);
          setShowKonamiToast(false);
        }, 3000);
        if (!window.konamiLogged) {
          console.log("%c⬆️⬆️⬇️⬇️⬅️➡️⬅️➡️🅱️🅰️", "font-size: 20px");
          console.log(
            "%cKONAMI CODE ACTIVATED! You're a true gamer! 🎮",
            "color: #6366F1; font-size: 16px"
          );
          window.konamiLogged = true;
        }
        setKonamiBuffer("");
      }

      if (e.key === "/" && e.ctrlKey) {
        e.preventDefault();
        if (!window.secretsLogged) {
          console.log("%cSecret Commands:", "color: #6366F1; font-size: 16px");
          console.log("Try these anywhere:");
          console.log("1. ↑↑↓↓←→←→BA - Konami Code");
          console.log('2. Type "bounce" - Makes everything bounce');
          console.log('3. Type "party" - Starts a party');
          console.log("4. Click theme toggle 5 times - Rainbow mode");
          window.secretsLogged = true;
        }
      }

      if (newBuffer.includes("bounce")) {
        e.preventDefault();
        setIsBouncing(true);
        setTimeout(() => setIsBouncing(false), 1000);
        setKonamiBuffer("");
      }

      if (newBuffer.includes("party")) {
        e.preventDefault();
        setIsPartyMode(true);
        setTimeout(() => setIsPartyMode(false), 3000);
        setKonamiBuffer("");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [konamiBuffer]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    console.log(
      "%c👋 Welcome to my portfolio!",
      "color: #6366F1; font-size: 24px; font-weight: bold;"
    );
    console.log(
      "%c🕵️ Easter Eggs:",
      "color: #10B981; font-size: 18px; font-weight: bold;"
    );
    console.log(
      "%c1. Click the theme toggle 5 times for rainbow mode 🌈",
      "color: #6366F1; font-size: 14px"
    );
    console.log(
      "%c2. Type the Konami code (↑↑↓↓←→←→BA) 🎮",
      "color: #6366F1; font-size: 14px"
    );
    console.log(
      "%c3. Press Ctrl + / for more secrets 🤫",
      "color: #6366F1; font-size: 14px"
    );

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 300;
      setShowScrollTop(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingState />;
  }

  return (
    <HelmetProvider>
      <ErrorBoundary>
        <SEO />
        <div
          className={`min-h-screen transition-all duration-300
            ${shakeScreen ? "animate-shake" : ""}
            ${isBouncing ? "animate-bounce" : ""}
            ${isPartyMode ? "animate-pulse" : ""}
            ${isRainbowMode ? "rainbow-gradient" : theme.primary}`}
          role="main"
          aria-label="Portfolio content"
        >
          <Navbar
            isDarkMode={isDarkMode}
            isRainbowMode={isRainbowMode}
            handleThemeChange={handleThemeChange}
          />
          <About />
          <Projects />
          <Skills />
          <Testimonials />
          <Contact />

          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              onClick={scrollToTop}
              className={`fixed bottom-8 right-8 p-3 rounded-full ${theme.button.primary} shadow-lg z-50`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowUpIcon className="h-6 w-6 text-white" />
            </motion.button>
          )}

          <Toast
            message="🦄 Unicorn mode activated! You found the secret theme!"
            isVisible={showToast}
            onClose={() => setShowToast(false)}
          />
          <KonamiToast
            isVisible={showKonamiToast}
            onClose={() => setShowKonamiToast(false)}
          />
        </div>
      </ErrorBoundary>
    </HelmetProvider>
  );
}
