import React, { useState } from "react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { allbooks, bookk1, bookk2, bookk3, bookk4, bookk5 } from "../../assets";
import { motion } from "framer-motion";

const MobileRepairBooksCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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

  const activeBook = books[activeIndex];

  const goToPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? books.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === books.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full py-20 flex flex-col items-center justify-start text-white bg-black overflow-hidden pt-25 md:pt-20 px-4">
      {/* Header Section */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          PROFESSIONAL <span className="text-yellow-400">MOBILE REPAIR</span>{" "}
          RESOURCES
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
          Master mobile repairs with our comprehensive{" "}
          <span className="text-yellow-400">guides and worksheets</span> used by
          service centers worldwide
        </p>
      </motion.div>

      {/* Single Image Display */}
      <div className="mb-8 relative">
        <div className="flex justify-center">
          <motion.img
            src={allbooks}
            alt="All Mobile Repair Books"
            className="rounded-xl max-h-[500px] object-contain border-2 border-gray-700"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>

        {/* Navigation Arrows */}
        <motion.button
          onClick={goToPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 rounded-full p-3 shadow-md hover:bg-blue-600 border border-gray-600"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </motion.button>
        <motion.button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 rounded-full p-3 shadow-md hover:bg-blue-600 border border-gray-600"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
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
        </motion.button>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {books.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full ${
                activeIndex === index ? "bg-blue-600" : "bg-gray-600"
              }`}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2 }}
            />
          ))}
        </div>
      </div>

      {/* Content Display */}
      <motion.div
        className="bg-gray-900 rounded-xl shadow-lg p-6 border border-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="flex items-start mb-6">
          <span className="text-4xl mr-4">{activeBook.emoji}</span>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              {activeBook.title}
            </h3>
            <p className="text-lg font-semibold text-blue-400">
              {activeBook.tagline}
            </p>
          </div>
        </div>

        <p className="text-gray-300 mb-8 text-lg">{activeBook.description}</p>

        <div className="mb-8">
          <h4 className="font-bold text-white text-xl mb-4">KEY FEATURES:</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {activeBook.features.map((feature, index) => (
              <motion.li
                key={index}
                className="flex items-start bg-gray-800/50 p-3 rounded-lg border border-gray-700"
                whileHover={{ x: 5 }}
              >
                <span className="text-blue-400 mr-2 mt-1">✓</span>
                <span className="text-gray-300">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <motion.button
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300 text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get This Guide
          </motion.button>
          <motion.button
            className="border border-blue-600 text-blue-400 hover:bg-gray-800 font-medium py-3 px-8 rounded-lg transition duration-300 text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Free Sample
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default MobileRepairBooksCarousel;
