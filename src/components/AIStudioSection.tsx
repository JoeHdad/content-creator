import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Wand2, Cpu, Zap } from "lucide-react";

const aiProjects = [
  {
    id: 1,
    title: "Generative Brand Campaign",
    description: "Complete AI-generated visual campaign using Midjourney and custom style tuning for a luxury brand.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=600&fit=crop",
    techStack: ["Midjourney", "Photoshop", "Lightroom"],
    role: "Creative Director",
    icon: Sparkles,
  },
  {
    id: 2,
    title: "Synthetic Video Production",
    description: "AI-powered video creation using Runway Gen-2 for product demonstrations and marketing content.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    techStack: ["Runway", "After Effects", "Premiere Pro"],
    role: "AI Video Producer",
    icon: Wand2,
  },
  {
    id: 3,
    title: "AI Avatar Development",
    description: "Custom AI avatar creation and animation for virtual brand ambassadors and interactive experiences.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
    techStack: ["D-ID", "ElevenLabs", "ComfyUI"],
    role: "Avatar Designer",
    icon: Cpu,
  },
  {
    id: 4,
    title: "Automated Editing Workflow",
    description: "Custom ComfyUI workflows for automated video editing, color grading, and content repurposing.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop",
    techStack: ["ComfyUI", "Python", "FFmpeg"],
    role: "Workflow Engineer",
    icon: Zap,
  },
];

export const AIStudioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ai-studio" className="py-24 bg-secondary/30 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gradient-ai font-semibold mb-4 block">AI Studio</span>
          <h2 className="text-heading-1 text-foreground mb-4">
            The Future of Creative
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Exploring the cutting edge of AI-enhanced content creation through innovative tools and techniques.
          </p>
        </motion.div>

        {/* AI Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {aiProjects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className="group relative bg-background rounded-2xl overflow-hidden shadow-medium hover:shadow-elevated transition-all duration-500"
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500" />
                
                <div className="relative">
                  {/* Image */}
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-8 -mt-16 relative">
                    {/* Icon Badge */}
                    <div className="w-14 h-14 rounded-xl bg-background shadow-elevated flex items-center justify-center mb-6 group-hover:shadow-glow transition-shadow duration-300">
                      <IconComponent className="text-primary" size={28} />
                    </div>

                    {/* Role Badge */}
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
                      {project.role}
                    </span>

                    <h3 className="text-heading-2 text-foreground mb-3 group-hover:text-gradient transition-all duration-300">
                      {project.title}
                    </h3>

                    <p className="text-body text-muted-foreground mb-6">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 rounded-lg text-sm font-medium bg-secondary text-secondary-foreground border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
