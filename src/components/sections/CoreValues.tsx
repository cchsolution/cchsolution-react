import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const values = [
  'Accountable',
  'Aligned',
  'Disciplined',
  'Proactive',
  'Respectful',
  'Results-Oriented',
  'Team Players',
  'Trustworthy',
];

const CoreValues = () => {
  return (
    <section className="section-gap bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-black mb-6">
              Our Core Values
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              These deeply ingrained principles direct the behavior and decision-making 
              of the entire team in every action. They serve as our cultural cornerstones.
            </p>
            <Button variant="default" size="lg">
              About Us
            </Button>
          </motion.div>

          {/* Right - Values Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={value}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className={`p-6 rounded-xl ${
                    index % 2 === 0 ? 'bg-muted' : 'bg-card border border-border'
                  }`}
                >
                  <p className="font-medium text-lg">
                    We are{' '}
                    <span className="font-heading font-bold text-primary">{value}</span>
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

export default CoreValues;
