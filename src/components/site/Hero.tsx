import { motion } from "framer-motion";
import { Star, Phone, CheckCircle2, Pill, Trophy } from "lucide-react";

const DOCTOR_IMG = "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80";

const scrollTo = (id: string) => {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
};

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-navy overflow-hidden pt-28 pb-12 md:pt-32 md:pb-20">
      <div className="absolute inset-0 bg-gradient-mesh opacity-90" />
      <div className="absolute top-20 -left-20 w-[400px] h-[400px] rounded-full bg-gold/15 blur-3xl animate-float" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] rounded-full bg-blue-500/15 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] rounded-full bg-gold/10 blur-3xl animate-float" style={{ animationDelay: "4s" }} />

      <div className="container mx-auto px-6 md:px-8 max-w-[1200px] relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT */}
          <div className="text-center lg:text-left">
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
              className="font-bold text-white leading-[1.1] mb-6"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
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
              className="text-base md:text-lg text-white/85 max-w-xl mx-auto lg:mx-0 mb-8"
              style={{ lineHeight: 1.75 }}
            >
              Dr. S.K. Maurya — MBBS, MD (Medicine). Trusted care, expert medicine, and Gorakhpur's most loved doctor.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <button
                onClick={() => scrollTo("#contact")}
                className="w-full sm:w-auto min-h-[48px] px-8 py-3 rounded-full bg-[#C9A84C] text-[#0A1628] font-bold shadow-gold-glow hover:bg-[#b8963f] transition-all"
              >
                Book Appointment
              </button>
              <a
                href="tel:08546001986"
                className="w-full sm:w-auto min-h-[48px] px-8 py-3 rounded-full border-2 border-white text-white font-semibold hover:bg-white hover:text-[#0A1628] transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                085460 01986
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="hidden md:block text-white/50 text-xs mt-8 italic font-display"
            >
              "Trusted Care. Expert Medicine. Gorakhpur's Most Loved Doctor."
            </motion.p>
          </div>

          {/* RIGHT — Doctor image with floating cards (constrained) */}
          <div className="relative w-full flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-full max-w-[280px] md:max-w-md aspect-square"
            >
              {/* Gold radial glow */}
              <div className="absolute inset-0 rounded-full bg-gold/30 blur-3xl scale-95" />

              {/* Image frame */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full h-full rounded-full overflow-hidden border-4 border-gold shadow-gold-glow"
                style={{ boxShadow: "0 0 80px rgba(201,168,76,0.4), 0 0 0 8px rgba(201,168,76,0.1)", zIndex: 5 }}
              >
                <img
                  src={DOCTOR_IMG}
                  alt="Dr. S.K. Maurya, MD Medicine"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating cards — hidden on mobile to prevent overflow */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="hidden md:flex absolute top-6 right-0 glass-card rounded-2xl px-4 py-3 shadow-premium items-center gap-2"
                style={{ zIndex: 10 }}
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
                className="hidden md:flex absolute bottom-12 left-0 glass-card rounded-2xl px-4 py-3 shadow-premium items-center gap-2"
                style={{ zIndex: 10 }}
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
                className="hidden md:flex absolute -bottom-2 right-4 glass-card rounded-2xl px-4 py-3 shadow-premium items-center gap-2"
                style={{ zIndex: 10 }}
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
      </div>
    </section>
  );
}
