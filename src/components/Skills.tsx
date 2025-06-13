
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      skills: [
        { name: "Python", level: "Expert" },
        { name: "Django", level: "Expert" },
        { name: "Flask", level: "Advanced" },
        { name: "C", level: "Advanced" },
        { name: "JavaScript", level: "Advanced" },
        { name: "HTML", level: "Expert" },
        { name: "CSS", level: "Expert" },
        { name: "PHP", level: "Intermediate" },
        { name: "React", level: "Intermediate" }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", level: "Advanced" },
        { name: "PostgreSQL", level: "Advanced" }
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", level: "Advanced" },
        { name: "PythonAnywhere", level: "Intermediate" },
        { name: "HostGator", level: "Intermediate" },
        { name: "Nmap", level: "Intermediate" },
        { name: "Wireshark", level: "Intermediate" },
        { name: "Nessus", level: "Intermediate" }
      ]
    },
    {
      title: "Cybersecurity",
      skills: [
        { name: "Vulnerability Scanning", level: "Intermediate" },
        { name: "Risk Assessment", level: "Intermediate" },
        { name: "Incident Management", level: "Intermediate" }
      ]
    },
    {
      title: "Other Skills",
      skills: [
        { name: "WordPress", level: "Intermediate" },
        { name: "REST APIs", level: "Advanced" },
        { name: "Socket Programming", level: "Intermediate" }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert": return "bg-green-100 text-green-800 border-green-300";
      case "Advanced": return "bg-blue-100 text-blue-800 border-blue-300";
      case "Intermediate": return "bg-yellow-100 text-yellow-800 border-yellow-300";
      case "Beginner": return "bg-gray-100 text-gray-800 border-gray-300";
      default: return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  return (
    <section id="skills" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Technical Skills</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover-scale transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <Badge className={getLevelColor(skill.level)}>
                        {skill.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
