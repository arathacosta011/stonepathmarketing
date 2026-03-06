import { Instagram, Mail, MapPin, Phone, CheckCircle, X } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

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
      // Send notifications (email + Slack) — fire and forget
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
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full px-4 py-3 rounded-md bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-4 py-3 rounded-md bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Company"
              className="w-full px-4 py-3 rounded-md bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <textarea
              rows={5}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              className="w-full px-4 py-3 rounded-md bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-4 rounded-md bg-primary text-primary-foreground font-semibold text-base hover:opacity-90 transition-opacity glow disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      {/* Success Popup */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="relative bg-card border border-border rounded-xl p-8 md:p-10 max-w-md w-full mx-4 text-center shadow-2xl animate-in fade-in zoom-in-95 duration-300">
            <button
              onClick={() => setShowSuccess(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={20} />
            </button>
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={32} className="text-primary" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-3">
              Thank You! 🎉
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-2">
              We've received your message and will respond within <span className="text-primary font-semibold">24 hours</span>.
            </p>
            <p className="text-foreground font-semibold text-lg mt-4">
              Get ready to scale. 🚀
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="mt-8 px-8 py-3 rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow"
            >
              Got It
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
