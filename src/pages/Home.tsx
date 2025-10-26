import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const services = [
    { number: "001", title: "Cybersecurity", description: "Securing systems and data with modern techniques" },
    { number: "002", title: "Machine Learning & AI", description: "Building intelligent and interpretable systems" },
    { number: "003", title: "Consulting", description: "Technical guidance and mentorship" },
  ];

  return (
    <div className="relative w-full min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 md:px-16 py-20">
        <div className="max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <motion.h1
                  className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Arka Debnath
                </motion.h1>

                <motion.div
                  className="space-y-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {services.map((service, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3 text-neutral-400 hover:text-white transition-colors duration-300 cursor-pointer group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    >
                      <span className="text-sm font-mono">{service.number}</span>
                      <div>
                        <div className="font-medium group-hover:translate-x-2 transition-transform duration-300">
                          {service.title}
                        </div>
                        <div className="text-sm text-neutral-500">{service.description}</div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              <motion.div
                className="max-w-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <p className="text-neutral-400 leading-relaxed">
                  {/* Passionate about creating digital experiences that blend creativity with functionality.  */}
            
                  Innovative Computer Science graduate and research-focused Machine Learning enthusiast experienced in AI, Deep Learning, and Cybersecurity. Passionate about building intelligent, interpretable, and secure systems and creating digital experiences that blend creativity with functionality. 
                </p>
              </motion.div>

              <motion.div
                className="text-center mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <p className="text-neutral-400 mb-2">Scroll down to explore</p>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ChevronDown size={32} className="mx-auto text-blue-400" />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Content - Animated Square */}
            <motion.div
              className="relative flex items-center justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.div
                className="relative w-64 h-64 md:w-96 md:h-96 bg-white"
                animate={{
                  x: mousePosition.x * 0.02,
                  y: mousePosition.y * 0.02,
                }}
                transition={{ type: "spring", stiffness: 50, damping: 20 }}
              >
                {/* Pixelated corners effect */}
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-white"></div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white"></div>
                <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-white"></div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white"></div>

                {/* Inner animated elements */}
                <motion.div
                  className="absolute inset-8 border-4 border-black"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                ></motion.div>

                <motion.div
                  className="absolute inset-16 bg-black"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                ></motion.div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                className="absolute top-0 right-0 w-12 h-12 bg-blue-500"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              ></motion.div>

              <motion.div
                className="absolute bottom-0 left-0 w-16 h-16 bg-purple-500"
                animate={{
                  y: [0, 20, 0],
                  rotate: [0, -180, -360],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              ></motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scroll Indicator at bottom */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={40} className="text-white opacity-50" />
        </motion.div>
      </motion.div>
    </div>
  );
};
