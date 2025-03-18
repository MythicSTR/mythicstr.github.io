
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import ProjectModal, { ProjectDetails } from "./ProjectModal";
import { ExternalLink, Github, Plus } from "lucide-react";
import { motion } from "framer-motion";

const projects: ProjectDetails[] = [
  {
    id: "shopping-cart",
    title: "Shopping Cart Backend System",
    description: "A comprehensive backend system with microservices architecture for e-commerce platforms.",
    longDescription: "Developed robust microservices architecture for product, payment, and order management services using Spring Boot. Designed and implemented RESTful APIs, leveraging Spring Data JPA and Hibernate ORM for efficient data persistence and MySQL for relational storage.",
    image: "",
    technologies: ["Java", "Spring Boot", "Spring Data JPA", "Hibernate", "MySQL", "Microservices Architecture", "RESTful APIs"],
    githubUrl: "https://github.com/MythicSTR"
  },
  {
    id: "gesture-recognition",
    title: "Gesture-Controlled Digital Interaction System",
    description: "AI-powered system for real-time hand gesture recognition using computer vision techniques.",
    longDescription: "Developed a real-time gesture recognition system, enabling touches computer interaction via hand gestures. Implemented a Conv3D + LSTM hybrid model trained on a Kaggle dataset, applying proper data augmentation techniques, and achieving an overall 75% accuracy.",
    image: "",
    technologies: ["Python", "OpenCV", "NumPy", "TensorFlow"],
    githubUrl: "https://github.com/MythicSTR"
  },
  {
    id: "munchy",
    title: "Munchy",
    description: "On-Site Restaurant Ordering System for seamless ordering and management.",
    longDescription: "Developed a real-time restaurant ordering application enabling customers to browse menus, customize orders, and place them instantly. Designed a responsive and interactive UI, integrated live order tracking, and dynamic menu updates, ensuring instant transmission to restaurant systems for faster processing and efficient order management.",
    image: "",
    technologies: ["FlutterFlow", "Firebase"],
    githubUrl: "https://github.com/MythicSTR"
  },
  {
    id: "unify",
    title: "Unify",
    description: "Classroom Allocation Management System with dynamic scheduling and resource management.",
    longDescription: "Built RESTful API endpoints with Django for dynamic classroom scheduling and real-time data management, ensuring smooth interaction with the frontend. Utilized PostgreSQL for robust data storage and Django's ORM for efficient querying and management of classroom, schedule, and resource data.",
    image: "",
    technologies: ["Django", "React.js", "PostgreSQL", "RESTful APIs"],
    githubUrl: "https://github.com/MythicSTR/Unify"
  },
  {
    id: "unilife",
    title: "Unilife",
    description: "E-commerce and Local Discovery Platform with authentication and search functionality.",
    longDescription: "Developed a full-stack platform combining e-commerce and hostel search functionalities, enabling efficient handling of user authentication, product listings, and hostel search queries. Utilized JWT for secure, stateless authentication, and MongoDB to store and manage product and hostel data, ensuring seamless retrieval and updates.",
    image: "",
    technologies: ["React.js", "Node.js", "Express", "MongoDB", "JWT"],
    githubUrl: "https://github.com/MythicSTR/Unilife"
  },
  {
    id: "fordays",
    title: "Fordays Japanese Language Classroom Portal",
    description: "Single-page application for a Japanese language classroom at Kathmandu University.",
    longDescription: "Developed a single-page application to showcase the Fordays Japanese language classroom at Kathmandu University. Designed and implemented user-friendly interface for sections including About Us, Students & Alumni, and Events, providing a seamless user experience.",
    image: "",
    technologies: ["React.js", "Tailwind CSS"],
    githubUrl: "https://github.com/MythicSTR",
    liveUrl: "https://japaneselanguage.ku.edu.np/"
  }
];

const ProjectCard = ({ project, onClick }: { project: ProjectDetails; onClick: () => void }) => {
  const cardReveal = useScrollReveal();
  
  return (
    <motion.div
      ref={cardReveal.ref as React.RefObject<HTMLDivElement>}
      className={`glass rounded-xl overflow-hidden group h-full transition-all duration-300 hover:shadow-lg ${
        cardReveal.isVisible ? "animate-fade-in" : "opacity-0"
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={cardReveal.isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="aspect-video bg-accent/10 group-hover:bg-accent/20 transition-all relative overflow-hidden">
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-accent">{project.title}</span>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <motion.button
            onClick={onClick}
            className="btn btn-accent flex items-center gap-2 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Plus size={18} /> View Details
          </motion.button>
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
    </motion.div>
  );
};

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null);
  const titleReveal = useScrollReveal();

  return (
    <section id="projects" className="relative overflow-hidden py-16">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={titleReveal.ref as React.RefObject<HTMLDivElement>}
          className={`mb-12 ${titleReveal.isVisible ? "animate-fade-in" : "opacity-0"}`}
          initial={{ opacity: 0, y: 20 }}
          animate={titleReveal.isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-center mt-4">
            A selection of my recent work and personal projects
          </p>
        </motion.div>

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
