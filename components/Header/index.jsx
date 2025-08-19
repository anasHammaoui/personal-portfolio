"use client"
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { config } from '@/config';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = config.NAV_ITEMS;

const NavLink = ({ href, label }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className="relative"
        >
            <motion.span
                className={`relative px-4 py-2 text-gray-300 hover:text-white transition-colors ${isActive ? 'text-white' : ''
                    }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {label}
                {isActive && (
                    <motion.div
                        className="absolute inset-0 bg-secondary/30  rounded-lg backdrop-blur-sm"
                        layoutId="activeNavBackground"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30
                        }}
                        style={{
                            zIndex: -1
                        }}
                    />
                )}
            </motion.span>
        </Link>
    );
};

const Logo = () => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
    >
        <Link
            href="/"
            className="flex items-center space-x-2 hover:opacity-90 transition-opacity"
        >
            <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
            >
                <img
                    src="/logo.png"
                    alt='logo'
                    className='w-14 h-14 rounded-full'
                />
            </motion.div>
            <motion.span
                className="text-gray-300 text-lg font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                {config.developer.name}
            </motion.span>
        </Link>
    </motion.div>
);

const Navigation = () => (
    <motion.nav
        className="hidden md:flex space-x-2 lg:space-x-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
    >
        {NAV_ITEMS.map((item, index) => (
            <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
            >
                <NavLink {...item} />
            </motion.div>
        ))}
    </motion.nav>
);

const ContactButton = () => (
    <motion.div
        className="hidden md:flex items-center space-x-6"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
    >
        <Link href="/anashammaoui.pdf" target='_blank' prefetch={false} download>
            <Button className="rounded-2xl font-semibold bg-white text-gray-900 hover:bg-gray-200">
                My Resume
            </Button>
        </Link>
    </motion.div>
);

const MobileMenuButton = ({ isOpen, setIsOpen }) => (
    <button
        className="md:hidden flex flex-col items-center justify-center w-8 h-8 z-50 relative"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
        <span
            className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
        />
        <span
            className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 my-1 ${isOpen ? 'opacity-0' : ''}`}
        />
        <span
            className={`block w-6 h-0.5 bg-gray-300 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
        />
    </button>
);

const MobileMenu = ({ isOpen, setIsOpen }) => {
    const pathname = usePathname();
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-black/90 z-40 flex flex-col items-center justify-center md:hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <nav className="flex flex-col items-center space-y-8">
                        {NAV_ITEMS.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`text-2xl font-semibold ${isActive ? 'text-white' : 'text-gray-300 hover:text-white'}`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                        <Link href="/anashammaoui.pdf" target='_blank' prefetch={false} download onClick={() => setIsOpen(false)}>
                            <Button className="rounded-2xl font-semibold bg-white text-gray-900 hover:bg-gray-200 px-8 py-4 text-lg">
                                My Resume
                            </Button>
                        </Link>
                    </nav>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <>
            <motion.header
                className="py-9 z-50 text-white relative"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl">
                    <Logo />
                    <Navigation />
                    <ContactButton />
                    <MobileMenuButton isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
                </div>
            </motion.header>
            <MobileMenu isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
        </>
    );
};

export default Header;