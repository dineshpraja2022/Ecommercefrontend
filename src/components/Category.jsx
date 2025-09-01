import { categories } from "../assets/assets";
import { useAppContext } from "../context/appContext";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 14,
    },
  },
};

const Category = () => {
  const { navigate } = useAppContext();

  const handleClick = (path) => {
    navigate(`/products/${path.toLowerCase()}`);
    scrollTo(0, 0);
  };

  return (
    <motion.section
      className="mt-24 px-4 md:px-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.h2
        className="text-4xl font-bold text-center text-[#003366] mb-12 tracking-wide relative"
        variants={itemVariants}
      >
        <span className="relative z-10">🌟 Our Product Categories 🌟</span>
        <span className="absolute w-32 h-1 bg-blue-400 left-1/2 -translate-x-1/2 bottom-[-10px] rounded-full"></span>
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
        variants={containerVariants}
      >
        {categories.map(({ path, image, text, bgColor }, index) => (
          <motion.div
            key={index}
            onClick={() => handleClick(path)}
            className="group cursor-pointer rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center text-center border hover:border-blue-500 bg-white"
            style={{ background: `linear-gradient(135deg, ${bgColor}, #ffffff)` }}
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              rotate: 0.5,
              boxShadow: "0px 10px 30px rgba(0, 98, 255, 0.15)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={image}
              alt={text}
              className="w-20 h-20 object-contain mb-4 transition-transform duration-300 group-hover:scale-110 drop-shadow-md"
            />
            <p className="text-base md:text-lg font-semibold text-gray-800 group-hover:text-blue-700 transition-all duration-300">
              {text}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Category;
