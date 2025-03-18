
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { motion } from "framer-motion";
import { Code, Database, Server, Globe, Layout, Lightbulb } from "lucide-react";

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    icon: <Layout size={24} />,
    color: "bg-gradient-to-r from-blue-400 to-indigo-500",
    skills: ["React", "TypeScript", "TailwindCSS", "Next.js", "Redux"]
  },
  {
    name: "Backend",
    icon: <Server size={24} />,
    color: "bg-gradient-to-r from-green-400 to-emerald-500",
    skills: ["Java", "Spring Boot", "Node.js", "Express", "Django"]
  },
  {
    name: "Database",
    icon: <Database size={24} />,
    color: "bg-gradient-to-r from-orange-400 to-pink-500",
    skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Firebase"]
  },
  {
    name: "Dev Tools",
    icon: <Code size={24} />,
    color: "bg-gradient-to-r from-purple-400 to-violet-500",
    skills: ["Git", "Docker", "CI/CD", "AWS", "VS Code"]
  },
  {
    name: "Web & API",
    icon: <Globe size={24} />,
    color: "bg-gradient-to-r from-cyan-400 to-blue-500",
    skills: ["REST APIs", "GraphQL", "OAuth", "WebSockets", "Microservices"]
  },
  {
    name: "UI/UX & Other",
    icon: <Lightbulb size={24} />,
    color: "bg-gradient-to-r from-yellow-400 to-amber-500",
    skills: ["Figma", "Adobe XD", "Responsive Design", "Machine Learning", "Agile"]
  }
];

const SkillCategory = ({ category, index }: { category: SkillCategory; index: number }) => {
  const categoryReveal = useScrollReveal({ delay: 200 * index });
  
  return (
    <motion.div
      ref={categoryReveal.ref as React.RefObject<HTMLDivElement>}
      className={`${categoryReveal.isVisible ? "animate-fade-in" : "opacity-0"}`}
      initial={{ opacity: 0, y: 30 }}
      animate={categoryReveal.isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ translateY: -5 }}
    >
      <div className="bg-card rounded-xl p-6 h-full shadow-sm hover:shadow-md transition-all duration-300">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4 ${category.color}`}>
          {category.icon}
        </div>
        <h3 className="text-xl font-semibold mb-3">{category.name}</h3>
        <div className="flex flex-wrap gap-2 mt-4">
          {category.skills.map((skill, i) => (
            <motion.span 
              key={i}
              className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 * i + 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const titleReveal = useScrollReveal();
  
  return (
    <section id="skills" className="relative overflow-hidden py-16 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          ref={titleReveal.ref as React.RefObject<HTMLDivElement>}
          className={`mb-12 ${titleReveal.isVisible ? "animate-fade-in" : "opacity-0"}`}
          initial={{ opacity: 0, y: 20 }}
          animate={titleReveal.isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-center mt-4">
            A curated selection of technologies I specialize in
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
