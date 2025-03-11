
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import ProjectModal, { ProjectDetails } from "./ProjectModal";
import { ExternalLink, Github, Plus } from "lucide-react";

const projects: ProjectDetails[] = [
  {
    id: "shopping-cart",
    title: "Shopping Cart System",
    description: "A comprehensive e-commerce platform with secure payment processing and inventory management.",
    longDescription: "A fully-featured e-commerce solution built with Spring Boot and React. Features include product catalog, shopping cart, user authentication, payment processing, and inventory management. The system uses PostgreSQL for data storage and AWS for deployment.",
    image: "",
    technologies: ["Java", "Spring Boot", "React", "PostgreSQL", "AWS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: "gesture-recognition",
    title: "Gesture Recognition System",
    description: "AI-powered system for real-time hand gesture recognition using computer vision techniques.",
    longDescription: "A machine learning model that recognizes hand gestures in real-time using computer vision. Built with Python, TensorFlow, and OpenCV. The system can recognize over 20 different hand gestures with 95% accuracy and has applications in accessibility and human-computer interaction.",
    image: "",
    technologies: ["Python", "TensorFlow", "OpenCV", "Machine Learning"],
    githubUrl: "https://github.com"
  },
  {
    id: "munchy",
    title: "Munchy",
    description: "Food delivery app connecting local restaurants with customers for seamless ordering.",
    longDescription: "A food delivery platform that connects local restaurants with hungry customers. Features include restaurant discovery, menu browsing, order placement, real-time tracking, and payment processing. Built with React Native for cross-platform mobile support.",
    image: "",
    technologies: ["React Native", "Node.js", "MongoDB", "Firebase"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: "unify",
    title: "Unify",
    description: "Team collaboration platform with real-time messaging, file sharing, and task management.",
    longDescription: "A comprehensive team collaboration tool that combines messaging, file sharing, and task management. Features include channels, direct messages, file uploads, task assignments, and calendar integration. Built with a microservices architecture for scalability.",
    image: "",
    technologies: ["TypeScript", "NestJS", "React", "WebSockets", "Docker"],
    githubUrl: "https://github.com"
  },
  {
    id: "unilife",
    title: "Unilife",
    description: "Student management system for universities with course registration and grade tracking.",
    longDescription: "A student management system designed for universities. Features include course registration, attendance tracking, grade management, academic calendar, and student profiles. The system provides separate interfaces for students, faculty, and administrators.",
    image: "",
    technologies: ["Django", "PostgreSQL", "React", "Redux", "Docker"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    description: "Personal portfolio website showcasing projects and skills with a modern design.",
    longDescription: "A personal portfolio website built with React and Tailwind CSS. Features a responsive design, project showcase, skills visualization, and contact form. The website includes subtle animations and transitions for an engaging user experience.",
    image: "",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  }
];

const ProjectCard = ({ project, onClick }: { project: ProjectDetails; onClick: () => void }) => {
  const cardReveal = useScrollReveal();
  
  return (
    <div
      ref={cardReveal.ref as React.RefObject<HTMLDivElement>}
      className={`glass rounded-xl overflow-hidden group h-full transition-all duration-300 hover:shadow-lg ${
        cardReveal.isVisible ? "animate-fade-in" : "opacity-0"
      }`}
    >
      <div className="aspect-video bg-accent/10 group-hover:bg-accent/20 transition-all relative overflow-hidden">
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-accent">{project.title}</span>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button
            onClick={onClick}
            className="btn btn-accent flex items-center gap-2 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
          >
            <Plus size={18} /> View Details
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, i) => (
            <span key={i} className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
        
        <div className="flex gap-4 mt-auto">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label={`View ${project.title} code on GitHub`}
            >
              <Github size={18} />
            </a>
          )}
          
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label={`View ${project.title} live demo`}
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null);
  const titleReveal = useScrollReveal();

  return (
    <section id="projects" className="relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div
          ref={titleReveal.ref as React.RefObject<HTMLDivElement>}
          className={`mb-12 ${titleReveal.isVisible ? "animate-fade-in" : "opacity-0"}`}
        >
          <h2 className="section-title">Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default ProjectsSection;
