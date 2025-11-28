import { motion } from "framer-motion";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold text-foreground">
              Yousef<span className="text-primary">.</span>
            </a>
            <p className="text-body-sm text-muted-foreground mt-2">
              Content Creator | AI Creative Technologist
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <nav className="flex gap-6">
              <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Portfolio
              </a>
              <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Services
              </a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </nav>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-body-sm text-muted-foreground">
            © {currentYear} Yousef Alhaddad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
