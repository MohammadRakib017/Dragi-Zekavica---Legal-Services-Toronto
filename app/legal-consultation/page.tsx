import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Phone,
  MapPin,
  Shield,
  Clock,
  CheckCircle2,
  FileCheck2,
  HelpCircle,
} from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import ThreeDScene from '@/components/ThreeDScene';
import GoogleMapSection from '@/components/GoogleMapSection';
import PageTransition from '@/components/PageTransition';
import { LAW_FIRM_INFO, PRACTICE_AREAS } from '@/lib/law-firm-data';

export const metadata: Metadata = {
  title: 'Legal Consultation Toronto | Dragi Zekavica',
  description:
    'Start with a confidential conversation about your legal matter. Discuss your situation with Dragi Zekavica in Toronto, Ontario.',
};

export default function LegalConsultationPage() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-white border-b border-[#E5E5E5] overflow-hidden">
        <div
          className="absolute top-0 right-10 w-96 h-96 rounded-full pointer-events-none filter blur-3xl opacity-25"
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
                  CONFIDENTIAL CONSULTATION • TORONTO, ONTARIO
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif-title text-[#171717] tracking-tight leading-[1.12]">
                Legal Consultation
              </h1>

              <h2 className="text-xl sm:text-2xl font-serif-title text-[#B85A5A]">
                Start With a Conversation About Your Legal Matter
              </h2>

              <p className="text-base sm:text-lg text-[#171717]/75 max-w-2xl leading-relaxed">
                An initial legal consultation provides an objective, confidential setting to evaluate the circumstances of your case, review key documents, and understand potential options under Ontario law.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={`tel:${LAW_FIRM_INFO.phoneClean}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#171717] text-white text-xs font-semibold hover:bg-[#333333] transition-all shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5 text-[#B85A5A]" />
                  <span>Call {LAW_FIRM_INFO.phone}</span>
                </a>

                <a
                  href="#consultation-form-section"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#B85A5A] text-white text-xs font-semibold hover:bg-[#a34b4b] transition-all"
                >
                  <span>Complete Request Form</span>
                </a>
              </div>
            </div>

            {/* 3D Visual */}
            <div className="lg:col-span-5 relative flex items-center justify-center min-h-[340px] rounded-3xl bg-[#F6F6F6] border border-[#E5E5E5] overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <ThreeDScene variant="consultation" interactive={true} />
              </div>
              <div className="absolute bottom-4 left-4 right-4 z-10 p-3 rounded-xl bg-white/90 backdrop-blur-md border border-[#E5E5E5] flex items-center justify-between text-xs">
                <span className="font-semibold text-[#171717]">Dragi Zekavica</span>
                <span className="text-[#B85A5A] font-semibold">Confidential Review</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect During an Initial Consultation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase font-bold tracking-widest text-[#B85A5A]">
              Consultation Framework
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif-title text-[#171717]">
              What to Expect From Your Consultation
            </h2>
            <p className="text-sm text-[#171717]/70">
              Clear expectations ensure that your consultation is productive, focused, and directly useful.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F6F6F6] rounded-2xl p-8 border border-[#E5E5E5]">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-5 text-[#B85A5A] shadow-xs">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-serif-title text-[#171717] mb-2">
                1. Factual Review
              </h3>
              <p className="text-xs text-[#171717]/75 leading-relaxed">
                We review the timeline, critical documents, contracts, or notices you have received to establish the foundation of your legal position.
              </p>
            </div>

            <div className="bg-[#F6F6F6] rounded-2xl p-8 border border-[#E5E5E5]">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-5 text-[#B85A5A] shadow-xs">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-serif-title text-[#171717] mb-2">
                2. Rights & Options
              </h3>
              <p className="text-xs text-[#171717]/75 leading-relaxed">
                We assess statutory requirements, realistic timelines, and practical strategies without unnecessary legal jargon or false promises.
              </p>
            </div>

            <div className="bg-[#F6F6F6] rounded-2xl p-8 border border-[#E5E5E5]">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-5 text-[#B85A5A] shadow-xs">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-serif-title text-[#171717] mb-2">
                3. Concrete Next Steps
              </h3>
              <p className="text-xs text-[#171717]/75 leading-relaxed">
                You receive a clear understanding of immediate deadlines, evidentiary items to preserve, and procedural pathways available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Consultation Form Section */}
      <section id="consultation-form-section" className="py-20 bg-[#F6F6F6] border-y border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left information sidebar */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase font-bold tracking-widest text-[#B85A5A]">
                Toronto Office
              </span>
              <h3 className="text-3xl font-bold font-serif-title text-[#171717]">
                Connect With Dragi Zekavica
              </h3>
              <p className="text-sm text-[#171717]/75 leading-relaxed">
                Please complete the consultation request form with your basic details and a brief outline of the matter. We will review your submission and contact you via your preferred communication method.
              </p>

              <div className="p-6 rounded-2xl bg-white border border-[#E5E5E5] space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#B85A5A] shrink-0 mt-1" />
                  <div>
                    <span className="text-xs font-semibold text-[#171717] block">Telephone</span>
                    <a
                      href={`tel:${LAW_FIRM_INFO.phoneClean}`}
                      className="text-sm font-bold text-[#171717] hover:text-[#B85A5A] transition-colors"
                    >
                      {LAW_FIRM_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#B85A5A] shrink-0 mt-1" />
                  <div>
                    <span className="text-xs font-semibold text-[#171717] block">Office Location</span>
                    <span className="text-xs text-[#171717]/70 block">{LAW_FIRM_INFO.address}</span>
                    <span className="text-xs text-[#171717]/70 block">{LAW_FIRM_INFO.cityRegion}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#B85A5A] shrink-0 mt-1" />
                  <div>
                    <span className="text-xs font-semibold text-[#171717] block">Hours</span>
                    <span className="text-xs text-[#171717]/70 block">Monday to Friday: 9:00 AM – 5:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#F8ECEC]/60 border border-[#B85A5A]/25 text-[11px] text-[#171717]/80 leading-relaxed">
                <strong>Confidentiality Assurance: </strong>
                All details provided in this form are treated as confidential. Contacting our office or submitting this request does not constitute or create a formal lawyer-client relationship until mutually agreed in writing.
              </div>
            </div>

            {/* Right Consultation Form */}
            <div className="lg:col-span-7">
              <ContactForm
                title="Request a Legal Consultation"
                subtitle="Select your practice area and describe the matter. We respond promptly during business hours."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <GoogleMapSection />
    </PageTransition>
  );
}
