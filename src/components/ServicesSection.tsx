import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Camera, Film, Brain, Lightbulb, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "Content Creation",
    description: "High-quality video, photo, and written content optimized for social platforms and digital marketing.",
    features: ["Video Production", "Photography", "Copywriting", "Social Media Content"],
  },
  {
    icon: Film,
    title: "Visual Storytelling",
    description: "Compelling narratives that connect brands with audiences through emotion-driven content.",
    features: ["Brand Films", "Documentary Style", "Story Development", "Motion Graphics"],
  },
  {
    icon: Brain,
    title: "AI-Enhanced Media",
    description: "Cutting-edge AI tools to create, enhance, and scale content with unprecedented efficiency.",
    features: ["AI Image Generation", "AI Video Production", "Workflow Automation", "Custom AI Solutions"],
  },
  {
    icon: Lightbulb,
    title: "Creative Strategy",
    description: "End-to-end campaign planning with data-driven creativity for maximum impact.",
    features: ["Campaign Strategy", "Content Calendar", "Analytics & Insights", "Brand Consulting"],
  },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">Services</span>
          <h2 className="text-heading-1 text-foreground mb-4">
            How I Can Help
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive creative services tailored to elevate your brand and engage your audience.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group bg-card rounded-2xl p-8 shadow-subtle hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-primary/20"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:shadow-glow transition-all duration-300">
                  <IconComponent className="text-primary group-hover:text-primary-foreground transition-colors" size={28} />
                </div>

                <h3 className="text-heading-2 text-card-foreground mb-3">
                  {service.title}
                </h3>

                <p className="text-body text-muted-foreground mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-body-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight size={16} />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
