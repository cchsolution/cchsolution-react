import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { 
  RiGlobalLine,
  RiCodeSSlashLine,
  RiLineChartLine,
  RiSmartphoneLine,
  RiPaletteLine,
  RiShieldKeyholeLine
} from "react-icons/ri";

import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

const features = [
  {
    icon: RiGlobalLine,
    title: "Website Development",
  },
  {
    icon: RiCodeSSlashLine,
    title: "Software Development",
  },
  {
    icon: RiLineChartLine,
    title: "Digital Marketing",
  },
  {
    icon: RiSmartphoneLine,
    title: "App Development",
  },
  {
    icon: RiPaletteLine,
    title: "Graphic Design",
  },
  {
    icon: RiShieldKeyholeLine,
    title: "Cyber Security",
  },
];

const Features = () => {
  return (
    <section className="relative -mt-24 z-20 pb-20">
      <div className="container mx-auto px-4">
        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={24}
            slidesPerView={5}
            autoHeight={false}
            navigation={{
              prevEl: ".features-prev",
              nextEl: ".features-next",
            }}
            autoplay={{
              delay: 2800,
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
              <SwiperSlide key={index} className="!h-full flex">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="h-full w-full"
                >
                  <div className="group relative w-full h-full rounded-2xl p-[1.5px] bg-gradient-to-br from-primary/60 via-sky-500/40 to-purple-500/60">
                    {/* Glass Card */}
                    <div className="relative w-full rounded-2xl bg-white/80 dark:bg-black/50 backdrop-blur-xl p-6 overflow-hidden flex flex-col">
                      {/* Icon */}
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/15 to-sky-400/10 flex items-center justify-center mb-4 shrink-0 shadow-sm">
                      <feature.icon size={28} className="text-primary" />
                      </div>
                      {/* Content */}
                      <div className="flex-1">
                        <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {feature.title}
                        </h5>
                      </div>
                      {/* Bottom line */}
                      <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-primary to-sky-500 group-hover:w-full transition-all duration-500" />
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation */}
          <button className="features-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-11 h-11 rounded-full bg-white/80 dark:bg-black/60 backdrop-blur shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition">
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button className="features-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-11 h-11 rounded-full bg-white/80 dark:bg-black/60 backdrop-blur shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
