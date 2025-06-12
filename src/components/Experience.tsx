
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      type: "work",
      title: "Python Django Faculty",
      company: "GTEC Computer Education Kannur",
      period: "Current Position",
      description: "Teaching comprehensive programming courses including HTML, CSS, JavaScript, Python, Django, Flask, Data Analysis, Machine Learning basics, C, C++, Java, Flutter, and WordPress.",
      skills: ["Python", "Django", "Web Development", "Teaching", "Curriculum Development"],
      icon: GraduationCap
    },
    {
      type: "internship",
      title: "Flutter Development Internship",
      company: "Technology Company",
      period: "Previous Experience",
      description: "Gained hands-on experience in mobile app development using Flutter framework, working on cross-platform applications.",
      skills: ["Flutter", "Mobile Development", "Cross-platform"],
      icon: Briefcase
    },
    {
      type: "internship",
      title: "Graphic Design Internship",
      company: "Design Studio",
      period: "Previous Experience",
      description: "Developed design skills and worked on various visual communication projects, enhancing UI/UX understanding.",
      skills: ["Graphic Design", "UI/UX", "Visual Communication"],
      icon: Briefcase
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Professional Experience</h2>
        
        <div className="space-y-6 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover-scale transition-all duration-300">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <exp.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <p className="text-lg font-medium text-primary">{exp.company}</p>
                      <Badge variant="outline">{exp.period}</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary">
                      {skill}
                    </Badge>
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

export default Experience;
