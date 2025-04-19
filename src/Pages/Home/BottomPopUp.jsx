import React from "react";
import { motion } from "framer-motion";

function BottomPopUp() {
  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-orange-500 to-red-600 text-white p-3 shadow-lg"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
    >
      <div className="container mx-auto flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <span className="font-bold">🔥 Limited Offer!</span>
          <span className="text-sm">First 100 get it for</span>
          <span className="font-bold text-yellow-300">FREE</span>
          <del className="text-sm opacity-80">₹999</del>
        </div>

        <motion.button
          className="bg-black text-white px-4 py-2 rounded-md font-bold whitespace-nowrap"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            x: [0, -2, 2, -2, 2, 0],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 0.3,
          }}
          onClick={() => (window.location.href = "/payment")}
        >
          Enroll Now
        </motion.button>
      </div>
    </motion.div>
  );
}

export default BottomPopUp;
