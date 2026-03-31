import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BeforeAfter from "@/components/BeforeAfter";
import Offers from "@/components/Offers";
import WhyItMatters from "@/components/WhyItMatters";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  // force rebuild 2026-03-31
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <BeforeAfter />
      <Offers />
      <WhyItMatters />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
