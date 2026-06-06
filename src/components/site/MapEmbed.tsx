export function MapEmbed() {
  return (
    <section aria-label="Clinic location" className="w-full">
      <div className="w-full h-[420px] md:h-[500px] relative">
        <iframe
          title="Ekanshi Polyclinic location on Google Maps"
          src="https://maps.google.com/maps?q=Ekanshi+Polyclinic+Dr+SK+Maurya+Gorakhpur&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "saturate(1.05)" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </section>
  );
}
