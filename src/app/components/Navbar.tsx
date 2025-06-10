'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
const navVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const navItems = ['Services', 'About', 'Portfolio', 'Contact'];

const Navbar = () => {
    return (
        <motion.nav
            className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-lg shadow-sm"
            variants={navVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <motion.h1
                    className="text-2xl font-bold text-[#5B1E1B]"
                    whileHover={{ scale: 1.05 }}
                >
                    <div className="relative w-32 h-10">
                        <Image
                            src="/logo.svg"
                            alt="Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>

                </motion.h1>

                <ul className="hidden md:flex space-x-8 text-[#5B1E1B] font-medium">
                    {navItems.map((item, index) => (
                        <motion.li
                            key={index}
                            whileHover={{ scale: 1.1, color: '#7d2b26' }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            className="cursor-pointer transition-colors duration-300"
                        >
                            {item}
                        </motion.li>
                    ))}
                </ul>
            </div>
        </motion.nav>
    );
};

export default Navbar;
