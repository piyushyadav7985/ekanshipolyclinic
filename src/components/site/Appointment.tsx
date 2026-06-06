import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, CheckCircle2, Send } from "lucide-react";

export function Appointment() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", age: "", reason: "", date: "" });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setForm({ name: "", phone: "", age: "", reason: "", date: "" });
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-secondary/40 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-navy/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-5 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 text-gold-dark text-xs font-semibold mb-5">
            GET IN TOUCH
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Book Your <span className="text-gold">Appointment</span>
          </h2>
          <p className="text-muted-foreground">Reach out today — our team responds quickly to confirm your visit.</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 rounded-3xl bg-gradient-navy p-8 md:p-10 text-white shadow-premium relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
            <div className="relative">
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">Visit our clinic</h3>
              <p className="text-white/65 text-sm mb-8">We're here to care for you and your family.</p>

              <ul className="space-y-6 mb-8">
                <li className="flex gap-4">
                  <span className="shrink-0 w-11 h-11 rounded-xl bg-gold/15 border border-gold/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-gold-light" />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-gold-light/80 mb-1">Address</div>
                    <div className="text-sm text-white/90 leading-relaxed">
                      241 A, Medical College Road, near HN Singh Chowk, Basharatpur, Gorakhpur, Uttar Pradesh 273014
                    </div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="shrink-0 w-11 h-11 rounded-xl bg-gold/15 border border-gold/20 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-gold-light" />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-gold-light/80 mb-1">Phone</div>
                    <a href="tel:08546001986" className="text-sm text-white/90 hover:text-gold-light">085460 01986</a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="shrink-0 w-11 h-11 rounded-xl bg-gold/15 border border-gold/20 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-gold-light" />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-gold-light/80 mb-1">Timings</div>
                    <div className="text-sm text-white/90">Mon – Sat · Closed Sundays</div>
                  </div>
                </li>
              </ul>

              <a
                href="tel:08546001986"
                className="w-full min-h-[52px] px-6 rounded-full bg-gradient-gold text-navy font-semibold shadow-gold-glow hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" /> Call Now
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 bg-white rounded-3xl p-8 md:p-10 shadow-card-soft border-2 border-navy/10"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-5">
                  <CheckCircle2 className="w-9 h-9 text-green-600" />
                </div>
                <h3 className="font-display text-2xl font-bold text-navy mb-2">Request received!</h3>
                <p className="text-muted-foreground">We'll call you back shortly to confirm your slot.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <Field label="Full Name" required>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="form-input"
                      placeholder="Your full name"
                    />
                  </Field>
                  <Field label="Phone Number" required>
                    <input
                      required
                      type="tel"
                      pattern="[0-9 +-]{7,}"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="form-input"
                      placeholder="10-digit mobile"
                    />
                  </Field>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <Field label="Age" required>
                    <input
                      required
                      type="number"
                      min="1"
                      max="120"
                      value={form.age}
                      onChange={(e) => setForm({ ...form, age: e.target.value })}
                      className="form-input"
                      placeholder="e.g. 32"
                    />
                  </Field>
                  <Field label="Preferred Date" required>
                    <input
                      required
                      type="date"
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      className="form-input"
                    />
                  </Field>
                </div>
                <Field label="Reason for Visit" required>
                  <select
                    required
                    value={form.reason}
                    onChange={(e) => setForm({ ...form, reason: e.target.value })}
                    className="form-input"
                  >
                    <option value="">Select a reason</option>
                    <option>General Consultation</option>
                    <option>Diabetes</option>
                    <option>Dengue</option>
                    <option>Kidney Issue</option>
                    <option>Thyroid</option>
                    <option>Other</option>
                  </select>
                </Field>

                <button
                  type="submit"
                  className="w-full min-h-[52px] rounded-full bg-gradient-gold text-navy font-semibold shadow-gold-glow hover:scale-[1.01] transition-transform flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> Request Appointment
                </button>
                <p className="text-xs text-center text-muted-foreground">We'll call you back to confirm your slot.</p>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        .form-input {
          width: 100%;
          min-height: 48px;
          padding: 0.65rem 1rem;
          border-radius: 0.75rem;
          border: 1.5px solid var(--color-border);
          background: white;
          color: var(--color-foreground);
          font-size: 0.95rem;
          transition: all 0.2s;
          outline: none;
        }
        .form-input:focus {
          border-color: var(--color-gold);
          box-shadow: 0 0 0 4px oklch(0.74 0.13 85 / 0.15);
        }
      `}</style>
    </section>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold text-navy uppercase tracking-wider mb-2 block">
        {label}{required && <span className="text-destructive ml-0.5">*</span>}
      </span>
      {children}
    </label>
  );
}
