"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
    {
        title: "Yoga Pose Correctness Detection",
        duration: "Aug 2022 - Apr 2023",
        company: "Sinhgad College of Engineering",
        description: `
      Developed an AI-powered Yoga Pose Recognition System that provides real-time feedback on posture correctness.
      Utilized the MediaPipe framework for accurate pose estimation, extracting body coordinates from live video feeds.
      Implemented a logistic regression model, trained on a labeled dataset of 12 yoga poses (6 sitting, 6 standing), ensuring precise classification.
      Enhanced user experience by offering automated posture analysis and feedback for improved yoga practice.
    `,
        skills: "AI, MediaPipe, Logistic Regression, Python",
        link: "https://github.com/Kunal726/Yoga-Pose-Correctness-Detection",
    },
    {
        title: "Image Steganography",
        duration: "Jan 2021 - Mar 2021",
        description: `
      Developed an image steganography tool that allows hiding secret messages within images.
      The tool allows encoding and decoding messages using pixel manipulation techniques to embed data within the image.
      Focused on enhancing data security and implementing efficient algorithms for both encryption and extraction of hidden data.
    `,
        skills: "Python, OpenCV, Steganography Algorithms",
        link: "https://github.com/Kunal726/Image-Steganography",
    },
    {
        title: "Daily Expenses – Expense Tracker App",
        duration: "Aug 2020 - Oct 2021",
        description: `
      Developed a personal finance management app to help users track daily expenses and manage budgets efficiently.
      Designed an intuitive UI allowing users to add, categorize, and analyze expenses with detailed reports and visualizations.
      Implemented budgeting features with notifications to alert users when they near spending limits.
      Integrated user authentication, offline mode, and cloud synchronization, ensuring secure and seamless data access.
      Enhanced user experience with features like dark mode, receipt attachments, and interactive charts for expense analysis.
    `,
        skills: "Java, SQL, Git, Kotlin, Firebase",
        link: "https://github.com/Kunal726/Daily-Expenses",
    },
    {
        title: "SRWallet – Financial Services App",
        duration: "Dec 2021 - Feb 2022",
        company: "MDU Santi Solution Pvt Ltd",
        description: `
      Developed a full-featured financial services Android application offering users loan provision, deposit facilities, and insurance services.
      Led the Android development team, ensuring smooth collaboration and efficient execution of project milestones.
      Designed and developed the front-end using Kotlin, XML, and Java, creating an intuitive and user-friendly interface.
      Built a robust backend infrastructure using PHP and MySQL, ensuring secure and efficient data management.
      Integrated secure authentication mechanisms and financial transaction handling, improving user trust and app reliability.
    `,
        skills: "Android, Kotlin, PHP, MySQL, REST APIs, Git",
        link: "#", // Private project, no link
    },
];

export default function Projects() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black p-8 text-white">
            <header className="text-center mb-12">
                <motion.h1
                    className="text-4xl font-bold"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    Projects
                </motion.h1>
                <motion.p
                    className="text-xl mt-2"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
                >
                    A selection of my past work
                </motion.p>
            </header>

            <section className="space-y-12">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-xl hover:scale-105 transition-all"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeInOut",
                            delay: index * 0.2,
                        }}
                    >
                        <Link href={project.link} passHref>
                            <motion.div
                                className="text-2xl font-semibold text-blue-400 hover:text-blue-500 block"
                                whileHover={{
                                    scale: 1.05,
                                    color: "#38bdf8", // Customize the hover color
                                    transition: { ease: "easeInOut", duration: 0.3 },
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {project.title}
                            </motion.div>
                        </Link>
                        <p className="text-gray-400 mt-1">{project.duration}</p>
                        <p className="mt-4 text-gray-300">{project.description}</p>
                        <p className="mt-2 font-semibold text-gray-500">Skills: {project.skills}</p>
                    </motion.div>
                ))}
            </section>

            <footer className="text-center mt-12">
                <Link href="/" className="text-lg text-blue-400 hover:text-blue-500">
                    Back to Home
                </Link>
            </footer>
        </div>
    );
}
