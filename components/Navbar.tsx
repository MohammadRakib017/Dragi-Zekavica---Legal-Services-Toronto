'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  ArrowRight,
  Scale,
  ShieldAlert,
  Activity,
  Briefcase,
  Home,
  Scroll,
  Building2,
  Globe,
  HelpCircle,
} from 'lucide-react';
import { LAW_FIRM_INFO, PRACTICE_AREAS } from '@/lib/law-firm-data';

const practiceIcons: Record<string, React.ReactNode> = {
  'family-law': <Scale className="w-4 h-4 text-[#B85A5A]" />,
  'criminal-law': <ShieldAlert className="w-4 h-4 text-[#B85A5A]" />,
  'personal-injury': <Activity className="w-4 h-4 text-[#B85A5A]" />,
  'civil-litigation': <Scale className="w-4 h-4 text-[#B85A5A]" />,
  'real-estate': <Home className="w-4 h-4 text-[#B85A5A]" />,
  'estate-planning': <Scroll className="w-4 h-4 text-[#B85A5A]" />,
  'business-law': <Building2 className="w-4 h-4 text-[#B85A5A]" />,
  'immigration': <Globe className="w-4 h-4 text-[#B85A5A]" />,
  'legal-consultation': <HelpCircle className="w-4 h-4 text-[#B85A5A]" />,
};

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  }

  const handleMouseEnterDropdown = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setIsDropdownOpen(true);
  };

  const handleMouseLeaveDropdown = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 180);
  };

  const isPracticeActive = PRACTICE_AREAS.some((area) => pathname === area.slug);

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'h-20 bg-white/95 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.06)] border-b border-[#E5E5E5]'
            : 'h-24 bg-white/90 backdrop-blur-sm border-b border-[#E5E5E5]/60'
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left Brand Identity */}
          <Link
            href="/"
            id="navbar-brand-link"
            className="flex flex-col group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B85A5A] rounded-sm py-1"
          >
            <span className="text-xl sm:text-2xl font-bold tracking-[0.08em] text-[#171717] font-serif-title transition-colors duration-200 group-hover:text-[#B85A5A]">
              {LAW_FIRM_INFO.name.toUpperCase()}
            </span>
            <span className="text-[10px] sm:text-[11px] tracking-[0.25em] font-semibold text-[#B85A5A] transition-colors duration-200">
              {LAW_FIRM_INFO.tagline}
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            id="desktop-nav"
            className="hidden md:flex items-center space-x-1 lg:space-x-3"
            aria-label="Primary Navigation"
          >
            {/* Home */}
            <Link
              href="/"
              id="nav-link-home"
              className={`relative px-3.5 py-2 text-sm font-medium transition-colors duration-200 hover:text-[#B85A5A] ${
                pathname === '/' ? 'text-[#171717]' : 'text-[#171717]/80'
              }`}
            >
              Home
              {pathname === '/' && (
                <motion.span
                  layoutId="navbar-active-underline"
                  className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-[#B85A5A]"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>

            {/* About */}
            <Link
              href="/about"
              id="nav-link-about"
              className={`relative px-3.5 py-2 text-sm font-medium transition-colors duration-200 hover:text-[#B85A5A] ${
                pathname === '/about' ? 'text-[#171717]' : 'text-[#171717]/80'
              }`}
            >
              About
              {pathname === '/about' && (
                <motion.span
                  layoutId="navbar-active-underline"
                  className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-[#B85A5A]"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>

            {/* Practice Areas Mega Menu Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnterDropdown}
              onMouseLeave={handleMouseLeaveDropdown}
            >
              <button
                id="nav-practice-areas-button"
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
                className={`relative flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium transition-colors duration-200 hover:text-[#B85A5A] ${
                  isPracticeActive ? 'text-[#171717]' : 'text-[#171717]/80'
                }`}
              >
                <span>Practice Areas</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    isDropdownOpen ? 'rotate-180 text-[#B85A5A]' : ''
                  }`}
                />
                {isPracticeActive && (
                  <motion.span
                    layoutId="navbar-active-underline"
                    className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-[#B85A5A]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>

              {/* Mega Menu Container */}
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    id="practice-areas-mega-menu"
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="absolute top-full -left-20 w-[640px] bg-white rounded-2xl shadow-2xl border border-[#E5E5E5] p-5 z-50 overflow-hidden"
                  >
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E5E5E5]">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-[#B85A5A]">
                          Legal Services in Toronto, ON
                        </p>
                        <p className="text-sm text-[#171717]/70">
                          Comprehensive legal guidance across specialized practice areas
                        </p>
                      </div>
                      <Link
                        href="/legal-consultation"
                        className="text-xs font-medium text-[#B85A5A] hover:underline flex items-center gap-1"
                      >
                        Book consultation <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      {PRACTICE_AREAS.map((area) => (
                        <Link
                          key={area.id}
                          href={area.slug}
                          id={`nav-mega-item-${area.id}`}
                          className={`p-2.5 rounded-xl transition-all duration-150 flex flex-col group ${
                            pathname === area.slug
                              ? 'bg-[#F8ECEC] text-[#171717]'
                              : 'hover:bg-[#F6F6F6] text-[#171717]'
                          }`}
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <span className="p-1 rounded bg-white shadow-xs">
                              {practiceIcons[area.id] || <Scale className="w-3.5 h-3.5 text-[#B85A5A]" />}
                            </span>
                            <span className="text-[13px] font-semibold tracking-tight group-hover:text-[#B85A5A] transition-colors">
                              {area.title}
                            </span>
                          </div>
                          <span className="text-[11px] text-[#171717]/60 leading-snug line-clamp-2">
                            {area.shortDescription}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Contact */}
            <Link
              href="/contact"
              id="nav-link-contact"
              className={`relative px-3.5 py-2 text-sm font-medium transition-colors duration-200 hover:text-[#B85A5A] ${
                pathname === '/contact' ? 'text-[#171717]' : 'text-[#171717]/80'
              }`}
            >
              Contact
              {pathname === '/contact' && (
                <motion.span
                  layoutId="navbar-active-underline"
                  className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-[#B85A5A]"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          </nav>

          {/* Right Side: CTA Button + Phone link */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${LAW_FIRM_INFO.phoneClean}`}
              id="navbar-phone-link"
              className="flex items-center gap-2 text-xs font-semibold text-[#171717] hover:text-[#B85A5A] transition-colors px-2 py-1"
              aria-label={`Call Dragi Zekavica at ${LAW_FIRM_INFO.phone}`}
            >
              <Phone className="w-3.5 h-3.5 text-[#B85A5A]" />
              <span>{LAW_FIRM_INFO.phone}</span>
            </a>

            <Link
              href="/legal-consultation"
              id="navbar-cta-button"
              className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold tracking-wide text-white bg-[#B85A5A] hover:bg-[#a34b4b] rounded-full transition-all duration-200 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
            >
              Request a Consultation
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              href="/legal-consultation"
              className="text-[11px] font-semibold bg-[#B85A5A] text-white px-3 py-1.5 rounded-full"
            >
              Consultation
            </Link>

            <button
              type="button"
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={isMobileMenuOpen}
              className="p-2 rounded-lg text-[#171717] hover:bg-[#F6F6F6] focus:outline-none focus:ring-2 focus:ring-[#B85A5A]"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-white pt-24 pb-8 px-6 overflow-y-auto md:hidden flex flex-col justify-between"
          >
            <div className="space-y-6">
              {/* Brand Header */}
              <div className="pb-4 border-b border-[#E5E5E5]">
                <p className="text-xl font-bold font-serif-title text-[#171717]">
                  {LAW_FIRM_INFO.name}
                </p>
                <p className="text-xs tracking-wider text-[#B85A5A] font-semibold uppercase">
                  {LAW_FIRM_INFO.tagline} • Toronto, Ontario
                </p>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
                <Link
                  href="/"
                  className={`text-base font-semibold py-1.5 transition-colors ${
                    pathname === '/' ? 'text-[#B85A5A]' : 'text-[#171717]'
                  }`}
                >
                  Home
                </Link>

                <Link
                  href="/about"
                  className={`text-base font-semibold py-1.5 transition-colors ${
                    pathname === '/about' ? 'text-[#B85A5A]' : 'text-[#171717]'
                  }`}
                >
                  About Dragi Zekavica
                </Link>

                <div className="pt-2">
                  <p className="text-xs uppercase tracking-wider text-[#B85A5A] font-bold mb-2">
                    Practice Areas
                  </p>
                  <div className="grid grid-cols-1 gap-1.5 pl-2 border-l-2 border-[#B85A5A]/30">
                    {PRACTICE_AREAS.map((area) => (
                      <Link
                        key={area.id}
                        href={area.slug}
                        className={`text-sm py-1 transition-colors flex items-center justify-between ${
                          pathname === area.slug
                            ? 'text-[#B85A5A] font-semibold'
                            : 'text-[#171717]/80 hover:text-[#B85A5A]'
                        }`}
                      >
                        <span>{area.title}</span>
                        <ArrowRight className="w-3 h-3 opacity-60" />
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  href="/contact"
                  className={`text-base font-semibold py-1.5 transition-colors ${
                    pathname === '/contact' ? 'text-[#B85A5A]' : 'text-[#171717]'
                  }`}
                >
                  Contact & Location
                </Link>
              </nav>
            </div>

            {/* Mobile Footer CTAs */}
            <div className="pt-6 mt-6 border-t border-[#E5E5E5] space-y-3">
              <a
                href={`tel:${LAW_FIRM_INFO.phoneClean}`}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-[#E5E5E5] text-sm font-semibold text-[#171717] bg-[#F6F6F6]"
              >
                <Phone className="w-4 h-4 text-[#B85A5A]" />
                Call {LAW_FIRM_INFO.phone}
              </a>

              <Link
                href="/legal-consultation"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#B85A5A] text-white text-sm font-semibold shadow-md"
              >
                Request a Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
