import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BeforeAfter from "@/components/BeforeAfter";
import Offers from "@/components/Offers";
import WhyItMatters from "@/components/WhyItMatters";
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <BeforeAfter />
      <Offers />
      <WhyItMatters />
      <Pricing />
      <FinalCTA />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
