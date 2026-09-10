import React from 'react';
import type { Metadata } from 'next';
import PracticeAreaDetail from '@/components/PracticeAreaDetail';
import { PRACTICE_AREAS } from '@/lib/law-firm-data';

export const metadata: Metadata = {
  title: 'Estate Planning & Wills Toronto | Dragi Zekavica',
  description:
    'Legal guidance for wills, powers of attorney, and estate planning in Ontario. Protect your legacy and family intentions with legally binding structures.',
};

export default function EstatePlanningPage() {
  const area = PRACTICE_AREAS.find((a) => a.id === 'estate-planning')!;
  return (
    <PracticeAreaDetail
      area={area}
      customNote="Estate planning documents prepared by our office focus on legal enforceability under Ontario law. Specific financial, accounting, or tax advice should be coordinated with your certified tax professionals."
    />
  );
}
