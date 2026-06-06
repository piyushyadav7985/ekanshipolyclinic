import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { StatsBar } from "@/components/site/StatsBar";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Reviews } from "@/components/site/Reviews";
import { Appointment } from "@/components/site/Appointment";
import { MapEmbed } from "@/components/site/MapEmbed";
import { ClinicVideo } from "@/components/site/ClinicVideo";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ekanshi Polyclinic | Dr. S.K. Maurya — Gorakhpur's Most Trusted Physician" },
      { name: "description", content: "Expert medical care by Dr. S.K. Maurya, MBBS, MD (Medicine). Diabetes, dengue, kidney, thyroid & general medicine. 4.9★ rated. Book your appointment in Gorakhpur today." },
      { property: "og:title", content: "Ekanshi Polyclinic | Dr. S.K. Maurya" },
      { property: "og:description", content: "Trusted care, expert medicine. Gorakhpur's most loved doctor with 680+ patient reviews." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <Services />
        <WhyUs />
        <Reviews />
        <ClinicVideo />
        <Appointment />
        <MapEmbed />
      </main>
      <Footer />
    </div>
  );
}
