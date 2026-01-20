import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useRef } from "react";
import { Star, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/autoplay";

const clients = [
  {
    name: "TaxiWale",
    logo: "Taxi-Wale-Logo-2.png",
    desc: "Taxi booking and driver management platform with 10k+ drivers.",
    rating: 4.8,
    project: "Mobile App & Dashboard",
    year: "2023",
  },
  {
    name: "WAFA",
    logo: "WAFA_logo.png",
    desc: "Corporate business and management solution for enterprises.",
    rating: 4.9,
    project: "Enterprise Platform",
    year: "2022",
  },
  {
    name: "Sabah",
    logo: "Sabah Logo color.png",
    desc: "Brand website & digital presence solution with 300% growth.",
    rating: 4.7,
    project: "E-commerce & Branding",
    year: "2023",
  },
  {
    name: "TechFlow",
    logo: "",
    desc: "AI-powered analytics platform for data-driven decisions.",
    rating: 4.9,
    project: "AI SaaS Platform",
    year: "2024",
  },
  {
    name: "UrbanFit",
    logo: "",
    desc: "Fitness and wellness app with personalized workout plans.",
    rating: 4.6,
    project: "Health & Fitness App",
    year: "2023",
  },
  {
    name: "EduSmart",
    logo: "",
    desc: "Learning management system for schools and universities.",
    rating: 4.8,
    project: "EdTech Platform",
    year: "2022",
  },
];

const Clients = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 bg-background overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-transparent"></div>

      {/* Grid pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, #8882 1px, transparent 1px),
                           linear-gradient(to bottom, #8882 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="container relative mx-auto px-4">
        {/* Simple Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8"
          />

          <span className="text-primary font-semibold tracking-wider text-sm uppercase block mb-4">
            Our Esteemed Clients
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Brands That <span className="text-primary">Trust</span> Our Work
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We've helped businesses of all sizes achieve their digital goals
            with innovative solutions and exceptional service.
          </p>
        </motion.div>

        {/* Simple Clean Slider */}
        <div className="relative">
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            spaceBetween={24}
            slidesPerView="auto"
            centeredSlides={true}
            speed={800}
            breakpoints={{
              320: { slidesPerView: 1.1 },
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2.1 },
              1024: { slidesPerView: 2.5 },
              1280: { slidesPerView: 3.2 },
            }}
            className="!overflow-visible"
          >
            {clients.map((client, index) => (
              <SwiperSlide key={index} className="!h-auto">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.2 },
                  }}
                  className="group h-full"
                >
                  <div className="relative h-full bg-card rounded-xl border border-border overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
                    {/* Top section with logo */}
                    <div className="relative h-48 bg-gradient-to-br from-background to-card p-8">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      {/* Client Logo */}
                      <div className="relative h-full flex items-center justify-center">
                        {client.logo ? (
                          <motion.img
                            initial={{ opacity: 0.7 }}
                            whileHover={{ opacity: 1 }}
                            src={`images/clients/${client.logo}`}
                            alt={client.name}
                            className="max-h-20 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                          />
                        ) : (
                          <div className="text-center">
                            <div className="text-3xl font-bold text-primary mb-2">
                              {client.name.charAt(0)}
                            </div>
                            <div className="text-sm font-medium text-muted-foreground">
                              {client.name}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Year badge */}
                      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs font-semibold border">
                        {client.year}
                      </div>
                    </div>

                    {/* Content section */}
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                            {client.name}
                          </h3>
                          <div className="flex items-center gap-2">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < Math.floor(client.rating)
                                      ? "fill-yellow-400 text-yellow-400"
                                      : "fill-muted text-muted"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm font-semibold">
                              {client.rating}
                            </span>
                          </div>
                        </div>

                        <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>

                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                        {client.desc}
                      </p>

                      <div className="flex justify-between items-center pt-4 border-t border-border">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                          {client.project}
                        </span>

                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          transition={{ duration: 0.8, delay: index * 0.1 }}
                          className="h-0.5 w-16 bg-gradient-to-r from-primary to-transparent"
                        />
                      </div>
                    </div>

                    {/* Hover effect */}
                    <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/20 rounded-xl transition-all duration-500 pointer-events-none"></div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Subtle progress indicator */}
          <div className="flex justify-center gap-1 mt-12">
            {[...Array(6)].map((_, index) => (
              <motion.div
                key={index}
                className="h-1 rounded-full bg-border"
                initial={{ width: 8 }}
                whileInView={{
                  width: [8, 24, 8],
                  transition: {
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.2,
                  },
                }}
              />
            ))}
          </div>
        </div>

        {/* Simple stats */}
      </div>
    </section>
  );
};

export default Clients;
