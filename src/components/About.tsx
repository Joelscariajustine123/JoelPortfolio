
import { Card, CardContent } from "@/components/ui/card";
import { Code, Users, Briefcase, GraduationCap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Expert in Django, Python, and modern web technologies"
    },
    {
      icon: Users,
      title: "Technical Education",
      description: "Faculty at GTEC Computer Education teaching multiple programming languages"
    },
    {
      icon: Briefcase,
      title: "Diverse Experience",
      description: "Projects spanning from healthcare management to game development"
    },
    {
      icon: GraduationCap,
      title: "Continuous Learning",
      description: "Always exploring new technologies and best practices"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              I'm a passionate Django developer with extensive experience in full-stack web development. 
              My journey in technology spans across multiple domains, from building healthcare management 
              systems to creating games and exploring cybersecurity tools.
            </p>
            <p className="text-lg leading-relaxed">
              As a faculty member at GTEC Computer Education Kannur, I share my knowledge by teaching 
              a wide range of programming languages and technologies, helping students build their 
              technical foundation and pursue their career goals.
            </p>
            <p className="text-lg leading-relaxed">
              My diverse background includes internships in Flutter development and graphic design, 
              giving me a well-rounded perspective on software development and user experience design.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <Card key={index} className="hover-scale transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <highlight.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
