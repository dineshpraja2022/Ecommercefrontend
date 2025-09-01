import { FaHorse, FaDog, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

const cardVariant = {
  hidden: { opacity: 0, scale: 0.9, y: 40 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut"
    }
  })
};

const WhyChooseUs = () => {
  const cardData = [
    {
      icon: <FaHorse className="text-6xl text-blue-700 mb-4 mx-auto animate-pulse" />,
      title: "Expert in Animal Accessories",
      description:
        "Crafting premium halters, lead ropes, and collars with a perfect blend of durability, safety & elegance."
    },
    {
      icon: <FaDog className="text-6xl text-blue-700 mb-4 mx-auto animate-pulse" />,
      title: "Strong Material, Stylish Design",
      description:
        "High-quality, gentle materials—combining strength, comfort, and a premium look that lasts."
    },
    {
      icon: <FaUsers className="text-6xl text-blue-700 mb-4 mx-auto animate-pulse" />,
      title: "Trusted by Owners & Ranchers",
      description:
        "Favored by pet lovers and professionals alike for unmatched reliability and safety."
    }
  ];

  return (
    <div className="py-24 px-6 md:px-20  text-center">
      <h2 className="text-2xl md:text-4xl font-extrabold text-blue-900 mb-16 relative inline-block">
        Why Choose Shri Shivay Textiles?
        <span className="block w-32 h-1 mx-auto mt-4 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full animate-pulse"></span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {cardData.map((card, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={cardVariant}
            className="bg-white/80 backdrop-blur-md border border-blue-200 shadow-xl hover:shadow-blue-400/50 hover:scale-[1.05] transition-all duration-300 rounded-3xl p-10 group"
          >
            <div className="transition-transform duration-500 group-hover:scale-110">
              {card.icon}
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-3 mt-4 group-hover:text-blue-700 transition-colors duration-300">
              {card.title}
            </h3>
            <p className="text-gray-700 text-[17px] leading-relaxed">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
