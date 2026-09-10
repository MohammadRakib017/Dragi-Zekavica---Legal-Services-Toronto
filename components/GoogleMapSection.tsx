'use client';

import React from 'react';
import { MapPin, ExternalLink, Phone, Navigation, Clock } from 'lucide-react';
import { LAW_FIRM_INFO } from '@/lib/law-firm-data';

export default function GoogleMapSection() {
  return (
    <section id="location-map-section" className="py-16 bg-[#F6F6F6] border-y border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-[#B85A5A]">
            Toronto Law Office
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-title text-[#171717] mt-2">
            Convenient Downtown Toronto Location
          </h2>
          <p className="text-sm text-[#171717]/70 mt-3">
            Located on Carlton Street between Church and Jarvis Streets, easily accessible via public transit and downtown arterial routes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Office Information Box */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-[#E5E5E5] shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              <div className="pb-6 border-b border-[#E5E5E5]">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#B85A5A]">
                  Primary Practice Address
                </span>
                <h3 className="text-2xl font-bold font-serif-title text-[#171717] mt-1">
                  Dragi Zekavica
                </h3>
                <p className="text-sm text-[#171717]/80 mt-2 flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#B85A5A] shrink-0 mt-1" />
                  <span>
                    <strong className="block text-[#171717] font-semibold">{LAW_FIRM_INFO.address}</strong>
                    {LAW_FIRM_INFO.cityRegion}
                  </span>
                </p>
              </div>

              <div className="space-y-4 text-xs text-[#171717]/80">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#B85A5A] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#171717] block">Telephone Inquiries</span>
                    <a
                      href={`tel:${LAW_FIRM_INFO.phoneClean}`}
                      className="hover:text-[#B85A5A] font-medium text-sm transition-colors"
                    >
                      {LAW_FIRM_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#B85A5A] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#171717] block">Consultation Availability</span>
                    <span>Monday to Friday: 9:00 AM – 5:00 PM</span>
                    <span className="block text-[11px] text-[#171717]/60">Evenings available by prior appointment</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Navigation className="w-4 h-4 text-[#B85A5A] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#171717] block">Transit & Parking</span>
                    <span>Steps from TTC Carlton 506 streetcar and College Subway Station. Street and public garage parking nearby.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-[#E5E5E5]">
              <a
                href={LAW_FIRM_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="view-on-google-maps-btn"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#171717] hover:bg-[#B85A5A] text-white text-xs font-semibold tracking-wide transition-all duration-200 shadow-sm"
              >
                <span>View on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Interactive Map Embed */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-[#E5E5E5] shadow-sm relative min-h-[360px] lg:min-h-full bg-white">
            <iframe
              title="Dragi Zekavica Google Maps Location"
              src="https://maps.google.com/maps?q=120+Carlton+St.+Ste+410,+Toronto,+ON+M5A+4K2&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[380px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
