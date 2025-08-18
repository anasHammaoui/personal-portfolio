import React from 'react';
import { Button } from '@/components/ui/button';
import { HiArrowRight, HiCode } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { config } from '@/config';
import { titleAnimation } from './Animations';

const SectionTitle = () => (
    <motion.div
        initial="hidden"
        animate="show"
        variants={titleAnimation}
        className="mb-12 md:mb-16 lg:mb-20 space-y-6"
    >

        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 lg:gap-8">
            <div className="space-y-4 max-w-2xl">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary tracking-tight">
                    Featured Work & Projects
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                    A curated selection of my professional work and personal projects,
                    showcasing expertise in{' '}
                    <span className="text-primary">front-end</span>,{' '}
                    <span className="text-primary">back-end</span>, and{' '}
                    <span className="text-primary">full stack development</span>.
                </p>
            </div>

            <div className="flex items-center w-full lg:w-auto">
                <Button
                    variant="expandIcon"
                    Icon={HiArrowRight}
                    iconPlacement="right"
                    className="w-full lg:w-auto rounded-2xl px-4 sm:px-5 py-4 sm:py-5 text-sm sm:text-base transition-all duration-300 shadow-lg shadow-primary/5 hover:shadow-primary/10"
                    asChild
                >
                    <a
                        href={`https://github.com/${config.social.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium"
                    >
                        View Github
                    </a>
                </Button>
            </div>
        </div>

        <div className="flex items-center gap-6 pt-2 overflow-x-auto pb-2 scrollbar-hide">
            <div className="space-y-1 flex-shrink-0">
                <span className="text-xl sm:text-2xl font-bold text-primary">10+</span>
                <p className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
                    Projects Completed
                </p>
            </div>
            <div className="w-px h-8 sm:h-10 bg-primary/10 flex-shrink-0" />
            <div className="space-y-1 flex-shrink-0">
                <span className="text-xl sm:text-2xl font-bold text-primary">1+</span>
                <p className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
                    Years Experience
                </p>
            </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-primary/5 via-primary/20 to-primary/5" />
    </motion.div>
);

export default SectionTitle;