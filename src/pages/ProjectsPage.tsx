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
      <section
        style={{ marginTop: 100 }}
        className="pt-32 pb-20 bg-gradient-to-br from-background to-muted text-center"
      >
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
            A showcase of our recent work, innovative solutions, and successful
            client projects.
          </p>
        </div>
      </section>

      {/* ================= FILTER ================= */}
      <section className="section-gap bg-background">
        {/* ================= PROJECT GRID ================= */}
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group relative rounded-3xl overflow-hidden bg-white dark:bg-zinc-900 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* IMAGE */}
              <div className="relative h-[260px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition" />

                {/* HOVER BUTTON */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <button className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-xl font-semibold text-sm shadow hover:scale-105 transition">
                    View Project <ExternalLink size={16} />
                  </button>
                </div>
              </div>

              {/* CONTENT (ALWAYS VISIBLE) */}
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {project.category}
                </span>

                <h3 className="text-xl font-bold mt-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground mt-2">
                  High quality project with modern UI and scalable architecture.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="section-gap bg-gradient-to-r from-primary to-accent text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 style={{color: "#fff"}} className="text-3xl md:text-4xl font-heading font-black mb-4">
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
