import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import CTA from "./CTA";
import { ininvideo, book1, thumbnail } from "../../assets";

const HeroSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative w-full flex flex-col items-center justify-start text-white bg-black overflow-hidden pt-25 md:pt-20 px-4">
      {/* Content Above */}
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-wide text-white drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          LEARN THE <span className="text-yellow-400">ADVANCED</span> FACEBOOK &
          INSTAGRAM <span className="text-yellow-400">ADS STRATEGIES</span>
        </motion.h1>
        <motion.p
          className="md:mt-4 text-xl sm:text-2xl md:text-4xl text-gray-300 drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          THAT ARE GUARANTEED TO GIVE YOU{" "}
          <span className="text-yellow-400">HIGH-QUALITY LEADS</span> &{" "}
          <span className="text-yellow-400">7X SALES</span> FOR YOUR PRODUCTS OR
          SERVICES
        </motion.p>
        <motion.p
          className="mt-2 text-lg sm:text-xl md:text-2xl text-gray-300 drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          Even If You're A Complete{" "}
          <span className="text-yellow-400">Beginner</span> With No Experience &{" "}
          <span className="text-yellow-400">Marketing Skills</span>
        </motion.p>
      </motion.div>

      {/* Video Player Section */}
      <div className="relative w-full max-w-4xl mt-10 overflow-hidden flex justify-center group">
        <video
          ref={videoRef}
          className="w-full h-auto max-h-96 aspect-video rounded-lg shadow-lg bg-black"
          onClick={togglePlay}
          poster={thumbnail}
        >
          <source src={ininvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Center Play Button - Only shows when video is paused */}
        {!isPlaying && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center cursor-pointer"
            onClick={togglePlay}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-black/50 rounded-full p-4 backdrop-blur-sm"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Play className="w-12 h-12 text-white fill-current" />
            </motion.div>
          </motion.div>
        )}
      </div>

      <CTA />
    </div>
  );
};

export default HeroSection;
