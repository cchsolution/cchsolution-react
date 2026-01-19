import { motion } from "framer-motion";

const clients = [
  { name: "TaxiWale", initials: "Taxi-Wale-Logo-2" },
  { name: "WAFA", initials: "WAFA_logo" },
  { name: "Sabah", initials: "Sabah Logo color" },
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
              <div
                style={{ width: 240, height: 140 }}
                className="rounded-xl bg-muted flex items-center justify-center border border-border group-hover:border-primary group-hover:shadow-card transition-all duration-300"
              >
                <img
                  src={`images/clients/${client.initials}.png`}
                  alt={client.name}
                  className="object-contain"
                  style={{maxWidth: '60%', maxHeight: '60%'}}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
