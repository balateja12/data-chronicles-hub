import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-border bg-card/50">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
              Data Analyst
            </h3>
            <p className="text-muted-foreground text-sm">
              Transforming data into actionable insights
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <a href="#home" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Home
              </a>
              <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Skills
              </a>
              <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Experience
              </a>
              <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Projects
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Contact
              </a>
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Connect</h4>
            <div className="flex gap-3">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-background border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-background border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:contact@example.com"
                className="p-2 rounded-lg bg-background border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Built with passion using modern web technologies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
