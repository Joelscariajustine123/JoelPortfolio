
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
      title: "BTech Graduate",
      description: "Computer Science Engineering with First Class (2020-2024)"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              I'm Joel Scaria Justine, a passionate Django developer and BTech Computer Science Engineering 
              graduate (2020-2024) with First Class honors. My journey in technology spans across multiple 
              domains, from building healthcare management systems to creating games and exploring cybersecurity tools.
            </p>
            <p className="text-lg leading-relaxed">
              As a faculty member at GTEC Computer Education Kannur, I share my knowledge by teaching 
              a wide range of programming languages including HTML, CSS, JavaScript, Python, Django, Flask, 
              Data Analysis, Machine Learning, C, C++, Java, Flutter, and WordPress.
            </p>
            <p className="text-lg leading-relaxed">
              My diverse background includes internships in Flutter development and graphic design, 
              giving me a well-rounded perspective on software development and user experience design.
            </p>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium">BTech Computer Science Engineering</span>
                  <span className="text-sm text-muted-foreground">2020-2024</span>
                </div>
                <p className="text-sm text-muted-foreground">First Class</p>
                
                <div className="flex justify-between items-center mt-4">
                  <span className="font-medium">Plus Two</span>
                  <span className="text-sm text-muted-foreground">2019-2020</span>
                </div>
                
                <div className="flex justify-between items-center mt-4">
                  <span className="font-medium">SSLC</span>
                  <span className="text-sm text-muted-foreground">2017-2018</span>
                </div>
              </div>
            </div>
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
