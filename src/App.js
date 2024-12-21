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

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isRainbowMode, setIsRainbowMode] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [konamiBuffer, setKonamiBuffer] = useState("");
  const [shakeScreen, setShakeScreen] = useState(false);
  const [showKonamiToast, setShowKonamiToast] = useState(false);

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

      // Secret commands
      if (e.key === '/' && e.ctrlKey) {
        console.log('%cSecret Commands:', 'color: #6366F1; font-size: 16px');
        console.log('Type these anywhere:');
        console.log('↑↑↓↓←→←→BA - Konami Code');
        console.log('ctrl + b - Make it bounce');
        console.log('ctrl + r - Make it rain');
        console.log('ctrl + p - Party mode');
      }

      // Rain effect
      if (e.key === 'r' && e.ctrlKey) {
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
            
            // Remove the emoji after animation
            raindrop.addEventListener('animationend', () => {
              raindrop.remove();
            });
          }, i * 50); // Stagger the emoji creation
        }
      }

      // Other handlers remain the same...
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

  console.log('App Render:', { isRainbowMode, isDarkMode, className: isRainbowMode ? 'rainbow-gradient' : theme.primary });

  return (
    <div className={`min-h-screen ${shakeScreen ? 'animate-shake' : ''} ${
      isRainbowMode 
        ? 'bg-gradient-to-br from-pink-400 via-purple-500 to-cyan-400' 
        : theme.primary
    }`}>
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
      <Toast 
        message="🦄 Unicorn mode activated! You found the secret theme!" 
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
      <KonamiToast isVisible={showKonamiToast} onClose={() => setShowKonamiToast(false)} />
    </div>
  );
}