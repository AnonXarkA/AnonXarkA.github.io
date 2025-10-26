// import React from "react";
import { motion  } from "framer-motion";
import { Briefcase,  Users } from "lucide-react"; // Icons for sections

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring" as const, stiffness: 100 } },
};

export const Experience = () => {
  return (
    <div className="container mx-auto px-4 py-16 min-h-screen flex flex-col justify-center">
      <motion.div initial="hidden" animate="visible" variants={containerVariants}>
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
        >
          Experience
        </motion.h1>

        <div className="max-w-4xl mx-auto space-y-10">
          {/* Work Experience Section */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-semibold text-center mb-6 text-blue-400 flex items-center justify-center gap-3">
              <Briefcase size={28} /> Professional Experience
            </h2>
            <div className="bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-lg backdrop-blur-sm border border-gray-700">
              <h3 className="text-xl font-semibold text-neutral-200">IT and Engineering Team Member</h3>
              <p className="text-md text-neutral-400 italic mb-1">Youth Notion</p>
              <p className="text-sm text-neutral-500 mb-3">(March 2024 - November 2024)</p>
              <ul className="list-disc list-inside space-y-2 text-neutral-300">
               <li>Developed and deployed ML models for civic datasets.</li>
               <li>Automated ETL workflows using SQL, Flask APIs, and cloud pipelines.</li>
               <li>Collaborated with cross-functional teams to improve dataset quality and predictive performance.</li>
              </ul>
            </div>
          </motion.div>

          {/* Teaching & Mentoring Section */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-semibold text-center mb-6 text-blue-400 flex items-center justify-center gap-3">
               <Users size={28} /> Teaching & Mentoring
            </h2>
            <div className="space-y-6">
                <div className="bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-lg backdrop-blur-sm border border-gray-700">
                  <h3 className="text-xl font-semibold text-neutral-200">Student Tutor (ST), Dept. of Computer Science and Engineering</h3>
                  <p className="text-md text-neutral-400 italic mb-1">BRAC University</p>
                  <p className="text-sm text-neutral-500 mb-3">(Summer 2023)</p>
                  <ul className="list-disc list-inside space-y-2 text-neutral-300">
                   <li>Provided academic support to over 30 undergraduate students on Python, data structures, and algorithms.</li>
                   <li>Assisted students during practical lab sessions with debugging and programming assignments.</li>
                  </ul>
                </div>

                 <div className="bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-lg backdrop-blur-sm border border-gray-700">
                  <h3 className="text-xl font-semibold text-neutral-200">Robotics Instructor & Executive of Event Management</h3>
                  <p className="text-md text-neutral-400 italic mb-1">Robotics Club of BRAC University</p>
                  <p className="text-sm text-neutral-500 mb-3">(2020 - 2024)</p>
                  <ul className="list-disc list-inside space-y-2 text-neutral-300">
                    <li>Taught Arduino, robotics, and IoT concepts to over 20 students.</li>
                    <li>Mentored teams through hardware/software integration projects.</li>
                     <li>Led automation and IoT projects, integrating hardware and software.</li>
                   <li>Coordinated logistics for large-scale technical events like hackathons and workshops.</li>
                  </ul>
                </div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
};