import React, { useState } from "react";
import { motion } from "framer-motion";

const CTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <motion.div
        className="mx-auto flex justify-center container items-center p-5 w-full "
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div
          onClick={openModal}
          className="bg-gradient-to-r from-blue-600 to-blue-800 py-4 md:py-6 px-4 md:px-12 rounded-lg text-white font-semibold shadow-lg hover:opacity-90 transition duration-300 w-full md:mx-10  text-md md:text-2xl "
        >
          Grow Any Business using Facebook & Instagram Ads for FREE!
          <br />
          <span className="text-xs md:text-lg">
            (Offer Valid Only For First 100 People!)
          </span>
        </div>
      </motion.div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Enroll for the Program</h2>
              <button
                onClick={closeModal}
                className="text-gray-600 hover:text-gray-800"
              >
                X
              </button>
            </div>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  className="mt-1 w-full p-2 border rounded-md"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  className="mt-1 w-full p-2 border rounded-md"
                  placeholder="Your Email"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
              >
                Enroll Now
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CTA;
