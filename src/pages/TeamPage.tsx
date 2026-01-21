import { motion } from "framer-motion";
import { Linkedin, Twitter, Github, ArrowRight, Globe, Mail, ChevronRight } from "lucide-react";
import { useState } from "react";



const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Lead Designer",
    desc: "Specializes in creating intuitive user experiences with over 8 years in UI/UX design.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#",
      website: "#",
      email: "#"
    }
  },
  {
    name: "Maria Garcia",
    role: "Frontend Developer",
    desc: "Passionate about building responsive web applications with modern JavaScript frameworks.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#",
      website: "#"
    }
  },
  {
    name: "David Chen",
    role: "Backend Engineer",
    desc: "Expert in scalable server architecture and database optimization techniques.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  },
  {
    name: "Sophie Williams",
    role: "Product Manager",
    desc: "Drives product strategy and coordinates cross-functional teams to deliver exceptional results.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop",
    socials: {
      linkedin: "#",
      twitter: "#",
      website: "#"
    }
  }
];



const TeamPage = () => {


    const [hoveredIndex, setHoveredIndex] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants :any  = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const imageVariants :any = {
    hidden: { scale: 1.1 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  const socialIconVariants = {
    hidden: { opacity: 0, scale: 0 },
    hover: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const iconVariants = {
    hidden: { opacity: 0, y: 10 },
    hover: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2
      }
    }
  };
  return (
    <main className="overflow-hidden">
      {/* ================= HERO ================= */}
      <section
        style={{ marginTop: 100 }}
        className="pt-32 pb-24 bg-gradient-to-br from-background via-muted to-background"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-6"
          >
            Meet Our <span className="text-primary">Team</span>
          </motion.h1>

          <p className="max-w-3xl mx-auto text-muted-foreground text-lg">
            A passionate group of designers, developers, and problem-solvers
            building world-class digital products.
          </p>
        </div>
      </section>

      {/* ================= TEAM GRID ================= */}



      <section className="section-gap bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4">
    

        {/* Team Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group"
            >
              {/* Card Container */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 h-full border border-gray-100">
                {/* Image Container with Gradient Overlay */}
                <div className="relative h-64 overflow-hidden">
                  <motion.div
                    variants={imageVariants}
                    className="h-full w-full"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Role Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {member.role}
                    </span>
                  </div>
                  
                  {/* Social Icons */}
                  <motion.div 
                    variants={socialIconVariants}
                    className="absolute bottom-4 left-0 right-0 flex justify-center gap-2"
                  >
                    {member.socials.linkedin && (
                      <motion.a 
                        variants={iconVariants}
                        href={member.socials.linkedin}
                        className="bg-white p-2 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-transform"
                      >
                        <Linkedin className="w-4 h-4 text-blue-700" />
                      </motion.a>
                    )}
                    {member.socials.github && (
                      <motion.a 
                        variants={iconVariants}
                        href={member.socials.github}
                        className="bg-white p-2 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-transform"
                      >
                        <Github className="w-4 h-4 text-gray-800" />
                      </motion.a>
                    )}
                    {member.socials.twitter && (
                      <motion.a 
                        variants={iconVariants}
                        href={member.socials.twitter}
                        className="bg-white p-2 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-transform"
                      >
                        <Twitter className="w-4 h-4 text-blue-400" />
                      </motion.a>
                    )}
                    {member.socials.website && (
                      <motion.a 
                        variants={iconVariants}
                        href={member.socials.website}
                        className="bg-white p-2 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-transform"
                      >
                        <Globe className="w-4 h-4 text-green-600" />
                      </motion.a>
                    )}
                    {member.socials.email && (
                      <motion.a 
                        variants={iconVariants}
                        href={member.socials.email}
                        className="bg-white p-2 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-transform"
                      >
                        <Mail className="w-4 h-4 text-red-500" />
                      </motion.a>
                    )}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-blue-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {member.desc}
                  </p>
                  
                  {/* Hover View More Button */}
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={hoveredIndex === index ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                    className="mt-4"
                  >
                    <a 
                      href="#" 
                      className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
                    >
                      View Profile
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </a>
                  </motion.div>
                </div>
              </div>
              
              {/* Floating Background Element */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl -z-10 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>

 
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute left-10 top-1/4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute right-10 top-1/3 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>

      {/* ================= CULTURE ================= */}
      <section className="section-gap bg-muted">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-heading font-black mb-4">
            Our Culture & Values
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            We believe in innovation, transparency, teamwork, and continuous
            learning to deliver outstanding digital experiences.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {["Innovation", "Teamwork", "Quality Focus"].map((value, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 bg-card shadow hover:shadow-xl transition"
              >
                <h4 className="font-bold text-lg mb-2">{value}</h4>
                <p className="text-sm text-muted-foreground">
                  We consistently strive to improve and exceed expectations.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="section-gap bg-gradient-to-r from-primary to-accent text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 style={{color: "#fff"}} className="text-3xl md:text-4xl font-heading font-black mb-4">
            Want to Join Our Team?
          </h2>
          <p className="mb-8 text-primary-foreground/80">
            We’re always looking for talented people to work with us.
          </p>

          <a
            href="/careers"
            className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-3 rounded-xl hover:scale-105 transition"
          >
            View Open Positions <ArrowRight />
          </a>
        </div>
      </section>
    </main>
  );
};

export default TeamPage;
