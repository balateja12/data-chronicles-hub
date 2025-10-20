import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Student Manager",
    company: "Northern Illinois University",
    location: "DeKalb, IL",
    period: "August 2023 – May 2025",
    responsibilities: [
      "Led a team of 5+ student analysts, overseeing scheduling, training, and performance tracking using dashboards built in Excel and Power BI",
      "Designed and implemented a centralized database system to track student inventory, reducing data redundancy by 40%",
      "Conducted weekly data quality audits on student services datasets using SQL, improving reporting accuracy by 20%",
      "Created interactive Tableau dashboards to track engagement metrics across university departments",
      "Spearheaded the development of KPIs to monitor student participation, leading to a 15% increase in event attendance",
      "Used Python to automate data processing scripts for academic resource tracking, reducing manual work by 30%",
      "Collaborated with IT to migrate data from Excel-based systems into structured PostgreSQL database environments",
      "Trained peers on data visualization best practices and storytelling using real-time examples",
      "Implemented student feedback analysis using sentiment analysis libraries in Python (NLTK)",
      "Presented monthly analytical findings to university leadership, influencing data-driven policy decisions"
    ]
  },
  {
    role: "Associate Systems Engineer",
    company: "CGI",
    location: "Bangalore, India",
    period: "September 2021 – January 2023",
    responsibilities: [
      "Created, optimized, and maintained complex SQL queries and stored procedures, reducing report generation time by 50%",
      "Developed Python scripts to extract and transform large datasets (1M+ rows) from various sources into staging databases",
      "Built Power BI dashboards for client-facing reporting tools, used by 100+ stakeholders for real-time insights",
      "Worked in agile sprints to support government analytics initiatives, contributing to 10+ backlog items per cycle",
      "Automated KPI calculation logic for internal business units using Python, cutting down monthly reporting cycle time by 40%",
      "Participated in ETL pipeline design and implemented performance monitoring checks using SQL and Python logging",
      "Analyzed system logs and performed root-cause data analysis for over 20+ technical issues, improving reliability",
      "Used Git and JIRA to manage version control and task allocation within cross-functional teams",
      "Documented data dictionaries and metadata for newly developed data marts and warehouse structures",
      "Trained new hires on standard operating procedures for SQL, dashboarding, and agile best practices"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="bg-gradient-primary bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building data-driven solutions and leading analytical initiatives
          </p>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <Card 
              key={exp.role}
              className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(215_100%_65%/0.2)] animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{exp.role}</h3>
                      <p className="text-lg text-primary font-semibold">{exp.company}</p>
                      <p className="text-muted-foreground">{exp.location}</p>
                    </div>
                  </div>
                </div>
                <Badge variant="outline" className="border-primary/50 text-primary flex items-center gap-2 whitespace-nowrap">
                  <Calendar className="w-4 h-4" />
                  {exp.period}
                </Badge>
              </div>

              <ul className="space-y-3">
                {exp.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
