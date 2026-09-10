'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Scale,
  ShieldAlert,
  Activity,
  Home,
  Scroll,
  Building2,
  Globe,
  HelpCircle,
} from 'lucide-react';
import { PracticeArea } from '@/lib/law-firm-data';

interface PracticeAreaCardProps {
  area: PracticeArea;
  index: number;
}

const iconMap: Record<string, React.ReactNode> = {
  'family-law': <Scale className="w-5 h-5 text-[#B85A5A]" />,
  'criminal-law': <ShieldAlert className="w-5 h-5 text-[#B85A5A]" />,
  'personal-injury': <Activity className="w-5 h-5 text-[#B85A5A]" />,
  'civil-litigation': <Scale className="w-5 h-5 text-[#B85A5A]" />,
  'real-estate': <Home className="w-5 h-5 text-[#B85A5A]" />,
  'estate-planning': <Scroll className="w-5 h-5 text-[#B85A5A]" />,
  'business-law': <Building2 className="w-5 h-5 text-[#B85A5A]" />,
  'immigration': <Globe className="w-5 h-5 text-[#B85A5A]" />,
  'legal-consultation': <HelpCircle className="w-5 h-5 text-[#B85A5A]" />,
};

export default function PracticeAreaCard({ area, index }: PracticeAreaCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Subtle 3D tilt calculation
    setRotateX(((y - centerY) / centerY) * -5);
    setRotateY(((x - centerX) / centerX) * 5);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      style={{ perspective: 1000 }}
      className="h-full"
    >
      <div
        ref={cardRef}
        id={`practice-card-${area.id}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.15s ease-out, box-shadow 0.25s ease-out',
        }}
        className="group relative h-full bg-white rounded-2xl p-7 border border-[#E5E5E5] hover:border-[#B85A5A]/50 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_-15px_rgba(184,90,90,0.15)] flex flex-col justify-between"
      >
        {/* Subtle top indicator bar on hover */}
        <div className="absolute top-0 left-6 right-6 h-[2px] bg-transparent group-hover:bg-[#B85A5A] transition-colors duration-300 rounded-full" />

        <div>
          {/* Minimal Icon with soft whitish-red background */}
          <div className="w-12 h-12 rounded-xl bg-[#F8ECEC] flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#B85A5A]/15">
            {iconMap[area.id] || <Scale className="w-5 h-5 text-[#B85A5A]" />}
          </div>

          {/* Heading */}
          <h3 className="text-xl font-bold font-serif-title text-[#171717] group-hover:text-[#B85A5A] transition-colors duration-200">
            {area.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-[#171717]/70 mt-2.5 leading-relaxed font-sans-body">
            {area.shortDescription}
          </p>
        </div>

        {/* Link / CTA */}
        <div className="pt-6 mt-6 border-t border-[#E5E5E5]/70">
          <Link
            href={area.slug}
            id={`practice-link-${area.id}`}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#171717] group-hover:text-[#B85A5A] transition-colors duration-200"
          >
            <span>Learn More</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
