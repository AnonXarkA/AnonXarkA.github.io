import React from "react";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import { motion } from "framer-motion";

import { SiGooglescholar } from "react-icons/si";
import { FaXTwitter, FaOrcid } from "react-icons/fa6";





export const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-16 min-h-screen flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Get in Touch
        </h1>
        <p className="text-lg leading-relaxed max-w-2xl mx-auto mb-8 text-center">
          I'm always open to new opportunities, collaborations, and interesting conversations. 
          Feel free to reach out through any of the channels below!
        </p>
        <div className="flex flex-col items-center space-y-6">
          <a
            href="mailto:arkanath141@protonmail.com"
            className="flex items-center space-x-3 text-white hover:text-blue-400 transition-colors duration-200"
          >
            <Mail size={24} />
            <span className="text-xl">arkanath141@protonmail.com</span>
          </a>
          <a
            href="https://www.linkedin.com/in/arkadebnath141/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 text-white hover:text-blue-400 transition-colors duration-200"
          >
            <Linkedin size={24} />
            <span className="text-xl">LinkedIn</span>
          </a>
          <a
            href="https://github.com/AnonXarkA"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 text-white hover:text-blue-400 transition-colors duration-200"
          >
            <Github size={24} />
            <span className="text-xl">GitHub</span>
          </a>

           <a
    href="https://x.com/anon_x_arka"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-3 text-white hover:text-blue-400 transition-colors duration-200"
  >
    <FaXTwitter size={24} />
    <span className="text-xl">X / Twitter</span>
  </a>

          <a
    href="https://orcid.org/0009-0005-4945-1296"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-3 text-white hover:text-green-400 transition-colors duration-200"
  >
    <FaOrcid size={24} />
    <span className="text-xl">ORCID</span>
  </a>

<a
  href="https://scholar.google.com/citations?user=s2hw7VcAAAAJ&hl=en&authuser=1"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center space-x-3 text-white hover:text-blue-400 transition-colors duration-200"
>
  <SiGooglescholar size={24} />
  <span className="text-xl">Google Scholar</span>
</a>




        </div>
        <div className="mt-12 max-w-xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4 text-center">Send me a message</h2>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-md transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};
