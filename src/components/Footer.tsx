import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <img src={logo} alt="Stone Path Marketing" className="h-10 w-auto" />
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Stonepath Marketing. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
