import { motion } from 'framer-motion';
import { ArrowRight, Smartphone, Cloud, Palette } from 'lucide-react';
import service1 from '@/assets/service-1.jpg';
import service2 from '@/assets/service-2.jpg';
import service3 from '@/assets/service-3.jpg';

const services = [
  {
    icon: Smartphone,
    title: 'Design & Development',
    description: 'Amet minim mollit no duis sit enim aliqua dolor do amet officia.',
    image: service1,
  },
  {
    icon: Cloud,
    title: 'Digital Agency',
    description: 'Amet minim mollit no duis sit enim aliqua dolor do amet officia.',
    image: service2,
  },
  {
    icon: Palette,
    title: 'UX/UI Strategy',
    description: 'Amet minim mollit no duis sit enim aliqua dolor do amet officia.',
    image: service3,
  },
];

const Services = () => {
  return (
    <section id="services" className="section-gap bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black mt-3 mb-4">
            Popular Tech Services
          </h2>
          <div className="absolute top-full left-1/2 -translate-x-1/2 text-8xl font-heading font-black text-muted-foreground/5 whitespace-nowrap pointer-events-none">
            Services
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-primary transition-all duration-300">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 relative">
                  {/* Icon */}
                  <div className="absolute -top-8 right-6 w-16 h-16 rounded-xl gradient-bg flex items-center justify-center shadow-lg">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>

                  <h4 className="font-heading font-bold text-xl mb-3 mt-4">
                    <a href="#" className="hover:text-primary transition-colors">
                      {service.title}
                    </a>
                  </h4>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group-hover:text-accent"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-card rounded-xl py-4 px-8 inline-block shadow-card">
            <p className="text-muted-foreground">
              Do You Want To explore more services just{' '}
              <a href="#" className="text-primary font-semibold underline hover:text-accent transition-colors">
                click here
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
