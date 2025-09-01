import { useState, useEffect } from "react";
import img1 from "../assets/kasjfhkjhfKJ.jpg";
import img2 from "../assets/rsrsrsxgcugi.jpg";
import img3 from "../assets/kasjfhkjhfKJ.jpg";
import img4 from "../assets/ysafdhgsafha.jpg";
import img5 from "../assets/dagh.jpg";
import img6 from "../assets/71ANsEM9+zL.jpg";

// Fallback image
const fallbackImage =
  "https://via.placeholder.com/600x400.png?text=Image+Not+Available";

const data = [
  {
    title: "Premium Horse Halter",
    description:
      "Strong and comfortable halters designed for daily use, offering style and safety for your horse.",
    image: img1,
  },
  {
    title: "Durable Dog Collar",
    description:
      "Adjustable, comfortable, and stylish collars perfect for dogs of all sizes and breeds.",
    image: img2,
  },
  {
    title: "Horse Lead Rope",
    description:
      "High-quality lead ropes that provide a secure and comfortable grip for leading your horse.",
    image: img3,
  },
  {
    title: "Dog Lead Rope",
    description:
      "Tangle-free, durable dog lead ropes for safe and easy walks with your furry companion.",
    image: img4,
  },
  {
    title: "Rope Halter",
    description:
      "Handcrafted rope halters designed for comfort, control, and training efficiency.",
    image: img5,
  },
  {
    title: "Training Lead Rope",
    description:
      "Perfect for training and groundwork, offering strength and flexibility for all situations.",
    image: img6,
  },
];

export default function ImageAccordion() {
  const [selected, setSelected] = useState(0);
  const [fade, setFade] = useState(true);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const autoSlide = setInterval(() => {
      setSelected((prev) => (prev + 1) % data.length);
    }, 5000);
    return () => clearInterval(autoSlide);
  }, []);

  // Smooth fade effect
  useEffect(() => {
    setFade(false);
    const timeout = setTimeout(() => setFade(true), 80);
    return () => clearTimeout(timeout);
  }, [selected]);

  return (
    <section>
          <h2 className="text-2xl md:text-4xl font-extrabold text-center text-blue-900 mb-16 relative">
        FAQ
        <span className="block w-24 h-1 mx-auto mt-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse" />
      </h2>
    <div className="w-full max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Left Side - Image */}
      <div className="relative w-full h-[380px] rounded-3xl overflow-hidden shadow-2xl group">
        <img
          src={data[selected].image || fallbackImage}
          alt={data[selected].title}
          onError={(e) => (e.target.src = fallbackImage)}
          className={`w-full h-full object-contain bg-black transition-all duration-[1200ms] ease-in-out group-hover:scale-110 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        {/* Title Overlay */}
        <div className="absolute bottom-6 left-6 text-white drop-shadow-xl">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-wide">
            {data[selected].title}
          </h2>
          <div className="w-14 h-1 bg-gradient-to-r from-indigo-400 to-purple-500 mt-2 rounded-full"></div>
        </div>
      </div>

      {/* Right Side - Accordion Content */}
<div className="flex flex-col gap-3">
  {data.map((item, index) => (
    <div
      key={index}
      onClick={() => setSelected(index)}
      className={`p-3 rounded-xl border backdrop-blur-md transition-all duration-500 cursor-pointer relative overflow-hidden
        ${
          selected === index
            ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-transparent shadow-md scale-[1.02]"
            : "bg-white/70 text-gray-800 border-gray-200 shadow hover:border-indigo-400 hover:shadow-md hover:scale-[1.01]"
        }`}
    >
      {/* Glow effect when active */}
      {selected === index && (
        <div className="absolute inset-0 bg-white/10 blur-xl rounded-xl" />
      )}

      <div className="relative z-10">
        <h3 className="text-sm md:text-base font-semibold flex justify-between items-center">
          {item.title}
          <span
            className={`transition-transform duration-300 text-lg ${
              selected === index ? "rotate-90" : ""
            }`}
          >
            ➤
          </span>
        </h3>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            selected === index
              ? "max-h-20 mt-2 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <p className="text-xs md:text-sm leading-relaxed opacity-90">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>

    </div>
    </section>
  );
}
