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

function App() {
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

export default App;
