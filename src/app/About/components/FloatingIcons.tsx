'use client';
import { motion } from 'framer-motion';
import { Video, NotebookPen } from 'lucide-react'; // import icons

const iconList = [Video, NotebookPen];

const FloatingIcons = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {[...Array(100)].map((_, i) => {
        const Icon = iconList[i % iconList.length]; // alternate icons
        const size = Math.random() * 20 + 12; // random size between 12–32px

        return (
          <motion.div
            key={i}
            className="absolute text-[#5B1E1B] opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${size}px`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() > 0.5 ? 20 : -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Icon size={size} />
          </motion.div>
        );
      })}
    </div>
  );
};

export default FloatingIcons;
