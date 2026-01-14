import { motion } from 'framer-motion';
import { Lightbulb, Users } from 'lucide-react';
import about1 from '@/assets/about-1.jpg';
import about2 from '@/assets/about-2.jpg';

const About = () => {
  return (
    <section id="about" className="section-gap bg-muted relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              <span className="w-12 h-0.5 bg-primary" />
              About Our Company
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black mb-6">
              Your Best IT{' '}
              <span className="text-primary">Solution</span> Service Partner
            </h2>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              Distinctively exploit optimal alignments for revolutionary catalysts. 
              We leverage cutting-edge technology to deliver solutions that drive your business forward.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Feature 1 */}
              <div className="flex gap-4">
                <div className="w-14 h-14 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg mb-2">Exclusive Design</h4>
                  <p className="text-muted-foreground text-sm">
                    Quickly productivate just in time strategic theme lacus mirina magna
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4">
                <div className="w-14 h-14 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0">
                  <Users className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg mb-2">Professional Team</h4>
                  <p className="text-muted-foreground text-sm">
                    Quickly productivate just in time strategic theme lacus mirina magna
                  </p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-5">
              <SkillBar label="IT Services" percentage={85} />
              <SkillBar label="Technology" percentage={96} />
            </div>
          </motion.div>

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              {/* Main image */}
              <div className="relative z-10">
                <img
                  src={about1}
                  alt="Team working"
                  className="rounded-2xl shadow-lg w-full max-w-md ml-auto"
                />
              </div>

              {/* Secondary image */}
              <div className="absolute bottom-0 left-0 z-20 transform translate-y-8 -translate-x-4 md:translate-x-0">
                <img
                  src={about2}
                  alt="Developer coding"
                  className="rounded-2xl shadow-lg w-48 md:w-64 border-4 border-background"
                />
              </div>

              {/* Experience badge */}
              <div className="absolute bottom-4 right-0 z-30 bg-card rounded-xl p-6 shadow-lg">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-1">Years of Experience</p>
                  <span className="text-5xl font-heading font-black gradient-text">14+</span>
                </div>
              </div>

              {/* Decorative line */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent rounded-full hidden lg:block" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SkillBar = ({ label, percentage }: { label: string; percentage: number }) => {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="font-heading font-semibold text-card-foreground">{label}</span>
        <span className="font-heading font-bold text-primary">{percentage}%</span>
      </div>
      <div className="h-2 bg-border rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="h-full gradient-bg rounded-full"
        />
      </div>
    </div>
  );
};

export default About;
