import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MapPin,
  Mail,
  Phone,
  Globe,
} from "lucide-react";

const Footer = () => {
  const companyLinks = [
    { name: "About Us", path: "/about" },
    { name: "Our Team", path: "/team" },
    { name: "Careers", path: "/careers" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Testimonials", path: "/testimonials" },
  ];

  const services = [
    { name: "Web Development", path: "/services/web-development" },
    { name: "Mobile App Development", path: "/services/mobile-app" },
    { name: "Software Development", path: "/services/software-development" },
    { name: "UI/UX Design", path: "/services/ui-ux-design" },
    { name: "Cyber Security", path: "/services/cyber-security" },
  ];



  return (
    <footer className="bg-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-primary/20 opacity-50" />

      <div className="relative z-10">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* ================= COMPANY INFO ================= */}
            <div>
              <Link to="/" className="inline-block mb-6">
                <img
                  src="images/logos/logo-light.png"
                  alt="CCH Solution Logo"
                  style={{ maxWidth: 190 }}
                />
              </Link>

              <p className="text-primary-foreground/70 mb-6 leading-relaxed">
                We build powerful websites, mobile apps, and business software
                solutions to help companies grow digitally.
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

            {/* ================= COMPANY LINKS ================= */}
            <div>
              <h5 className="text-primary-foreground font-bold text-xl mb-6">
                Company
              </h5>
              <ul className="space-y-3">
                {companyLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="text-primary-foreground/70 hover:text-accent transition-colors duration-300 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ================= SERVICES ================= */}
            <div>
              <h5 className="text-primary-foreground font-bold text-xl mb-6">
                Services
              </h5>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.path}
                      className="text-primary-foreground/70 hover:text-accent transition-colors duration-300 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ================= SOLUTIONS + CONTACT ================= */}
            <div>
              <h5 className="text-primary-foreground font-bold text-xl mb-4">
                Contact
              </h5>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <p className="text-primary-foreground/70">
                    Ahmedabad, Gujarat, India
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                  <a
                    href="tel:+910000000000"
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    +91 0000000000
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                  <a
                    href="mailto:codecrafterss.hub@gmail.com"
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    codecrafterss.hub@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-accent flex-shrink-0" />
                  <a
                    href="https://cchsolution.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    https://cchsolution.com/
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= COPYRIGHT ================= */}
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
