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
  // Use localStorage for theme preference
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("appIsDarkMode");
    if (savedTheme !== null) {
      return JSON.parse(savedTheme);
    }
    // If no saved preference, use system preference
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
  const [isUpsideDown, setIsUpsideDown] = useState(false);
  const [isMatrix, setIsMatrix] = useState(false);
  const [isDisco, setIsDisco] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Define theme first
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
        ? "bg-indigo-500 hover:bg-indigo-600"
        : isDarkMode
        ? "bg-indigo-500 hover:bg-indigo-600"
        : "bg-indigo-500 hover:bg-indigo-600",
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
        return 0; // Reset the click count after activating rainbow
      }
      return newCount;
    });

    if (isRainbowMode) {
      setIsRainbowMode(false);
    } else if (clickCount !== 4) {
      setIsDarkMode((prev) => !prev);
    }
  };

  // Persist the dark mode preference
  useEffect(() => {
    localStorage.setItem("appIsDarkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  useEffect(() => {
    const konamiCode =
      "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba";
    let lastKeyTime = 0;
    const keyTimeout = 1000; // Reset after 1 second of no input

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
        // Only log if not already logged
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

      // Secret commands help
      if (e.key === "/" && e.ctrlKey) {
        e.preventDefault();
        // Only log if not already logged
        if (!window.secretsLogged) {
          console.log("%cSecret Commands:", "color: #6366F1; font-size: 16px");
          console.log("Try these anywhere:");
          console.log("1. ↑↑↓↓←→←→BA - Konami Code");
          console.log('2. Type "bounce" - Makes everything bounce');
          console.log('3. Type "rain" - Makes it rain emojis');
          console.log('4. Type "party" - Starts a party');
          console.log('5. Type "flip" - Flips the page upside down');
          console.log('6. Type "matrix" - Enter the matrix');
          console.log('7. Type "disco" - Disco mode');
          console.log("8. Click theme toggle 5 times - Rainbow mode");
          window.secretsLogged = true;
        }
      }

      // Check for typed commands
      if (newBuffer.includes("rain")) {
        e.preventDefault();
        const emojis = ["💻", "🚀", "⚡", "🔥", "✨", "🎮", "🎯", "🎲"];
        for (let i = 0; i < 50; i++) {
          setTimeout(() => {
            const raindrop = document.createElement("div");
            raindrop.className = "raindrop";
            raindrop.style.left = `${Math.random() * 100}vw`;
            raindrop.style.fontSize = "24px";
            raindrop.style.position = "fixed";
            raindrop.style.top = "-20px";
            raindrop.style.zIndex = "9999";
            raindrop.style.pointerEvents = "none";
            raindrop.style.animation = `fall ${Math.random() * 1 + 1}s linear`;
            raindrop.innerText =
              emojis[Math.floor(Math.random() * emojis.length)];
            document.body.appendChild(raindrop);

            raindrop.addEventListener("animationend", () => {
              raindrop.remove();
            });
          }, i * 50);
        }
        setKonamiBuffer("");
      }

      // Check for bounce command
      if (newBuffer.includes("bounce")) {
        e.preventDefault();
        setIsBouncing(true);
        setTimeout(() => setIsBouncing(false), 1000);
        setKonamiBuffer("");
      }

      // Check for party command
      if (newBuffer.includes("party")) {
        e.preventDefault();
        setIsPartyMode(true);
        setTimeout(() => setIsPartyMode(false), 3000);
        setKonamiBuffer("");
      }

      // Check for flip command
      if (newBuffer.includes("flip")) {
        e.preventDefault();
        setIsUpsideDown(true);
        setTimeout(() => setIsUpsideDown(false), 3000);
        setKonamiBuffer("");
      }

      // Check for matrix command
      if (newBuffer.includes("matrix")) {
        e.preventDefault();
        setIsMatrix(true);
        setTimeout(() => setIsMatrix(false), 5000);
        setKonamiBuffer("");
      }

      // Check for disco command
      if (newBuffer.includes("disco")) {
        e.preventDefault();
        setIsDisco(true);
        setTimeout(() => setIsDisco(false), 3000);
        setKonamiBuffer("");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [konamiBuffer]);

  useEffect(() => {
    // Add falling animation style once
    const style = document.createElement("style");
    style.textContent = `
      @keyframes fall {
        from {
          transform: translateY(-20px);
        }
        to {
          transform: translateY(100vh);
        }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  // Add system preference listener
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    // Move console messages outside the welcomeLogged check
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
  }, []); // Empty dependency array ensures it runs once on mount

  // Scroll to top button logic
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

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingState theme={theme} />;
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
            ${isUpsideDown ? "rotate-180" : ""}
            ${isMatrix ? "matrix-effect" : ""}
            ${isDisco ? "animate-disco" : ""}
            ${isRainbowMode ? "rainbow-gradient" : theme.primary}`}
          role="main"
          aria-label="Portfolio content"
        >
          <Navbar
            theme={theme}
            isDarkMode={isDarkMode}
            isRainbowMode={isRainbowMode}
            handleThemeChange={handleThemeChange}
          />
          <About theme={theme} />
          <Projects theme={theme} />
          <Skills theme={theme} />
          <Testimonials theme={theme} />
          <Contact theme={theme} />

          {/* Scroll to top button */}
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
