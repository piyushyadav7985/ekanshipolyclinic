import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const points = [
  "Caring and Patient Doctor",
  "Affordable & Reliable Treatment",
  "Clean & Well-Organized Clinic",
  "Minimal Waiting Time",
];

const scrollTo = (id: string) => {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
};

export function ClinicVideo() {
  return (
    <section className="py-20 md:py-28 bg-gradient-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
      <div className="container mx-auto px-5 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden aspect-video shadow-premium border-2 border-gold/30"
          >
            <iframe
              src="https://www.youtube.com/embed/YEkGMBBfLxA?autoplay=1&mute=1&loop=1&playlist=YEkGMBBfLxA&controls=0&showinfo=0&modestbranding=1"
              title="Ekanshi Polyclinic atmosphere"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 text-gold-light text-xs font-semibold mb-5 border border-gold/30">
              EXPERIENCE THE DIFFERENCE
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              A Clinic <span className="text-gold">That Cares</span>
            </h2>
            <p className="text-white/70 mb-8 leading-relaxed">
              Step into a space designed around your comfort, your time, and your health.
            </p>

            <ul className="space-y-4 mb-10">
              {points.map((p, i) => (
                <motion.li
                  key={p}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.12 }}
                  className="flex items-center gap-3 text-white"
                >
                  <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0" />
                  <span className="text-base md:text-lg">{p}</span>
                </motion.li>
              ))}
            </ul>

            <button
              onClick={() => scrollTo("#contact")}
              className="min-h-[52px] px-8 rounded-full bg-gradient-gold text-navy font-semibold shadow-gold-glow hover:scale-[1.03] transition-transform"
            >
              Book Your Visit Today
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
