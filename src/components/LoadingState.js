import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

export default function LoadingState({ theme }) {
  return (
    <motion.div
      className={`flex items-center justify-center h-screen ${theme.primary}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex flex-col items-center">
        <div
          className={`w-16 h-16 border-4 ${theme.border} border-t-indigo-500 rounded-full animate-spin`}
        ></div>
        <p className={`mt-4 ${theme.text.secondary}`}>Loading...</p>
      </div>
    </motion.div>
  );
}

LoadingState.propTypes = {
  theme: PropTypes.shape({
    primary: PropTypes.string.isRequired,
    border: PropTypes.string.isRequired,
    text: PropTypes.shape({
      secondary: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
