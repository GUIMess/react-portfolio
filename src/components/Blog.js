import React from "react";
import { motion } from "framer-motion";
import { BookOpenIcon } from "@heroicons/react/solid";
import PropTypes from 'prop-types';

export default function Blog({ theme }) {
  const posts = [
    {
      title: "Understanding React Hooks",
      excerpt: "A deep dive into React's useState and useEffect...",
      date: "2024-03-20",
      link: "/blog/react-hooks",
    },
    // ... more posts
  ];

  return (
    <section id="blog" className={`${theme.primary} body-font`}>
      <div className="container px-5 py-10 mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <BookOpenIcon
            className={`w-10 inline-block mb-4 ${theme.text.accent}`}
          />
          <h1
            className={`sm:text-4xl text-3xl font-medium title-font ${theme.text.primary} mb-4`}
          >
            Technical Blog
          </h1>
          <p
            className={`text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto ${theme.text.secondary}`}
          >
            Sharing my thoughts and experiences in web development
          </p>
        </motion.div>
        <ul className="flex flex-wrap -m-4">
          {posts.map((post, index) => (
            <li key={post.title} className="p-4 md:w-1/3">
              <motion.div
                className="h-full ${theme.secondary} border-2 ${theme.border} rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="p-6">
                  <h2
                    className={`text-lg font-medium ${theme.text.primary} mb-3`}
                  >
                    {post.title}
                  </h2>
                  <p className={`leading-relaxed mb-3 ${theme.text.secondary}`}>
                    {post.excerpt}
                  </p>
                  <div className="flex items-center flex-wrap">
                    <a
                      href={post.link}
                      className={`${theme.text.accent} inline-flex items-center md:mb-2 lg:mb-0 ${theme.hover}`}
                    >
                      Read More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span
                      className={`${theme.text.secondary} mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 ${theme.border}`}
                    >
                      {post.date}
                    </span>
                  </div>
                </div>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

Blog.propTypes = {
  theme: PropTypes.shape({
    primary: PropTypes.string.isRequired,
    secondary: PropTypes.string.isRequired,
    text: PropTypes.shape({
      primary: PropTypes.string.isRequired,
      secondary: PropTypes.string.isRequired,
      accent: PropTypes.string.isRequired
    }).isRequired,
    border: PropTypes.string.isRequired
  }).isRequired
};
