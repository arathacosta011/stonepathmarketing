import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10 md:py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <img src={logo} alt="Stonepath Marketing" className="h-10 w-auto invert" />
          <p className="text-muted-foreground text-sm max-w-lg leading-relaxed">
            Premium web design and strategic digital marketing built to help businesses grow with more clarity, polish, and performance.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Web Design</a>
            <a href="#marketing" className="text-muted-foreground hover:text-primary transition-colors">Marketing</a>
            <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">Process</a>
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
