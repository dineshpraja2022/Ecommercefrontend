import ProductCard from "./ProductCard";
import { useAppContext } from "../context/AppContext";
import { motion } from "framer-motion";

const BestSeller = () => {
  const { products } = useAppContext();

  // Filter only in-stock products & pick top 5
  const bestSellers = products?.filter((p) => p.inStock).slice(0, 5) || [];

  return (
    <section className="py-20 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 overflow-hidden">
      {/* Heading */}
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center text-blue-800 mb-4 relative"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Best Sellers
        <span className="block w-24 h-1 mt-3 bg-blue-500 mx-auto rounded-full shadow-md shadow-blue-300" />
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="text-center text-gray-600 mb-12 text-sm sm:text-base md:text-lg max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >
        Handpicked favorites loved by our happy pets and their humans 🐾
      </motion.p>

      {/* Products Grid */}
      {bestSellers.length > 0 ? (
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {bestSellers.map((product, index) => (
            <motion.div
              key={product._id || index}
              className="bg-white p-4 rounded-2xl border border-blue-100 shadow-xl hover:shadow-blue-300 hover:scale-105 hover:-translate-y-2 transition duration-300 ease-in-out"
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.p
          className="text-center text-gray-500 text-lg mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          🚫 No best sellers available right now. Please check back later!
        </motion.p>
      )}
    </section>
  );
};

export default BestSeller;
