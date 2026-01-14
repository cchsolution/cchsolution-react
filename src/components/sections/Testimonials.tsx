import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import testimonial1 from '@/assets/testimonial-1.jpg';
import heroBg from '@/assets/hero-bg-1.jpg';

import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Bonnie Tolbet',
    role: 'Customer',
    image: testimonial1,
    text: 'Objectively visualize error-free technology for B2B alignment. Monotonectally harness an expanded array of models via effective collaboration.',
    rating: 5,
  },
  {
    name: 'Sarah Johnson',
    role: 'Business Owner',
    image: testimonial1,
    text: 'The team delivered exceptional results on time and within budget. Their expertise in technology solutions transformed our business operations.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Startup Founder',
    image: testimonial1,
    text: 'Working with CCH Solution was a game-changer for our startup. They understood our vision and delivered a product that exceeded our expectations.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section
      className="section-gap relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-secondary/90 to-primary/80" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Testimonial Slider */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                bulletClass: 'swiper-pagination-bullet !w-2 !h-2 !bg-primary-foreground/50',
                bulletActiveClass: '!bg-accent',
              }}
              loop
              className="testimonial-swiper"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-card rounded-2xl p-8 shadow-lg">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Image */}
                      <div className="relative flex-shrink-0">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-24 h-24 md:w-32 md:h-32 rounded-xl object-cover"
                        />
                        <div className="absolute -bottom-2 -right-2 w-10 h-10 gradient-bg rounded-full flex items-center justify-center">
                          <Quote className="w-5 h-5 text-primary-foreground" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <p className="text-muted-foreground mb-4 italic">
                          "{testimonial.text}"
                        </p>
                        <div className="flex items-center justify-between flex-wrap gap-4">
                          <div>
                            <h5 className="font-heading font-bold text-card-foreground">
                              {testimonial.name}
                            </h5>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          </div>
                          <div className="flex gap-1">
                            {Array.from({ length: testimonial.rating }).map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 text-primary-foreground/80 font-semibold text-sm uppercase tracking-wider mb-4">
              <span className="w-12 h-0.5 bg-primary-foreground" />
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-primary-foreground mb-8">
              What Our{' '}
              <span className="text-accent">Customers</span> Opinion About Us?
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-primary-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Business applications through
                </li>
                <li className="flex items-center gap-2 text-primary-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Catalysts for change seamlessly
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-primary-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Enterprise solutions delivery
                </li>
                <li className="flex items-center gap-2 text-primary-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Innovation-driven approach
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
