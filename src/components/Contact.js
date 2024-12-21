import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Contact({ theme }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const phrases = [
    "Let's build something amazing...",
    "Perhaps a new web app? 💻",
    "Or maybe an API? 🚀",
    "Yes, I use AI - but smartly! 🧠",
    "I debug better than I dance 💃",
    "Junior dev with senior enthusiasm! ⚡",
    "Will code for health insurance! 🤣",
    "My code is like my coffee - strong and reliable ☕",
    "404: Social life not found 🔍",
    "The possibilities are endless! ✨",
    "Drop me a message! 📫",
    "I speak fluent Stack Overflow 📚",
    "Git commit -m 'hire me please' 🙏",
    "Bugs fear me, seniors mentor me 🐛",
    "I make AI work for me, not vice versa 🤖"
  ];

  useEffect(() => {
    let timeout;

    if (isTyping) {
      if (text.length < phrases[currentPhrase].length) {
        timeout = setTimeout(() => {
          setText(phrases[currentPhrase].slice(0, text.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(text.slice(0, -1));
        }, 50);
      } else {
        setCurrentPhrase((prev) => (prev + 1) % phrases.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isTyping, currentPhrase]);

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      // Validate form with fun messages
      const newErrors = {};
      if (!formData.name.trim()) {
        newErrors.name = "Your name is like my social life - nonexistent!";
      } else if (formData.name.length < 2) {
        newErrors.name = "That's shorter than my attention span! Need at least 2 characters.";
      }

      if (!formData.email.trim()) {
        newErrors.email = "Email missing - like my motivation on Mondays!";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "That email looks about as real as my workout routine!";
      }

      if (!formData.message.trim()) {
        newErrors.message = "Message empty? Like my bank account after buying dev tools!";
      } else if (formData.message.length < 10) {
        newErrors.message = "C'mon, write more! Even my git commits are longer than that!";
      }

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        setSubmitStatus('error');
        return;
      }

      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: encode({
          'form-name': 'contact',
          ...formData,
        }),
      });

      if (!response.ok) {
        throw new Error(`Form submission failed with status ${response.status}`);
      }

      setSubmitStatus('success');
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section id="contact" className={`${theme.primary} relative`}>
        <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-center justify-center relative h-[400px]">
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className={`text-4xl font-bold mb-6 ${theme.text.primary}`}>
                Hello World! 👋
              </h2>
              <p
                className={`text-2xl ${theme.text.primary} h-20 flex items-center justify-center`}
              >
                {text}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="ml-1 inline-block w-[3px] h-6 bg-indigo-500"
                />
              </p>
            </motion.div>
          </div>

          <form
            onSubmit={handleSubmit}
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />
            <h2
              className={`${theme.text.primary} text-3xl mb-1 font-medium title-font`}
            >
              Let's Connect!
            </h2>
            <p className={`${theme.text.secondary} leading-relaxed mb-5`}>
              Don't worry, this form doesn't bite! Unless you're a bug.
            </p>

            {/* Name Input */}
            <div className="relative mb-4">
              <label
                htmlFor="name"
                className={`${theme.text.secondary} text-sm`}
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full ${theme.secondary} ${theme.border} ${theme.text.primary} rounded focus:ring-2 focus:ring-indigo-900 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
              />
              {errors.name && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-xs mt-1"
                >
                  {errors.name}
                </motion.p>
              )}
            </div>

            {/* Email Input */}
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className={`${theme.text.secondary} text-sm`}
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full ${theme.secondary} ${theme.border} ${theme.text.primary} rounded focus:ring-2 focus:ring-indigo-900 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
              />
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-xs mt-1"
                >
                  {errors.email}
                </motion.p>
              )}
            </div>

            {/* Message Input */}
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className={`${theme.text.secondary} text-sm`}
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full ${theme.secondary} ${theme.border} ${theme.text.primary} rounded focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out`}
              />
              {errors.message && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-xs mt-1"
                >
                  {errors.message}
                </motion.p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`${theme.button.primary} text-white border-0 py-2 px-6 focus:outline-none rounded text-lg ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {submitStatus && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`mt-3 ${
                  submitStatus.includes("Error")
                    ? "text-red-500"
                    : "text-green-500"
                }`}
              >
                {submitStatus}
              </motion.p>
            )}
          </form>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className={`${theme.secondary} body-font`}>
        <div className="container px-5 py-8 mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-auto text-center md:text-left mb-4 md:mb-0">
              <p className={`text-sm ${theme.text.secondary}`}>
                © {new Date().getFullYear()} Catalin Siegling. All rights
                reserved.
              </p>
            </div>
            <div className="w-full md:w-auto text-center md:text-right">
              <div className="flex justify-center md:justify-end space-x-6">
                <a
                  href="https://github.com/GUIMess"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${theme.text.secondary} hover:text-indigo-500 transition-colors`}
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/catalin-siegling"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${theme.text.secondary} hover:text-indigo-500 transition-colors`}
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
