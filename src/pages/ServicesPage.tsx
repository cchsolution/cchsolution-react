import { motion } from "framer-motion";
import {
  Monitor,
  Code,
  Smartphone,
  Palette,
  Cloud,
  BarChart3,
  ShieldCheck,
  Database,
  ArrowRight,
  CheckCircle
} from "lucide-react";

import service1 from "@/assets/service-1.jpg";
import service2 from "@/assets/service-2.jpg";
import service3 from "@/assets/service-3.jpg";

const mainServices = [
  {
    icon: Monitor,
    title: "Website Development",
    desc: "High performance, SEO friendly and responsive websites for all business needs."
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Android and iOS apps designed for performance, security and scalability."
  },
  {
    icon: Code,
    title: "Software Development",
    desc: "Custom software solutions tailored to automate and scale your business."
  },
  {
    icon: Palette,
    title: "UI/UX & Graphic Design",
    desc: "Creative designs focused on branding, user experience and conversion."
  },
  {
    icon: BarChart3,
    title: "Digital Marketing",
    desc: "SEO, paid ads, branding and growth strategies to boost your business."
  },
  {
    icon: ShieldCheck,
    title: "Cyber Security",
    desc: "Protect your systems, networks and data with enterprise grade security."
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    desc: "Cloud deployment, DevOps and scalable infrastructure solutions."
  },
  {
    icon: Database,
    title: "Data Management",
    desc: "Database design, data security and analytics solutions."
  }
];

const ServicesPage = () => {
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
            Our <span className="text-primary">Services</span>
          </motion.h1>
          <p className="max-w-3xl mx-auto text-muted-foreground text-lg">
            We provide complete digital solutions to help businesses grow faster, smarter and stronger.
          </p>
        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="section-gap bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold uppercase tracking-wider">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-black mt-3">
              Professional IT Services
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group bg-card rounded-2xl p-7 shadow-card hover:shadow-primary transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition">
                  {service.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="section-gap bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl md:text-4xl font-heading font-black mb-14">
            Our Working Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {["Planning", "Design", "Development", "Launch"].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-6 shadow-card text-center"
              >
                <div className="text-5xl font-black text-primary mb-3">
                  0{i + 1}
                </div>
                <h4 className="font-bold mb-2">{step}</h4>
                <p className="text-muted-foreground text-sm">
                  We follow a structured approach to deliver high-quality digital products.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="section-gap bg-gradient-to-r from-primary to-accent text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 style={{color: "#fff"}} className="text-3xl md:text-4xl font-heading font-black mb-4">
            Let’s Build Something Great Together
          </h2>
          <p className="mb-8 text-primary-foreground/80">
            Contact us today to discuss your project and transform your ideas into reality.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-3 rounded-xl hover:scale-105 transition"
          >
            Get Started <ArrowRight />
          </a>
        </div>
      </section>

    </main>
  );
};

export default ServicesPage;
