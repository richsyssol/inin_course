import React from "react";
import {
  FaTools,
  FaUserGraduate,
  FaUserCog,
  FaStore,
  FaLaptopHouse,
  FaUserCheck,
} from "react-icons/fa";
import CTA from "./CTA";

const MobileRepairCourse = () => {
  return (
    <div className="mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">
        Professional Mobile Repair Training Course
      </h1>
      <p className="text-gray-700 text-center mb-4 text-lg">
        Learn <span className="text-blue-600 font-bold">mobile repairing</span>{" "}
        from scratch and
        <span className="text-blue-600 font-bold">
          {" "}
          start earning ₹500-1000 daily
        </span>{" "}
        without any prior technical experience.
      </p>
      <p className="text-gray-700 text-center mb-6 text-lg">
        Using our{" "}
        <span className="font-bold">step-by-step training system</span> that has
        helped
        <span className="text-orange-600 font-bold">
          {" "}
          12,500+ students
        </span>{" "}
        start their mobile repair businesses.
      </p>
      <h2 className="text-xl text-center font-semibold text-orange-600 mb-6">
        👨‍🔧 Who Should Buy This Course?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 container mx-auto">
        {targetAudience.map((item, index) => (
          <div
            key={index}
            className="p-4 rounded-lg shadow-xl active:scale-105 bg-gray-100 hover:bg-gray-200 transition-colors flex items-start gap-4"
          >
            <div className="text-3xl text-blue-600 mt-1">{item.icon}</div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <CTA />
        <p className="bg-yellow-400 container mx-auto text-black font-bold text-lg px-6 py-3 rounded-lg text-center mt-4 max-w-2xl">
          Enroll today to get lifetime access to all course materials
        </p>
      </div>
    </div>
  );
};

const targetAudience = [
  {
    title: "Absolute Beginners",
    description:
      "No technical experience needed - we start from complete basics",
    icon: <FaUserGraduate />,
  },
  {
    title: "Students",
    description: "Gain a future-proof skill that's always in demand",
    icon: <FaUserCheck />,
  },
  {
    title: "Working Technicians",
    description: "Upgrade your skills and increase your service offerings",
    icon: <FaUserCog />,
  },
  {
    title: "Shop Owners",
    description: "Add mobile repair services to your existing business",
    icon: <FaStore />,
  },
  {
    title: "Freelancers",
    description: "Work from home and earn ₹10,000-30,000 monthly",
    icon: <FaLaptopHouse />,
  },
  {
    title: "Entrepreneurs",
    description:
      "Start your own mobile service center with our business guidance",
    icon: <FaTools />,
  },
];

export default MobileRepairCourse;
