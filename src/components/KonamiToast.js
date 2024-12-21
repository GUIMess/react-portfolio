import { motion, AnimatePresence } from "framer-motion";

export default function KonamiToast({ isVisible, onClose }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
        >
          <div className="relative">
            <div className="animate-flame-pulse bg-gradient-to-t from-orange-600 via-red-600 to-yellow-400 p-1 rounded-lg shadow-lg shadow-red-500/50">
              <div className="bg-gray-900/90 backdrop-blur-sm px-8 py-4 rounded-lg relative">
                <div className="text-2xl font-bold text-white mb-2 text-center">🔥 KONAMI CODE ACTIVATED! 🔥</div>
                <div className="text-orange-300 text-center">You've unlocked the ancient cheat code!</div>
                {/* Flame particles */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="animate-float-slow">🔥</div>
                </div>
                <div className="absolute -top-4 left-1/4 transform -translate-x-1/2">
                  <div className="animate-float-fast">🔥</div>
                </div>
                <div className="absolute -top-4 right-1/4 transform translate-x-1/2">
                  <div className="animate-float-medium">🔥</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 