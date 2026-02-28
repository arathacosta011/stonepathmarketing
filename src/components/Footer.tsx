const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display text-lg font-bold">
          Stone<span className="text-primary">path</span>
        </p>
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Stonepath Marketing. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
