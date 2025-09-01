import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonials = [
  { name: "Ravi", review: "The halters are super strong and stylish. Highly recommended!" },
  { name: "Sneha", review: "Loved the quality of the dog collars. Very comfortable for my pet!" },
  { name: "Arjun", review: "Fast delivery and excellent service. The lead rope is perfect." },
];

const CustomerReviews = () => {
  return (
    <section className="py-24 px-6 md:px-20 ">
      <h2 className="text-2xl md:text-4xl font-extrabold text-center text-blue-900 mb-16 relative">
        What Our Customers Say
        <span className="block w-24 h-1 mx-auto mt-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse" />
      </h2>

      <div className="grid gap-10 md:grid-cols-3 sm:grid-cols-1">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl p-8 border border-blue-100 hover:shadow-blue-300/40 hover:scale-[1.03] transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-10 blur-2xl" />

            <div className="flex justify-center mb-5">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  className="text-yellow-400 text-xl group-hover:scale-125 transition-transform duration-200"
                />
              ))}
            </div>

            <p className="text-gray-700 italic text-[17px] leading-relaxed mb-6 relative z-10">
              “{t.review}”
            </p>
            <h4 className="font-bold text-blue-800 text-lg relative z-10">— {t.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
