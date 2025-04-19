import React from "react";
import { CheckCircle } from "lucide-react";
import CountUp from "react-countup";

const OurServices = () => {
  const courseHighlights = [
    "No Fluff, Only Practical Knowledge – Real repair cases, real tools, real fixes",
    "Designed by Service Center Experts – Built with years of hands-on experience",
    "Starts from Zero – No technical background needed, perfect for beginners",
    "Covers Basic to High-End Mobile Repair – Feature phones to iPhones & foldables",
    "Includes EMMC, UFI, UMT, FRP, Unlocking – Go beyond basic repairs",
    "Bonus Tool Guides & Error Fixes Included – You won't get stuck during practice",
    "Offline + Printable Format – Study at your pace, without internet",
    "One-Time Payment, Lifetime Access – No subscriptions, no renewals",
    "Earn While You Learn – Start freelancing or repairing from home",
    "Mobile Repair Flows & Worksheets Included – Practice smart and grow faster",
  ];

  const learningTopics = [
    "Hardware, Software, and Advanced Diagnosis",
    "IC Identification, Reballing & Testing",
    "Touch, Display, Speaker, Mic, SIM Slot, Battery Faults",
    "Multimeter, Microscope, DC Power Supply Handling",
    "Mobile Flashing, PIN Unlock, FRP Bypass",
    "Tools like UMT, UFI, Easy JTAG & more",
    "Component Level Troubleshooting",
    "Charging & Network Repair (2G to 5G)",
    "Dead Phone Diagnosis & Recovery",
    "Certificate + Real Examples + Interview Questions",
  ];

  const whatsIncluded = [
    "1 Professionally Designed eBook (PDF)",
    "Real Repair Images + Schematics",
    "Bonus Flowcharts + Practice Exercises",
    "Service Centre Error Fix Guides",
    "Lifetime Access + Free Updates",
  ];

  return (
    <section className="relative pb-20 w-full flex flex-col items-center justify-start text-white bg-black overflow-hidden pt-10 md:pt-20 px-4">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-yellow-400">
          What You'll Learn in This Course
        </h2>

        <div className="flex flex-col gap-8 justify-center items-center">
          {/* Course Introduction */}
          <div className="bg-gray-800 p-6 rounded-lg w-full">
            <h3 className="text-xl font-bold mb-4 text-yellow-400">
              🔍 What is This Course?
            </h3>
            <p className="text-gray-300 mb-4">
              This is a professionally structured, Mobile Repairing Course,
              available in digital PDF format, created by experts with years of
              service centre experience.
            </p>
            <p className="text-gray-300">
              You will learn to repair all types of mobile phones – feature
              phones to high-end smartphones, covering:
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <CheckCircle
                  className="text-green-400 mt-1 mr-2 flex-shrink-0"
                  size={20}
                />
                <span className="text-gray-300">
                  Hardware & Software Repair
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle
                  className="text-green-400 mt-1 mr-2 flex-shrink-0"
                  size={20}
                />
                <span className="text-gray-300">Dead Phone Diagnosis</span>
              </li>
              <li className="flex items-start">
                <CheckCircle
                  className="text-green-400 mt-1 mr-2 flex-shrink-0"
                  size={20}
                />
                <span className="text-gray-300">EMMC/UFS IC Programming</span>
              </li>
              <li className="flex items-start">
                <CheckCircle
                  className="text-green-400 mt-1 mr-2 flex-shrink-0"
                  size={20}
                />
                <span className="text-gray-300">
                  FRP Unlock, Flashing, PIN Unlock
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle
                  className="text-green-400 mt-1 mr-2 flex-shrink-0"
                  size={20}
                />
                <span className="text-gray-300">
                  Real Troubleshooting Scenarios
                </span>
              </li>
            </ul>
          </div>

          {/* Why Different Section */}
          <div className="bg-gray-800 p-6 rounded-lg w-full">
            <h3 className="text-xl font-bold mb-4 text-yellow-400">
              🧠 Why This Course is Different
            </h3>
            <p className="text-gray-300 mb-4">
              Most people waste time watching random YouTube videos or pay
              ₹10,000–₹25,000 for offline classes... But still don't get
              results!
            </p>
            <p className="text-gray-300 mb-4">
              This course is designed to make you job-ready or business-ready —
              even if you're starting from zero. Whether you want to become a
              freelance technician, work in a service center, or open your own
              mobile repair shop — This course will guide you step-by-step.
            </p>
            <ul className="space-y-3 mt-4">
              {courseHighlights.map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle
                    className="text-yellow-400 mt-1 mr-2 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-gray-300">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Learning Topics */}
          <div className="bg-gray-800 p-6 rounded-lg w-full">
            <h3 className="text-xl font-bold mb-4 text-yellow-400">
              📚 What You'll Learn
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {learningTopics.map((topic, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle
                    className="text-green-400 mt-1 mr-2 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-gray-300">{topic}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What's Included */}
          <div className="bg-gray-800 p-6 rounded-lg w-full">
            <h3 className="text-xl font-bold mb-4 text-yellow-400">
              🛠️ What's Included
            </h3>
            <ul className="space-y-3">
              {whatsIncluded.map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle
                    className="text-yellow-400 mt-1 mr-2 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats Section */}
          <div className="mt-4 p-6 bg-gray-900 rounded-lg w-full">
            <div className="flex flex-col md:flex-row justify-around items-CENTER gap-10">
              <div className="flex flex-col justify-center items-center gap-6">
                <div className="text-center">
                  <p className="text-gray-400 text-sm uppercase">
                    Students Trained
                  </p>
                  <p className="text-2xl font-semibold text-yellow-400">
                    <CountUp end={12500} duration={3} separator="," />+
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-gray-400 text-sm uppercase">
                    Success Rate
                  </p>
                  <p className="text-2xl font-semibold text-yellow-400">
                    <CountUp end={95} duration={2} />%
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-6">
                <div className="text-center">
                  <p className="text-gray-400 text-sm uppercase">
                    Practice Exercises
                  </p>
                  <p className="text-2xl font-semibold text-yellow-400">
                    <CountUp end={50} duration={2} />+
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-gray-400 text-sm uppercase">Worksheets</p>
                  <p className="text-2xl font-semibold text-yellow-400">
                    <CountUp end={17} duration={2} />+
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Certification Note */}
          <div className="mt-4 p-6 bg-blue-900 rounded-lg border border-blue-700 w-full">
            <h3 className="text-xl font-bold text-center mb-2 text-white">
              Certification Ready
            </h3>
            <p className="text-gray-200 text-center">
              Includes mock certification quiz to prepare you for official
              mobile repair technician exams
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
