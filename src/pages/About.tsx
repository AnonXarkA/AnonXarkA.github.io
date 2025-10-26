import React from "react";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <div className="container mx-auto px-4 py-16 min-h-screen flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          About Me
        </h1>
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-lg md:text-xl leading-relaxed text-neutral-300">
            Hello! I'm an Innovative Computer Science graduate and research-focused Machine Learning enthusiast with thorough experience in Artificial Intelligence, Deep Learning, and Cybersecurity. Proficient in building intelligent, interpretable, and secure AI systems using state-of-the-art model optimization, data engineering, and cryptographic concepts.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-neutral-300">
            Interested in interdisciplinary research connecting AI, security, and human trust, aiming to contribute to reliable ML systems for cyber defense and smart health infrastructure. Well-versed in managing technical projects in healthcare, finance, and cybersecurity, including IEEE published ML-enabled medical diagnostics research. 
        
            When I'm not coding, you can find me exploring new trails, experimenting 
            with photography, or diving into good music. I believe in continuous learning 
            and strive to improve my skills every day.
          </p>
        </div>
      </motion.div>
    </div>
  );
};
