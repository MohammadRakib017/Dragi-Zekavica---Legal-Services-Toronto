'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import {
  Phone,
  MapPin,
  ArrowRight,
  Shield,
  MessageSquare,
  Lock,
  Compass,
  CheckCircle2,
} from 'lucide-react';
import HeroImage from '@/components/HeroImage';
import ThreeDScene from '@/components/ThreeDScene';
import PracticeAreaCard from '@/components/PracticeAreaCard';
import ConsultationCTA from '@/components/ConsultationCTA';
import GoogleMapSection from '@/components/GoogleMapSection';
import PageTransition from '@/components/PageTransition';
import { LAW_FIRM_INFO, PRACTICE_AREAS } from '@/lib/law-firm-data';

export default function HomePage() {
  return (
    <PageTransition>
      {/* 1. HOMEPAGE HERO SECTION */}
      <section
        id="hero-section"
        className="relative pt-10 pb-20 lg:pt-16 lg:pb-32 bg-white overflow-hidden"
      >
        {/* Ambient background wash */}
        <div
          className="absolute -top-24 right-0 w-[600px] h-[600px] rounded-full pointer-events-none filter blur-3xl opacity-20"
          style={{
            background: 'radial-gradient(circle, #B85A5A 0%, rgba(248, 236, 236, 0.4) 60%, transparent 80%)',
          }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* LEFT SIDE CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 space-y-6 sm:space-y-7 z-10"
            >
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8ECEC] border border-[#B85A5A]/20">
                <span className="w-2 h-2 rounded-full bg-[#B85A5A]" />
                <span className="text-xs font-semibold tracking-wider text-[#B85A5A] uppercase">
                  LEGAL SERVICES • TORONTO, ONTARIO
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold font-serif-title text-[#171717] tracking-tight leading-[1.12]">
                Experienced Legal Guidance. Trusted Representation.
              </h1>

              {/* Supporting Paragraph */}
              <p className="text-base sm:text-lg text-[#171717]/75 max-w-xl leading-relaxed font-sans-body">
                Professional legal services focused on helping clients understand their legal options and move forward with confidence.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/legal-consultation"
                  id="hero-request-consultation-btn"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#B85A5A] text-white text-sm font-semibold tracking-wide hover:bg-[#a34b4b] transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.02] text-center cursor-pointer"
                >
                  <span>Request a Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="#practice-areas-section"
                  id="hero-explore-areas-btn"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white border border-[#E5E5E5] text-[#171717] text-sm font-semibold hover:border-[#B85A5A] hover:text-[#B85A5A] transition-all duration-200 shadow-xs text-center cursor-pointer"
                >
                  <span>Explore Practice Areas</span>
                </a>
              </div>

              {/* Contact and Trust Meta */}
              <div className="pt-4 border-t border-[#E5E5E5] flex flex-wrap items-center justify-between gap-4 text-xs">
                <a
                  href={`tel:${LAW_FIRM_INFO.phoneClean}`}
                  className="flex items-center gap-2 font-semibold text-[#171717] hover:text-[#B85A5A] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#B85A5A]" />
                  <span>{LAW_FIRM_INFO.phone}</span>
                </a>

                <div className="flex items-center gap-2 text-[#171717]/70">
                  <MapPin className="w-4 h-4 text-[#B85A5A]" />
                  <span>Toronto, Ontario</span>
                </div>
              </div>

              {/* Small Trust Indicators */}
              <div className="flex items-center gap-4 text-xs font-semibold text-[#171717]/80 pt-1">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B85A5A]" />
                  Professional
                </span>
                <span className="text-[#E5E5E5]">•</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B85A5A]" />
                  Confidential
                </span>
                <span className="text-[#E5E5E5]">•</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B85A5A]" />
                  Client-Focused
                </span>
              </div>
            </motion.div>

            {/* RIGHT SIDE HERO IMAGE (With 3D environment behind it) */}
            <div className="lg:col-span-6 flex items-center justify-center">
              <HeroImage priority={true} />
            </div>
          </div>
        </div>
      </section>

      {/* 2. HOMEPAGE INTRODUCTION SECTION */}
      <section
        id="introduction-section"
        className="py-20 bg-[#F6F6F6] border-y border-[#E5E5E5] relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6"
            >
              <span className="text-xs uppercase font-bold tracking-widest text-[#B85A5A]">
                Toronto Legal Services
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-title text-[#171717] tracking-tight">
                Legal Guidance Built Around Your Needs
              </h2>

              <p className="text-base text-[#171717]/80 leading-relaxed">
                Legal matters can often be complex, high-stakes, and demanding of careful strategic decisions. In our Toronto practice, every legal situation is approached with clear communication, diligent legal assessment, and an unwavering commitment to client confidentiality.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white border border-[#E5E5E5]">
                  <h4 className="text-sm font-bold text-[#171717] mb-1">Clear Communication</h4>
                  <p className="text-xs text-[#171717]/70 leading-relaxed">
                    Legal proceedings explained in transparent, accessible language without unnecessary ambiguity.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E5E5E5]">
                  <h4 className="text-sm font-bold text-[#171717] mb-1">Careful Assessment</h4>
                  <p className="text-xs text-[#171717]/70 leading-relaxed">
                    Comprehensive review of facts, documentation, and statutory provisions before formulating strategy.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E5E5E5]">
                  <h4 className="text-sm font-bold text-[#171717] mb-1">Strict Confidentiality</h4>
                  <p className="text-xs text-[#171717]/70 leading-relaxed">
                    Protecting client privacy and sensitive personal or commercial records at all stages.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E5E5E5]">
                  <h4 className="text-sm font-bold text-[#171717] mb-1">Client-Focused Counsel</h4>
                  <p className="text-xs text-[#171717]/70 leading-relaxed">
                    Solutions tailored specifically to your objectives, timelines, and practical circumstances.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#B85A5A] hover:underline"
                >
                  <span>Learn more about our practice & approach</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>

            {/* Right 3D Legal Object */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 relative flex items-center justify-center min-h-[380px] rounded-3xl bg-white border border-[#E5E5E5] shadow-xs overflow-hidden"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <ThreeDScene variant="scales" interactive={true} />
              </div>

              <div className="absolute bottom-4 left-4 right-4 z-10 p-3 rounded-xl bg-white/90 backdrop-blur-md border border-[#E5E5E5] text-center">
                <p className="text-xs font-serif-title font-semibold text-[#171717]">
                  Equitable & Disciplined Advocacy
                </p>
                <p className="text-[10px] text-[#B85A5A] font-semibold uppercase tracking-wider mt-0.5">
                  Ontario Legal Practice
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. HOMEPAGE PRACTICE AREAS SECTION */}
      <section
        id="practice-areas-section"
        className="py-24 bg-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase font-bold tracking-widest text-[#B85A5A]">
              Comprehensive Legal Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-title text-[#171717]">
              Areas of Practice
            </h2>
            <p className="text-base text-[#171717]/75">
              Providing focused counsel across core areas of Ontario law. Select a practice area below to review legal considerations and representation details.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {PRACTICE_AREAS.map((area, index) => (
              <PracticeAreaCard key={area.id} area={area} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. HOMEPAGE — WHY DRAGI ZEKAVICA */}
      <section
        id="why-us-section"
        className="py-20 bg-[#F6F6F6] border-t border-[#E5E5E5]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs uppercase font-bold tracking-widest text-[#B85A5A]">
              Our Professional Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif-title text-[#171717]">
              Why Choose Dragi Zekavica
            </h2>
            <p className="text-sm text-[#171717]/70">
              A disciplined, client-centered approach grounded in clarity, respect, and meticulous legal diligence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Block 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-7 border border-[#E5E5E5] shadow-xs hover:border-[#B85A5A]/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-[#F8ECEC] flex items-center justify-center mb-5">
                <Shield className="w-5 h-5 text-[#B85A5A]" />
              </div>
              <h3 className="text-lg font-bold font-serif-title text-[#171717] mb-2">
                Professional Guidance
              </h3>
              <p className="text-xs text-[#171717]/70 leading-relaxed">
                Clear and practical legal guidance tailored to individual circumstances.
              </p>
            </motion.div>

            {/* Block 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-7 border border-[#E5E5E5] shadow-xs hover:border-[#B85A5A]/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-[#F8ECEC] flex items-center justify-center mb-5">
                <MessageSquare className="w-5 h-5 text-[#B85A5A]" />
              </div>
              <h3 className="text-lg font-bold font-serif-title text-[#171717] mb-2">
                Client-Focused Approach
              </h3>
              <p className="text-xs text-[#171717]/70 leading-relaxed">
                A thoughtful approach centered around understanding each client&apos;s legal needs.
              </p>
            </motion.div>

            {/* Block 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl p-7 border border-[#E5E5E5] shadow-xs hover:border-[#B85A5A]/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-[#F8ECEC] flex items-center justify-center mb-5">
                <Lock className="w-5 h-5 text-[#B85A5A]" />
              </div>
              <h3 className="text-lg font-bold font-serif-title text-[#171717] mb-2">
                Confidentiality
              </h3>
              <p className="text-xs text-[#171717]/70 leading-relaxed">
                Sensitive legal matters handled with professionalism and discretion.
              </p>
            </motion.div>

            {/* Block 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-2xl p-7 border border-[#E5E5E5] shadow-xs hover:border-[#B85A5A]/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-[#F8ECEC] flex items-center justify-center mb-5">
                <Compass className="w-5 h-5 text-[#B85A5A]" />
              </div>
              <h3 className="text-lg font-bold font-serif-title text-[#171717] mb-2">
                Practical Solutions
              </h3>
              <p className="text-xs text-[#171717]/70 leading-relaxed">
                Focused on understanding the situation and identifying appropriate legal next steps.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. HOMEPAGE CONSULTATION CTA */}
      <ConsultationCTA
        heading="Need Legal Guidance?"
        text="Take the next step toward understanding your legal options."
        buttonText="Request a Consultation"
      />

      {/* 6. GOOGLE MAP SECTION */}
      <GoogleMapSection />
    </PageTransition>
  );
}
