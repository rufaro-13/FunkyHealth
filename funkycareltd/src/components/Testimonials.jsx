import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Family Member",
    text: "The care and attention provided was exceptional. Truly compassionate support every day.",
  },
  {
    name: "Michael Brown",
    role: "Client",
    text: "I feel safe, respected, and supported. The team genuinely cares about people.",
  },
  {
    name: "Emma Wilson",
    role: "Daughter",
    text: "Professional, warm, and reliable service. It gave our family real peace of mind.",
  },
  {
    name: "David Lee",
    role: "Client",
    text: "Excellent support tailored to individual needs. Highly recommended service.",
  },
];

export default function Testimonials() {
  const containerRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto-play
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [paused]);

  const scrollToIndex = (i) => {
    const container = containerRef.current;
    if (!container) return;

    const cardWidth = container.offsetWidth * 0.7;
    container.scrollTo({
      left: i * cardWidth,
      behavior: "smooth",
    });

    setIndex(i);
  };

  const next = () => scrollToIndex((index + 1) % testimonials.length);
  const prev = () =>
    scrollToIndex(
      index === 0 ? testimonials.length - 1 : index - 1
    );

  return (
    <section className="w-full md:py-20 py-10 bg-gradient-to-b from-white to-teal-50">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-teal-600 uppercase tracking-[0.35em] text-sm font-semibold">
          Testimonials
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-cyan-950">
          What people say about us
        </h2>
      </div>

      {/* Carousel Wrapper */}
      <div
        className="relative max-w-6xl mx-auto px-4"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Buttons */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-md shadow-lg rounded-full p-3 hover:scale-110 transition"
        >
          ◀
        </button>

        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-md shadow-lg rounded-full p-3 hover:scale-110 transition"
        >
          ▶
        </button>

        {/* Scroll Container */}
        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-hidden scroll-smooth"
        >
          {testimonials.concat(testimonials).map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03, rotateX: 2 }}
              transition={{ duration: 0.5 }}
              className="min-w-[320px] md:min-w-[420px] bg-white/70 backdrop-blur-xl border border-teal-100 shadow-xl rounded-3xl p-4 md:p-8"
            >
              {/* Quote */}
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                “{t.text}”
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-cyan-950">
                    {t.name}
                  </h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>

                <div className="text-teal-500 text-lg">★★★★★</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              className={`h-2.5 rounded-full transition-all ${
                i === index ? "w-6 bg-teal-500" : "w-2 bg-teal-200"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}