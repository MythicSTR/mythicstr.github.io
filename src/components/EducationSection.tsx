
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

interface EducationItemProps {
  icon: React.ReactNode;
  title: string;
  institution: string;
  duration: string;
  description: string;
  index: number;
}

const EducationItem = ({ icon, title, institution, duration, description, index }: EducationItemProps) => {
  const itemReveal = useScrollReveal({ delay: 200 * index });
  
  return (
    <motion.div
      ref={itemReveal.ref as React.RefObject<HTMLDivElement>}
      className={`glass rounded-xl p-6 hover:shadow-lg transition-all duration-300 ${
        itemReveal.isVisible ? "animate-fade-in" : "opacity-0"
      }`}
      initial={{ opacity: 0, y: 30 }}
      animate={itemReveal.isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-accent/10 text-accent rounded-lg">
          {icon}
        </div>
        
        <div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
            <h3 className="font-semibold text-xl">{title}</h3>
            <span className="text-sm font-medium bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
              {duration}
            </span>
          </div>
          
          <h4 className="text-accent font-medium mb-4">{institution}</h4>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const EducationSection = () => {
  const titleReveal = useScrollReveal();
  
  const educationItems = [
    {
      icon: <GraduationCap size={24} />,
      title: "Bachelor of Science in Computer Science",
      institution: "Kathmandu University",
      duration: "Dec 2020 - Present",
      description: "Related Coursework: Object Oriented Programming, Data Structures and Algorithms, Database Management Systems, Software Engineering",
    }
  ];

  return (
    <section id="education" className="relative overflow-hidden py-16">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          ref={titleReveal.ref as React.RefObject<HTMLDivElement>}
          className={`mb-12 ${titleReveal.isVisible ? "animate-fade-in" : "opacity-0"}`}
          initial={{ opacity: 0, y: 20 }}
          animate={titleReveal.isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Education</h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6">
          {educationItems.map((item, index) => (
            <EducationItem key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
