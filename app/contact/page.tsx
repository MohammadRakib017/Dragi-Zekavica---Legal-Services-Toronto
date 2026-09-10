import React from 'react';
import type { Metadata } from 'next';
import { Phone, MapPin, Linkedin, Clock, Mail, ExternalLink } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import ThreeDScene from '@/components/ThreeDScene';
import GoogleMapSection from '@/components/GoogleMapSection';
import PageTransition from '@/components/PageTransition';
import { LAW_FIRM_INFO } from '@/lib/law-firm-data';

export const metadata: Metadata = {
  title: 'Contact Dragi Zekavica | Toronto Legal Office',
  description:
    'Contact Dragi Zekavica in Toronto, Ontario. Telephone: +1 416-599-5095. Office address: 120 Carlton St. Ste 410, Toronto, Ontario, Canada.',
};

export default function ContactPage() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-white border-b border-[#E5E5E5] overflow-hidden">
        <div
          className="absolute top-0 right-1/3 w-96 h-96 rounded-full pointer-events-none filter blur-3xl opacity-20"
          style={{
            background: 'radial-gradient(circle, #B85A5A 0%, rgba(248, 236, 236, 0.4) 60%, transparent 80%)',
          }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8ECEC] border border-[#B85A5A]/20">
                <span className="w-2 h-2 rounded-full bg-[#B85A5A]" />
                <span className="text-xs font-semibold tracking-wider text-[#B85A5A] uppercase">
                  CONTACT OUR TORONTO OFFICE
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif-title text-[#171717] tracking-tight leading-[1.12]">
                Let&apos;s Discuss Your Legal Matter
              </h1>

              <p className="text-base sm:text-lg text-[#171717]/75 max-w-2xl leading-relaxed">
                Whether you need immediate counsel for a pressing legal issue or wish to explore options for an upcoming transaction or dispute, our Toronto practice is prepared to assist.
              </p>

              {/* Business Information Box */}
              <div className="p-6 rounded-2xl bg-[#F6F6F6] border border-[#E5E5E5] grid grid-cols-1 sm:grid-cols-2 gap-6 pt-5">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#B85A5A] block">
                    Lawyer / Practice Name
                  </span>
                  <p className="text-lg font-bold font-serif-title text-[#171717] mt-1">
                    {LAW_FIRM_INFO.name}
                  </p>
                  <p className="text-xs text-[#171717]/70 font-semibold tracking-wide mt-0.5">
                    {LAW_FIRM_INFO.tagline}
                  </p>
                </div>

                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#B85A5A] block">
                    Direct Telephone
                  </span>
                  <a
                    href={`tel:${LAW_FIRM_INFO.phoneClean}`}
                    className="text-lg font-bold font-mono text-[#171717] hover:text-[#B85A5A] transition-colors mt-1 block"
                  >
                    {LAW_FIRM_INFO.phone}
                  </a>
                  <span className="text-[11px] text-[#171717]/60 block mt-0.5">
                    Mon–Fri 9:00 AM – 5:00 PM EST
                  </span>
                </div>

                <div className="sm:col-span-2 pt-4 border-t border-[#E5E5E5]">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#B85A5A] block">
                    Office Address
                  </span>
                  <p className="text-sm font-semibold text-[#171717] mt-1">
                    {LAW_FIRM_INFO.address}
                  </p>
                  <p className="text-xs text-[#171717]/70">
                    {LAW_FIRM_INFO.cityRegion}
                  </p>
                </div>
              </div>
            </div>

            {/* 3D Scene */}
            <div className="lg:col-span-5 relative flex items-center justify-center min-h-[340px] rounded-3xl bg-[#F6F6F6] border border-[#E5E5E5] overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <ThreeDScene variant="pillars" interactive={true} />
              </div>
              <div className="absolute bottom-4 left-4 right-4 z-10 p-3 rounded-xl bg-white/90 backdrop-blur-md border border-[#E5E5E5] text-center">
                <span className="text-xs font-semibold text-[#171717]">{LAW_FIRM_INFO.fullAddress}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left information */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase font-bold tracking-widest text-[#B85A5A]">
                Inquiry Guidelines
              </span>
              <h2 className="text-3xl font-bold font-serif-title text-[#171717]">
                Sending Your Inquiry
              </h2>
              <p className="text-sm text-[#171717]/75 leading-relaxed">
                Please complete the form with concise information regarding your situation. If your matter has upcoming court dates, limitation deadlines, or urgent closing schedules, please indicate these in your message.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-xl border border-[#E5E5E5] bg-[#F6F6F6] flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#B85A5A] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs text-[#171717] block">By Phone</strong>
                    <a
                      href={`tel:${LAW_FIRM_INFO.phoneClean}`}
                      className="text-xs text-[#171717]/80 hover:text-[#B85A5A]"
                    >
                      {LAW_FIRM_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-[#E5E5E5] bg-[#F6F6F6] flex items-start gap-3">
                  <Linkedin className="w-4 h-4 text-[#B85A5A] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs text-[#171717] block">LinkedIn Profile</strong>
                    <a
                      href={LAW_FIRM_INFO.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#B85A5A] hover:underline inline-flex items-center gap-1"
                    >
                      linkedin.com/in/dragizekavica <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-[#E5E5E5] bg-[#F6F6F6] flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#B85A5A] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs text-[#171717] block">Google Maps Listing</strong>
                    <a
                      href={LAW_FIRM_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#B85A5A] hover:underline inline-flex items-center gap-1"
                    >
                      View on Google Maps <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm
                title="Send a Confidential Message"
                subtitle="Please fill out this form to inquire about our legal services. All inquiries are strictly confidential."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <GoogleMapSection />
    </PageTransition>
  );
}
