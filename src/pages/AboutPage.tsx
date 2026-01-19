import { motion } from "framer-motion";
import { Lightbulb, Users, Target, Eye, CheckCircle } from "lucide-react";
import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.jpg";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const AboutPage = () => {
  return (
    <>
      <main className="overflow-hidden">
        {/* ================= HERO SECTION ================= */}
        <section
          style={{ marginTop: 100 }}
          className="relative pt-32 pb-20 bg-gradient-to-br from-background to-muted"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-4"
            >
              About <span className="text-primary">Our Company</span>
            </motion.h1>

            <p className="max-w-3xl mx-auto text-muted-foreground text-lg">
              We are a professional IT solutions company helping businesses grow
              with modern technology, creative design, and powerful digital
              solutions.
            </p>
          </div>
        </section>

        {/* ================= ABOUT CONTENT ================= */}
        <section className="section-gap bg-background relative">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-semibold uppercase tracking-wider">
                Who We Are
              </span>

              <h2 className="text-3xl md:text-4xl font-heading font-black mt-3 mb-6">
                Your Trusted Partner in Digital Transformation
              </h2>

              <p className="text-muted-foreground mb-5 leading-relaxed">
                We specialize in building websites, applications, and software
                solutions that help businesses scale faster and operate smarter.
                Our team focuses on quality, performance, and long-term success.
              </p>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                From startups to enterprises, we provide complete IT services
                including design, development, marketing, and cyber security. We
                don’t just build products — we build reliable digital solutions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <InfoBox icon={Lightbulb} title="Creative Solutions" />
                <InfoBox icon={Users} title="Expert Team Members" />
                <InfoBox icon={CheckCircle} title="Trusted by Clients" />
                <InfoBox icon={Target} title="Business Driven Approach" />
              </div>
            </motion.div>

            {/* Right Images */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={about1}
                alt="Office team"
                className="rounded-2xl shadow-xl w-full max-w-lg ml-auto"
              />

              <img
                src={about2}
                alt="Development work"
                className="absolute -bottom-10 -left-6 w-48 md:w-64 rounded-2xl shadow-xl border-4 border-background"
              />

              <div className="absolute top-6 left-6 bg-card rounded-xl p-5 shadow-lg">
                <p className="text-sm text-muted-foreground">Experience</p>
                <p className="text-4xl font-black text-primary">14+</p>
                <p className="text-xs text-muted-foreground">Years</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================= MISSION & VISION ================= */}
        <section className="section-gap bg-muted">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
            <MissionCard
              icon={Target}
              title="Our Mission"
              desc="To deliver powerful, scalable, and innovative digital solutions that help businesses grow faster and smarter."
            />

            <MissionCard
              icon={Eye}
              title="Our Vision"
              desc="To become a trusted global IT partner by creating technology that makes businesses more efficient and future-ready."
            />
          </div>
        </section>

        {/* ================= SKILLS ================= */}
        <section className="section-gap bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-center text-3xl md:text-4xl font-heading font-black mb-10">
              Our Expertise
            </h2>

            <SkillBar label="Website & App Development" percentage={92} />
            <SkillBar label="Software Solutions" percentage={88} />
            <SkillBar label="UI/UX & Branding" percentage={85} />
            <SkillBar label="Digital Marketing" percentage={80} />
            <SkillBar label="Cyber Security" percentage={78} />
          </div>
        </section>
      </main>
    </>
  );
};

/* ---------------- SMALL COMPONENTS ---------------- */

const InfoBox = ({ icon: Icon, title }) => (
  <div className="flex items-center gap-4 bg-card rounded-xl p-4 shadow-sm">
    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <p className="font-semibold">{title}</p>
  </div>
);

const MissionCard = ({ icon: Icon, title, desc }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="bg-card rounded-2xl p-8 shadow-lg relative overflow-hidden"
  >
    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
      <Icon className="w-7 h-7 text-primary" />
    </div>

    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-muted-foreground leading-relaxed">{desc}</p>
  </motion.div>
);

const SkillBar = ({ label, percentage }) => (
  <div className="mb-6">
    <div className="flex justify-between mb-2">
      <span className="font-semibold">{label}</span>
      <span className="font-bold text-primary">{percentage}%</span>
    </div>
    <div className="h-2 bg-border rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="h-full bg-gradient-to-r from-primary to-sky-500 rounded-full"
      />
    </div>
  </div>
);

export default AboutPage;
