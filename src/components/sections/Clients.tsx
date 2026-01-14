import { motion } from 'framer-motion';

const clients = [
  { name: 'TaxiWale', initials: 'TW' },
  { name: 'WAFA', initials: 'WA' },
  { name: 'TechCorp', initials: 'TC' },
  { name: 'Digital Plus', initials: 'D+' },
  { name: 'CloudNet', initials: 'CN' },
  { name: 'InnoTech', initials: 'IT' },
];

const Clients = () => {
  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group cursor-pointer"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-xl bg-muted flex items-center justify-center border border-border group-hover:border-primary group-hover:shadow-card transition-all duration-300">
                <span className="text-2xl md:text-3xl font-heading font-black text-muted-foreground group-hover:text-primary transition-colors">
                  {client.initials}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
