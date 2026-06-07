import { motion } from "framer-motion";
import { Stethoscope, Award, GraduationCap, ShieldCheck } from "lucide-react";

const DOCTOR_IMG = "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80";
const credentials = ["MBBS", "MD Medicine", "General Physician", "Diabetes Expert"];

export function About() {
  return (
    <section id="about" className="py-12 md:py-20 bg-secondary/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 md:px-8 max-w-[1200px] relative">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto lg:mx-0 max-w-[320px] md:max-w-md w-full"
          >
            <div className="absolute -inset-6 bg-gold/20 blur-3xl rounded-[3rem]" />
            <div
              className="relative aspect-[4/5] rounded-[2rem] border-4 border-gold shadow-premium"
              style={{ boxShadow: "0 0 60px rgba(201,168,76,0.35)" }}
            >
              <div className="absolute inset-0 rounded-[1.7rem] overflow-hidden">
                <img
                  src={DOCTOR_IMG}
                  alt="Dr. S.K. Maurya"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-navy via-navy/80 to-transparent">
                  <div className="text-white font-display text-xl font-semibold">Dr. S.K. Maurya</div>
                  <div className="text-gold-light text-sm">MBBS, MD (Medicine)</div>
                </div>
              </div>

              {/* Floating labels inside card bounds */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute glass-card rounded-2xl p-3 shadow-premium flex items-center gap-2"
                style={{ top: "-12px", left: "16px", zIndex: 20 }}
              >
                <Award className="w-5 h-5 text-gold" />
                <div>
                  <div className="text-[10px] text-muted-foreground leading-tight">Specialty</div>
                  <div className="text-xs font-bold text-navy">MD Medicine</div>
                </div>
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute glass-card rounded-2xl p-3 shadow-premium flex items-center gap-2"
                style={{ bottom: "16px", left: "16px", zIndex: 20 }}
              >
                <ShieldCheck className="w-5 h-5 text-gold" />
                <div>
                  <div className="text-[10px] text-muted-foreground leading-tight">Verified</div>
                  <div className="text-xs font-bold text-navy">Board Certified</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 text-gold-dark text-xs font-semibold mb-5">
              <Stethoscope className="w-3.5 h-3.5" /> ABOUT THE DOCTOR
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Meet <span className="text-gold">Dr. S.K. Maurya</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
              Dr. Maurya holds an MBBS and MD in Medicine, bringing years of compassionate expertise to every patient. Known for his caring nature, precise diagnosis, and affordable treatment — he is consistently rated Gorakhpur's most trusted physician by hundreds of grateful patients.
            </p>

            <div className="flex flex-wrap gap-2.5 mb-8">
              {credentials.map((c, i) => (
                <motion.span
                  key={c}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border-2 border-gold/40 text-navy text-sm font-medium shadow-card-soft"
                >
                  <GraduationCap className="w-3.5 h-3.5 text-gold" />
                  {c}
                </motion.span>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-navy/10">
              <div>
                <div className="font-display text-2xl font-bold text-navy">680+</div>
                <div className="text-xs text-muted-foreground">Happy patients</div>
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-navy">10+</div>
                <div className="text-xs text-muted-foreground">Years experience</div>
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-navy">4.9★</div>
                <div className="text-xs text-muted-foreground">Google rating</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
