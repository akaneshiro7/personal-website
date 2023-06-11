import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CarouselProps {
  images: string[];
}

function Carousel({ images }: CarouselProps) {
  const [state, setState] = useState({ currentImageIndex: 0, direction: 0 });
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    let animationTimeout: ReturnType<typeof setTimeout>;

    if (isAnimating) {
      animationTimeout = setTimeout(() => {
        setIsAnimating(false);
      }, 500); 
    }

    return () => {
      clearTimeout(animationTimeout);
    };
  }, [isAnimating]);

  const nextSlide = () => {
    if (isAnimating) return;
    const newIndex = state.currentImageIndex >= images.length - 1 ? 0 : state.currentImageIndex + 1;
    setState({ currentImageIndex: newIndex, direction: 1 });
    setIsAnimating(true);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    const newIndex = state.currentImageIndex <= 0 ? images.length - 1 : state.currentImageIndex - 1;
    setState({ currentImageIndex: newIndex, direction: -1 });
    setIsAnimating(true);
  };

  const getImageAlt = (imageUrl: string) => {
    return imageUrl.split('/').pop()?.split('.').shift() || '';
  }

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? '100%' : '-100%',
      };
    },
    center: {
      zIndex: 1,
      x: 0,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction > 0 ? '-100%' : '100%',
      };
    },
  };

  return (
    <div className="relative w-full overflow-hidden h-full rounded-lg">
      <button
        className={`absolute h-full right-0 z-10 flex items-center ${isAnimating ? 'pointer-events-none' : ''}`}
        onClick={nextSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-8 h-8`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
      <button
        className={`absolute h-full w-1/4 left-0 z-10 flex items-center ${isAnimating ? 'pointer-events-none' : ''}`}
        onClick={prevSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-8 h-8`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <AnimatePresence initial={false} custom={state.direction}>
        <motion.img
          key={images[state.currentImageIndex]}
          src={images[state.currentImageIndex]}
          alt={getImageAlt(images[state.currentImageIndex])}
          custom={state.direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'linear', duration: 0.5 }, 
          }}
          className="absolute object-cover w-full h-full"
        />
      </AnimatePresence>
    </div>
  );
}

export default Carousel;
