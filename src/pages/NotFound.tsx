import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg-1.jpg';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/95" />

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-8xl md:text-9xl font-heading font-black mb-4">
            4<span className="text-primary">0</span>4
          </h1>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-card-foreground mb-4">
            Sorry, something went wrong!
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            This page is temporarily unavailable due to maintenance. We will be back very soon, thanks for your patience.
          </p>
          <Button asChild size="lg" variant="hero">
            <Link to="/">
              <Home className="w-5 h-5 mr-2" />
              Return Home
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
