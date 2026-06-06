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
    const onScroll = () => setScrolled(window.scrollY > 20);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-card shadow-card-soft py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="container mx-auto px-5 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleClick("#home"); }}
          className="flex items-center gap-2 group"
          aria-label="Ekanshi Polyclinic home"
        >
          <span className="relative w-9 h-9 rounded-lg bg-gradient-navy flex items-center justify-center shadow-card-soft">
            <Plus className="w-5 h-5 text-white" strokeWidth={3} />
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-gold" />
          </span>
          <span className="font-display text-xl md:text-2xl font-bold text-navy leading-none">
            Ekanshi <span className="text-gold">Polyclinic</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => { e.preventDefault(); handleClick(l.href); }}
                className="text-sm font-medium text-navy/80 hover:text-gold transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 hover:after:w-full after:bg-gold after:transition-all"
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
            className="lg:hidden p-2 rounded-md text-navy"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden mt-3 mx-5 glass-card rounded-2xl p-5 animate-fade-in">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={(e) => { e.preventDefault(); handleClick(l.href); }}
                  className="block py-3 px-3 rounded-lg text-navy font-medium hover:bg-navy/5"
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
