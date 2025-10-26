// import React from "react";
import { motion } from "framer-motion";

const projects = [
  // {
  //   title: "E-commerce Platform",
  //   description: "A full-stack e-commerce application built with React, Node.js, and MongoDB. Features user authentication, product listings, shopping cart, and payment integration.",
  //   technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
  //   link: "#",
  // },
  // {
  //   title: "Task Management App",
  //   description: "A responsive task management application with drag-and-drop functionality, user accounts, and real-time updates. Built using Vue.js and Firebase.",
  //   technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
  //   link: "#",
  // },
  // {
  //   title: "Portfolio Website",
  //   description: "This very website! Designed and developed to showcase my skills and projects. Built with React, TypeScript, and Tailwind CSS.",
  //   technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  //   link: "#",
  // },


  {
  title: "Harnessing Deep Learning and Explainable AI for Accurate Skin Rash Detection and Classification (Thesis)", // [cite: 32, 68]
  description: "Developed a deep learning system to detect and classify skin rashes with high accuracy and reliability. To address limited and imbalanced data, I created a 1,381-image synthetic dataset from multiple public sources and applied advanced data preprocessing and augmentation. Trained and compared four models — Custom CNN, ResNet50V2, DenseNet201, and MobileNetV2 — where ResNet50V2 achieved 94% accuracy, setting a new benchmark for this dataset. Integrated Explainable AI (LIME) to visualize model decisions, helping doctors understand and trust AI-based diagnoses." , //
  technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "Deep Learning", "XAI", "ResNet50V2", "LIME"], 
  link: "#", // Add link if available, maybe to paper/repo later
},
{
  title: "Lung Cancer Detection Using Machine Learning Methods", // [cite: 45, 76]
  description: "Led a first-author research study on early lung cancer detection using six ML classifiers (Random Forest, SVM, KNN, etc.). Applied a three-step pipeline — data preprocessing, feature extraction, and classification — on a Kaggle dataset of 1,000 patients. The Random Forest model achieved 99% accuracy, validated through k-fold cross-validation and consistent across all key metrics (precision, recall, F1-score). The work was published in an IEEE conference, highlighting its potential for improving early diagnosis and patient survival.", // [cite: 45, 79, 81, 82]
  technologies: ["Python", "Scikit-learn", "Machine Learning", "Random Forest", "SVM", "KNN"], // Infer from description & skills [cite: 14, 15, 45, 79, 101]
  link: "https://github.com/AnonXarkA/Lung-Cancer-Detection-Using-Machine-Learning-Methods-Codes", // Replace with actual link from CV if different [cite: 77] - Assuming from general GitHub link 
},
 {
  title: "Secure Web Application with End-to-End Encryption", // [cite: 39, 89]
  description: "Built a full-stack web app in Laravel with a strong focus on data security and cryptographic integrity. Implemented AES-256-CBC encryption for sensitive data, and Bcrypt hashing with salting for passwords. Developed a secure key management system to protect the master encryption key, ensuring that even in case of a database breach, user data remains safe and inaccessible.", // [cite: 41, 42, 91, 92, 93]
  technologies: ["PHP", "Laravel", "MySQL", "Cryptography", "AES-256", "Bcrypt"], // Infer from description & skills [cite: 14, 19, 41, 42, 100, 102]
  link: "https://github.com/AnonXarkA/CRYPTOGRAPHY-and-CRYPTANALYSIS-CSE447-BRACU/tree/main/Project", // Replace with actual link from CV if different [cite: 39, 89] - Assuming from general GitHub link 
},

{
  title: "Cricket Match Outcome Prediction System", // [cite: 39, 89]
  description: "Developed a predictive framework to forecast cricket match results using data on match conditions, team composition, and historical performance. Created Word2Vec-based player embeddings to represent categorical data for improved model learning. Implemented and compared Random Forest, XGBoost, and TabNet models, selecting the most accurate predictor for reliable match outcome forecasting.", // [cite: 41, 42, 91, 92, 93]
  technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "XGBoost", "PyTorch", "TabNet", "Word2Vec", "Matplotlib"], // Infer from description & skills [cite: 14, 19, 41, 42, 100, 102]
  link: "https://github.com/AnonXarkA/Cricket-Prediction-Ensemble-Word2Vec-Outcomes-with-RF-XGBoost-and-TabNet", // Replace with actual link from CV if different [cite: 39, 89] - Assuming from general GitHub link 
},

{
    title: "BRACU News Portal Management System",
    description: "Developed a full-stack Laravel-based News Portal for CSE470 course. Features multi-language support (English & Bangla), role-based access, category management, comments, social media integration, and ad management. Contributed to CRUD operations, core modules, and frontend integration.",
    technologies: ["Laravel", "PHP", "MySQL", "Blade", "JavaScript", "SweetAlert", "Mailtrap", "Git", "GitHub"],
    link: "https://github.com/AnonXarkA/newsportal-project", // Added GitHub link
  }
,

{
    title: "Fraud Detection in Financial Transactions",
    description: "Developed supervised classification models (XGBoost, Random Forest) to identify fraudulent transactions. Employed advanced feature engineering, data preprocessing (noise reduction, PCA), and strategically handled a highly imbalanced dataset by optimizing for high recall to minimize missed fraud.",
    technologies: ["XGBoost", "Random Forest", "Scikit-learn", "Pandas", "NumPy", "PCA", "Python"],
    link: "#", // Added GitHub link
  }


];

export const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-16 min-h-screen flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          My Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-blue-400 mb-2">{project.title}</h2>
                <p className="text-neutral-300 mb-4">{project.description}</p>
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-600 text-white text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
