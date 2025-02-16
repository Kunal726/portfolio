"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white p-8">
      {/* Header Section with Slide-in Animation */}
      <header className="text-center mb-12">
        <motion.h1
          className="text-6xl font-extrabold text-white"
          initial={{ opacity: 0, x: -100 }}  // Slide in from the left
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Kunal Kulthe
        </motion.h1>
        <motion.p
          className="text-2xl text-gray-300 mt-2"
          initial={{ opacity: 0, x: -100 }}  // Slide in from the left
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Backend Developer | Software Engineer
        </motion.p>
      </header>

      {/* Intro Section with Slide-in Animation */}
      <section className="text-center mb-16">
        <motion.h2
          className="text-4xl font-semibold text-white mb-6"
          initial={{ opacity: 0, x: -100 }}  // Slide in from the left
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Welcome to My Portfolio
        </motion.h2>
        <motion.p
          className="text-lg text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, x: -100 }}  // Slide in from the left
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          I specialize in backend development using Java, Spring Boot, Microservices, and REST APIs. I am passionate about building scalable, secure, and efficient systems. Explore my work and experience below!
        </motion.p>
      </section>

      {/* Key Sections with Hover Effect */}
      <section className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* About Section Card */}
        <motion.div
          className="bg-gray-800 p-8 rounded-xl shadow-lg text-center"
          initial={{ opacity: 0, x: -100 }}  // Slide in from the left
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 2 }}
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-3xl font-semibold text-white mb-4">About Me</h3>
          <p className="text-lg text-gray-400">
            I am a skilled Backend Developer with a passion for solving complex problems through clean, efficient, and scalable code. Currently working on developing secure and high-performance backend services.
          </p>
          <Link href="/about">
            <motion.div
              className="text-blue-400 hover:text-blue-500 mt-4 block"
              whileHover={{ scale: 1.1 }}
            >
              Learn More
            </motion.div>
          </Link>
        </motion.div>

        {/* Projects Section Card */}
        <motion.div
          className="bg-gray-800 p-8 rounded-xl shadow-lg text-center"
          initial={{ opacity: 0, x: 100 }}  // Slide in from the right
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-3xl font-semibold text-white mb-4">Projects</h3>
          <p className="text-lg text-gray-400">
            Check out some of the projects I've worked on, including a Yoga Pose Recognition system, a Financial Services app, and more.
          </p>
          <Link href="/projects">
            <motion.div
              className="text-blue-400 hover:text-blue-500 mt-4 block"
              whileHover={{ scale: 1.1 }}
            >
              View Projects
            </motion.div>
          </Link>
        </motion.div>
      </section>

      {/* Contact Section with Slide-in Animation */}
      <section className="text-center mt-16">
        <motion.h3
          className="text-3xl font-semibold text-white mb-4"
          initial={{ opacity: 0, x: 100 }}  // Slide in from the right
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 3 }}
        >
          Get in Touch
        </motion.h3>
        <motion.p
          className="text-lg text-gray-400 mb-4"
          initial={{ opacity: 0, x: 100 }}  // Slide in from the right
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 3.5 }}
        >
          Feel free to reach out to me for collaboration, inquiries, or just to connect!
        </motion.p>
        <Link href="/contact">
          <motion.div
            className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.div>
        </Link>
      </section>
    </div>
  );
}
