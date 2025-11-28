import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, MessageCircle, Linkedin, Github, Briefcase, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
const socialLinks = [{
  icon: Linkedin,
  href: "https://www.linkedin.com/in/yousef-haddad-8163ab205/",
  label: "LinkedIn"
}, {
  icon: Github,
  href: "https://github.com/JoeHdad",
  label: "GitHub"
}, {
  icon: Briefcase,
  href: "https://www.behance.net/yousefhaddad4",
  label: "Behance"
}];
export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  const {
    toast
  } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon."
    });
  };
  return <section id="contact" className="py-24 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <span className="text-primary font-medium mb-4 block">Contact</span>
          <h2 className="text-heading-1 text-foreground mb-4">
            Let's Work Together
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.6,
          delay: 0.2
        }}>
            {isSubmitted ? <div className="bg-background rounded-2xl p-12 shadow-subtle text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="text-primary" size={32} />
                </div>
                <h3 className="text-heading-2 text-foreground mb-3">Thank You!</h3>
                <p className="text-body text-muted-foreground">
                  Your message has been sent successfully. I'll get back to you within 24-48 hours.
                </p>
              </div> : <form onSubmit={handleSubmit} className="bg-background rounded-2xl p-8 shadow-subtle">
                <div className="space-y-6">
                  {/* Honeypot field for spam protection */}
                  <input type="text" name="honeypot" className="hidden" tabIndex={-1} />

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <Input id="name" name="name" type="text" required placeholder="Your name" className="h-12" />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input id="email" name="email" type="email" required placeholder="your@email.com" className="h-12" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Project Details *
                    </label>
                    <Textarea id="message" name="message" required placeholder="Tell me about your project, goals, and timeline..." className="min-h-[150px] resize-none" />
                  </div>

                  <Button type="submit" variant="hero" size="xl" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : <>
                        Send Message
                        <Send size={18} />
                      </>}
                  </Button>
                </div>
              </form>}
          </motion.div>

          {/* Contact Info */}
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.6,
          delay: 0.4
        }} className="space-y-8">
            {/* Direct Contact */}
            <div className="bg-background rounded-2xl p-8 shadow-subtle">
              <h3 className="text-heading-3 text-foreground mb-6">Direct Contact</h3>
              
              <div className="space-y-4">
                <a href="mailto:hello@yousefalhaddad.com" className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Mail className="text-primary group-hover:text-primary-foreground transition-colors" size={22} />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <div className="text-foreground font-medium">yossefhaddad20@gmail.com</div>
                  </div>
                </a>

                <a href="https://wa.me/972598158725" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <MessageCircle className="text-primary group-hover:text-primary-foreground transition-colors" size={22} />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">WhatsApp</div>
                    <div className="text-foreground font-medium">+972598158725</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-background rounded-2xl p-8 shadow-subtle">
              <h3 className="text-heading-3 text-foreground mb-6">Follow Me</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map(social => {
                const IconComponent = social.icon;
                return <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all group">
                      <IconComponent size={22} />
                      <span className="font-medium">{social.label}</span>
                    </a>;
              })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};