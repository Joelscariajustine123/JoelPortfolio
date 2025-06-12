
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      skills: [
        { name: "Django", level: "Expert" },
        { name: "Python", level: "Expert" },
        { name: "Flask", level: "Advanced" },
        { name: "REST APIs", level: "Advanced" },
        { name: "Database Design", level: "Advanced" }
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5", level: "Expert" },
        { name: "CSS3", level: "Expert" },
        { name: "JavaScript", level: "Advanced" },
        { name: "Responsive Design", level: "Advanced" },
        { name: "WordPress", level: "Intermediate" }
      ]
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "C", level: "Advanced" },
        { name: "C++", level: "Advanced" },
        { name: "Java", level: "Intermediate" },
        { name: "C#", level: "Intermediate" }
      ]
    },
    {
      title: "Mobile & Game Development",
      skills: [
        { name: "Flutter", level: "Intermediate" },
        { name: "Unity Engine", level: "Intermediate" },
        { name: "Mobile UI/UX", level: "Intermediate" }
      ]
    },
    {
      title: "Data & Analytics",
      skills: [
        { name: "Data Analysis", level: "Intermediate" },
        { name: "Machine Learning", level: "Beginner" },
        { name: "Python Libraries", level: "Intermediate" }
      ]
    },
    {
      title: "Cybersecurity & Tools",
      skills: [
        { name: "Nessus", level: "Intermediate" },
        { name: "Nmap", level: "Intermediate" },
        { name: "Security Testing", level: "Intermediate" }
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
