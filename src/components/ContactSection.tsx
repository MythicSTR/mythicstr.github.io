
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";
import { Mail, Send, Github, Linkedin, MapPin } from "lucide-react";

const ContactSection = () => {
  const titleReveal = useScrollReveal();
  const formReveal = useScrollReveal({ delay: 200 });
  const infoReveal = useScrollReveal({ delay: 400 });
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setIsSubmitting(true);
    
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        message: ""
      });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-secondary/50">
      <div className="container mx-auto max-w-5xl">
        <div
          ref={titleReveal.ref as React.RefObject<HTMLDivElement>}
          className={`mb-12 ${titleReveal.isVisible ? "animate-fade-in" : "opacity-0"}`}
        >
          <h2 className="section-title">Get In Touch</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div
            ref={formReveal.ref as React.RefObject<HTMLDivElement>}
            className={`${formReveal.isVisible ? "animate-fade-in" : "opacity-0"}`}
          >
            <form onSubmit={handleSubmit} className="glass rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-6">Send me a message</h3>
              
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Your name"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  placeholder="Your message..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-accent w-full flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <div className="animate-spin h-5 w-5 border-2 border-accent-foreground border-t-transparent rounded-full" />
                ) : (
                  <>
                    <Send size={18} /> Send Message
                  </>
                )}
              </button>
              
              {submitSuccess && (
                <div className="mt-4 p-3 bg-accent/10 text-accent rounded-md animate-fade-in">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>
          
          <div
            ref={infoReveal.ref as React.RefObject<HTMLDivElement>}
            className={`${infoReveal.isVisible ? "animate-fade-in" : "opacity-0"}`}
          >
            <div className="glass rounded-xl p-6 h-full">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 text-accent rounded-lg">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a 
                      href="mailto:shishir@example.com" 
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      shishir@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 text-accent rounded-lg">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Location</h4>
                    <p className="text-muted-foreground">Kathmandu, Nepal</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-3">Social Profiles</h4>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-secondary hover:bg-accent/10 text-muted-foreground hover:text-accent rounded-lg transition-all"
                      aria-label="GitHub Profile"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-secondary hover:bg-accent/10 text-muted-foreground hover:text-accent rounded-lg transition-all"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-3">Response Time</h4>
                  <p className="text-muted-foreground">
                    I typically respond to messages within 24 hours. For urgent inquiries, please mention it in your message.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
