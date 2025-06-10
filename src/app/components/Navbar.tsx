'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { VideoIcon, X } from 'lucide-react';

// Variants for nav animation
const navVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

// Variants for mobile menu container
const menuVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 50,
            damping: 20,
            when: 'beforeChildren',
            staggerChildren: 0.1,
        },
    },
    exit: {
        x: '100%',
        opacity: 0,
        transition: {
            type: 'spring',
            stiffness: 50,
            damping: 20,
        },
    },
};

// Each nav item animation
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const navItems = ['Services', 'About', 'Portfolio', 'Contact'];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            {/* Top navbar */}
            <motion.nav
                className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-lg shadow-sm"
                variants={navVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    {/* Logo */}
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

                    {/* Desktop nav */}
                    <ul className="hidden md:flex space-x-8 text-xl text-[#5B1E1B] font-medium">
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

                    {/* Mobile menu toggle */}
                    <button
                        className="md:hidden text-[#5B1E1B]"
                        onClick={() => setIsMenuOpen(true)}
                        aria-label="Open mobile menu"
                    >
                        <VideoIcon className="w-7 h-7" />
                    </button>
                </div>
            </motion.nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="fixed top-0 right-0 w-4/5 h-full bg-[#FEFFF1] shadow-2xl z-[999] p-6"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={menuVariants}
                    >
                        {/* Close button */}
                        <div className="flex justify-end mb-8">
                            <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
                                <X className="w-7 h-7 text-[#5B1E1B] hover:text-[#7d2b26] transition-colors duration-200" />
                            </button>
                        </div>

                        {/* Nav Items */}
                        <ul className="flex flex-col items-center justify-center space-y-6 text-xl font-semibold text-[#5B1E1B]">
                            {navItems.map((item, index) => (
                                <motion.li
                                    key={index}
                                    variants={itemVariants}
                                    className="cursor-pointer hover:text-[#7d2b26] transition duration-300"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
