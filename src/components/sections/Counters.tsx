import { motion } from 'framer-motion';

const counters = [
  { value: '98%', label: 'Client Satisfaction' },
  { value: '60s', label: 'Average Response Time' },
  { value: '24/7', label: 'Round-The-Clock Support' },
];

const Counters = () => {
  return (
    <section className="section-gap bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl lg:text-4xl font-heading font-black text-center mb-16 max-w-3xl mx-auto"
        >
          We handle the tech, so you can focus on your business.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {counters.map((counter, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-5xl md:text-6xl font-heading font-black gradient-text mb-3">
                {counter.value}
              </h3>
              <p className="text-muted-foreground font-medium text-lg">{counter.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counters;
