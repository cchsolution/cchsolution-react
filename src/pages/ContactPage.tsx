import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Building2,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully!",
      description: "Our team will contact you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <main className="overflow-hidden">

      {/* ================= HERO ================= */}
      <section style={{marginTop: 100}} className="pt-32 pb-20 bg-gradient-to-br from-background to-muted text-center">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-4"
          >
            Contact <span className="text-primary">Us</span>
          </motion.h1>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Let’s discuss your project and turn your ideas into powerful digital solutions.
          </p>
        </div>
      </section>

      {/* ================= INFO CARDS ================= */}
      <section className="section-gap bg-background">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <InfoCard icon={Phone} title="Call Us" value="+91 96385 28117" />
          <InfoCard icon={Mail} title="Email Us" value="info@yourcompany.com" />
          <InfoCard icon={MapPin} title="Visit Office" value="Ahmedabad, Gujarat, India" />
        </div>
      </section>

      {/* ================= FORM + DETAILS ================= */}
      <section className="section-gap bg-muted">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-black mb-6">
              Let’s Talk About Your Project
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Fill out the form and our team will contact you shortly. We help businesses build,
              scale, and secure their digital products.
            </p>

            <div className="space-y-5">
              <DetailItem icon={Building2} text="CCH Solutions, India" />
              <DetailItem icon={Clock} text="Mon - Sat : 9:00 AM - 7:00 PM" />
              <DetailItem icon={Phone} text="+91 96385 28117" />
              <DetailItem icon={Mail} text="info@yourcompany.com" />
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 shadow-lg border border-border"
          >
            <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <Input name="name" placeholder="Your Name" required onChange={handleChange} value={formData.name} />
              <Input name="email" type="email" placeholder="Email Address" required onChange={handleChange} value={formData.email} />
              <Input name="phone" placeholder="Phone Number" required onChange={handleChange} value={formData.phone} />
              <Input name="subject" placeholder="Subject" onChange={handleChange} value={formData.subject} />
              <Textarea name="message" rows={5} placeholder="Tell us about your project" required onChange={handleChange} value={formData.message} />

              <Button type="submit" size="lg" className="w-full group">
                Send Message
                <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* ================= MAP ================= */}
      <section className="h-[450px] w-full">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps?q=Ahmedabad,India&output=embed"
          className="w-full h-full border-0 grayscale"
          loading="lazy"
        />
      </section>

    </main>
  );
};

const InfoCard = ({ icon: Icon, title, value }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-card rounded-2xl p-6 shadow-card text-center"
  >
    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
      <Icon className="w-7 h-7 text-primary" />
    </div>
    <h4 className="font-bold mb-1">{title}</h4>
    <p className="text-muted-foreground">{value}</p>
  </motion.div>
);

const DetailItem = ({ icon: Icon, text }) => (
  <div className="flex items-center gap-4">
    <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
      <Icon className="w-5 h-5 text-primary" />
    </div>
    <p className="text-muted-foreground">{text}</p>
  </div>
);

export default ContactPage;
