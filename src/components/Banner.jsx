import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "../assets/assets";
import banner from "../assets/theams.png";

const texts = [
  "Handcrafted Strength – Halters, Collars & Leads Built to Last",
  "Where Quality Meets Care – Tailored Textile Solutions",
  "Trusted by Sellers – Durable Gear for Horses & Dogs",
  "Made for Makers – Premium Products That Sell Themselves"
];


const Banner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="relative w-full overflow-hidden pt-10 sm:pt-0" // Add top padding on mobile only
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Banner Image */}
      <img
        src={banner}
        alt="banner"
        className="w-full h-[240px] sm:h-[340px] md:h-[440px] lg:h-[540px] object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 via-blue-800/40 to-blue-900/60 z-10"></div>

      {/* Content Area */}
      <div className="absolute inset-0 z-20 flex items-center justify-center px-4 sm:px-12 xl:px-24">
        <div className="w-full max-w-screen-xl mx-auto text-center md:text-left flex flex-col items-center md:items-start">
          {/* Animated Headline */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={index}
              initial={{ opacity: 0, y: -30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ duration: 0.8 }}
              className="text-white font-georgia font-bold drop-shadow-xl text-[22px] sm:text-[32px] md:text-[42px] lg:text-[54px] max-w-[90%] sm:max-w-lg md:max-w-3xl leading-tight tracking-wide"
            >
              {texts[index]}
            </motion.h1>
          </AnimatePresence>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 items-center md:items-start">
            <Link
              to="/products"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded text-sm sm:text-base text-white bg-blue-700 font-semibold shadow-md hover:bg-blue-800 transition duration-300"
            >
              Shop Now
              <img
                src={assets.white_arrow_icon}
                alt="arrow"
                className="w-4 h-4"
              />
            </Link>
            <Link
              to="/products"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded text-sm sm:text-base text-white bg-orange-500 font-semibold shadow-md hover:bg-orange-600 transition duration-300"
            >
              Explore Deals
              <img
                src={assets.white_arrow_icon}
                alt="arrow"
                className="w-4 h-4"
              />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;
