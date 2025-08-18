"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ProjectImageSlider = ({ project, isOpen, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [images, setImages] = useState([]);

    useEffect(() => {
        if (project && project.images) {
            setImages(project.images);
            setCurrentImageIndex(0);
        }
    }, [project]);

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const previousImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToImage = (index) => {
        setCurrentImageIndex(index);
    };

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyPress = (e) => {
            if (!isOpen) return;
            
            switch (e.key) {
                case 'Escape':
                    onClose();
                    break;
                case 'ArrowLeft':
                    previousImage();
                    break;
                case 'ArrowRight':
                    nextImage();
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [isOpen, onClose]);

    // Prevent body scroll when overlay is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen || !project) return null;

    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 }
    };

    const modalVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: { scale: 1, opacity: 1 },
        exit: { scale: 0.8, opacity: 0 }
    };

    return (
        <AnimatePresence>
            <motion.div
                variants={overlayVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                onClick={onClose}
            >
                <motion.div
                    variants={modalVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className="relative w-full max-w-6xl max-h-[95vh] bg-secondary/10 rounded-2xl border border-secondary/20 backdrop-blur-md overflow-hidden flex flex-col"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b border-secondary/20">
                        <div>
                            <h2 className="text-2xl font-bold text-primary">{project.title}</h2>
                            <p className="text-sm text-muted-foreground mt-1">
                                {currentImageIndex + 1} of {images.length}
                            </p>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 rounded-full hover:bg-secondary/20 transition-colors"
                        >
                            <FaTimes className="w-5 h-5 text-muted-foreground" />
                        </button>
                    </div>

                    {/* Main Image Display */}
                    <div className="relative flex-1 flex items-center justify-center p-6">
                        <div className="relative w-full h-[65vh] flex items-center justify-center">
                            <img
                                src={images[currentImageIndex]}
                                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                                onError={(e) => {
                                    // Handle image load error by hiding the broken image
                                    e.target.style.display = 'none';
                                }}
                            />
                            
                            {/* Navigation Arrows */}
                            <button
                                onClick={previousImage}
                                className="absolute left-4 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors backdrop-blur-sm z-10"
                            >
                                <FaChevronLeft className="w-5 h-5 text-white" />
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-4 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors backdrop-blur-sm z-10"
                            >
                                <FaChevronRight className="w-5 h-5 text-white" />
                            </button>
                        </div>
                    </div>

                    {/* Thumbnails */}
                    <div className="p-6 pt-0">
                        <div className="flex gap-2 justify-center max-w-full overflow-x-auto pb-2">
                            {images.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToImage(index)}
                                    className={`relative flex-shrink-0 w-16 h-12 rounded-md overflow-hidden border-2 transition-all ${
                                        currentImageIndex === index
                                            ? 'border-primary shadow-lg scale-105'
                                            : 'border-secondary/20 hover:border-secondary/40'
                                    }`}
                                >
                                    <img
                                        src={image}
                                        alt={`Thumbnail ${index + 1}`}
                                        className="w-full h-full object-contain"
                                        onError={(e) => {
                                            e.target.parentElement.style.display = 'none';
                                        }}
                                    />
                                    {currentImageIndex === index && (
                                        <div className="absolute inset-0 bg-primary/20" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Project Info Footer */}
                    <div className="px-6 pb-6">
                        <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, idx) => (
                                <span
                                    key={idx}
                                    className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProjectImageSlider;
