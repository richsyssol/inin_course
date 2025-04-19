import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaRss,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const Footer = () => {
  const socialIcons = [
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaRss,
    FaYoutube,
    FaInstagram,
  ];

  return (
    <footer className="bg-gray-900 text-white py-16 px-8 pb-60">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <img src="" alt="Company Logo" className="mb-6 w-36" />
          <h3 className="text-lg font-semibold mb-4 text-blue-400">
            ABOUT OUR COURSE PLATFORM
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Course Catalog</li>
            <li>About Our Training</li>
            <li>Instructor Profiles</li>
            <li>Client Success Stories</li>
            <li>Course Reviews</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-blue-400">
            OUR COURSES
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Facebook & Instagram Ads</li>
            <li>Marketing & Sales Strategies</li>
            <li>Advanced Ad Targeting</li>
            <li>AI in Advertising</li>
            <li>Facebook Campaign Optimization</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-blue-400">
            SUPPORT & SERVICES
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Technical Support</li>
            <li>Course Assistance</li>
            <li>Account & Billing</li>
            <li>Community & Networking</li>
            <li>Affiliate Program</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-blue-400">
            CONTACT & LOCATIONS
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>APAC</li>
            <li>Europe</li>
            <li>India</li>
            <li>Middle East</li>
            <li>North America</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-around items-center gap-2">
        <div className="mt-10 flex justify-center space-x-6">
          {socialIcons.map((Icon, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2 }}
              className="cursor-pointer text-gray-400 hover:text-blue-400"
            >
              <Icon size={24} />
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-left flex flex-col gap-2 justify-center items-start text-gray-300">
          <p>
            <IoLocationOutline size={20} className="inline mr-2" />
            Flat no 1, meghmalhar society, Gangapur Rd, near Harihar Provision
            Stores,<br></br> near horizon academy English medium school, D. K.
            Nagar,<br></br> Nashik, Maharashtra 422013
          </p>
          <p>
            <IoCallOutline size={20} className="inline mr-2" /> +91 9960602273
          </p>
          <p>
            <MdOutlineEmail size={20} className="inline mr-2" />
            ninadraut26@gmail.com
          </p>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
        <p>
          © 2025 All Rights Reserved by Rich System Solution.{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Privacy Policy
          </a>{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Terms of Use
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
