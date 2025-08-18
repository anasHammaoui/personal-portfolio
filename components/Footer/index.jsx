"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { config } from '@/config';

const Footer = () => {
    const [currentYear, setCurrentYear] = useState(null);

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="py-6 border-t border-secondary/20 flex items-center justify-center"
        >
            <div className="text-center">
                <div className="text-sm text-muted-foreground">
                    © {currentYear || '2024'} {config.developer.name}. All rights reserved.
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;
