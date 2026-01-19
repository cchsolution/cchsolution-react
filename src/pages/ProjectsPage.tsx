import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";

import project1 from "@/assets/service-1.jpg";
import project2 from "@/assets/service-2.jpg";
import project3 from "@/assets/service-3.jpg";

const projects = [
  {
    title: "Insurance Management System",
    category: "Web Application",
    image: project1,
  },
  {
    title: "E-Commerce Mobile App",
    category: "Mobile Application",
    image: project2,
  },
  {
    title: "Company Portfolio Website",
    category: "Website Design",
    image: project3,
  },

];

const categories = ["All", "Web", "Mobile", "Software", "Design"];

const ProjectsPage = () => {
  return (
    <main className="overflow-hidden">

      {/* ================= HERO ================= */}
      <section style={{marginTop: 100}} className="pt-32 pb-20 bg-gradient-to-br from-background to-muted text-center">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-4"
          >
            Our <span className="text-primary">Projects</span>
          </motion.h1>

          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            A showcase of our recent work, innovative solutions, and successful client projects.
          </p>
        </div>
      </section>

      {/* ================= FILTER ================= */}
      <section className="section-gap bg-background">
        <div className="container mx-auto px-4 text-center mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat, i) => (
              <button
                key={i}
                className={`px-6 py-2 rounded-full border border-border hover:bg-primary hover:text-white transition
                  ${cat === "All" ? "bg-primary text-white" : "bg-card"}
                `}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ================= PROJECT GRID ================= */}
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-primary transition"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[280px] object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-sm text-primary font-semibold">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white mt-1 mb-3">
                  {project.title}
                </h3>

                <button className="inline-flex items-center gap-2 text-white text-sm hover:text-primary transition">
                  View Project <ExternalLink size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="section-gap bg-gradient-to-r from-primary to-accent text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-black mb-4">
            Have a Project in Mind?
          </h2>
          <p className="mb-8 text-primary-foreground/80">
            Let’s build something powerful and meaningful together.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-3 rounded-xl hover:scale-105 transition"
          >
            Start Your Project <ArrowRight />
          </a>
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
