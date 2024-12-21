import { motion, AnimatePresence } from "framer-motion";

export default function Toast({ message, isVisible, onClose }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50"
        >
          <div className="bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 p-[2px] rounded-lg">
            <div className="bg-gray-900/90 backdrop-blur-sm px-6 py-3 rounded-lg flex items-center gap-3">
              <span className="text-white font-medium">
                {message} 
                <span className="animate-bounce inline-block ml-2">🌈</span>
              </span>
              <button 
                onClick={onClose}
                className="ml-4 text-white/60 hover:text-white"
              >
                ✕
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 