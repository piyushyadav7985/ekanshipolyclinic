import { Plus, MapPin, Phone, Clock } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const scrollTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  return (
    <footer className="bg-gradient-navy text-white pt-16 pb-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      <div className="container mx-auto px-5 relative">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="relative w-9 h-9 rounded-lg bg-gold flex items-center justify-center">
                <Plus className="w-5 h-5 text-navy" strokeWidth={3} />
              </span>
              <span className="font-display text-xl font-bold">Ekanshi <span className="text-gold">Polyclinic</span></span>
            </div>
            <p className="text-white/65 text-sm leading-relaxed italic font-display">
              "Trusted Care. Expert Medicine. Gorakhpur's Most Loved Doctor."
            </p>
          </div>

          <div>
            <h4 className="text-gold text-xs uppercase tracking-wider font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(l.href); }}
                    className="text-white/75 hover:text-gold text-sm transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gold text-xs uppercase tracking-wider font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-white/75">
              <li className="flex gap-3"><MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gold" /> 241 A, Medical College Road, Basharatpur, Gorakhpur, UP 273014</li>
              <li className="flex gap-3"><Phone className="w-4 h-4 mt-0.5 shrink-0 text-gold" /> <a href="tel:08546001986" className="hover:text-gold">085460 01986</a></li>
              <li className="flex gap-3"><Clock className="w-4 h-4 mt-0.5 shrink-0 text-gold" /> Mon – Sat · Closed Sundays</li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© 2025 Ekanshi Polyclinic. Designed with care.</p>
          <p>Website by <span className="text-gold/80">Alpha Media</span></p>
        </div>
      </div>
    </footer>
  );
}
