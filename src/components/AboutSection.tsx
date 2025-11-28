import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Calendar, Sparkles } from "lucide-react";

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: "3+", label: "Years Experience" },
    { value: "50+", label: "Projects Delivered" },
    { value: "20+", label: "Happy Clients" },
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">About Me</span>
          <h2 className="text-heading-1 text-foreground">
            Where Technology Meets Creativity
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-body-lg text-muted-foreground">
              I'm a content creator and AI creative technologist based in Cairo, with a unique blend of technical expertise and creative vision. My journey began with a BSc in Computer Science from the Islamic University of Gaza, where I discovered my passion for bridging the gap between technology and storytelling.
            </p>

            <p className="text-body text-muted-foreground">
              Over the past 3+ years, I've worked with brands, startups, and agencies to create compelling digital content that resonates with audiences. What sets me apart is my AI-first approach — I leverage cutting-edge tools like Midjourney, Runway, and ComfyUI to push the boundaries of what's possible in content creation.
            </p>

            <blockquote className="border-l-4 border-primary pl-6 py-2 my-8">
              <p className="text-body-lg text-foreground italic">
                "I believe the future of content lies at the intersection of human creativity and artificial intelligence."
              </p>
            </blockquote>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <GraduationCap size={20} className="text-primary" />
                <span className="text-sm">BSc Computer Science</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={20} className="text-primary" />
                <span className="text-sm">Cairo, Egypt</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar size={20} className="text-primary" />
                <span className="text-sm">Since June 2024</span>
              </div>
            </div>
          </motion.div>

          {/* Stats & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="bg-background rounded-xl p-6 text-center shadow-subtle hover:shadow-medium transition-shadow"
                >
                  <div className="text-display-sm text-primary font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-background rounded-xl p-8 shadow-subtle hover:shadow-medium transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Sparkles className="text-primary" size={20} />
                </div>
                <h3 className="text-heading-3 text-foreground">My Vision</h3>
              </div>
              <p className="text-body text-muted-foreground">
                To empower brands with innovative, AI-enhanced content that captivates audiences and drives meaningful engagement. I'm committed to staying at the forefront of creative technology to deliver work that's not just beautiful, but strategically impactful.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
