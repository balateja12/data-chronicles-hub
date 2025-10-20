import { Card } from "@/components/ui/card";
import { Code2, Database, BarChart3, Brain } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Languages & Tools",
    skills: ["Python", "R", "SQL", "Power BI", "Tableau", "Excel", "Jupyter", "Git"]
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["MS SQL Server", "MySQL", "PostgreSQL"]
  },
  {
    icon: BarChart3,
    title: "Concepts",
    skills: ["Data Modeling", "ETL", "Data Mining", "Predictive Modeling", "Data Cleaning"]
  },
  {
    icon: Brain,
    title: "Methodologies",
    skills: ["Agile/Scrum", "SDLC", "Statistical Analysis", "KPI Tracking"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Proficient in modern data analytics tools and methodologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(215_100%_65%/0.2)] group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
