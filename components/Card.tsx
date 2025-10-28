import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface CardProps {
  children?: React.ReactNode;
  image?: string;
  imageAlt?: string;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  image,
  imageAlt = '',
  className = '',
  hover = true,
}: CardProps) {
  const CardWrapper = hover ? motion.div : 'div';
  const motionProps = hover
    ? {
        whileHover: { y: -8, transition: { duration: 0.3, ease: 'easeOut' } },
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-50px' },
        transition: { duration: 0.3 },
      }
    : {};

  return (
    <CardWrapper
      className={`
        bg-white rounded-card overflow-hidden
        shadow-card
        ${hover ? 'hover:shadow-card-hover transition-shadow duration-300' : ''}
        ${className}
      `}
      {...(hover ? motionProps : {})}
    >
      {image && (
        <div className="relative w-full aspect-[4/3] overflow-hidden">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      {children && (
        <div className="p-6">
          {children}
        </div>
      )}
    </CardWrapper>
  );
}
