import { Instagram, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              Get In Touch
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Ready to Lay the First <span className="text-gradient">Stone?</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Tell us about your goals and we'll craft a strategy to get you there. No pressure, just possibilities.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                  <Mail size={18} className="text-primary" />
                </div>
                <span className="text-foreground">Stonepathexplore@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                  <Instagram size={18} className="text-primary" />
                </div>
                <a href="https://www.instagram.com/stonepathmarketing/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">@stonepathmarketing</a>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                  <Phone size={18} className="text-primary" />
                </div>
                <span className="text-foreground">(619) 933-1871</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                  <MapPin size={18} className="text-primary" />
                </div>
                <span className="text-foreground">San Diego, CA</span>
              </div>
            </div>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 rounded-md bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-md bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <input
              type="text"
              placeholder="Company"
              className="w-full px-4 py-3 rounded-md bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <textarea
              rows={5}
              placeholder="Tell us about your project..."
              className="w-full px-4 py-3 rounded-md bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full px-6 py-4 rounded-md bg-primary text-primary-foreground font-semibold text-base hover:opacity-90 transition-opacity glow"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
