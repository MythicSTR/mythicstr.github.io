
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { GraduationCap, Award } from "lucide-react";

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
    <div
      ref={itemReveal.ref as React.RefObject<HTMLDivElement>}
      className={`glass rounded-xl p-6 hover:shadow-lg transition-all duration-300 ${
        itemReveal.isVisible ? "animate-fade-in" : "opacity-0"
      }`}
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
    </div>
  );
};

const EducationSection = () => {
  const titleReveal = useScrollReveal();
  
  const educationItems = [
    {
      icon: <GraduationCap size={24} />,
      title: "BSc. Computer Science",
      institution: "Kathmandu University",
      duration: "2020 - 2024",
      description: "Studying algorithms, data structures, software engineering, database systems, and machine learning. Participating in programming competitions and research projects.",
    },
    {
      icon: <Award size={24} />,
      title: "Machine Learning Specialization",
      institution: "Coursera (Stanford University)",
      duration: "2022",
      description: "Completed a comprehensive specialization covering machine learning algorithms, neural networks, and practical applications. Developed projects in supervised and unsupervised learning.",
    },
    {
      icon: <Award size={24} />,
      title: "UI/UX Design Professional Certificate",
      institution: "Google (Coursera)",
      duration: "2023",
      description: "Mastered user interface and experience design principles, user research methodologies, wireframing, prototyping, and usability testing. Created a portfolio of design projects.",
    }
  ];

  return (
    <section id="education" className="relative overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <div
          ref={titleReveal.ref as React.RefObject<HTMLDivElement>}
          className={`mb-12 ${titleReveal.isVisible ? "animate-fade-in" : "opacity-0"}`}
        >
          <h2 className="section-title">Education & Certifications</h2>
        </div>

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
