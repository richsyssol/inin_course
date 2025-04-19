import React from "react";
import {
  FaBusinessTime,
  FaBullseye,
  FaUserTie,
  FaAd,
  FaUsers,
  FaRocket,
} from "react-icons/fa";
import CTA from "./CTA";

const FacebookAdsComponent = () => {
  return (
    <div className="mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-4">
        Setup & Run Profitable Facebook & Instagram Ads
      </h1>
      <p className="text-gray-700 text-center mb-4">
        Sell Your{" "}
        <span className="text-green-600 font-bold">
          Products or Services online
        </span>
        without hiring an expensive freelancer or agency.
      </p>
      <p className="text-gray-700 text-center mb-6">
        Using The <span className="font-bold">Step by Step Systems</span> that
        has helped my business grow to
        <span className="text-orange-600 font-bold">
          {" "}
          50 Crore in last 11 months.
        </span>
      </p>
      <h2 className="text-xl text-center font-semibold text-orange-600">
        YES, It will be that Easy!
      </h2>
      <p className="text-center text-gray-700 mb-6">
        Here is what you are going to learn...
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 container mx-auto">
        {courses.map((course, index) => (
          <div
            key={index}
            className="p-4  rounded-lg shadow-xl active:scale-105 bg-gray-200 flex items-center gap-4"
          >
            <div className="text-3xl text-blue-600">{course.icon}</div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-blue-600">
                {course.title}
              </h3>
              <p className="text-gray-600">{course.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <CTA />
        <p className="bg-yellow-400 container mx-auto text-black font-bold text-lg px-6 py-3 rounded-lg text-center ">
          Register before March 01, 2025 to unlock bonuses worth Rs 19,000
        </p>
      </div>
    </div>
  );
};

const courses = [
  {
    title: "Create Business Manager & Setup your Account in 10 Mins",
    description:
      "Learn how to create business manager and ad account the right way so your account doesn't get banned.",
    icon: <FaBusinessTime />,
  },
  {
    title: "Complete framework to run ads that give 7x return on Ad Spend",
    description:
      "Learn the most essential and important secret before you launch your 1st or next campaign.",
    icon: <FaRocket />,
  },
  {
    title: "Decode Buyers Persona for any business",
    description:
      "Learn my highly rated buyers persona strategy which has helped me create 3000+ high-converting Facebook & Insta audiences in the last 6 years.",
    icon: <FaUserTie />,
  },
  {
    title: "Create Ads using AI that convert & not just grab attention",
    description:
      "Learn how to create great ad copy & creatives that will evoke emotion and convert them into sales or high-quality leads!",
    icon: <FaAd />,
  },
  {
    title:
      "Finding your exact customers using laser targeting on Facebook & Instagram Ads",
    description:
      "Learn how you can show your ads to consumers who want to buy your product or service!",
    icon: <FaBullseye />,
  },
  {
    title: "Learn to create your 1st or next Ad campaign in the right way",
    description:
      "Learn what I have learned after spending more than 15 crore in Facebook & Insta ads and doing 3000+ tests.",
    icon: <FaUsers />,
  },
];

export default FacebookAdsComponent;
