'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ChevronRight, Phone, ArrowRight } from 'lucide-react';
import ThreeDScene, { SceneVariant } from './ThreeDScene';
import { LAW_FIRM_INFO } from '@/lib/law-firm-data';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  sceneVariant?: SceneVariant;
  ctaText?: string;
  ctaLink?: string;
}

export default function PageHero({
  eyebrow = 'PRACTICE AREA • TORONTO, ONTARIO',
  title,
  description,
  sceneVariant = 'scales',
  ctaText = 'Request a Consultation',
  ctaLink = '/legal-consultation',
}: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#FFFFFF] border-b border-[#E5E5E5] overflow-hidden">
      {/* Background soft ambient wash */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none filter blur-3xl opacity-20"
        style={{
          background: 'radial-gradient(circle, #B85A5A 0%, rgba(248, 236, 236, 0.5) 60%, transparent 80%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Breadcrumb / Eyebrow */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#B85A5A] uppercase">
              <Link href="/" className="hover:underline text-[#171717]/60">
                Home
              </Link>
              <ChevronRight className="w-3 h-3 text-[#171717]/40" />
              <span>{eyebrow}</span>
            </div>

            {/* Page Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif-title text-[#171717] tracking-tight leading-[1.12]">
              {title}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#171717]/75 max-w-2xl leading-relaxed font-sans-body">
              {description}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href={ctaLink}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#B85A5A] text-white text-xs font-semibold tracking-wide hover:bg-[#a34b4b] transition-all duration-200 shadow-sm hover:shadow-md hover:scale-[1.02]"
              >
                <span>{ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <a
                href={`tel:${LAW_FIRM_INFO.phoneClean}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border border-[#E5E5E5] text-xs font-semibold text-[#171717] hover:border-[#B85A5A] hover:text-[#B85A5A] transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-[#B85A5A]" />
                <span>{LAW_FIRM_INFO.phone}</span>
              </a>
            </div>

            {/* Trust highlights */}
            <div className="pt-4 flex items-center gap-6 text-xs text-[#171717]/60">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B85A5A]" />
                Toronto, Ontario Practice
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B85A5A]" />
                Confidential Review
              </span>
            </div>
          </motion.div>

          {/* Right 3D Visual Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 relative flex items-center justify-center min-h-[340px] sm:min-h-[400px] rounded-3xl bg-[#F6F6F6]/60 border border-[#E5E5E5] shadow-xs overflow-hidden"
          >
            {/* 3D Scene */}
            <div className="absolute inset-0 flex items-center justify-center">
              <ThreeDScene variant={sceneVariant} interactive={true} />
            </div>

            {/* Subtle decorative labels */}
            <div className="absolute bottom-4 left-4 right-4 z-10 p-3 rounded-xl bg-white/80 backdrop-blur-md border border-[#E5E5E5] flex items-center justify-between text-[11px] text-[#171717]/70">
              <span className="font-semibold text-[#171717]">{LAW_FIRM_INFO.name}</span>
              <span className="text-[#B85A5A] font-mono uppercase text-[10px]">Ontario Law</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
