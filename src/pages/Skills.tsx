// src/pages/Skills.tsx
import React from "react";
import { motion } from "framer-motion";

// Skill categories based on your CV
const skillCategories = [
  {
    title: "Programming & Computing",
    skills: ["Python (Advanced)", "C++", "SQL", "PHP", "Bash", "Shell Scripting", "LaTeX"],
  },
  {
    title: "Machine Learning & AI",
    skills: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn", "OpenCV", "NLP", "XAI", "Data Preprocessing", "Hyperparameter Tuning"],
  },
  {
    title: "Data Analytics & Big Data",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI", "Jupyter", "Google Cloud", "AWS", "Azure ML"],
  },
  {
    title: "Cybersecurity",
    skills: ["Network Security", "Web Security", "Cryptography", "Penetration Testing", "Vulnerability Assessment", "Digital Forensics", "Reverse Engineering", "Threat Modeling"],
  },
  {
    title: "Databases & Development Tools",
    skills: ["MySQL", "MongoDB", "NoSQL", "Git", "Docker", "Kubernetes", "Agile", "API Development"],
  },
];

// Animation variants for staggering items
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger children appearance
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export const Skills = () => {
  return (
    <div className="container mx-auto px-4 py-16 min-h-screen flex flex-col justify-center">
      <motion.div
        initial="hidden" // Use variants for initial state
        animate="visible"
        variants={containerVariants} // Apply container variants
      >
        <motion.h1
          variants={itemVariants} // Apply item variants to title
          className="text-5xl md:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
        >
          Technical Skills
        </motion.h1>

        <div className="max-w-4xl mx-auto space-y-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants} // Apply item variants to each category block
              className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg backdrop-blur-sm"
            >
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">{category.title}</h2>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-gray-700 text-neutral-300 text-sm font-medium px-3 py-1 rounded-full shadow-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};