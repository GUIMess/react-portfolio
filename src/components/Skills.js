import { ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { motion } from "framer-motion";
import { content, skillsList } from "../data";
import PropTypes from 'prop-types';

export default function Skills({ theme }) {
    return (
        <section id="skills" className={`${theme.primary} body-font`}>
            <div className="container px-5 py-10 mx-auto">
                <motion.div 
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <ChipIcon className={`w-10 inline-block mb-4 ${theme.text.accent}`} />
                    <h1 className={`sm:text-4xl text-3xl font-medium title-font mb-4 ${theme.text.primary}`}>
                        {content.skills.intro}
                    </h1>
                    <p className={`text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto ${theme.text.secondary}`}>
                        {content.skills.description}
                    </p>
                </motion.div>
                <motion.div 
                    className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2"
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    <ul className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                        {skillsList.map((skill) => (
                            <li key={skill} className="p-2 sm:w-1/2 w-full">
                                <div className={`${theme.secondary} rounded flex p-4 h-full items-center`}>
                                    <ChipIcon className={`text-green-400 w-6 h-6 flex-shrink-0 mr-4`} aria-hidden="true" />
                                    <span className={`title-font font-medium ${theme.text.primary}`}>
                                        {skill}
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}

Skills.propTypes = {
  theme: PropTypes.shape({
    primary: PropTypes.string.isRequired,
    secondary: PropTypes.string.isRequired,
    text: PropTypes.shape({
      primary: PropTypes.string.isRequired,
      secondary: PropTypes.string.isRequired,
      accent: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};