import { motion } from "framer-motion";
import { Star, Quote, ExternalLink } from "lucide-react";

const reviews = [
  {
    name: "Pratik Kannaujia",
    initials: "PK",
    text: "Dr. S.K. Maurya is such a good and caring doctor. He guided me during my whole treatment which was really helpful. Thank you doctor for everything.",
  },
  {
    name: "Nasruddin Khan",
    initials: "NK",
    text: "Dr SK Maurya is one of the most talented and well experienced doctors in Gorakhpur. I strongly recommend anyone who really wants good treatment.",
  },
  {
    name: "Rikesh Roy",
    initials: "RR",
    text: "I would like to express my heartfelt thanks to Dr. S.K. Maurya and all the staff for their excellent service and compassionate care.",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 text-gold-dark text-sm font-semibold mb-5">
            <span className="flex">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </span>
            4.9 / 5 · 680+ Google Reviews
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            What Our <span className="text-gold">Patients Say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.article
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-white rounded-2xl p-7 shadow-card-soft hover:shadow-card-hover hover:-translate-y-1 transition-all border border-navy/5"
            >
              <Quote className="absolute top-5 right-5 w-10 h-10 text-gold/25" fill="currentColor" />
              <div className="flex gap-0.5 mb-4 text-gold">
                {[0, 1, 2, 3, 4].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-foreground/85 leading-relaxed mb-6 text-sm">"{r.text}"</p>
              <div className="flex items-center gap-3 pt-5 border-t border-navy/5">
                <div className="w-11 h-11 rounded-full bg-gradient-navy flex items-center justify-center text-gold font-semibold text-sm">
                  {r.initials}
                </div>
                <div>
                  <div className="font-semibold text-navy text-sm">{r.name}</div>
                  <div className="text-xs text-muted-foreground">Verified Google Review</div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.google.com/maps/search/Ekanshi+Polyclinic+Dr+SK+Maurya+Gorakhpur"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 min-h-[52px] px-7 rounded-full bg-navy text-white font-semibold hover:bg-navy-light transition-colors shadow-premium"
          >
            See All 680+ Reviews on Google
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
