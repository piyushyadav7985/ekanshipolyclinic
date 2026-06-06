import { motion } from "framer-motion";
import { Star, Users, Hospital, Phone } from "lucide-react";

const scrollTo = (id: string) => {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
};

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-navy overflow-hidden pt-28 pb-20">
      {/* Mesh + particles */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-90" />
      <div className="absolute inset-0">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-gold/30 animate-float"
            style={{
              width: `${4 + (i % 5) * 3}px`,
              height: `${4 + (i % 5) * 3}px`,
              left: `${(i * 53) % 100}%`,
              top: `${(i * 37) % 100}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${6 + (i % 5)}s`,
            }}
          />
        ))}
      </div>
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-3xl" />

      <div className="container mx-auto px-5 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-gold-light text-xs md:text-sm font-medium mb-7 border border-gold/20"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Now accepting new patients in Gorakhpur
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6"
          >
            Expert Medical Care<br />
            <span className="bg-gradient-to-r from-gold-light to-gold bg-clip-text text-transparent">
              You Can Trust
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-base md:text-xl text-white/75 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Dr. S.K. Maurya — MBBS, MD (Medicine)
            <span className="block text-gold-light/90 mt-1 text-sm md:text-base">Gorakhpur's Top-Rated Physician</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-3 md:gap-5 mb-11"
          >
            {[
              { icon: Star, label: "4.9 Rating", sub: "680+ reviews" },
              { icon: Users, label: "680+ Patients", sub: "Treated with care" },
              { icon: Hospital, label: "10+ Years", sub: "Trusted experience" },
            ].map((b, i) => (
              <div key={i} className="glass-dark rounded-2xl px-4 md:px-5 py-3 flex items-center gap-3 border-gold/10">
                <span className="w-9 h-9 rounded-xl bg-gold/15 flex items-center justify-center">
                  <b.icon className="w-4 h-4 text-gold-light" fill={i === 0 ? "currentColor" : "none"} />
                </span>
                <span className="text-left">
                  <span className="block text-white font-semibold text-sm">{b.label}</span>
                  <span className="block text-white/55 text-[11px]">{b.sub}</span>
                </span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => scrollTo("#contact")}
              className="w-full sm:w-auto min-h-[52px] px-8 rounded-full bg-gradient-gold text-navy font-semibold shadow-gold-glow hover:scale-[1.03] transition-transform"
            >
              Book Appointment
            </button>
            <a
              href="tel:08546001986"
              className="w-full sm:w-auto min-h-[52px] px-8 rounded-full border-2 border-white/30 text-white font-semibold backdrop-blur-sm hover:bg-white hover:text-navy transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call Now: 085460 01986
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-white/45 text-xs mt-12 italic font-display"
          >
            "Trusted Care. Expert Medicine. Gorakhpur's Most Loved Doctor."
          </motion.p>
        </div>
      </div>
    </section>
  );
}
