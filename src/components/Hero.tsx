
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, FileText } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20 relative">
      <div className="container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Joel Scaria Justine
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">
            Django Developer & Technical Educator
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            BTech Computer Science Engineering graduate with expertise in Django, Python, and modern web technologies. Passionate about teaching and building robust applications.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button size="lg" onClick={() => scrollToSection('projects')} className="animate-scale-in">
              View My Work
            </Button>
            <Button variant="outline" size="lg" onClick={() => scrollToSection('contact')} className="animate-scale-in">
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => window.open('https://drive.google.com/file/d/1ucC8dpB8-lCk8_aOpuZZFLfiu3WCPulK/view?usp=sharing', '_blank')}
              className="animate-scale-in"
            >
              <FileText className="mr-2 h-4 w-4" />
              View Resume
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover-scale"
              onClick={() => window.open('https://github.com/Joelscariajustine123', '_blank')}
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover-scale"
              onClick={() => window.open('https://www.linkedin.com/in/joel-scaria-justine-202191203/', '_blank')}
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover-scale"
              onClick={() => window.open('mailto:joelscaria2020@gmail.com', '_blank')}
            >
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        onClick={() => scrollToSection('about')}
      >
        <ArrowDown className="h-6 w-6" />
      </Button>
    </section>
  );
};

export default Hero;
