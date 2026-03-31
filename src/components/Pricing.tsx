import { Check, ArrowRight, XCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import GlowOrbs from "@/components/GlowOrbs";

const plans = [
  {
    name: "Essential",
    price: "$800",
    subtitle: "+ $100/month care plan",
    badge: null,
    featured: false,
    bestFor: "Small local businesses, freelancers, service providers",
    features: [
      "Up to 5 pages",
      "Mobile responsive design",
      "Contact form",
      "Google Maps embed",
      "Click-to-call button",
      "Social media links",
      "SSL certificate",
      "Basic SEO setup",
      "Stock images included",
      "Unlimited revisions",
    ],
    notIncluded: [
      "Blog or portfolio section",
      "Online booking integration",
      "Google Analytics setup",
      "Google Business Profile setup",
      "AI-written page copy",
      "E-commerce or online shop",
      "Custom animations",
      "Full SEO strategy document",
      "Unlimited pages",
    ],
    closingLine: null,
  },
  {
    name: "Business",
    price: "$1,000",
    subtitle: "+ $100/month care plan",
    badge: "Most Popular",
    featured: true,
    bestFor: "Salons, gyms, consultants, real estate agents",
    includesFrom: "Essential",
    features: [
      "Up to 10 pages",
      "Custom brand design",
      "Blog or portfolio section",
      "Online booking integration",
      "Google Analytics setup",
      "Google Business Profile setup",
      "Testimonials section",
      "AI-written page copy",
      "Unlimited revisions",
    ],
    notIncluded: [
      "E-commerce or online shop",
      "Online menu system",
      "Custom animations",
      "Full SEO strategy document",
      "Email capture and newsletter",
      "Unlimited pages",
    ],
    closingLine: null,
  },
  {
    name: "Custom",
    price: "$1,500",
    subtitle: "+ $100/month care plan",
    badge: null,
    featured: false,
    bestFor: "E-commerce, restaurants, complex business needs",
    includesFrom: "Business",
    features: [
      "Unlimited pages",
      "E-commerce / online shop",
      "Online menu system",
      "Custom animations",
      "Email capture and newsletter",
      "Full SEO strategy document",
      "AI-written copy for all pages",
      "Unlimited revisions",
    ],
    notIncluded: [],
    closingLine: "The complete package — nothing held back.",
  },
];

const carePlanFeatures = [
  "Unlimited changes — text edits, new items, image swaps, logo updates",
  "Plugin and software updates",
  "Monthly backup",
  "Uptime monitoring",
  "Priority email support (24hr weekday response)",
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative overflow-hidden py-20 md:py-32">
      <GlowOrbs />
      <div className="relative z-[1] container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            Pricing
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Simple, Transparent{" "}
            <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            One-time build fee. Ongoing support. No hidden costs.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`group relative rounded-xl border transition-all duration-300 hover:shadow-[0_0_30px_hsl(270_45%_50%/0.08)] flex flex-col ${
                plan.featured
                  ? "bg-card border-primary/50 md:scale-105 shadow-[0_0_40px_hsl(270_45%_50%/0.12)]"
                  : "bg-card border-border hover:border-primary/30"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1 text-xs tracking-wider uppercase font-semibold">
                    {plan.badge}
                  </Badge>
                </div>
              )}

              <div className="p-8 md:p-10 flex flex-col flex-1">
                <h3 className="font-display text-xl md:text-2xl font-bold mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-xs mb-6">
                  Best for: {plan.bestFor}
                </p>

                <div className="mb-6">
                  <span className="font-display text-4xl md:text-5xl font-bold">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground text-sm ml-2">
                    one-time
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mb-8">
                  {plan.subtitle}
                </p>

                {plan.includesFrom && (
                  <p className="text-primary/80 text-sm font-medium mb-4">
                    Everything in {plan.includesFrom}, plus:
                  </p>
                )}

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check
                        size={16}
                        className="text-green-500 mt-0.5 shrink-0"
                      />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Not Included Section */}
                {plan.notIncluded.length > 0 && (
                  <div className="mb-6">
                    <div className="border-t border-border my-4" />
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: 'hsl(0 40% 55% / 0.7)' }}>
                      Not Included
                    </p>
                    <ul className="space-y-2.5">
                      {plan.notIncluded.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-[13px]">
                          <XCircle
                            size={16}
                            className="mt-0.5 shrink-0"
                            style={{ color: 'hsl(0 50% 50% / 0.6)' }}
                          />
                          <span className="text-muted-foreground/60">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Custom card closing line */}
                {plan.closingLine && (
                  <div className="mb-6">
                    <div className="border-t border-border my-4" />
                    <div className="flex items-center gap-2">
                      <Check size={16} className="text-green-500 shrink-0" />
                      <span className="text-green-500 text-sm font-semibold">
                        {plan.closingLine}
                      </span>
                    </div>
                  </div>
                )}

                <div className="mt-auto">
                  <a
                    href="#contact"
                    className={`group/btn w-full inline-flex items-center justify-center gap-2 rounded-lg font-semibold text-sm py-3.5 transition-all duration-300 ${
                      plan.featured
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "border border-border bg-secondary text-secondary-foreground hover:border-primary/30 hover:bg-secondary/80"
                    }`}
                  >
                    Get Started
                    <ArrowRight
                      size={16}
                      className="group-hover/btn:translate-x-1 transition-transform"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Care Plan */}
        <div className="mt-12 md:mt-16 rounded-xl border border-border bg-card p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-display text-xl md:text-2xl font-bold mb-6">
              Every Package Includes Our{" "}
              <span className="text-primary">$100/month Care Plan</span>
            </h3>
            <ul className="space-y-3 mb-6 text-left inline-block">
              {carePlanFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <Check size={16} className="text-primary mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
