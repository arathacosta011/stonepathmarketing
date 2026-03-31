import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.webp";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Before & After", href: "#showcase" },
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 sm:bg-background/80 sm:backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <a href="#" className="flex items-center">
          <img src={logo} alt="Stonepath Marketing" className="h-10 sm:h-12 w-auto invert" />
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
            Book a Call
          </a>
        </div>
        <button className="md:hidden text-foreground p-1" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-6 pt-2 space-y-4">
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="block text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-1">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="inline-block px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold mt-2">
            Book a Call
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
