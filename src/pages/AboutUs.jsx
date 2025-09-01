import React from "react";
import pratibha from "../assets/sachin.jpeg";
import { Gallary } from "../components/Gallary";
import aboutHero from "../assets/abouthero.jpg";
import { motion } from "framer-motion";

const AboutUs = () => {
  const steps = [
    {
      icon: "🧵",
      title: "Step 1",
      description:
        "Raw materials like fabric or thread are sourced from trusted suppliers.",
    },
    {
      icon: "🏭",
      title: "Step 2",
      description:
        "Product is manufactured at our facility with quality and efficiency.",
    },
    {
      icon: "✅",
      title: "Step 3",
      description:
        "Each item undergoes a strict quality check to ensure no defects.",
    },
    {
      icon: "📦",
      title: "Step 4",
      description:
        "The product is carefully packed using secure, eco-friendly packaging.",
    },
    {
      icon: "🛒",
      title: "Step 5",
      description: "Customer places an order through our website or app.",
    },
    {
      icon: "🚚",
      title: "Step 6",
      description:
        "The package is shipped and delivered to the customer’s doorstep.",
    },
  ];
  const cardAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <div className="text-gray-800 font-sans">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${aboutHero})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="relative z-10 flex flex-col items-start justify-center px-6 py-20 text-white md:px-12 max-w-3xl"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold drop-shadow-md">
            About Shri Shivay Textiles
          </h2>
          <p className="mt-5 text-white/90 text-lg font-light">
            We craft premium <span className="text-indigo-300 font-medium">dog collars, lead ropes, and horse halters</span> that blend strength, comfort, and elegance.
          </p>
          <p className="mt-3 text-white/80 text-base font-light">
            Loved by pet owners and professionals, our products ensure safety and style — made with care for the animals you cherish.
          </p>
        </motion.div>
      </section>

      {/* About Us Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <motion.img
            src={pratibha}
            alt="Founder Mr. Sachin Dixit"
            className="rounded-2xl w-full max-w-sm mx-auto shadow-[0_0_40px_#3b82f680]"
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <p className="text-xl font-semibold mt-4 text-gray-700 font-serif drop-shadow-md shadow-black">
            Mr. Sachin Dixit
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-sm text-indigo-600 uppercase font-semibold tracking-widest mb-3">
            About Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-6 font-serif">
            Meet the Heart of <span className="text-indigo-600">Our Company</span>
          </h2>
          <div className="space-y-5 text-[17px] text-gray-700 leading-[1.8] text-justify font-light">
            <p><strong className="text-indigo-600 font-medium">Shri Shivay Textiles</strong> is more than a brand — it's a story of dedication, passion, and human craftsmanship.</p>
          Founded by <strong>Mr. Sachin Dixit</strong>, our journey is rooted in values of tradition and trust.
          For over 5 years, we’ve been handcrafting premium-quality ropes and accessories like <strong>horse ropes, dog leashes, halters, and animal leads</strong>.
            From Mardanpur, Kanpur (U.P.), we blend tradition with modern aesthetics to deliver reliable, stylish, and strong products.
            <p>Every item tells a story and every rope carries the promise of <strong className="text-indigo-600">trust, love, and long-lasting quality</strong>.</p>
          </div>
        </motion.div>
      </section>

      {/* Journey Section */}
<motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center z-10 relative"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {steps.map(({ icon, title, description }, i) => (
        <motion.div
          key={i}
          className="flex flex-col items-center bg-white shadow-[0_0_30px_#3b82f610] hover:shadow-[0_0_40px_#3b82f680] transition-all duration-500 rounded-2xl p-6 group hover:-translate-y-2"
          variants={cardAnimation}
          custom={i}
        >
          <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-blue-200 to-blue-400 rounded-full shadow-lg group-hover:scale-110 transition transform text-3xl mb-4">
            {icon}
          </div>
          <p className="font-semibold text-blue-900 text-lg mb-2">{title}</p>
          <p className="text-gray-600 text-sm">{description}</p>
        </motion.div>
      ))}
    </motion.div>

      {/* Mission Vision Values */}
      <section className="py-20 px-4 sm:px-10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-extrabold text-blue-800 mb-6 drop-shadow-md">
            Shri Shivay Textiles
          </h2>
          <p className="text-gray-700 max-w-4xl mx-auto mb-16 text-xl leading-relaxed font-medium">
            We provide a premium range of <span className="font-bold text-blue-700">Horse Rope, Horse Halter, Dog Lead Rope & Dog Collar</span> — engineered for durability, designed for comfort, and trusted by pet lovers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {["Mission", "Vision", "Core Values"].map((title, i) => (
              <motion.div
                key={title}
                className="p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl border border-blue-200 transition-all duration-500"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={cardAnimation}
              >
                <h3 className="text-3xl font-bold text-blue-700 mb-4 tracking-wide">{title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {title === "Mission" && "To manufacture and deliver world-class horse and dog accessories that reflect quality, safety, and comfort — promoting animal well-being and complete customer satisfaction."}
                  {title === "Vision" && "To be a global leader in the pet and equestrian gear industry, known for innovation, craftsmanship, and uncompromised trust."}
                  {title === "Core Values" && "✔ Quality First\n✔ Ethical Manufacturing\n✔ Animal Safety\n✔ Innovation & Improvement\n✔ Customer-Centric Approach"}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-indigo-600 font-serif">
          Our Product Gallery
        </h2>
        <Gallary />
      </section>
    </div>
  );
};

export default AboutUs;
