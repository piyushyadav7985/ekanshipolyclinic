import { useState, useEffect } from "react";
import { Menu, X, Plus } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${
        scrolled ? "bg-navy/90 shadow-premium py-3" : "bg-navy/70 py-5"
      }`}
    >
      <nav className="container mx-auto px-5 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleClick("#home"); }}
          className="flex items-center gap-2.5 group"
          aria-label="Ekanshi Polyclinic home"
        >
          <span className="relative w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-card-soft">
            <Plus className="w-6 h-6 text-red-600" strokeWidth={3.5} />
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-gold" />
          </span>
          <span className="font-display text-xl md:text-2xl font-bold text-white leading-none">
            Ekanshi <span className="text-gold">Polyclinic</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => { e.preventDefault(); handleClick(l.href); }}
                style={{ color: "rgba(255,255,255,0.85)" }}
                className="text-sm font-medium hover:!text-gold transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 hover:after:w-full after:bg-gold after:transition-all"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={() => handleClick("#contact")}
            className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-gold text-navy font-semibold text-sm shadow-gold-glow hover:scale-105 transition-transform"
          >
            Book Appointment
          </button>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 rounded-md text-white"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden mt-3 mx-5 bg-navy/95 backdrop-blur-lg rounded-2xl p-5 animate-fade-in border border-white/10">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={(e) => { e.preventDefault(); handleClick(l.href); }}
                  className="block py-3 px-3 rounded-lg text-white/90 font-medium hover:bg-white/10 hover:text-gold"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={() => handleClick("#contact")}
                className="mt-2 w-full py-3 rounded-full bg-gradient-gold text-navy font-semibold shadow-gold-glow"
              >
                Book Appointment
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
