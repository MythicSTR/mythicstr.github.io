
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { motion } from "framer-motion";

const AboutSection = () => {
  const titleReveal = useScrollReveal();
  const contentReveal = useScrollReveal({ delay: 300 });
  const skillsReveal = useScrollReveal({ delay: 400 });

  return (
    <section id="about" className="relative overflow-hidden py-16">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          ref={titleReveal.ref as React.RefObject<HTMLDivElement>}
          className={`mb-12 ${titleReveal.isVisible ? "animate-fade-in" : "opacity-0"}`}
          initial={{ opacity: 0, y: 20 }}
          animate={titleReveal.isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
        </motion.div>

        <motion.div
          ref={contentReveal.ref as React.RefObject<HTMLDivElement>}
          className={`max-w-3xl mx-auto ${contentReveal.isVisible ? "animate-fade-in" : "opacity-0"}`}
          initial={{ opacity: 0, y: 30 }}
          animate={contentReveal.isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="text-lg mb-6 leading-relaxed">
            I'm a Computer Science undergraduate at Kathmandu University with a passion for building elegant, user-friendly software solutions. My journey in tech started with web development and has evolved to encompass UI/UX design and machine learning.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            I believe in creating technology that solves real problems while delivering exceptional user experiences. When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or hiking in Nepal's beautiful mountains.
          </p>

          <motion.div
            ref={skillsReveal.ref as React.RefObject<HTMLDivElement>}
            className={`mt-8 ${skillsReveal.isVisible ? "animate-fade-in" : "opacity-0"}`}
            initial={{ opacity: 0, y: 40 }}
            animate={skillsReveal.isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-4">Core Skills</h3>
            <div className="flex flex-wrap gap-2">
              {["Java", "Python", "React.js", "Spring Boot", "Django", "JavaScript", "TypeScript", "UI/UX Design", "Machine Learning"].map((skill, index) => (
                <motion.span
                  key={index}
                  className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  whileHover={{ y: -3, boxShadow: "0 5px 10px rgba(0,0,0,0.1)" }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
