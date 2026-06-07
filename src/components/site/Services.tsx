import { motion } from "framer-motion";
import { Stethoscope, Droplet, Bug, Heart, Dna, Pill } from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "General Medicine",
    desc: "Fever, infections, body weakness and overall wellness checkups.",
    img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&q=80",
  },
  {
    icon: Droplet,
    title: "Diabetes & Sugar Control",
    desc: "Long-term management, lifestyle planning and regular monitoring.",
    img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&q=80",
  },
  {
    icon: Bug,
    title: "Dengue & Viral Fever",
    desc: "Fast diagnosis and targeted treatment for seasonal infections.",
    img: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=400&q=80",
  },
  {
    icon: Heart,
    title: "Kidney Health",
    desc: "Creatinine level management, prevention and ongoing care.",
    img: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400&q=80",
  },
  {
    icon: Dna,
    title: "Thyroid Disorders",
    desc: "Expert care for both hypothyroid and hyperthyroid conditions.",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80",
  },
  {
    icon: Pill,
    title: "Preventive Healthcare",
    desc: "Routine checkups, immunity guidance and long-term wellness plans.",
    img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&q=80",
  },
];

export function Services() {
  return (
    <section id="services" className="py-12 md:py-20 bg-background relative">
      <div className="container mx-auto px-6 md:px-8 max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 text-gold-dark font-semibold mb-4" style={{ fontSize: "0.75rem", letterSpacing: "0.1em" }}>
            OUR EXPERTISE
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Conditions <span className="text-gold">We Treat</span>
          </h2>
          <p className="text-muted-foreground" style={{ lineHeight: 1.75 }}>
            Comprehensive medical care across the most common and critical conditions — backed by years of expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-card-soft hover:shadow-card-hover hover:scale-[1.03] transition-all duration-300"
            >
              <div className="relative h-[160px] md:h-[180px] overflow-hidden bg-navy/5">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
              </div>
              <div className="p-4 md:p-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center mb-4 -mt-12 relative border-4 border-white shadow-card-soft">
                  <s.icon className="w-6 h-6 text-gold" strokeWidth={1.8} />
                </div>
                <h3 className="text-xl font-bold text-navy mb-2 font-display">{s.title}</h3>
                <p className="text-muted-foreground text-sm" style={{ lineHeight: 1.75 }}>{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
