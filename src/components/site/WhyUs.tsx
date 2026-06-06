import { motion } from "framer-motion";
import { HeartHandshake, Wallet, Sparkles, Clock } from "lucide-react";

const items = [
  { icon: HeartHandshake, title: "Caring & Patient Doctor", desc: "Time taken to listen to every concern." },
  { icon: Wallet, title: "Reliable & Affordable", desc: "Honest, transparent treatment costs." },
  { icon: Sparkles, title: "Clean, Organized Clinic", desc: "Hygienic, modern, comfortable space." },
  { icon: Clock, title: "Minimal Waiting Time", desc: "Respect for your time, every visit." },
];

export function WhyUs() {
  return (
    <section className="py-20 md:py-28 bg-secondary/40 relative overflow-hidden">
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-5 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 text-gold-dark text-xs font-semibold mb-5">
            WHY PATIENTS CHOOSE US
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            The Difference, <span className="text-gold">Felt First Visit</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card rounded-2xl p-6 text-center hover:-translate-y-1 hover:shadow-card-hover transition-all"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-navy flex items-center justify-center shadow-card-soft">
                <it.icon className="w-7 h-7 text-gold" strokeWidth={1.8} />
              </div>
              <h3 className="font-display text-lg font-bold text-navy mb-2">{it.title}</h3>
              <p className="text-sm text-muted-foreground">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
