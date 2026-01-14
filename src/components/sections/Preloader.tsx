import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const letters = 'CCHSOLUTION'.split('');

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-secondary"
        >
          <div className="text-center">
            {/* Spinner */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="w-16 h-16 mx-auto mb-8 border-4 border-primary-foreground/20 border-t-accent rounded-full"
            />
            
            {/* Letters */}
            <div className="flex justify-center gap-1">
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0.3 }}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: index * 0.1,
                  }}
                  className="text-3xl font-heading font-black text-primary-foreground"
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Side panels */}
          <motion.div
            initial={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.5 }}
            className="absolute left-0 top-0 w-1/2 h-full bg-secondary"
          />
          <motion.div
            initial={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5 }}
            className="absolute right-0 top-0 w-1/2 h-full bg-secondary"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
