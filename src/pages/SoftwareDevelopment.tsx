import { motion } from "framer-motion";
import {
  Server,
  Database,
  ShieldCheck,
  Settings,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

import software1 from "@/assets/service-1.jpg";
import software2 from "@/assets/service-2.jpg";
import software3 from "@/assets/service-3.jpg";

const softwareProjects = [
  {
    title: "Insurance Management System",
    category: "Enterprise Software",
    image: software1,
  },
  {
    title: "School Management System",
    category: "Business Software",
    image: software2,
  },
  {
    title: "ERP & CRM Platform",
    category: "Custom Enterprise Solution",
    image: software3,
  },
];

const features = [
  {
    icon: <Server className="w-6 h-6" />,
    title: "Custom Software Solutions",
    desc: "Tailor-made software built exactly according to your business workflow.",
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Scalable Architecture",
    desc: "Secure, scalable, and future-ready software systems.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Enterprise Security",
    desc: "Data protection, role management, and secure cloud deployment.",
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "System Integration",
    desc: "API, third-party tools, payment gateways, and automation integrations.",
  },
];

const process = [
  "Business analysis & system planning",
  "UI/UX design & software architecture",
  "Agile software development",
  "Testing, security audit & optimization",
  "Deployment, training & long-term support",
];

const SoftwareDevelopment = () => {
  return (
    <main className="overflow-hidden">
      {/* ================= HERO ================= */}
      <section
        style={{ marginTop: 100 }}
        className="pt-32 pb-24 bg-gradient-to-br from-background via-muted to-background"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-6"
          >
            Software <span className="text-primary">Development</span>
          </motion.h1>

          <p className="max-w-3xl mx-auto text-muted-foreground text-lg">
            We build powerful, secure, and scalable software solutions that
            streamline operations, improve efficiency, and drive business growth.
          </p>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="section-gap bg-background">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-border p-6 shadow-lg hover:shadow-2xl transition bg-card"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                {item.icon}
              </div>
              <h4 className="font-bold text-lg mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="section-gap bg-muted">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-black mb-6">
              Our Software Development Process
            </h2>

            <div className="space-y-4">
              {process.map((step, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">{step}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={software1}
              alt="Software Development"
              className="rounded-3xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="section-gap bg-background">
        <div className="container mx-auto px-4 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-black mb-4">
            Our Software Projects
          </h2>
          <p className="text-muted-foreground">
            Real business software solutions developed for various industries.
          </p>
        </div>

        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {softwareProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group relative rounded-3xl overflow-hidden bg-card shadow-lg hover:shadow-2xl transition hover:-translate-y-2"
            >
              <div className="relative h-[260px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition" />
              </div>

              <div className="p-6 text-left">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mt-2">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="section-gap bg-gradient-to-r from-primary to-accent text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 style={{color: "#fff"}} className="text-3xl md:text-4xl font-heading font-black mb-4">
            Need Custom Software for Your Business?
          </h2>
          <p className="mb-8 text-primary-foreground/80">
            Let’s build a powerful system that automates and scales your operations.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-3 rounded-xl hover:scale-105 transition"
          >
            Get Free Consultation <ArrowRight />
          </a>
        </div>
      </section>
    </main>
  );
};

export default SoftwareDevelopment;
