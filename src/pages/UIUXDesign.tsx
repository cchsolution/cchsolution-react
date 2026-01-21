import { motion } from "framer-motion";
import {
  Palette,
  Layout,
  PenTool,
  Users,
  CheckCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import ui1 from "@/assets/service-1.jpg";
import ui2 from "@/assets/service-2.jpg";
import ui3 from "@/assets/service-3.jpg";

const features = [
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Visual UI Design",
    desc: "Modern, brand-focused, and conversion-driven interface designs.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "User Experience (UX)",
    desc: "Research-based UX that improves usability and customer satisfaction.",
  },
  {
    icon: <Layout className="w-6 h-6" />,
    title: "Design Systems",
    desc: "Scalable design systems for consistency across digital products.",
  },
  {
    icon: <PenTool className="w-6 h-6" />,
    title: "Prototyping & Testing",
    desc: "Interactive prototypes with real user testing & feedback.",
  },
];

const process = [
  "Requirement gathering & user research",
  "Wireframing & information architecture",
  "UI design & branding",
  "Interactive prototyping",
  "Usability testing & design handoff",
];

const UIUXDesign = () => {
  return (
    <main className="overflow-hidden">
      {/* ================= HERO ================= */}
      <section
        style={{ marginTop: 100 }}
        className="pt-32 pb-24 bg-gradient-to-br from-background via-muted to-background"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary mb-4">
              <Sparkles className="w-4 h-4" /> UI / UX Design Services
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-6">
              Crafting <span className="text-primary">Beautiful</span> &
              User-Friendly Digital Experiences
            </h1>

            <p className="max-w-3xl mx-auto text-muted-foreground text-lg">
              We design intuitive, visually stunning, and user-centered digital
              experiences that increase engagement and business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="section-gap bg-background">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-border p-6 bg-card shadow hover:shadow-xl transition"
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
              Our UI/UX Design Process
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
              src={ui1}
              alt="UI UX Design"
              className="rounded-3xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= SHOWCASE ================= */}
      <section className="section-gap bg-background">
        <div className="container mx-auto px-4 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-black mb-4">
            Design That Makes an Impact
          </h2>
          <p className="text-muted-foreground">
            Some of our interface and experience design work.
          </p>
        </div>

        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[ui1, ui2, ui3].map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >
              <img
                src={img}
                alt="UI UX Project"
                className="w-full h-[260px] object-cover hover:scale-105 transition duration-700"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="section-gap bg-gradient-to-r from-primary to-accent text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 style={{color: "#fff"}} className="text-3xl md:text-4xl font-heading font-black mb-4">
            Need Stunning UI/UX for Your Product?
          </h2>
          <p className="mb-8 text-primary-foreground/80">
            Let’s design experiences your users will love.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-3 rounded-xl hover:scale-105 transition"
          >
            Start Your Design Project <ArrowRight />
          </a>
        </div>
      </section>
    </main>
  );
};

export default UIUXDesign;
