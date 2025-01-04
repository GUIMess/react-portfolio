import React from "react";
import { motion } from "framer-motion";
import { UserGroupIcon } from "@heroicons/react/solid";
import { content, testimonials } from "../data";
import PropTypes from "prop-types";

export default function Testimonials({ theme }) {
  return (
    <section id="testimonials" className={`${theme.primary} body-font py-20`}>
      <div className="container px-5 mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <UserGroupIcon
            className={`mx-auto inline-block w-10 mb-4 ${theme.text.accent}`}
          />
          <h1
            className={`sm:text-4xl text-3xl font-medium title-font mb-4 ${theme.text.primary}`}
          >
            {content.testimonialsSection.intro}
          </h1>
          <p
            className={`lg:w-2/3 mx-auto leading-relaxed text-base ${theme.text.secondary}`}
          >
            {content.testimonialsSection.description}
          </p>
        </motion.div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <li key={testimonial.name}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`${theme.secondary} rounded-lg p-8 h-full backdrop-blur-sm bg-opacity-50`}
              >
                <p
                  className={`text-lg leading-relaxed mb-6 ${theme.text.secondary} italic`}
                >
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <img
                    alt={testimonial.name}
                    src={testimonial.image}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <p className={`${theme.text.primary} font-medium`}>
                      {testimonial.name}
                    </p>
                    <p className={`${theme.text.secondary} text-sm`}>
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </li>
          ))}
        </ul>

        <motion.p
          className={`mt-12 text-sm ${theme.text.secondary} italic text-center`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {content.testimonialsSection.disclaimer}
        </motion.p>
      </div>
    </section>
  );
}

Testimonials.propTypes = {
  theme: PropTypes.shape({
    primary: PropTypes.string.isRequired,
    secondary: PropTypes.string.isRequired,
    text: PropTypes.shape({
      primary: PropTypes.string.isRequired,
      secondary: PropTypes.string.isRequired,
      accent: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
