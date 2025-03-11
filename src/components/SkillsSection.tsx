
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface SkillCategory {
  name: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "HTML", "CSS", "SQL", "C++"]
  },
  {
    name: "Frameworks & Libraries",
    skills: ["React.js", "Spring Boot", "Django", "Node.js", "Express", "TailwindCSS", "Bootstrap", "jQuery"]
  },
  {
    name: "Tools & Platforms",
    skills: ["Git", "Docker", "AWS", "Heroku", "Firebase", "Netlify", "VS Code", "IntelliJ IDEA"]
  },
  {
    name: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQLite"]
  },
  {
    name: "Design",
    skills: ["Figma", "Adobe XD", "Photoshop", "UI/UX", "Wireframing", "Prototyping"]
  },
  {
    name: "Other",
    skills: ["RESTful APIs", "GraphQL", "Microservices", "CI/CD", "Agile", "Scrum", "TDD", "Machine Learning"]
  }
];

const SkillHexagon = ({ skill, index }: { skill: string; index: number }) => {
  const hexReveal = useScrollReveal({ delay: 50 * index });
  
  return (
    <div
      ref={hexReveal.ref as React.RefObject<HTMLDivElement>}
      className={`hexagon aspect-square flex items-center justify-center glass hover:bg-accent/10 hover:border-accent/50 transition-all duration-300 ${
        hexReveal.isVisible ? "animate-fade-in" : "opacity-0"
      }`}
    >
      <span className="text-sm font-medium text-balance text-center px-2">{skill}</span>
    </div>
  );
};

const SkillCategory = ({ category, index }: { category: SkillCategory; index: number }) => {
  const categoryReveal = useScrollReveal({ delay: 200 * index });
  
  return (
    <div
      ref={categoryReveal.ref as React.RefObject<HTMLDivElement>}
      className={`mb-10 ${categoryReveal.isVisible ? "animate-fade-in" : "opacity-0"}`}
    >
      <h3 className="text-xl font-semibold mb-6">{category.name}</h3>
      <div className="flex flex-wrap gap-4">
        {category.skills.map((skill, i) => (
          <SkillHexagon key={i} skill={skill} index={i} />
        ))}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const titleReveal = useScrollReveal();
  
  return (
    <section id="skills" className="relative overflow-hidden bg-secondary/50">
      <div className="container mx-auto max-w-5xl">
        <div
          ref={titleReveal.ref as React.RefObject<HTMLDivElement>}
          className={`mb-12 ${titleReveal.isVisible ? "animate-fade-in" : "opacity-0"}`}
        >
          <h2 className="section-title">Skills & Technologies</h2>
        </div>

        <div>
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
