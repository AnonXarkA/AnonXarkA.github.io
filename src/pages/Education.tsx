import React from "react";
import { motion } from "framer-motion";

export const Education = () => {
  return (
    <div className="container mx-auto px-4 py-16 min-h-screen flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Education
        </h1>
        <div className="max-w-3xl mx-auto text-left space-y-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-blue-400">Bachelor of Science in Computer Science</h2>
            <p className="text-lg text-neutral-300">BRAC University, Dhaka, Bangladesh</p>
            <p className="text-neutral-400">Graduated: May 2024</p>
            <ul className="list-disc list-inside mt-2 text-neutral-300">
              <li>Relevant Coursework: Computer Security, Cryptography and Cryptoanalysis, Artificial Intelligence, Algorithms,
Data Structures, Compiler Design, Software Engineering, Operating Systems, Computer Networks</li>
              <li>Dean's List: 2 Semesters</li>
              <li>Thesis: "Harnessing Deep Learning and Explainable AI for Accurate Skin Rash Detection
and Classification "</li>
              <li>Extracurriculars: Robotics Club</li>
            </ul>
          </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-blue-400">Higher Secondary Certificate (HSC) </h2>
            <p className="text-lg text-neutral-300">Dhaka Imperial College, Dhaka, Bangladesh</p>
            <p className="text-neutral-400">Graduated: 2019</p>
            <ul className="list-disc list-inside mt-2 text-neutral-300">
              {/* <li>Awards: Valedictorian, Science Fair Winner</li>
              <li>Extracurriculars: Red Crescent Volunteer</li> */}
            </ul>
          </div>



          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-blue-400">Secondary School Certificate (SSC) </h2>
            <p className="text-lg text-neutral-300">Noakhali Zilla School, Noakhali, Bangladesh</p>
            <p className="text-neutral-400">Graduated: 2017</p>
            <ul className="list-disc list-inside mt-2 text-neutral-300">
              {/* <li>Awards: Valedictorian, Science Fair Winner</li> */}
              <li>Extracurriculars: Red Crescent Volunteer</li>
            </ul>
          </div>
        </div>
      </motion.div>


{/* === ADD THIS ENTIRE BLOCK START === */}
      {/* Honors & Certifications Section */}
      <motion.div
        // Use similar animation entrance as the main content for consistency
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }} // Add a slight delay
        className="max-w-3xl mx-auto text-left mt-12" // Add margin-top
      >
        <h2 className="text-3xl font-semibold text-center mb-6 text-blue-400">
          Honors & Certifications
        </h2>
        <div className="bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-lg backdrop-blur-sm">
          <ul className="list-disc list-inside space-y-2 text-neutral-300">
            <li>Dean's List, BRAC University (Spring 2021, Fall 2023) </li>
            <li>Google TensorFlow Developer Certificate (2023) </li>
            <li>IEEE CSDE Registration Fee Scholarship (2023) </li>
            <li>IEEE Cybersecurity CTF Bootcamp Certificate (2021)</li>
            {/* Add other certifications if desired */}
          </ul>
        </div>
      </motion.div>
      {/* === ADD THIS ENTIRE BLOCK END === */}

      
      
    </div>
  );
};
