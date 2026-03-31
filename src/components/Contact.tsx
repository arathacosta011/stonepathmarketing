import { Instagram, Mail, MapPin, Phone, CheckCircle, X, ArrowRight } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import GlowOrbs from "@/components/GlowOrbs";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    try {
      const { error } = await supabase.from("contact_submissions").insert({
        name: form.name,
        email: form.email,
        company: form.company || null,
        message: form.message,
      });
      if (error) throw error;
      supabase.functions.invoke("send-contact-email", {
        body: { name: form.name, email: form.email, company: form.company, message: form.message },
      }).catch(console.error);
      toast.success("Message sent!");
      setShowSuccess(true);
      setForm({ name: "", email: "", company: "", message: "" });
    } catch (err: any) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32">
      <GlowOrbs />
      <div className="relative z-[1] container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-5">
            Let's Talk About{" "}
            <span className="text-gradient">Your Site</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Tell us what you've got, what's not working, and where you want to go. No pressure — just clarity.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 max-w-5xl mx-auto">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Email</p>
                <span className="text-foreground text-sm">Stonepathexplore@gmail.com</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Instagram size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Instagram</p>
                <a href="https://www.instagram.com/stonepathmarketing/" target="_blank" rel="noopener noreferrer" className="text-foreground text-sm hover:text-primary transition-colors">@stonepathmarketing</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Phone</p>
                <span className="text-foreground text-sm">(619) 933-1871</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Location</p>
                <span className="text-foreground text-sm">San Diego, CA</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Name *" required className="w-full px-4 py-3.5 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all text-sm" />
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email *" required className="w-full px-4 py-3.5 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all text-sm" />
            </div>
            <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Website URL (optional)" className="w-full px-4 py-3.5 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all text-sm" />
            <textarea rows={4} name="message" value={form.message} onChange={handleChange} placeholder="What's not working with your current site? What do you need? *" required className="w-full px-4 py-3.5 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all resize-none text-sm" />
            <button type="submit" disabled={loading} className="group w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-lg bg-gradient-metallic text-primary-foreground font-semibold text-base hover:opacity-90 transition-all glow disabled:opacity-50">
              {loading ? "Sending..." : "Book a Strategy Call"}
              {!loading && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
            </button>
            <p className="text-muted-foreground text-xs text-center leading-relaxed pt-1">
              No pitch. Just an honest look at what's working, what's not, and what we'd do next.
            </p>
          </form>
        </div>
      </div>

      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4">
          <div className="relative bg-card border border-border rounded-2xl p-8 md:p-10 max-w-md w-full text-center shadow-2xl animate-in fade-in zoom-in-95 duration-300">
            <button onClick={() => setShowSuccess(false)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors">
              <X size={20} />
            </button>
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={32} className="text-primary" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-3">Message Received</h3>
            <p className="text-muted-foreground text-base leading-relaxed mb-2">
              We'll review your details and get back to you within{" "}
              <span className="text-primary font-semibold">24 hours</span> with a clear next step.
            </p>
            <button onClick={() => setShowSuccess(false)} className="mt-8 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow">
              Got It
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
