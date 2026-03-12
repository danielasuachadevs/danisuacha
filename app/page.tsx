import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Methodology from "@/components/Methodology";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Calendly from "@/components/Calendly";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen w-full">
      <Navbar />
      <main className="flex-grow pt-24 lg:pt-32">
        <Hero />
        <PainPoints />
        <Methodology />
        <Process />
        <Pricing />
        <Testimonials />
        <About />
        <Calendly />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
