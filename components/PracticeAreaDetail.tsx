import React from 'react';
import Link from 'next/link';
import {
  Phone,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  FileText,
  AlertCircle,
} from 'lucide-react';
import PageHero from './PageHero';
import ConsultationCTA from './ConsultationCTA';
import ContactForm from './ContactForm';
import PageTransition from './PageTransition';
import { PracticeArea, LAW_FIRM_INFO } from '@/lib/law-firm-data';

interface PracticeAreaDetailProps {
  area: PracticeArea;
  customNote?: string;
}

export default function PracticeAreaDetail({ area, customNote }: PracticeAreaDetailProps) {
  return (
    <PageTransition>
      {/* 1. Dedicated Page Hero with 3D Visual */}
      <PageHero
        title={area.title}
        description={area.fullDescription}
        eyebrow={`PRACTICE AREA • ${area.title.toUpperCase()}`}
        sceneVariant={
          area.heroVisualType === 'family'
            ? 'hero'
            : area.heroVisualType === 'criminal'
            ? 'scales'
            : area.heroVisualType === 'injury'
            ? 'shield'
            : area.heroVisualType === 'civil'
            ? 'scales'
            : area.heroVisualType === 'real-estate'
            ? 'building'
            : area.heroVisualType === 'estate'
            ? 'vault'
            : area.heroVisualType === 'business'
            ? 'building'
            : area.heroVisualType === 'immigration'
            ? 'globe'
            : 'scales'
        }
        ctaText={area.ctaText}
        ctaLink="#consultation-form-section"
      />

      {/* 2. Structured Sections Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase font-bold tracking-widest text-[#B85A5A]">
              Scope of Guidance
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif-title text-[#171717]">
              How We Assist in {area.title}
            </h2>
            <p className="text-sm text-[#171717]/70">
              Clear, practical counsel tailored to the unique complexities of Ontario legal procedures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {area.sections.map((section, idx) => (
              <div
                key={idx}
                className="bg-[#FFFFFF] rounded-2xl p-7 border border-[#E5E5E5] shadow-xs hover:border-[#B85A5A]/40 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-[#F8ECEC] flex items-center justify-center text-[#B85A5A] text-xs font-bold font-mono mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold font-serif-title text-[#171717] mb-2">
                    {section.title}
                  </h3>
                  <p className="text-xs text-[#171717]/75 leading-relaxed">
                    {section.description}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#E5E5E5]/60 flex items-center text-[11px] font-medium text-[#B85A5A]">
                  <span>Ontario Jurisdiction</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Key Legal Considerations & Practical Overview */}
      <section className="py-16 bg-[#F6F6F6] border-y border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase font-bold tracking-widest text-[#B85A5A]">
                Key Considerations
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif-title text-[#171717]">
                Essential Elements for {area.title} in Toronto
              </h3>
              <p className="text-sm text-[#171717]/75 leading-relaxed">
                Early preparation and clear documentation are critical to achieving favorable, cost-effective, and legally sound outcomes in Ontario.
              </p>

              <div className="space-y-3 pt-2">
                {area.keyConsiderations.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-[#E5E5E5]">
                    <CheckCircle2 className="w-4 h-4 text-[#B85A5A] shrink-0 mt-0.5" />
                    <span className="text-xs text-[#171717] font-medium">{item}</span>
                  </div>
                ))}
              </div>

              {customNote && (
                <div className="p-4 rounded-xl bg-[#F8ECEC]/60 border border-[#B85A5A]/30 flex items-start gap-3">
                  <AlertCircle className="w-4 h-4 text-[#B85A5A] shrink-0 mt-0.5" />
                  <p className="text-xs text-[#171717]/80 leading-relaxed font-medium">
                    {customNote}
                  </p>
                </div>
              )}
            </div>

            {/* In-page Consultation Form anchor */}
            <div id="consultation-form-section" className="lg:col-span-6">
              <ContactForm
                defaultPracticeArea={area.title}
                title={`Discuss Your ${area.title} Matter`}
                subtitle={`Connect with Dragi Zekavica's Toronto office regarding ${area.title.toLowerCase()}. Confidential and prompt.`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Bottom Consultation CTA */}
      <ConsultationCTA
        heading={area.ctaText}
        text={`Contact Dragi Zekavica at +1 416-599-5095 or request a confidential initial consultation to discuss your ${area.title.toLowerCase()} matter.`}
        buttonText={area.ctaText}
      />
    </PageTransition>
  );
}
