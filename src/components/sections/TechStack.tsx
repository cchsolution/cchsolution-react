import { motion } from "framer-motion";

const techStack = [
  { name: "Artificial Intelligence", icon: "ai.png" },
  { name: "Amazon Web Services", icon: "aws.png" },
  { name: "Angular", icon: "angular.png" },
  { name: "React Js", icon: "react.png" },
  { name: "Vue.js", icon: "vue-js.png" },
  { name: "ASP.NET", icon: "net.png" },
  { name: "HTML5 / CSS3", icon: "html-css.png" },
  { name: "JavaScript", icon: "javascript.png" },
  { name: "Node.js", icon: "nodejs.png" },
  { name: "Microsoft Azure", icon: "azure.png" },
  { name: "Java", icon: "java.png" },
  { name: "Python", icon: "python.png" },
  { name: "MySQL", icon: "mysql.png" },
  { name: "MongoDB", icon: "mongodb.png" },
  { name: "Django / Flask", icon: "django.png" },
  { name: "Swift / iOS", icon: "swift.png" },
  { name: "Go / Rust", icon: "rust.png" },
  { name: "Flutter", icon: "flutter.png" },
];

const TechStack = () => {
  return (
    <section className="relative overflow-hidden py-28 bg-gradient-to-br from-background via-muted to-background">
      {/* Decorative Blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-24 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <span className="inline-block mb-4 text-sm font-bold uppercase tracking-widest text-primary">
              Our Technology Stack
            </span>

            <h2 className="text-4xl md:text-5xl font-heading font-black leading-tight mb-6">
              Powered by <span className="text-primary">Modern</span> Technology
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              We work with cutting-edge languages, frameworks, and cloud platforms
              to build fast, secure, and scalable digital products.
            </p>
          </motion.div>

          {/* RIGHT GRID */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="group relative rounded-2xl p-5 bg-card/70 backdrop-blur-xl border border-border shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-primary/10 opacity-0 group-hover:opacity-100 blur-xl transition" />

                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-14 h-14 flex items-center justify-center mb-4 rounded-xl bg-background shadow">
                      <img
                        src={`images/logos/${tech.icon}`}
                        alt={tech.name}
                        className="w-9 h-9 object-contain"
                      />
                    </div>

                    <p className="text-sm font-semibold text-muted-foreground group-hover:text-primary transition-colors">
                      {tech.name}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
