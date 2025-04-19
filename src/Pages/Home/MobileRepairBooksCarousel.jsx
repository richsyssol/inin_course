import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { bookk1, bookk2, bookk3, bookk4, bookk5 } from "../../assets";
const MobileRepairBooksCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const books = [
    {
      id: 1,
      title: "Mobile Repair Problem Solving Flow Chart Booklet",
      emoji: "📘",
      tagline:
        "Diagnose and fix 20+ common mobile issues with step-by-step logic",
      description:
        "This ready-to-use printable guide gives you flowcharts for real-world mobile problems — from dead phones to charging issues and network errors. No confusion, just follow the flow and fix it!",
      features: [
        "20+ professionally designed troubleshooting flowcharts",
        "Covers Dead phone, No charging, MIC, Display, Network & more",
        "Easy-to-follow step-by-step format",
        "Ideal for use in labs or real-time repairs",
        "Color-coded and beginner-friendly",
        "Printable & mobile-ready PDF included",
      ],
      image: bookk1,
    },
    {
      id: 2,
      title: "Tool Setup Help Guide (UMT / UFI / Unlock Tools)",
      emoji: "🧰",
      tagline: "Master flashing tools like a service center technician",
      description:
        "This guide walks you through setting up and using UMT Dongle, UFI Box, and Unlock Tools. Whether you're stuck with driver errors or tool not opening, this guide has the fix.",
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
      emoji: "🛠️",
      tagline: "Get real solutions for the real challenges you'll face daily",
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
      emoji: "📝",
      tagline: "Practice like a pro with real-world repair activities",
      description:
        "These worksheets are your personal lab! Use them to test your knowledge, label components, troubleshoot circuits, and prepare for interviews or shop management.",
      features: [
        "17+ structured printable worksheets",
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
      title: "Mobile Repair Worksheets (Printable Practice Sheets)",
      emoji: "📝",
      tagline: "Practice like a pro with real-world repair activities",
      description:
        "These worksheets are your personal lab! Use them to test your knowledge, label components, troubleshoot circuits, and prepare for interviews or shop management.",
      features: [
        "17+ structured printable worksheets",
        "Covers: Tool use, PCB labeling, fault finding, resistor testing, etc.",
        "Includes case-based exercises and startup planning sheets",
        "Great for students, trainees, and trainers",
        "Printable for classroom or at-home practice",
        "Also includes a certification mock quiz",
      ],
      image: bookk5,
    },
  ];

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  const activeBook = books[activeIndex];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      {/* Image Swiper */}
      <div className="mb-8">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          speed={1000}
          breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 1.5,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          onSlideChange={handleSlideChange}
          className="w-[200px] md:w-full  h-[300px] md:h-[500px]"
        >
          {books.map((book) => (
            <SwiperSlide key={book.id} className="flex justify-center">
              <img
                src={book.image}
                alt={book.title}
                className="rounded-xl h-full object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Content Display */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-start mb-4">
          <span className="text-3xl mr-3">{activeBook.emoji}</span>
          <div>
            <h3 className="text-2xl font-bold text-gray-800">
              {activeBook.title}
            </h3>
            <p className="text-lg font-semibold text-blue-600">
              {activeBook.tagline}
            </p>
          </div>
        </div>

        <p className="text-gray-600 mb-6">{activeBook.description}</p>

        <div className="mb-6">
          <h4 className="font-bold text-gray-700 text-lg mb-3">Features:</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {activeBook.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex space-x-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300">
            View Details
          </button>
          <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-2 px-6 rounded-lg transition duration-300">
            Download Sample
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileRepairBooksCarousel;
