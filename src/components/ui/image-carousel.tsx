'use client'
import NextImage from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

export const ImageCarousel = ({
    images,
    className
}: {
    images: string[]; 
    className?: string;
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(false);
    const [loadedImages, setLoadedImages] = useState<string[]>([]);

    const handleNext = () => {
        setCurrentIndex(( prevIndex ) =>
            prevIndex + 1 === images.length ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex(( prevIndex ) =>
            prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
        );
    };
    
    useEffect(() => {
        loadImages()
    }, [])

    const loadImages = () => {
        setLoading(true);
        const loadPromises = images.map((image) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = image;
            img.onload = () => resolve(image);
            img.onerror = reject;
          });
        });
     
        Promise.all(loadPromises)
          .then((loadedImages) => {
            setLoadedImages(loadedImages as string[]);
            setLoading(false);
          })
          .catch((error) => console.error("Failed to load images", error));
    };

    useEffect( () => {
        let interval: any
        interval = setInterval(() => {
            handleNext();
        }, 5000)
    }, [])

    const variants = {
        enter: () => {
          return {
            x: "150%",
            opacity: 0
          };
        },
        center: {
          zIndex: 5,
          x: 0,
          opacity: 1
        },
        exit: () => {
          return {
            zIndex: 3,
            x: "150%",
            opacity: 0
          };
        }
      };
      

    const areImagesLoaded = loadedImages.length > 0;

    return (
        <div
            className={cn(
                "oveflow-hidden h-full w-full relative flex items-center justify-center",
                className
            )}
        >

        {areImagesLoaded && (
            <AnimatePresence>
                <motion.img
                key={currentIndex}
                src={loadedImages[currentIndex]}
                initial="enter"
                animate="center"
                transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                exit="exit"
                variants={variants}
                className="image w-full absolute object-cover object-center h-full overflow-hidden z-0"
                />
            </AnimatePresence>
        )}
        </div>
    );

};