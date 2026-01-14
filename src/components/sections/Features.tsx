import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Monitor, Code, BarChart3, Smartphone, Palette, Shield, ChevronLeft, ChevronRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';

const features = [
  { icon: Monitor, title: 'Website Development' },
  { icon: Code, title: 'Software Development' },
  { icon: BarChart3, title: 'Digital Marketing' },
  { icon: Smartphone, title: 'App Development' },
  { icon: Palette, title: 'Graphic Design' },
  { icon: Shield, title: 'Cyber Security' },
];

const Features = () => {
  return (
    <section className="relative -mt-24 z-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              prevEl: '.features-prev',
              nextEl: '.features-next',
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 5 },
            }}
          >
            {features.map((feature, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-card rounded-xl p-6 shadow-card hover:shadow-primary transition-all duration-300 text-center relative overflow-hidden">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative z-10">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary-foreground/10 transition-colors">
                        <feature.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <h5 className="font-heading font-bold text-card-foreground group-hover:text-primary-foreground transition-colors">
                        {feature.title}
                      </h5>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation buttons */}
          <button className="features-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-card shadow-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="features-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-card shadow-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
