import logo from "../assets/e1.png";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative text-black pt-14 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 bg-cover bg-center overflow-hidden"
    >
      {/* Gradient Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-200 via-blue-100 to-blue-200 opacity-70 z-0" />

      {/* WhatsApp Floating Button */}


      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Logo + About */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img src={logo} alt="Logo" className="w-40 mb-4" />
            <p className="text-sm text-gray-800 leading-relaxed">
              Shri Shivay Textiles - Araji 152 Plot No 6, Partapur Majra Rampur, Mahadev Trader And Hardware, Mardan Pur, Kanpur Nagar, UP - 208021
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-4 text-gray-800">
              <a href="#" className="hover:text-pink-500 transition"><i className="fab fa-instagram text-xl"></i></a>
              <a href="#" className="hover:text-blue-500 transition"><i className="fab fa-facebook-f text-xl"></i></a>
              <a href="#" className="hover:text-sky-400 transition"><i className="fab fa-twitter text-xl"></i></a>
              <a href="#" className="hover:text-blue-400 transition"><i className="fab fa-linkedin-in text-xl"></i></a>
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-gray-900">COMPANY</h3>
            <ul className="space-y-2 text-sm text-gray-800">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/AboutUs" className="hover:underline">About Us</Link></li>
              <li><Link to="/products" className="hover:underline">Products</Link></li>
              <li><Link to="//ContactSection" className="hover:underline">Contact</Link></li>
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Address</h3>
            <ul className="space-y-2 text-sm text-gray-800">
              <li><a href="#" className="hover:underline">Shri Shivay Textiles</a></li>
              <li><a href="#" className="hover:underline">Partapur Majra Rampur, Mahadev Trader</a></li>
              <li><a href="#" className="hover:underline">Mardan Pur, Kanpur, Kanpur Nagar-208021, Uttar Pradesh</a></li>
              <li><a href="#" className="hover:underline">+91-6394769353</a></li>
              <li><a href="#" className="hover:underline">+91-9794243644</a></li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-gray-900">STAY UPDATED</h3>
            <p className="text-sm text-gray-800 mb-4">
              Subscribe for updates and exclusive offers on handmade pet & equine gear.
            </p>
            <div className="flex w-full">
              <input
                type="email"
                placeholder="Your email"
                className="bg-white text-black rounded-l px-3 py-2 w-full text-sm outline-none"
              />
              <button className="bg-blue-600 hover:bg-blue-700 transition px-4 rounded-r">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m14 0-4 4m4-4-4-4" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <hr className="border-gray-300 mt-10" />
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between py-6 text-sm text-gray-700">
          <p>© {new Date().getFullYear()} VD Elevate Tech Solutions. All rights reserved.</p>
          <ul className="flex gap-4">
            <li><a href="#" className="hover:underline">Privacy</a></li>
            <li><a href="#" className="hover:underline">Terms</a></li>
            <li><a href="#" className="hover:underline">Sitemap</a></li>
          </ul>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
