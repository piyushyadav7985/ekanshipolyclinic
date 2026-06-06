import { motion } from "framer-motion";
import { Stethoscope, Award, GraduationCap, ShieldCheck } from "lucide-react";

const credentials = ["MBBS", "MD (Medicine)", "General Physician", "Diabetes Specialist"];

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-secondary/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-5 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto lg:mx-0 max-w-md w-full"
          >
            <div className="relative aspect-square rounded-[2rem] bg-gradient-navy shadow-premium overflow-hidden">
              <div className="absolute inset-0 bg-gradient-mesh opacity-60" />
              {/* Doctor silhouette */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 200 200" className="w-3/4 h-3/4 text-gold/80">
                  <circle cx="100" cy="70" r="32" fill="currentColor" opacity="0.85" />
                  <path d="M40 200 Q40 130 100 130 Q160 130 160 200 Z" fill="currentColor" opacity="0.85" />
                  <rect x="85" y="130" width="30" height="50" fill="white" opacity="0.95" />
                  <circle cx="100" cy="158" r="3" fill="var(--color-navy)" />
                  <path d="M95 145 L95 175 M105 145 L105 175" stroke="var(--color-navy)" strokeWidth="2" />
                </svg>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-navy via-navy/80 to-transparent">
                <div className="text-white font-display text-xl font-semibold">Dr. S.K. Maurya</div>
                <div className="text-gold-light text-sm">MBBS, MD (Medicine)</div>
              </div>
            </div>
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-5 -right-5 glass-card rounded-2xl p-4 shadow-premium flex items-center gap-3"
            >
              <Award className="w-7 h-7 text-gold" />
              <div>
                <div className="text-xs text-muted-foreground">Top Rated</div>
                <div className="text-sm font-bold text-navy">4.9 ★ in Gorakhpur</div>
              </div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-5 -left-5 glass-card rounded-2xl p-4 shadow-premium flex items-center gap-3"
            >
              <ShieldCheck className="w-7 h-7 text-gold" />
              <div>
                <div className="text-xs text-muted-foreground">Verified</div>
                <div className="text-sm font-bold text-navy">Board Certified</div>
              </div>
            </motion.div>
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
              {credentials.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-navy/10 text-navy text-sm font-medium shadow-card-soft"
                >
                  <GraduationCap className="w-3.5 h-3.5 text-gold" />
                  {c}
                </span>
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
