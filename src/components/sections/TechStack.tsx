import { motion } from 'framer-motion';

const techStack = [
  { name: 'Artificial Intelligence', emoji: '🤖' },
  { name: 'Amazon Web Services', emoji: '☁️' },
  { name: 'Angular', emoji: '🔺' },
  { name: 'React Js', emoji: '⚛️' },
  { name: 'Vue.js', emoji: '💚' },
  { name: 'ASP.NET', emoji: '🔵' },
  { name: 'HTML5/CSS3', emoji: '🌐' },
  { name: 'JavaScript', emoji: '💛' },
  { name: 'Node.js', emoji: '💚' },
  { name: 'Azure', emoji: '☁️' },
  { name: 'Java', emoji: '☕' },
  { name: 'Python', emoji: '🐍' },
  { name: 'MySQL', emoji: '🐬' },
  { name: 'MongoDB', emoji: '🍃' },
  { name: 'Django/Flask', emoji: '🌿' },
  { name: 'Swift / iOS', emoji: '🍎' },
  { name: 'Go / Rust', emoji: '🦀' },
  { name: 'Flutter', emoji: '💙' },
];

const TechStack = () => {
  return (
    <section className="section-gap bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Technology Stack
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-black mt-3 mb-6">
              Languages, Frameworks & Tools
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We leverage a wide array of modern programming languages, robust frameworks, 
              and cutting-edge tools to deliver scalable and high-performance solutions 
              tailored to your business needs.
            </p>
          </motion.div>

          {/* Right - Tech Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-card rounded-xl p-4 text-center shadow-card hover:shadow-primary transition-all duration-300 border border-border group cursor-pointer"
                >
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                    {tech.emoji}
                  </div>
                  <p className="text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors">
                    {tech.name}
                  </p>
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
