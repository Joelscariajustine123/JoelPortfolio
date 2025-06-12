
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Veterinary Health Care Management System",
      description: "A comprehensive Django-based web application for managing veterinary clinics, including patient records, appointment scheduling, and treatment tracking.",
      technologies: ["Django", "Python", "HTML/CSS", "JavaScript", "Database Design"],
      category: "Web Development",
      features: [
        "Patient management system",
        "Appointment scheduling",
        "Treatment history tracking",
        "User authentication & authorization"
      ]
    },
    {
      title: "Burny Rush Game",
      description: "An exciting game developed using Unity Engine and C#, featuring engaging gameplay mechanics and polished user interface.",
      technologies: ["C#", "Unity Engine", "Game Development", "UI Design"],
      category: "Game Development",
      features: [
        "Interactive gameplay",
        "Score tracking system",
        "Smooth animations",
        "Responsive controls"
      ]
    },
    {
      title: "Cybersecurity Tools Implementation",
      description: "Practical implementation and usage of cybersecurity tools including Nessus and Nmap for network security assessment and vulnerability scanning.",
      technologies: ["Nessus", "Nmap", "Network Security", "Vulnerability Assessment"],
      category: "Cybersecurity",
      features: [
        "Network vulnerability scanning",
        "Security assessment reports",
        "Port scanning and analysis",
        "Risk evaluation"
      ]
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Web Development": return "bg-blue-100 text-blue-800";
      case "Game Development": return "bg-purple-100 text-purple-800";
      case "Cybersecurity": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section id="projects" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover-scale transition-all duration-300 h-full flex flex-col">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge className={getCategoryColor(project.category)}>
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <p className="text-muted-foreground">{project.description}</p>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-2 mt-auto">
                  <Button variant="outline" size="sm">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
