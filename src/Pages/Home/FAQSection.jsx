import React, { useState } from "react";
import { motion } from "framer-motion";
import { ParallaxProvider } from "react-scroll-parallax";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
  {
    question: "Is this a video course or a book?",
    answer:
      "📘 It's a professionally designed digital book (PDF) with real images and step-by-step repair guidance.",
  },
  {
    question: "Can I learn mobile repair without any prior experience?",
    answer:
      "Absolutely! This course starts from the basics — no experience needed.",
  },
  {
    question: "How will I receive the course?",
    answer: "Once your complete payment, you'll get a download link instantly.",
  },
  {
    question: "Can I use this to open a mobile repair shop?",
    answer:
      "Of course! We cover practical diagnostics, tools, customer handling tips, and business basics.",
  },
  {
    question: "Will I learn software flashing tools too?",
    answer:
      "Yes, tools like UMT, UFI, Easy JTAG, and flashing methods are included.",
  },
  {
    question: "Is it a lifetime access course?",
    answer: "Yes! One-time payment = lifetime access with free updates.",
  },
  {
    question: "Will this help me fix my own phone?",
    answer:
      "Yes, you can start repairing your own and others' phones confidently.",
  },
  {
    question: "Does it cover dead phone repair?",
    answer: "Yes, dead phone diagnosis is one of our major modules.",
  },
  {
    question: "What if I don't have tools?",
    answer: "We'll guide you on basic affordable tools and how to use them.",
  },
  {
    question: "Is the course in Hindi or English?",
    answer:
      "The course is in easy Basic English, written to be beginner-friendly.",
  },
  {
    question: "How do I contact for support?",
    answer: "You can WhatsApp us for any help.",
  },
  {
    question: "Can I print the course?",
    answer: "Yes, it's printable and optimized for A4 pages.",
  },
  {
    question: "Will I need to buy tools to start?",
    answer:
      "Basic tools are explained in the guide — you can learn without buying them first but you need a basic toolkit.",
  },
  {
    question: "Will it work on mobile phones?",
    answer: "Yes, the PDF opens easily on any Android/iOS phone or computer.",
  },
];

export default function FAQSection() {
  const [expandedSections, setExpandedSections] = useState([]);

  const toggleSection = (index) => {
    setExpandedSections((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  return (
    <ParallaxProvider>
      <div className="w-full mb-20 container relative mt-10 mx-auto bg-white shadow-md rounded-2xl p-6 md:p-10 text-center">
        <motion.h1
          className="text-4xl font-extrabold mb-2 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Frequently Asked Questions
        </motion.h1>
        <p className="text-gray-600 mb-5">
          Got questions? We've got answers! If you still have more questions,
          please reach out to us via WhatsApp or email.
        </p>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <div
                className="p-4 shadow-md rounded-lg cursor-pointer bg-gray-800 text-white hover:bg-gray-700 flex justify-between items-center"
                onClick={() => toggleSection(index)}
              >
                <span className="font-semibold">{item.question}</span>
                {expandedSections.includes(index) ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </div>
              {expandedSections.includes(index) && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 p-4 rounded-lg bg-gray-100 text-gray-800 shadow-md text-left"
                >
                  <p>{item.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </ParallaxProvider>
  );
}
