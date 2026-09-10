'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Phone,
  MapPin,
  Linkedin,
  ExternalLink,
  Shield,
  FileText,
  X,
} from 'lucide-react';
import { LAW_FIRM_INFO, PRACTICE_AREAS } from '@/lib/law-firm-data';

export default function Footer() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  return (
    <>
      <footer id="main-footer" className="bg-[#171717] text-white pt-16 pb-12 border-t border-[#333333]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-[#2B2B2B]">
            {/* Column 1: Brand & Identity */}
            <div className="space-y-4">
              <Link href="/" className="inline-block">
                <span className="text-xl font-bold font-serif-title tracking-wider text-white">
                  {LAW_FIRM_INFO.name.toUpperCase()}
                </span>
                <span className="block text-[10px] tracking-[0.22em] text-[#B85A5A] font-semibold mt-0.5">
                  {LAW_FIRM_INFO.tagline}
                </span>
              </Link>
              <p className="text-sm text-[#E5E5E5]/75 leading-relaxed">
                Experienced legal guidance and trusted representation for individuals, families, and businesses in Toronto and across Ontario.
              </p>
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={LAW_FIRM_INFO.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="footer-linkedin-link"
                  aria-label="Dragi Zekavica LinkedIn Profile"
                  className="w-9 h-9 rounded-full bg-[#262626] border border-[#383838] flex items-center justify-center text-white/80 hover:text-white hover:border-[#B85A5A] hover:bg-[#B85A5A]/20 transition-all duration-200"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={LAW_FIRM_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="footer-google-maps-link"
                  aria-label="Dragi Zekavica on Google Maps"
                  className="w-9 h-9 rounded-full bg-[#262626] border border-[#383838] flex items-center justify-center text-white/80 hover:text-white hover:border-[#B85A5A] hover:bg-[#B85A5A]/20 transition-all duration-200"
                >
                  <MapPin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Column 2: Practice Areas */}
            <div>
              <p className="text-xs uppercase tracking-widest text-[#B85A5A] font-bold mb-4">
                Practice Areas
              </p>
              <ul className="space-y-2.5">
                {PRACTICE_AREAS.map((area) => (
                  <li key={area.id}>
                    <Link
                      href={area.slug}
                      className="text-xs text-[#E5E5E5]/75 hover:text-white hover:translate-x-1 inline-block transition-all duration-150"
                    >
                      {area.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Quick Links & Legal Information */}
            <div>
              <p className="text-xs uppercase tracking-widest text-[#B85A5A] font-bold mb-4">
                Quick Links
              </p>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href="/"
                    className="text-xs text-[#E5E5E5]/75 hover:text-white hover:translate-x-1 inline-block transition-all duration-150"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-xs text-[#E5E5E5]/75 hover:text-white hover:translate-x-1 inline-block transition-all duration-150"
                  >
                    About Dragi Zekavica
                  </Link>
                </li>
                <li>
                  <Link
                    href="/legal-consultation"
                    className="text-xs text-[#E5E5E5]/75 hover:text-white hover:translate-x-1 inline-block transition-all duration-150"
                  >
                    Request a Consultation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-xs text-[#E5E5E5]/75 hover:text-white hover:translate-x-1 inline-block transition-all duration-150"
                  >
                    Contact & Office Location
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => setActiveModal('privacy')}
                    className="text-xs text-[#E5E5E5]/75 hover:text-white hover:translate-x-1 inline-block transition-all duration-150 text-left cursor-pointer"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveModal('terms')}
                    className="text-xs text-[#E5E5E5]/75 hover:text-white hover:translate-x-1 inline-block transition-all duration-150 text-left cursor-pointer"
                  >
                    Terms of Use
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact & Office Info */}
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-widest text-[#B85A5A] font-bold mb-4">
                Office & Contact
              </p>
              <div className="space-y-3">
                <a
                  href={`tel:${LAW_FIRM_INFO.phoneClean}`}
                  className="flex items-start gap-2.5 text-xs text-[#E5E5E5]/80 hover:text-white transition-colors group"
                >
                  <Phone className="w-4 h-4 text-[#B85A5A] shrink-0 mt-0.5" />
                  <span>
                    <strong className="block text-white">Telephone</strong>
                    {LAW_FIRM_INFO.phone}
                  </span>
                </a>

                <div className="flex items-start gap-2.5 text-xs text-[#E5E5E5]/80">
                  <MapPin className="w-4 h-4 text-[#B85A5A] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">Toronto Office</strong>
                    <span>{LAW_FIRM_INFO.address}</span>
                    <span className="block">{LAW_FIRM_INFO.cityRegion}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={LAW_FIRM_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#B85A5A] hover:underline"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Disclaimer Box */}
          <div className="py-6 border-b border-[#2B2B2B]">
            <p className="text-[11px] text-[#E5E5E5]/60 leading-relaxed max-w-4xl">
              <span className="font-semibold text-[#E5E5E5]/80">Legal Disclaimer: </span>
              {LAW_FIRM_INFO.disclaimer}
            </p>
          </div>

          {/* Copyright & Secondary Legal Links */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E5E5E5]/60">
            <p>© 2026 Dragi Zekavica. All Rights Reserved.</p>
            <div className="flex items-center space-x-6">
              <button
                onClick={() => setActiveModal('privacy')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setActiveModal('terms')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Terms of Use
              </button>
              <a
                href={LAW_FIRM_INFO.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal for Privacy Policy & Terms of Use */}
      {activeModal && (
        <div
          id="legal-modal-backdrop"
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setActiveModal(null)}
        >
          <div
            id="legal-modal-card"
            className="bg-white text-[#171717] max-w-lg w-full rounded-2xl p-6 sm:p-8 shadow-2xl border border-[#E5E5E5] relative max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModal(null)}
              aria-label="Close modal"
              className="absolute top-5 right-5 p-1.5 rounded-full hover:bg-[#F6F6F6] text-[#171717]/70 hover:text-[#171717]"
            >
              <X className="w-5 h-5" />
            </button>

            {activeModal === 'privacy' ? (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[#B85A5A]">
                  <Shield className="w-5 h-5" />
                  <h3 className="text-xl font-bold font-serif-title text-[#171717]">Privacy Policy</h3>
                </div>
                <p className="text-xs text-[#171717]/70 leading-relaxed">
                  Dragi Zekavica respects client confidentiality and the privacy of individuals contacting our office. Information submitted via consultation forms or phone inquiries is handled in accordance with professional legal secrecy standards and applicable Ontario privacy legislation.
                </p>
                <p className="text-xs text-[#171717]/70 leading-relaxed">
                  We do not sell, disclose, or distribute your contact details to third-party marketing entities. Any details provided are strictly utilized to evaluate your legal matter and coordinate initial consultations.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[#B85A5A]">
                  <FileText className="w-5 h-5" />
                  <h3 className="text-xl font-bold font-serif-title text-[#171717]">Terms of Use</h3>
                </div>
                <p className="text-xs text-[#171717]/70 leading-relaxed">
                  The material and information contained on this website are provided strictly for general informational purposes in Toronto, Ontario.
                </p>
                <p className="text-xs text-[#171717]/70 leading-relaxed">
                  Nothing on this website constitutes formal legal advice. Viewing this site or submitting an inquiry via the contact form does not create or establish a lawyer-client relationship. Prior to acting or relying on any general information, you should retain qualified legal counsel.
                </p>
              </div>
            )}

            <div className="pt-6 mt-4 border-t border-[#E5E5E5] flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="px-5 py-2 bg-[#171717] text-white text-xs font-semibold rounded-lg hover:bg-[#2B2B2B]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
