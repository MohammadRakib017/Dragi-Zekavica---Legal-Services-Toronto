'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import ThreeDScene from './ThreeDScene';
import { LAW_FIRM_INFO } from '@/lib/law-firm-data';

interface HeroImageProps {
  priority?: boolean;
}

export default function HeroImage({ priority = true }: HeroImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse position values for 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring smoothing for responsive 3D tilt
  const springConfig = { damping: 25, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);
  const translateX = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);
  const translateY = useTransform(smoothY, [-0.5, 0.5], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <div
      ref={containerRef}
      id="hero-image-wrapper"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[540px] mx-auto lg:max-w-none flex items-center justify-center py-4 lg:py-6"
      style={{ perspective: 1200 }}
    >
      {/* 3D background scene layer behind the portrait */}
      <div className="absolute inset-[-15%] pointer-events-none z-0 overflow-visible opacity-80">
        <ThreeDScene variant="hero" interactive={false} />
      </div>

      {/* Soft whitish-red ambient glow behind the portrait */}
      <div
        className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full -top-10 -right-10 pointer-events-none filter blur-3xl opacity-35"
        style={{
          background: 'radial-gradient(circle, #B85A5A 0%, rgba(248, 236, 236, 0.4) 60%, transparent 80%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute w-60 h-60 rounded-full -bottom-8 -left-8 pointer-events-none filter blur-2xl opacity-25"
        style={{
          background: 'radial-gradient(circle, #B85A5A 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* 3D animated portrait card */}
      <motion.div
        id="hero-portrait-card"
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{
          opacity: 1,
          y: [0, -8, 0],
          scale: 1,
        }}
        transition={{
          opacity: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
          scale: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
          y: {
            repeat: Infinity,
            duration: 6.5,
            ease: 'easeInOut',
          },
        }}
        style={{
          rotateX,
          rotateY,
          x: translateX,
          y: translateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative z-10 w-full max-w-[480px] p-2 sm:p-3.5 bg-white/70 backdrop-blur-md rounded-3xl border border-[#B85A5A]/35 shadow-2xl transition-shadow duration-500 hover:shadow-[0_25px_60px_-15px_rgba(184,90,90,0.25)]"
      >
        {/* Subtle glass reflection gradient overlay */}
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none z-20 overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.05) 50%, rgba(184,90,90,0.06) 100%)',
          }}
          aria-hidden="true"
        />

        {/* Image Container with precise rounded rectangular framing matching photo dimensions */}
        <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-[#F6F6F6] shadow-inner">
          <Image
            src={LAW_FIRM_INFO.heroImage}
            alt="Dragi Zekavica - Legal Counsel Toronto"
            fill
            priority={priority}
            referrerPolicy="no-referrer"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 480px"
            className="object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
          />

          {/* Vignette bottom gradient for subtle editorial lighting */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to top, rgba(23, 23, 23, 0.45) 0%, rgba(23, 23, 23, 0.05) 30%, transparent 55%)',
            }}
          />

          {/* Discreet status badge anchored at bottom */}
          <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-20 p-2.5 sm:p-3 rounded-xl bg-white/95 backdrop-blur-md border border-[#E5E5E5] flex items-center justify-between shadow-lg">
            <div>
              <p className="text-[12px] sm:text-[13px] font-semibold tracking-wide text-[#171717]">
                Dragi Zekavica
              </p>
              <p className="text-[10px] sm:text-[11px] tracking-wider text-[#B85A5A] uppercase font-medium">
                Legal Counsel • Toronto, ON
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-[#F8ECEC] text-[10px] font-medium text-[#B85A5A]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B85A5A] animate-pulse" />
              Available
            </span>
          </div>
        </div>

        {/* Decorative corner accents with subtle whitish-red tone */}
        <div className="absolute -top-1.5 -left-1.5 w-4 h-4 border-t-2 border-l-2 border-[#B85A5A]/60 rounded-tl-lg pointer-events-none" />
        <div className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-b-2 border-r-2 border-[#B85A5A]/60 rounded-br-lg pointer-events-none" />
      </motion.div>
    </div>
  );
}
