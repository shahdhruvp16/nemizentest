'use client';

import { motion } from 'framer-motion';
import { FiPhone, FiMessageCircle } from 'react-icons/fi';

export default function FloatingButtons() {
  const buttonVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.95 },
  };

  return (
    <div className="fixed bottom-20 right-4 z-40 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/919408024882" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-3 rounded-full shadow-lg flex items-center justify-center"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        aria-label="Contact us on WhatsApp"
      >
        <FiMessageCircle size={24} />
      </motion.a>

      {/* Call Button */}
      <motion.a
        href="tel:+919408024882" // Replace with your phone number
        className="bg-primary text-white p-3 rounded-full shadow-lg flex items-center justify-center"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        aria-label="Call us"
      >
        <FiPhone size={24} />
      </motion.a>
    </div>
  );
}