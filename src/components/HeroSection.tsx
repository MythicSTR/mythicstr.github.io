
import { ArrowDown, Github, Linkedin, Download } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const HeroSection = () => {
  const titleReveal = useScrollReveal();
  const subtitleReveal = useScrollReveal({ delay: 200 });
  const descriptionReveal = useScrollReveal({ delay: 400 });
  const ctaReveal = useScrollReveal({ delay: 600 });

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-8 px-4">
          <div ref={titleReveal.ref as React.RefObject<HTMLDivElement>} 
            className={`${titleReveal.isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <span className="text-sm md:text-base font-medium bg-accent/10 text-accent px-3 py-1 rounded-full">
              Software Developer & UI/UX Designer
            </span>
          </div>
          
          <h1 
            ref={subtitleReveal.ref as React.RefObject<HTMLHeadingElement>}
            className={`text-4xl md:text-5xl lg:text-7xl font-bold leading-tight ${
              subtitleReveal.isVisible ? 'animate-fade-in' : 'opacity-0'
            }`}
          >
            Hi, I'm <span className="text-accent">Shishir&nbsp;Tamrakar</span>
          </h1>
          
          <p 
            ref={descriptionReveal.ref as React.RefObject<HTMLParagraphElement>}
            className={`text-lg md:text-xl text-muted-foreground max-w-2xl ${
              descriptionReveal.isVisible ? 'animate-fade-in' : 'opacity-0'
            }`}
          >
            A passionate problem-solver crafting innovative software solutions with a focus on exceptional user experience and performance. Based in Kathmandu, Nepal.
          </p>
          
          <div 
            ref={ctaReveal.ref as React.RefObject<HTMLDivElement>}
            className={`flex flex-wrap gap-4 mt-4 ${
              ctaReveal.isVisible ? 'animate-fade-in' : 'opacity-0'
            }`}
          >
            <a 
              href="#" 
              className="btn btn-accent btn-lg flex items-center gap-2"
              onClick={(e) => {
                e.preventDefault();
                // This would be replaced with actual resume download
                alert("Resume download would happen here");
              }}
            >
              <Download size={18} />
              Download Resume
            </a>
            
            <div className="flex gap-4 items-center">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-ghost btn-icon rounded-full"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-ghost btn-icon rounded-full"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-pulse-slow">
        <a 
          href="#about"
          className="flex flex-col items-center text-sm text-muted-foreground gap-2"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span>Scroll Down</span>
          <ArrowDown size={20} />
        </a>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-40 -right-20 w-80 h-80 bg-accent/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-40 -left-20 w-80 h-80 bg-accent/5 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
