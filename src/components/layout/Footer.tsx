import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, Phone, Globe } from 'lucide-react';

const Footer = () => {
  const services = [
    'UX/UI Design',
    'IT Management',
    'Digital Marketing',
    'Cyber Security',
    'App Development',
  ];

  return (
    <footer className="bg-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-primary/20 opacity-50" />
      
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Company Info */}
            <div>
              <Link to="/" className="inline-block mb-6">
                <div className="text-2xl font-heading font-black">
                  <span className="text-primary-foreground">CCH</span>
                  <span className="text-accent">Solution</span>
                </div>
              </Link>
              <p className="text-primary-foreground/70 mb-6 leading-relaxed">
                There are many variations of passages but the majority have suffered some form of 
                alteration in some injected humour.
              </p>
              <div className="flex items-center gap-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                  >
                    <Icon className="w-4 h-4 text-primary-foreground" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h5 className="text-primary-foreground font-bold text-xl mb-6">Services</h5>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <a
                      href="#"
                      className="text-primary-foreground/70 hover:text-accent transition-colors duration-300 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h5 className="text-primary-foreground font-bold text-xl mb-6">Contact</h5>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <p className="text-primary-foreground/70">AHMEDABAD, GUJARAT, INDIA</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                  <a href="tel:+910000000000" className="text-primary-foreground/70 hover:text-accent transition-colors">
                    +91 0000000000
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                  <a href="mailto:codecrafterss.hub@gmail.com" className="text-primary-foreground/70 hover:text-accent transition-colors">
                    codecrafterss.hub@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-accent flex-shrink-0" />
                  <a href="https://cchsolution.com/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-accent transition-colors">
                    https://cchsolution.com/
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/10">
          <div className="container mx-auto px-4 py-6">
            <p className="text-center text-primary-foreground/60 text-sm">
              Copyright by CCH-Solution © 2025. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
