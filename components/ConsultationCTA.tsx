'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import ThreeDScene from './ThreeDScene';
import { LAW_FIRM_INFO } from '@/lib/law-firm-data';

interface ConsultationCTAProps {
  heading?: string;
  text?: string;
  buttonText?: string;
}

export default function ConsultationCTA({
  heading = 'Need Legal Guidance?',
  text = 'Take the next step toward understanding your legal options.',
  buttonText = 'Request a Consultation',
}: ConsultationCTAProps) {
  return (
    <section
      id="consultation-cta-section"
      className="relative py-20 sm:py-24 bg-gradient-to-b from-[#FFFFFF] via-[#F8ECEC]/40 to-[#F6F6F6] border-t border-[#E5E5E5] overflow-hidden"
    >
      {/* Subtle 3D Legal Geometry Background */}
      <div className="absolute inset-0 pointer-events-none opacity-45 overflow-hidden flex items-center justify-center">
        <ThreeDScene variant="consultation" interactive={false} />
      </div>

      {/* Decorative ambient glow */}
      <div
        className="absolute w-[450px] h-[450px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none filter blur-3xl opacity-30"
        style={{
          background: 'radial-gradient(circle, #B85A5A 0%, rgba(248, 236, 236, 0.6) 70%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5E5E5] shadow-xs text-xs font-semibold text-[#B85A5A]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Confidential Legal Consultation • Toronto, ON</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-title text-[#171717] tracking-tight">
            {heading}
          </h2>

          <p className="text-base sm:text-lg text-[#171717]/75 max-w-2xl mx-auto leading-relaxed">
            {text}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/legal-consultation"
              id="cta-request-consultation-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#B85A5A] text-white text-sm font-semibold tracking-wide hover:bg-[#a34b4b] transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.02]"
            >
              <span>{buttonText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={`tel:${LAW_FIRM_INFO.phoneClean}`}
              id="cta-phone-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-white border border-[#E5E5E5] text-[#171717] text-sm font-semibold hover:border-[#B85A5A] hover:text-[#B85A5A] transition-all duration-200 shadow-xs"
            >
              <Phone className="w-4 h-4 text-[#B85A5A]" />
              <span>{LAW_FIRM_INFO.phone}</span>
            </a>
          </div>

          <p className="text-xs text-[#171717]/50 pt-2">
            120 Carlton St. Ste 410, Toronto, Ontario • Discreet & Professional
          </p>
        </motion.div>
      </div>
    </section>
  );
}
