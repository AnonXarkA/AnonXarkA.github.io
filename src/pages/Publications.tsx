// import React from "react";
import { motion  } from "framer-motion";
import { Link,  Github, GraduationCap } from "lucide-react"; // Import relevant icons

// Data for publications from your CV
const publications = [
  {
    title: "Lung Cancer Detection Using Machine Learning Methods",
    venue: "2023 IEEE Asia-Pacific Conference on Computer Science and Data Engineering (CSDE), Nadi, Fiji",
    doi: "10.1109/CSDE59766.2023.10487685",
    description: "First-author research comparing six classifiers (Random Forest, SVM, KNN, etc.) for early lung cancer detection using a public Kaggle dataset. Achieved 99% accuracy with Random Forest, validated using k-fold cross-validation. ( Cited by 3 )",
    links: [
      { name: "IEEE Paper", url: "https://ieeexplore.ieee.org/document/10487685", icon: Link }, // Replace # with actual link if available besides DOI
      { name: "Project Code", url: "https://github.com/AnonXarkA/Lung-Cancer-Detection-Using-Machine-Learning-Methods-Codes", icon: Github }, // Replace # with actual GitHub link
      { name: "Google Scholar", url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=s2hw7VcAAAAJ&authuser=1&citation_for_view=s2hw7VcAAAAJ:XiVPGOgt02cC", icon: GraduationCap }, // Replace # with your Google Scholar profile link
    ],
    year: 2023,
  }
//   {
//     title: "Harnessing Deep Learning and Explainable AI for Accurate Skin Rash Detection and Classification (Thesis)",
//     venue: "Undergraduate Thesis, BRAC University (Under Review)",
//     description: "Focused on AI interpretability in medical diagnostics. Designed a synthetic dataset, compared CNN models (ResNet50V2, DenseNet201, etc.), achieved 94% accuracy with ResNet50V2, and utilized LIME for Explainable AI (XAI).",
//     links: [
//       // Add links if/when available (e.g., preprint, code)
//        { name: "ORCID", url: "#", icon: GraduationCap }, // Replace # with your ORCID link
//     ],
//     year: 2024,
//   },
  // Add more publications here if needed
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring" as const, stiffness: 100 } },
};

export const Publications = () => {
  return (
    <div className="container mx-auto px-4 py-16 min-h-screen flex flex-col justify-center">
      <motion.div initial="hidden" animate="visible" variants={containerVariants}>
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
        >
          Publications & Research
        </motion.h1>

        <div className="max-w-4xl mx-auto space-y-8">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              // Card styling - using gray-800 for dark mode contrast
              className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-6 backdrop-blur-sm"
            >
              <h2 className="text-2xl font-semibold text-blue-400 mb-2">{pub.title}</h2>
              <p className="text-sm text-neutral-400 mb-1 italic">{pub.venue}</p>
              <p className="text-sm text-neutral-500 mb-3">({pub.year})</p>
              <p className="text-neutral-300 mb-4 leading-relaxed">{pub.description}</p>
              {pub.doi && (
                 <p className="text-xs text-neutral-400 mb-4">
                    DOI: <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 underline">{pub.doi}</a>
                 </p>
              )}
              <div className="flex flex-wrap gap-4">
                {pub.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    // Link styling - distinct white button on dark card
                    className="inline-flex items-center gap-2 bg-neutral-200 text-black text-sm font-medium px-3 py-1 rounded-md shadow hover:bg-white transition-colors"
                  >
                    <link.icon size={16} />
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
           <motion.div
  variants={itemVariants}
  className="mt-10 flex justify-center"
>
  <div className="relative bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 p-[2px] rounded-xl shadow-lg w-full max-w-2xl">
    <div className="bg-gray-900 rounded-xl px-6 py-5 flex flex-col items-center space-y-3">
      {/* <BookOpen size={28} className="text-blue-400 animate-pulse" /> */}
      <h3 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
        Invited Reviewer
      </h3>
      <p className="text-neutral-300 text-center text-sm md:text-base">
        <span className="font-semibold text-white">
          Biomedical Signal Processing and Control
        </span>{" "}
        (Elsevier)
      </p>
      <p className="text-neutral-500 text-sm italic">
        Contributing to peer review and scientific advancement
      </p>
    </div>
  </div>
</motion.div>
        </div>
        
      </motion.div>
    </div>
  );
};