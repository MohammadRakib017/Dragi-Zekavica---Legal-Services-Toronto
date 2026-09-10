import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Phone,
  MapPin,
  ArrowRight,
  Shield,
  CheckCircle2,
  FileCheck,
  Scale,
  Users,
} from 'lucide-react';
import ThreeDScene from '@/components/ThreeDScene';
import ConsultationCTA from '@/components/ConsultationCTA';
import PageTransition from '@/components/PageTransition';
import { LAW_FIRM_INFO } from '@/lib/law-firm-data';

export const metadata: Metadata = {
  title: 'About Dragi Zekavica | Legal Counsel Toronto',
  description:
    'Learn about Dragi Zekavica, providing professional legal guidance and client-focused representation in Toronto, Ontario.',
};

export default function AboutPage() {
  return (
    <PageTransition>
      {/* About Page Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#FFFFFF] border-b border-[#E5E5E5] overflow-hidden">
        {/* Soft background glow */}
        <div
          className="absolute top-0 right-1/4 w-[480px] h-[480px] rounded-full pointer-events-none filter blur-3xl opacity-20"
          style={{
            background: 'radial-gradient(circle, #B85A5A 0%, rgba(248, 236, 236, 0.5) 60%, transparent 80%)',
          }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8ECEC] border border-[#B85A5A]/20">
                <span className="w-2 h-2 rounded-full bg-[#B85A5A]" />
                <span className="text-xs font-semibold tracking-wider text-[#B85A5A] uppercase">
                  ABOUT OUR PRACTICE • TORONTO, ONTARIO
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-bold font-serif-title text-[#171717] tracking-tight leading-[1.12]">
                Professional Legal Representation With a Client-Focused Approach
              </h1>

              <p className="text-base sm:text-lg text-[#171717]/75 max-w-2xl leading-relaxed">
                Legal matters require not only knowledge of statutory frameworks and procedural rules, but an authentic dedication to listening, understanding individual objectives, and delivering practical counsel.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/legal-consultation"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#B85A5A] text-white text-xs font-semibold tracking-wide hover:bg-[#a34b4b] transition-all shadow-sm hover:shadow-md"
                >
                  <span>Speak With Dragi Zekavica</span>
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
            </div>

            {/* Right side portrait + 3D legal visual */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-sm rounded-3xl p-3 bg-white border border-[#B85A5A]/30 shadow-2xl">
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#F6F6F6]">
                  <Image
                    src={LAW_FIRM_INFO.heroImage}
                    alt="Dragi Zekavica"
                    fill
                    referrerPolicy="no-referrer"
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-sm font-bold font-serif-title">Dragi Zekavica</p>
                    <p className="text-[11px] text-[#F8ECEC] font-mono uppercase tracking-wider">Toronto, Ontario</p>
                  </div>
                </div>

                {/* 3D Visual overlay badge */}
                <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-white rounded-2xl border border-[#E5E5E5] shadow-xl p-2 hidden sm:block overflow-hidden">
                  <ThreeDScene variant="scales" interactive={false} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Dragi Zekavica Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs uppercase font-bold tracking-widest text-[#B85A5A]">
              Factual Practice Overview
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif-title text-[#171717]">
              About Dragi Zekavica
            </h2>
            <p className="text-base text-[#171717]/80 leading-relaxed">
              Dragi Zekavica is a Canadian legal practitioner based in downtown Toronto, Ontario, located at 120 Carlton St. Ste 410. Providing counsel across diverse areas of practice—including Family Law, Criminal Law, Personal Injury, Civil Litigation, Real Estate, Estate Planning, Business Law, and Immigration—the practice is dedicated to helping individuals and businesses understand their legal rights and make well-informed decisions.
            </p>
            <p className="text-base text-[#171717]/80 leading-relaxed">
              Every client interaction is characterized by respectful engagement, comprehensive factual review, and realistic legal options. In an evolving legal environment, our office focuses on steady, ethical guidance rather than rhetoric.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#F6F6F6] border border-[#E5E5E5] flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#B85A5A] shrink-0 mt-1" />
                <div>
                  <h4 className="text-xs font-bold text-[#171717] uppercase tracking-wider">Toronto Office</h4>
                  <p className="text-xs text-[#171717]/70 mt-0.5">{LAW_FIRM_INFO.fullAddress}</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#F6F6F6] border border-[#E5E5E5] flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#B85A5A] shrink-0 mt-1" />
                <div>
                  <h4 className="text-xs font-bold text-[#171717] uppercase tracking-wider">Telephone</h4>
                  <p className="text-xs text-[#171717]/70 mt-0.5">{LAW_FIRM_INFO.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Approach Section */}
      <section className="py-20 bg-[#F6F6F6] border-y border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase font-bold tracking-widest text-[#B85A5A]">
              Practice Standards
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif-title text-[#171717]">
              Professional Approach
            </h2>
            <p className="text-sm text-[#171717]/70">
              The foundational pillars that guide how we engage with every legal matter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* 1. Clear communication */}
            <div className="bg-white rounded-2xl p-6 border border-[#E5E5E5] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#F8ECEC] flex items-center justify-center mb-4">
                <FileCheck className="w-5 h-5 text-[#B85A5A]" />
              </div>
              <h3 className="text-base font-bold font-serif-title text-[#171717] mb-2">
                Clear Communication
              </h3>
              <p className="text-xs text-[#171717]/70 leading-relaxed">
                Legal terminology and statutory options translated into clear, actionable advice so you remain in control.
              </p>
            </div>

            {/* 2. Careful assessment */}
            <div className="bg-white rounded-2xl p-6 border border-[#E5E5E5] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#F8ECEC] flex items-center justify-center mb-4">
                <Scale className="w-5 h-5 text-[#B85A5A]" />
              </div>
              <h3 className="text-base font-bold font-serif-title text-[#171717] mb-2">
                Careful Assessment
              </h3>
              <p className="text-xs text-[#171717]/70 leading-relaxed">
                Detailed examination of evidence, contracts, financial records, and procedural rules before recommending courses of action.
              </p>
            </div>

            {/* 3. Confidentiality */}
            <div className="bg-white rounded-2xl p-6 border border-[#E5E5E5] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#F8ECEC] flex items-center justify-center mb-4">
                <Shield className="w-5 h-5 text-[#B85A5A]" />
              </div>
              <h3 className="text-base font-bold font-serif-title text-[#171717] mb-2">
                Confidentiality
              </h3>
              <p className="text-xs text-[#171717]/70 leading-relaxed">
                Absolute discretion applied to all client disclosures, personal documents, and corporate records.
              </p>
            </div>

            {/* 4. Practical guidance */}
            <div className="bg-white rounded-2xl p-6 border border-[#E5E5E5] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#F8ECEC] flex items-center justify-center mb-4">
                <CheckCircle2 className="w-5 h-5 text-[#B85A5A]" />
              </div>
              <h3 className="text-base font-bold font-serif-title text-[#171717] mb-2">
                Practical Guidance
              </h3>
              <p className="text-xs text-[#171717]/70 leading-relaxed">
                Focus on real-world legal resolution, risk mitigation, and tangible outcomes rather than theoretical posturing.
              </p>
            </div>

            {/* 5. Client-focused service */}
            <div className="bg-white rounded-2xl p-6 border border-[#E5E5E5] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#F8ECEC] flex items-center justify-center mb-4">
                <Users className="w-5 h-5 text-[#B85A5A]" />
              </div>
              <h3 className="text-base font-bold font-serif-title text-[#171717] mb-2">
                Client-Focused Service
              </h3>
              <p className="text-xs text-[#171717]/70 leading-relaxed">
                Accessible representation tailored to your specific timing, financial realities, and personal circumstances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Philosophy Statement */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase font-bold tracking-widest text-[#B85A5A]">
            Core Philosophy
          </span>

          <div className="p-8 sm:p-12 rounded-3xl bg-[#F8ECEC]/40 border border-[#B85A5A]/30 relative shadow-sm">
            <h3 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif-title text-[#171717] tracking-tight leading-tight">
              Listen. Understand. Advise. Represent.
            </h3>
            <p className="text-sm sm:text-base text-[#171717]/75 max-w-xl mx-auto mt-6 leading-relaxed">
              Every successful legal strategy begins with truly hearing the client, conducting an uncompromised legal review, and executing with deliberate discipline.
            </p>
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <ConsultationCTA
        heading="Speak With Dragi Zekavica"
        text="Discuss your legal situation in confidence and understand the practical steps available to you."
        buttonText="Request a Consultation"
      />
    </PageTransition>
  );
}
