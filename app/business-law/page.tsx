import React from 'react';
import type { Metadata } from 'next';
import PracticeAreaDetail from '@/components/PracticeAreaDetail';
import { PRACTICE_AREAS } from '@/lib/law-firm-data';

export const metadata: Metadata = {
  title: 'Business Law Toronto | Dragi Zekavica',
  description:
    'Legal guidance for Toronto businesses, corporate formation, commercial contracts, shareholder agreements, and business transactions.',
};

export default function BusinessLawPage() {
  const area = PRACTICE_AREAS.find((a) => a.id === 'business-law')!;
  return (
    <PracticeAreaDetail
      area={area}
      customNote="Our commercial practice assists both emerging entrepreneurs and established enterprises with statutory corporate compliance, customized agreements, and proactive legal risk mitigation."
    />
  );
}
