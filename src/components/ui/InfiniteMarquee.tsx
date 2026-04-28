import React from 'react';
import { motion } from 'framer-motion';

interface InfiniteMarqueeProps {
  children: React.ReactNode;
  speed?: number; // Higher is slower
  direction?: 'left' | 'right';
}

const InfiniteMarquee: React.FC<InfiniteMarqueeProps> = ({ 
  children, 
  speed = 40, 
  direction = 'left' 
}) => {
  return (
    <div className="flex overflow-hidden select-none w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <motion.div
        initial={{ x: direction === 'left' ? 0 : '-50%' }}
        animate={{ x: direction === 'left' ? '-50%' : 0 }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
        className="flex flex-nowrap min-w-max gap-6 py-4"
      >
        {/* Render children twice to create the seamless loop */}
        {children}
        {children}
      </motion.div>
    </div>
  );
};

export default InfiniteMarquee;