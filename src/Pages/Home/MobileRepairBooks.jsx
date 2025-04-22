import React, { useState } from "react";
import { motion } from "framer-motion";
import { bookk1, bookk2, bookk3, bookk4, bookk5 } from "../../assets";

const MobileRepairBooks = () => {
  const [expandedBooks, setExpandedBooks] = useState({});
  const [hoveredCard, setHoveredCard] = useState(null);

  const toggleReadMore = (id) => {
    setExpandedBooks((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const books = [
    {
      id: 1,
      title: "Mobile Repair Problem Solving Flow Chart Booklet",
      emoji: "🧠 ",
      tagline:
        "Diagnose and fix 20+ common mobile issues with step-by-step logic",
      description:
        "This ready-to-use printable guide gives you flowcharts for real-world mobile problems — from dead phones to charging issues and network errors. No confusion, just follow the flow and fix it!",
      features: [
        "20+ professional troubleshooting flowcharts",
        "Covers Dead phone, No charging, MIC, Display, Network & more",
        "Easy-to-follow visual instructions",
        "Ideal for use in labs or real-time repairs",
        "Color-coded and beginner-friendly",
        "Printable & mobile-ready PDF included",
      ],
      image: bookk1,
    },
    {
      id: 2,
      title: "Tool Setup Help Guide (UMT / UFI / Unlock Tools)",
      emoji: "🔧",
      tagline: "Master flashing tools like a service center technician",
      description:
        "This guide walks you through setting up and using UMT Dongle, UFI Box, and Unlock Tools. Whether you’re stuck with driver errors or tool not opening, this guide has the fix.",
      features: [
        "Complete setup steps for UMT, UFI, MRT, CM2, and more",
        "Solutions for Smartcard, COM port, and tool error messages",
        "Compatible with Windows 7/10/11",
        "Perfect for service center or freelancer tool setup",
        "Covers both hardware & software side",
        "Downloadable, easy-to-follow instructions",
      ],
      image: bookk2,
    },
    {
      id: 3,
      title: "Mobile Service Center Error Fix Guide",
      emoji: "🚀 ",
      tagline: "Get real solutions for the real challenges you’ll face daily",
      description:
        "This cheat sheet is a life-saver for technicians! It includes quick-fix instructions for 25+ mobile errors that come up during repairs — like No Display, No SIM, Camera Error, FRP Lock, etc.",
      features: [
        "Covers both hardware & software error solutions",
        "Ideal for live repair scenarios in service centers",
        "Easy-to-reference for fast decision-making",
        "Save time on trial & error — fix problems the smart way",
        "Practical knowledge used by professional engineers",
        "Works with Android & iPhone repairs",
      ],
      image: bookk3,
    },
    {
      id: 4,
      title: "Mobile Repair Worksheets (Printable Practice Sheets)",
      emoji: "🎓 ",
      tagline: "Practice like a pro with real-world repair activities",
      description:
        "These worksheets are your personal lab! Use them to test your knowledge, label components, troubleshoot circuits, and prepare for interviews or shop management.",
      features: [
        "17+ practical worksheets",
        "Covers: Tool use, PCB labeling, fault finding, resistor testing, etc.",
        "Includes case-based exercises and startup planning sheets",
        "Great for students, trainees, and trainers",
        "Printable for classroom or at-home practice",
        "Also includes a certification mock quiz",
      ],
      image: bookk4,
    },
    {
      id: 5,
      title: "Mobile Repairing Course - Basic To Advanced",
      emoji: "🔬",
      tagline: "Take your skills to the component level",
      description:
        "This advanced guide teaches you professional chip-level repair techniques used in high-end service centers.",
      features: [
        "PCB component analysis",
        "Schematics reading",
        "Microsoldering techniques",
        "Power management solutions",
        "Data recovery methods",
        "Advanced troubleshooting",
      ],
      image: bookk5,
    },
  ];

  return (
    <div className="w-full bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-4">
            Mobile Repair <span className="text-white">Learning Resources</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Professional guides and tools to master smartphone repairs from
            basic to advanced level
          </p>
        </motion.div>

        {/* Books Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {books.map((book, index) => (
            <motion.div
              key={book.id}
              className="w-full sm:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredCard(book.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`bg-gray-800 rounded-xl shadow-lg overflow-hidden h-full flex flex-col border-2 border-transparent transition-all duration-300 ${
                  hoveredCard === book.id
                    ? "border-yellow-400 shadow-yellow-500/20"
                    : ""
                }`}
              >
                {/* Book Image */}
                <div className="h-48 sm:h-56 overflow-hidden bg-gray-900 flex items-center justify-center p-4">
                  <motion.img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-contain"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Book Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start mb-4">
                    <span className="text-2xl mr-3 text-yellow-400">
                      {book.emoji}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-white line-clamp-2">
                        {book.title}
                      </h3>
                      <p className="text-yellow-400 font-medium">
                        {book.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {book.description}
                  </p>

                  <div className="mb-4 flex-1">
                    <h4 className="font-semibold text-white mb-3">
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {book.features
                        .slice(
                          0,
                          expandedBooks[book.id] ? book.features.length : 3
                        )
                        .map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-yellow-400 mr-2">•</span>
                            <span className="text-gray-300 text-sm">
                              {feature}
                            </span>
                          </li>
                        ))}
                    </ul>
                    {book.features.length > 3 && (
                      <button
                        onClick={() => toggleReadMore(book.id)}
                        className="text-yellow-400 text-sm font-medium mt-2 hover:underline focus:outline-none"
                      >
                        {expandedBooks[book.id]
                          ? "Show Less"
                          : `+ ${book.features.length - 3} more`}
                      </button>
                    )}
                  </div>

                  <div className="mt-auto pt-4 flex space-x-3 border-t border-gray-700">
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium py-2 px-4 rounded-lg text-sm flex-1 transition duration-200 flex items-center justify-center">
                      View Details
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                    <button className="border border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 font-medium py-2 px-4 rounded-lg text-sm flex-1 transition duration-200">
                      Free Sample
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileRepairBooks;
