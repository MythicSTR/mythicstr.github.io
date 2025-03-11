
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface ExperienceItemProps {
  title: string;
  company: string;
  duration: string;
  description: string[];
  technologies: string[];
  index: number;
}

const ExperienceItem = ({ title, company, duration, description, technologies, index }: ExperienceItemProps) => {
  const itemReveal = useScrollReveal({ delay: 200 * index });

  return (
    <div
      ref={itemReveal.ref as React.RefObject<HTMLDivElement>}
      className={`relative pl-8 pb-12 ${itemReveal.isVisible ? "animate-fade-in" : "opacity-0"}`}
    >
      <div className="timeline-line"></div>
      <div className="timeline-dot"></div>
      
      <div className="glass rounded-lg p-6 hover:shadow-md transition-all">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
          <h3 className="font-semibold text-xl">{title}</h3>
          <span className="text-sm font-medium bg-accent/10 text-accent px-3 py-1 rounded-full mt-2 md:mt-0">
            {duration}
          </span>
        </div>
        
        <h4 className="text-accent font-medium mb-4">{company}</h4>
        
        <ul className="list-disc pl-5 mb-4 space-y-2">
          {description.map((item, i) => (
            <li key={i} className="text-muted-foreground">{item}</li>
          ))}
        </ul>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech, i) => (
            <span key={i} className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  const titleReveal = useScrollReveal();
  
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "StartIn Lab",
      duration: "Jun 2023 - Present",
      description: [
        "Developed full-stack web applications using React and Spring Boot",
        "Implemented responsive UI designs with a focus on accessibility and user experience",
        "Collaborated with cross-functional teams to define and implement new features",
        "Optimized application performance and reduced load times by 40%"
      ],
      technologies: ["React", "Spring Boot", "PostgreSQL", "Docker", "AWS"]
    },
    {
      title: "UI/UX Design Intern",
      company: "SmartChoice Technologies",
      duration: "Jan 2023 - May 2023",
      description: [
        "Created wireframes and prototypes for web and mobile applications",
        "Conducted user research and usability testing to improve product design",
        "Collaborated with development team to ensure design implementation accuracy",
        "Redesigned core product features resulting in 25% increase in user engagement"
      ],
      technologies: ["Figma", "Adobe XD", "UI/UX", "Prototyping", "User Testing"]
    },
    {
      title: "Junior Web Developer",
      company: "Freelance",
      duration: "Sep 2022 - Dec 2022",
      description: [
        "Built responsive websites for small businesses and startups",
        "Implemented custom features and functionality based on client requirements",
        "Optimized websites for search engines and performance",
        "Provided ongoing maintenance and support for client websites"
      ],
      technologies: ["HTML/CSS", "JavaScript", "WordPress", "SEO", "PHP"]
    }
  ];

  return (
    <section id="experience" className="relative overflow-hidden bg-secondary/50">
      <div className="container mx-auto max-w-5xl">
        <div
          ref={titleReveal.ref as React.RefObject<HTMLDivElement>}
          className={`mb-12 ${titleReveal.isVisible ? "animate-fade-in" : "opacity-0"}`}
        >
          <h2 className="section-title">Experience</h2>
        </div>

        <div className="ml-4">
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={index}
              {...exp}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
