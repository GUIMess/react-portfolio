import React, { useState, useEffect } from 'react';
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import './rainbow.css';
import Toast from './components/Toast';
import KonamiToast from './components/KonamiToast';
import { ArrowUpIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check system preference on initial load
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
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

  // Define theme first
  const theme = {
    primary: isRainbowMode 
      ? 'bg-transparent'
      : isDarkMode ? 'bg-gray-900' : 'bg-gray-100',
    secondary: isRainbowMode 
      ? 'bg-white/10 backdrop-blur-sm'
      : isDarkMode ? 'bg-gray-800' : 'bg-white',
    button: {
      primary: isRainbowMode 
        ? 'bg-indigo-500 hover:bg-indigo-600'
        : isDarkMode 
          ? 'bg-indigo-500 hover:bg-indigo-600'
          : 'bg-indigo-500 hover:bg-indigo-600',
      secondary: 'bg-gray-800 hover:bg-gray-700'
    },
    text: {
      primary: isRainbowMode || isDarkMode ? 'text-white' : 'text-gray-900',
      secondary: isRainbowMode ? 'text-white/90' : isDarkMode ? 'text-gray-400' : 'text-gray-600'
    },
    hover: isRainbowMode 
      ? 'text-white hover:text-pink-200' 
      : isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
  };

  const handleThemeChange = () => {
    setClickCount(prev => {
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
      setIsDarkMode(!isDarkMode);
    }
  };

  useEffect(() => {
    const konamiCode = "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba";
    
    const handleKeyDown = (e) => {
      const newBuffer = konamiBuffer + e.key;
      console.log('Current buffer:', newBuffer); // Debug log
      
      if (newBuffer.length > konamiCode.length) {
        setKonamiBuffer(newBuffer.slice(-konamiCode.length));
      } else {
        setKonamiBuffer(newBuffer);
      }

      if (newBuffer.includes(konamiCode)) {
        setShakeScreen(true);
        setShowKonamiToast(true);
        setTimeout(() => {
          setShakeScreen(false);
          setShowKonamiToast(false);
        }, 3000);
        console.log('%c⬆️⬆️⬇️⬇️⬅️➡️⬅️➡️🅱️🅰️', 'font-size: 20px');
        console.log('%cKONAMI CODE ACTIVATED! You\'re a true gamer! 🎮', 'color: #6366F1; font-size: 16px');
        setKonamiBuffer("");
      }

      // Secret commands help
      if (e.key === '/' && e.ctrlKey) {
        e.preventDefault();
        console.log('%cSecret Commands:', 'color: #6366F1; font-size: 16px');
        console.log('Try these anywhere:');
        console.log('1. ↑↑↓↓←→←→BA - Konami Code');
        console.log('2. Type "bounce" - Makes everything bounce');
        console.log('3. Type "rain" - Makes it rain emojis');
        console.log('4. Type "party" - Starts a party');
        console.log('5. Type "flip" - Flips the page upside down');
        console.log('6. Type "matrix" - Enter the matrix');
        console.log('7. Type "disco" - Disco mode');
        console.log('8. Click theme toggle 5 times - Rainbow mode');
      }

      // Check for typed commands
      if (newBuffer.includes("rain")) {
        e.preventDefault();
        const emojis = ['💻', '🚀', '⚡', '🔥', '✨', '🎮', '🎯', '🎲'];
        for (let i = 0; i < 50; i++) {
          setTimeout(() => {
            const raindrop = document.createElement('div');
            raindrop.className = 'raindrop';
            raindrop.style.left = `${Math.random() * 100}vw`;
            raindrop.style.fontSize = '24px';
            raindrop.style.position = 'fixed';
            raindrop.style.top = '-20px';
            raindrop.style.zIndex = '9999';
            raindrop.style.pointerEvents = 'none';
            raindrop.style.animation = `fall ${Math.random() * 1 + 1}s linear`;
            raindrop.innerText = emojis[Math.floor(Math.random() * emojis.length)];
            document.body.appendChild(raindrop);
            
            raindrop.addEventListener('animationend', () => {
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

      // New commands
      if (newBuffer.includes("flip")) {
        e.preventDefault();
        setIsUpsideDown(true);
        setTimeout(() => setIsUpsideDown(false), 3000);
        setKonamiBuffer("");
      }

      if (newBuffer.includes("matrix")) {
        e.preventDefault();
        setIsMatrix(true);
        setTimeout(() => setIsMatrix(false), 5000);
        setKonamiBuffer("");
      }

      if (newBuffer.includes("disco")) {
        e.preventDefault();
        setIsDisco(true);
        setTimeout(() => setIsDisco(false), 3000);
        setKonamiBuffer("");
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [konamiBuffer, shakeScreen]); // Added shakeScreen to dependencies

  // Add this CSS for the falling animation
  useEffect(() => {
    const style = document.createElement('style');
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

  useEffect(() => {
    // Add system theme listener
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    // Easter egg logs
    console.log('%c👋 Welcome to my portfolio!', 'font-size: 20px; font-weight: bold;');
    console.log('%c🕵️ Looking for secrets? Try these:', 'color: #6366F1; font-size: 16px');
    console.log('1. Click the theme toggle 5 times');
    console.log('2. Type the Konami code');
    console.log('3. Press Ctrl + / for more secrets');

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 300;
      setShowScrollTop(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div 
      className={`min-h-screen transition-all duration-300
        ${shakeScreen ? 'animate-shake' : ''} 
        ${isBouncing ? 'animate-bounce' : ''} 
        ${isPartyMode ? 'animate-pulse' : ''}
        ${isUpsideDown ? 'rotate-180' : ''}
        ${isMatrix ? 'matrix-effect' : ''}
        ${isDisco ? 'animate-disco' : ''}
        ${isRainbowMode 
          ? 'rainbow-gradient' 
          : theme.primary
        }`}
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
      <KonamiToast isVisible={showKonamiToast} onClose={() => setShowKonamiToast(false)} />
    </div>
  );
}
