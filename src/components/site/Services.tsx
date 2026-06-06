import { motion } from "framer-motion";
import { Stethoscope, Droplet, Bug, Heart, Dna, Pill } from "lucide-react";

const services = [
  { icon: Stethoscope, title: "General Medicine", desc: "Fever, infections, body weakness and overall wellness checkups." },
  { icon: Droplet, title: "Diabetes & Sugar Control", desc: "Long-term management, lifestyle planning and regular monitoring." },
  { icon: Bug, title: "Dengue & Viral Fever", desc: "Fast diagnosis and targeted treatment for seasonal infections." },
  { icon: Heart, title: "Kidney Health", desc: "Creatinine level management, prevention and ongoing care." },
  { icon: Dna, title: "Thyroid Disorders", desc: "Expert care for both hypothyroid and hyperthyroid conditions." },
  { icon: Pill, title: "Preventive Healthcare", desc: "Routine checkups, immunity guidance and long-term wellness plans." },
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-background relative">
      <div className="container mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 text-gold-dark text-xs font-semibold mb-5">
            OUR EXPERTISE
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Conditions <span className="text-gold">We Treat</span>
          </h2>
          <p className="text-muted-foreground">
            Comprehensive medical care across the most common and critical conditions — backed by years of expertise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative bg-white rounded-2xl p-7 border-l-4 border-navy shadow-card-soft hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-bl-[5rem] rounded-tr-2xl group-hover:bg-gold/10 transition-colors" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold/15 to-gold/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <s.icon className="w-7 h-7 text-gold" strokeWidth={1.8} />
                </div>
                <h3 className="text-xl font-bold text-navy mb-2 font-display">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
