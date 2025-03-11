
import { useScrollReveal } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  const titleReveal = useScrollReveal();
  const imageReveal = useScrollReveal({ delay: 200 });
  const contentReveal = useScrollReveal({ delay: 300 });
  const skillsReveal = useScrollReveal({ delay: 400 });

  return (
    <section id="about" className="relative overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <div
          ref={titleReveal.ref as React.RefObject<HTMLDivElement>}
          className={`mb-12 ${titleReveal.isVisible ? "animate-fade-in" : "opacity-0"}`}
        >
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div
            ref={imageReveal.ref as React.RefObject<HTMLDivElement>}
            className={`relative ${imageReveal.isVisible ? "animate-fade-in" : "opacity-0"}`}
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted relative z-10">
              {/* This would be replaced with actual image */}
              <div className="w-full h-full flex items-center justify-center bg-accent/10">
                <span className="text-lg text-accent">Profile Image</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent rounded-2xl z-0"></div>
          </div>

          <div
            ref={contentReveal.ref as React.RefObject<HTMLDivElement>}
            className={`${contentReveal.isVisible ? "animate-fade-in" : "opacity-0"}`}
          >
            <p className="text-lg mb-6">
              I'm a Computer Science undergraduate at Kathmandu University with a passion for building elegant, user-friendly software solutions. My journey in tech started with web development and has evolved to encompass UI/UX design and machine learning.
            </p>
            <p className="text-lg mb-6">
              I believe in creating technology that solves real problems while delivering exceptional user experiences. When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or hiking in Nepal's beautiful mountains.
            </p>

            <div
              ref={skillsReveal.ref as React.RefObject<HTMLDivElement>}
              className={`mt-8 ${skillsReveal.isVisible ? "animate-fade-in" : "opacity-0"}`}
            >
              <h3 className="text-xl font-semibold mb-4">Core Skills</h3>
              <div className="flex flex-wrap gap-2">
                {["Java", "Python", "React.js", "Spring Boot", "Django", "JavaScript", "TypeScript", "UI/UX Design", "Machine Learning"].map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
