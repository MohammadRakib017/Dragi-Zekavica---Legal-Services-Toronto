'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, AlertCircle, Phone, Lock, ArrowRight } from 'lucide-react';
import { PRACTICE_AREAS, LAW_FIRM_INFO } from '@/lib/law-firm-data';

interface ContactFormProps {
  defaultPracticeArea?: string;
  title?: string;
  subtitle?: string;
}

export default function ContactForm({
  defaultPracticeArea = '',
  title = 'Request a Confidential Consultation',
  subtitle = 'Provide the preliminary details of your legal situation. We review all inquiries with strict discretion.',
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    practiceArea: defaultPracticeArea || 'Family Law',
    preferredContact: 'Phone',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [referenceNum, setReferenceNum] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit inquiry.');
      }

      setStatus('success');
      setReferenceNum(data.referenceNumber || 'DZ-CONFIRMED');
    } catch (err: unknown) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'Unable to submit your message. Please contact us by phone at +1 416-599-5095.'
      );
    }
  };

  return (
    <div
      id="consultation-form-card"
      className="relative bg-white rounded-3xl p-6 sm:p-10 border border-[#E5E5E5] shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-300"
    >
      {/* Subtle whitish-red top accent line */}
      <div className="absolute top-0 left-10 right-10 h-1 bg-[#B85A5A] rounded-t-full" />

      {status === 'success' ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-8 space-y-5"
        >
          <div className="w-16 h-16 bg-[#F8ECEC] text-[#B85A5A] rounded-full flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 className="w-9 h-9" />
          </div>
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-[#B85A5A]">
              Consultation Request Received
            </span>
            <h3 className="text-2xl font-bold font-serif-title text-[#171717] mt-1">
              Thank You, {formData.fullName}
            </h3>
            <p className="text-sm text-[#171717]/70 mt-2 max-w-md mx-auto leading-relaxed">
              Your inquiry regarding{' '}
              <span className="font-semibold text-[#171717]">{formData.practiceArea}</span> has been securely
              transmitted to Dragi Zekavica&apos;s Toronto office.
            </p>
          </div>

          <div className="inline-block px-4 py-2 bg-[#F6F6F6] rounded-xl border border-[#E5E5E5] text-xs font-mono text-[#171717]/80">
            Inquiry Reference: <span className="font-bold text-[#B85A5A]">{referenceNum}</span>
          </div>

          <p className="text-xs text-[#171717]/60 max-w-sm mx-auto">
            We will contact you via your preferred method ({formData.preferredContact}). If your matter requires immediate attention, please call our office directly.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`tel:${LAW_FIRM_INFO.phoneClean}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#171717] text-white text-xs font-semibold hover:bg-[#333333] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#B85A5A]" />
              Call {LAW_FIRM_INFO.phone}
            </a>
            <button
              type="button"
              onClick={() => {
                setStatus('idle');
                setFormData({
                  fullName: '',
                  email: '',
                  phone: '',
                  practiceArea: defaultPracticeArea || 'Family Law',
                  preferredContact: 'Phone',
                  message: '',
                });
              }}
              className="px-5 py-2.5 rounded-full border border-[#E5E5E5] text-xs font-semibold text-[#171717] hover:bg-[#F6F6F6] transition-colors"
            >
              Submit Another Inquiry
            </button>
          </div>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="border-b border-[#E5E5E5] pb-5">
            <h3 className="text-2xl sm:text-3xl font-bold font-serif-title text-[#171717]">
              {title}
            </h3>
            <p className="text-sm text-[#171717]/70 mt-1.5 leading-relaxed">{subtitle}</p>
          </div>

          {status === 'error' && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-600" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-xs font-semibold text-[#171717] uppercase tracking-wider mb-2"
              >
                Full Name <span className="text-[#B85A5A]">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Eleanor Vance"
                className="w-full px-4 py-3 rounded-xl border border-[#E5E5E5] bg-[#FFFFFF] text-sm text-[#171717] placeholder-[#171717]/40 focus:outline-none focus:border-[#B85A5A] focus:ring-2 focus:ring-[#B85A5A]/20 transition-all duration-200"
              />
            </div>

            {/* Email Address */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold text-[#171717] uppercase tracking-wider mb-2"
              >
                Email Address <span className="text-[#B85A5A]">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. name@example.com"
                className="w-full px-4 py-3 rounded-xl border border-[#E5E5E5] bg-[#FFFFFF] text-sm text-[#171717] placeholder-[#171717]/40 focus:outline-none focus:border-[#B85A5A] focus:ring-2 focus:ring-[#B85A5A]/20 transition-all duration-200"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-semibold text-[#171717] uppercase tracking-wider mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (416) 000-0000"
                className="w-full px-4 py-3 rounded-xl border border-[#E5E5E5] bg-[#FFFFFF] text-sm text-[#171717] placeholder-[#171717]/40 focus:outline-none focus:border-[#B85A5A] focus:ring-2 focus:ring-[#B85A5A]/20 transition-all duration-200"
              />
            </div>

            {/* Practice Area Select */}
            <div>
              <label
                htmlFor="practiceArea"
                className="block text-xs font-semibold text-[#171717] uppercase tracking-wider mb-2"
              >
                Practice Area <span className="text-[#B85A5A]">*</span>
              </label>
              <select
                id="practiceArea"
                name="practiceArea"
                value={formData.practiceArea}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-[#E5E5E5] bg-[#FFFFFF] text-sm text-[#171717] focus:outline-none focus:border-[#B85A5A] focus:ring-2 focus:ring-[#B85A5A]/20 transition-all duration-200 cursor-pointer"
              >
                {PRACTICE_AREAS.map((area) => (
                  <option key={area.id} value={area.title}>
                    {area.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Preferred Contact Method */}
          <div>
            <label className="block text-xs font-semibold text-[#171717] uppercase tracking-wider mb-2">
              Preferred Contact Method
            </label>
            <div className="grid grid-cols-3 gap-3">
              {['Phone', 'Email', 'Either'].map((method) => (
                <label
                  key={method}
                  className={`flex items-center justify-center py-2.5 px-3 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
                    formData.preferredContact === method
                      ? 'border-[#B85A5A] bg-[#F8ECEC] text-[#B85A5A]'
                      : 'border-[#E5E5E5] bg-[#F6F6F6] text-[#171717]/70 hover:bg-[#EEEEEE]'
                  }`}
                >
                  <input
                    type="radio"
                    name="preferredContact"
                    value={method}
                    checked={formData.preferredContact === method}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <span>{method}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-xs font-semibold text-[#171717] uppercase tracking-wider mb-2"
            >
              Brief Description of Legal Matter <span className="text-[#B85A5A]">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Please summarize your situation, relevant timelines, or specific questions..."
              className="w-full px-4 py-3 rounded-xl border border-[#E5E5E5] bg-[#FFFFFF] text-sm text-[#171717] placeholder-[#171717]/40 focus:outline-none focus:border-[#B85A5A] focus:ring-2 focus:ring-[#B85A5A]/20 transition-all duration-200 resize-y"
            />
          </div>

          {/* Privacy & Disclaimer Notice */}
          <div className="flex items-start gap-2 text-[11px] text-[#171717]/60 leading-relaxed bg-[#F6F6F6] p-3.5 rounded-xl border border-[#E5E5E5]">
            <Lock className="w-3.5 h-3.5 text-[#B85A5A] shrink-0 mt-0.5" />
            <span>
              All submissions are strictly confidential. Submitting this form does not establish a lawyer-client relationship.
            </span>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              id="submit-consultation-button"
              disabled={status === 'submitting'}
              className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#B85A5A] text-white text-sm font-semibold tracking-wide hover:bg-[#a34b4b] disabled:opacity-70 transition-all duration-200 shadow-md hover:shadow-lg hover:translate-y-[-1px] cursor-pointer"
            >
              {status === 'submitting' ? (
                <span>Transmitting Inquiry...</span>
              ) : (
                <>
                  <span>Request a Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
