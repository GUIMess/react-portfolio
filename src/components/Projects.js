import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { motion } from "framer-motion";
import { content, projects } from "../data";

const loadingMessages = [
  "Reticulating splines...",
  "Training junior developers...",
  "Consulting Stack Overflow...",
  "Asking AI politely...",
  "Debugging the debugger...",
  "Converting coffee to code..."
];

export default function Projects({ theme }) {
  return (
    <section id="projects" className={`${theme.primary} body-font`}>
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <motion.div
          className="flex flex-col w-full mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <CodeIcon
            className={`mx-auto inline-block w-10 mb-4 ${theme.text.accent}`}
          />
          <h1
            className={`sm:text-4xl text-3xl font-medium title-font mb-4 ${theme.text.primary}`}
          >
            {content.projectsSection.intro}
          </h1>
          <p
            className={`lg:w-2/3 mx-auto leading-relaxed text-base ${theme.text.secondary}`}
          >
            {content.projectsSection.description}
          </p>
        </motion.div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project, index) => (
            <motion.a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.02,
                rotate: [0, 0.5, 0],
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.98 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className={`${theme.secondary} rounded-lg h-full overflow-hidden`}
              >
                <img
                  alt={project.title}
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={project.image}
                />
                <div className="p-6">
                  <h2
                    className={`text-sm title-font font-medium ${theme.text.accent} mb-1`}
                  >
                    {project.subtitle}
                  </h2>
                  <h1
                    className={`title-font text-lg font-medium ${theme.text.primary} mb-3`}
                  >
                    {project.title}
                  </h1>
                  <p className={`leading-relaxed mb-3 ${theme.text.secondary}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies?.map((tech) => (
                      <span
                        key={tech}
                        className={`inline-block px-2 py-1 text-xs rounded ${theme.badge}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
