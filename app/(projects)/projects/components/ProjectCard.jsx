"use client"
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaImages } from 'react-icons/fa';
import { itemAnimation } from './Animations';
import ProjectImageSlider from './ProjectImageSlider';
import Image from 'next/image';

export const ProjectCard = ({ project, index }) => {
    const [isSliderOpen, setIsSliderOpen] = useState(false);

    const openSlider = () => setIsSliderOpen(true);
    const closeSlider = () => setIsSliderOpen(false);

    return (
        <>
            <motion.div
                variants={itemAnimation}
                className="group flex flex-col lg:flex-row items-stretch gap-4 md:gap-6 lg:gap-8 bg-secondary/5 hover:bg-secondary/10 p-4 md:p-6 rounded-xl transition-colors duration-300"
            >
                <div className="lg:w-1/3 w-full">
                    <div 
                        className="relative aspect-[16/10] rounded-lg overflow-hidden cursor-pointer"
                        onClick={openSlider}
                    >
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                        
                        {/* View Images Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="flex items-center gap-2 bg-black/60 px-4 py-2 rounded-full backdrop-blur-sm">
                                <FaImages className="w-4 h-4 text-white" />
                                <span className="text-white text-sm font-medium">View Gallery</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:w-2/3 w-full flex flex-col justify-between py-2">
                    <div className="space-y-3 md:space-y-4">
                        <div className="flex items-center justify-between">
                            <h3 
                                className="text-lg font-semibold text-primary cursor-pointer hover:text-primary/80 transition-colors"
                                onClick={openSlider}
                            >
                                {project.title}
                            </h3>
                            <span className="text-xs text-muted-foreground">
                                #{String(index + 1).padStart(2, '0')}
                            </span>
                        </div>

                <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, idx) => (
                        <span
                            key={idx}
                            className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {project.github && (
                <div className="flex items-center gap-3 pt-4">
                    <Button
                        size="sm"
                        className="rounded-full h-8 px-4 text-xs"
                        asChild
                    >
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex cursor-pointer items-center gap-2"
                        >
                            Link to GitHub
                            <FaExternalLinkAlt className="w-3 h-3" />
                        </a>
                    </Button>
                </div>
            )}
        </div>
    </motion.div>

    <ProjectImageSlider 
        project={project}
        isOpen={isSliderOpen}
        onClose={closeSlider}
    />
</>
    );
};