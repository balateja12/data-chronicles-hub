import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-data-visual.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-50" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <p className="text-primary font-semibold text-lg tracking-wide">Hello, I'm a</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Data <span className="bg-gradient-primary bg-clip-text text-transparent">Analyst</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-xl">
                Transforming complex data into actionable insights through analytics, visualization, and strategic decision-making
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="#projects">
                  View Work <ArrowRight className="ml-2" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a 
                href="https://github.com/balateja12" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-card border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/bala-teja-vempati-4b4244273/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-card border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:vempatibalateja98@gmail.com"
                className="p-3 rounded-lg bg-card border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
                aria-label="Email Contact"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in-left hidden lg:block" style={{ animationDelay: '0.3s' }}>
            <div className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-2xl">
              <img 
                src={heroImage} 
                alt="Data visualization and analytics dashboard" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-glow-pulse" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl animate-glow-pulse" style={{ animationDelay: '1.5s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
