import { motion } from "framer-motion";
import { Star, Phone, CheckCircle2, Pill, Trophy } from "lucide-react";

const DOCTOR_IMG = "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80";

const scrollTo = (id: string) => {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
};

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-navy overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 bg-gradient-mesh opacity-90" />
      {/* Floating blurred circles */}
      <div className="absolute top-20 -left-20 w-[400px] h-[400px] rounded-full bg-gold/15 blur-3xl animate-float" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] rounded-full bg-blue-500/15 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] rounded-full bg-gold/10 blur-3xl animate-float" style={{ animationDelay: "4s" }} />

      <div className="container mx-auto px-5 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-gold-light text-xs md:text-sm font-semibold mb-6 border border-gold/30"
            >
              <Trophy className="w-4 h-4" /> Gorakhpur's #1 Rated Clinic
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.05] mb-6"
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
              className="text-base md:text-lg text-white/80 max-w-xl mb-8 leading-relaxed"
            >
              Dr. S.K. Maurya — MBBS, MD (Medicine). Trusted care, expert medicine, and Gorakhpur's most loved doctor.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => scrollTo("#contact")}
                className="min-h-[52px] px-8 rounded-full bg-gradient-gold text-navy font-semibold shadow-gold-glow hover:scale-[1.03] transition-transform"
              >
                Book Appointment
              </button>
              <a
                href="tel:08546001986"
                className="min-h-[52px] px-8 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white hover:text-navy transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                085460 01986
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-white/50 text-xs mt-8 italic font-display"
            >
              "Trusted Care. Expert Medicine. Gorakhpur's Most Loved Doctor."
            </motion.p>
          </div>

          {/* RIGHT — Doctor image with floating cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mx-auto w-full max-w-md aspect-square"
          >
            {/* Gold radial glow */}
            <div className="absolute inset-0 rounded-full bg-gold/30 blur-3xl scale-95" />

            {/* Image frame */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full h-full rounded-full overflow-hidden border-4 border-gold shadow-gold-glow"
              style={{ boxShadow: "0 0 80px rgba(201,168,76,0.4), 0 0 0 8px rgba(201,168,76,0.1)" }}
            >
              <img
                src={DOCTOR_IMG}
                alt="Dr. S.K. Maurya, MD Medicine"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-4 -right-2 md:-right-6 glass-card rounded-2xl px-4 py-3 shadow-premium flex items-center gap-2"
            >
              <Star className="w-5 h-5 text-gold fill-current" />
              <div>
                <div className="text-navy font-bold text-sm leading-tight">4.9 Rating</div>
                <div className="text-[10px] text-muted-foreground">680+ reviews</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
              className="absolute bottom-10 -left-2 md:-left-6 glass-card rounded-2xl px-4 py-3 shadow-premium flex items-center gap-2"
            >
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <div>
                <div className="text-navy font-bold text-sm leading-tight">680+ Patients</div>
                <div className="text-[10px] text-muted-foreground">Treated with care</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-2 right-4 md:right-8 glass-card rounded-2xl px-4 py-3 shadow-premium flex items-center gap-2"
            >
              <Pill className="w-5 h-5 text-gold" />
              <div>
                <div className="text-navy font-bold text-sm leading-tight">Expert Medicine</div>
                <div className="text-[10px] text-muted-foreground">MBBS, MD</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
