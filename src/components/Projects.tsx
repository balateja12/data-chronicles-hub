import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Amazon Best Seller Software Analysis",
    description: "Performed comprehensive data analytics on Amazon's best-selling software dataset using Python. Conducted data cleaning, feature engineering, and exploratory analysis. Built and evaluated regression models to predict product ranking.",
    impact: "Uncovered key insights on price, category, and review volume, enabling data-driven strategies for pricing, visibility, and performance optimization in e-commerce.",
    techStack: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"],
    github: "https://github.com",
  },
  {
    title: "US Shark Tank Data Visualization",
    description: "Analyzed Shark Tank US data using Tableau to identify funding trends across industries, gender, and geography. Created interactive dashboards and visualized patterns in deal success rates, equity offers, and investor behavior.",
    impact: "Derived actionable insights to inform aspiring entrepreneurs about investor preferences and strategic pitching based on real-world venture capital data.",
    techStack: ["Tableau", "Excel", "Data Visualization", "Statistical Analysis"],
    github: "https://github.com",
  },
  {
    title: "Fitness Tracking System Database",
    description: "Developed and managed a comprehensive fitness tracking system database using SQL, enabling efficient storage and retrieval of user activity data, health metrics, and progress history.",
    impact: "Ensured data accuracy, integrity, and scalability. Implemented queries and normalization techniques to support performance tracking, personalized insights, and reporting for enhanced user engagement.",
    techStack: ["SQL", "Database Design", "MySQL", "Data Modeling"],
    github: "https://github.com",
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing data analytics solutions and insights
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(215_100%_65%/0.2)] flex flex-col animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-1 space-y-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                  <p className="text-sm text-foreground font-medium">
                    {project.impact}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="border-primary/30 text-primary text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 mt-6 pt-6 border-t border-border">
                <Button variant="outline" size="sm" className="flex-1" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="flex-1" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
