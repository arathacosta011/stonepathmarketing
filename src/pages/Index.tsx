import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyStonepath from "@/components/WhyStonepath";
import WebDesign from "@/components/WebDesign";
import BeforeAfter from "@/components/BeforeAfter";
import Offers from "@/components/Offers";
import Stats from "@/components/Stats";
import Trust from "@/components/Trust";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <WhyStonepath />
      <WebDesign />
      <BeforeAfter />
      <Offers />
      <Stats />
      <Trust />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;