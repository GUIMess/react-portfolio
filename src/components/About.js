import React from "react";
import { motion } from "framer-motion";
import { content } from "../data";
import heroImage from "../assets/coding.svg";
import PropTypes from "prop-types";

export default function About({ theme }) {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <motion.div
          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1
            className={`title-font sm:text-4xl text-3xl mb-4 font-medium ${theme.text.primary}`}
          >
            {content.about.intro}
          </h1>
          <p className={`mb-8 leading-relaxed ${theme.text.secondary}`}>
            {content.about.description}
          </p>
          <p className={`mb-8 leading-relaxed ${theme.text.secondary}`}>
            {content.about.mission}
          </p>
          <div className="flex justify-center">
            <motion.a
              href="#contact"
              className={`inline-flex text-white ${theme.button.primary} border-0 py-2 px-6 focus:outline-none rounded text-lg`}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 5px 15px rgba(0,0,0,0.2)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Work With Me
            </motion.a>
            <motion.a
              href="#projects"
              className={`ml-4 inline-flex text-white ${theme.button.secondary} border-0 py-2 px-6 focus:outline-none rounded text-lg`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See My Past Work
            </motion.a>
          </div>
        </motion.div>
        <motion.div
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.img
            animate={{
              y: [0, -10, 0],
              rotate: [-1, 1, -1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="object-cover object-center rounded"
            alt="hero"
            src={heroImage}
          />
        </motion.div>
      </div>
    </section>
  );
}

About.propTypes = {
  theme: PropTypes.shape({
    text: PropTypes.shape({
      primary: PropTypes.string.isRequired,
      secondary: PropTypes.string.isRequired,
    }).isRequired,
    button: PropTypes.shape({
      primary: PropTypes.string.isRequired,
      secondary: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
