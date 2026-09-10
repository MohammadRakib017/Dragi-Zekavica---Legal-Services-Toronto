import React from 'react';
import type { Metadata } from 'next';
import PracticeAreaDetail from '@/components/PracticeAreaDetail';
import { PRACTICE_AREAS } from '@/lib/law-firm-data';

export const metadata: Metadata = {
  title: 'Personal Injury Lawyer Toronto | Dragi Zekavica',
  description:
    'Legal assistance for injury-related matters in Toronto, Ontario. Thorough documentation, evidence preservation, and fair dispute negotiation.',
};

export default function PersonalInjuryPage() {
  const area = PRACTICE_AREAS.find((a) => a.id === 'personal-injury')!;
  return (
    <PracticeAreaDetail
      area={area}
      customNote="Important: Strict statutory limitation periods apply to personal injury and statutory accident benefits claims in Ontario. Prompt consultation is strongly advised."
    />
  );
}
