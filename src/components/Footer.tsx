import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10 md:py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <img src={logo} alt="Stone Path Marketing" className="h-10 w-auto invert" />
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a>
            <a href="#results" className="text-muted-foreground hover:text-primary transition-colors">Web Design</a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">Process</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </div>
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Stonepath Marketing
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
