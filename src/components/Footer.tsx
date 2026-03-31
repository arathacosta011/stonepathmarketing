import logo from "@/assets/logo.png";
import GlowOrbs from "@/components/GlowOrbs";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden py-10 md:py-12">
      <GlowOrbs variant="subtle" />
      <div className="relative z-[1] container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <img src={logo} alt="Stonepath Marketing" className="h-10 w-auto invert" />
          <p className="text-muted-foreground text-sm max-w-md leading-relaxed">
            We turn weak websites into growth assets. Retouch, redesign, or full rebuild — built to convert.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a href="#showcase" className="text-muted-foreground hover:text-primary transition-colors">Before & After</a>
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a>
            <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </div>
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Stonepath Marketing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
