import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
import cuppressoImage from "./Gemini_Generated_Image_hjicbthjicbthjic.png";

const categories = ["All", "Social Media", "AI Video", "Branding", "Campaigns"];

const portfolioItems = [
  {
    id: 1,
    title: "Brand Storytelling Video",
    description: "Documentary-style brand video showcasing company culture and mission for a sustainable fashion brand.",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=400&fit=crop",
    tags: ["Video", "Storytelling", "Brand"],
    metrics: "98% Engagement",
    referenceLinks: ["https://www.behance.net/gallery/210774165/Logo-design"],
  },
  {
    id: 2,
    title: "Product Launch Campaign",
    description: "Multi-platform content campaign for a new product launch including teaser videos and social assets.",
    category: "Campaigns",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    tags: ["Launch", "Multi-platform", "Creative"],
    metrics: "150% ROI",
  },
  {
    id: 3,
    title: "AI Video Production",
    description: "Fully AI-generated promotional video using Runway and custom prompts for a fintech company.",
    category: "AI Video",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
    tags: ["AI", "Runway", "Automation"],
    metrics: "70% Cost Savings",
    referenceLinks: ["https://www.notion.so/My-Creative-Portfolio-24122ab3937f4449833b7cbaf02451a3?source=copy_link"],
  },
  {
    id: 4,
    title: "Visual Identity Design",
    description: "Complete visual identity system including logo, color palette, and brand guidelines.",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    tags: ["Identity", "Design", "Guidelines"],
    metrics: "Full Brand System",
  },
  {
    id: 5,
    title: "Creative Social Media Design",
    description: "High-impact creative social media content designed to captivate audiences and drive engagement across platforms.",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&h=400&fit=crop",
    tags: ["Creative", "Social Media", "Design"],
    metrics: "Creative Impact",
  },
  {
    id: 6,
    title: "Advertisements",
    description: "Immersive ad concepts and poster explorations crafted for performance-driven social campaigns.",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?w=600&h=400&fit=crop",
    tags: ["Ads", "Posters", "Social"],
    metrics: "Clickable Showcase",
    referenceLinks: ["https://www.behance.net/gallery/210773819/Posters"],
  },
  {
    id: 7,
    title: "Cuppresso Cafe",
    description: "Lifestyle social media grid for Cuppresso highlighting signature iced coffee moments across locations.",
    category: "Social Media",
    image: cuppressoImage,
    tags: ["Lifestyle", "Cafe", "Social"],
    metrics: "Story-driven Grid",
  },
];

export const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredItems =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium mb-4 block">Portfolio</span>
          <h2 className="text-heading-1 text-foreground mb-4">
            Content That Connects
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            A curated selection of projects showcasing creative excellence and strategic thinking.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === category
                  ? "bg-primary text-primary-foreground shadow-medium"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group"
            >
              {item.referenceLinks?.[0] ? (
                <a
                  href={item.referenceLinks[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  {renderCardContent(item)}
                </a>
              ) : (
                renderCardContent(item)
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const renderCardContent = (item: (typeof portfolioItems)[number]) => (
  <div className="bg-card rounded-xl overflow-hidden shadow-subtle hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
    {/* Image */}
    <div className="relative aspect-[4/3] overflow-hidden">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {item.referenceLinks?.[0] ? (
            <span className="w-12 h-12 rounded-full bg-background/90 flex items-center justify-center">
              <ExternalLink size={20} className="text-foreground" />
            </span>
          ) : (
            <button
              className="w-12 h-12 rounded-full bg-background/90 flex items-center justify-center hover:bg-background transition-colors"
              aria-label="View project"
            >
              <ExternalLink size={20} className="text-foreground" />
            </button>
          )}
        </div>
      </div>
      {/* Metrics Badge */}
      <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full">
        <span className="text-xs font-medium text-foreground">{item.metrics}</span>
      </div>
    </div>

    {/* Content */}
    <div className="p-6">
      <div className="flex flex-wrap gap-2 mb-3">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-heading-3 text-card-foreground mb-2 group-hover:text-primary transition-colors">
        {item.title}
      </h3>
      <p className="text-body-sm text-muted-foreground line-clamp-2">
        {item.description}
      </p>
    </div>
  </div>
);
