import React from 'react';
import type { Metadata } from 'next';
import PracticeAreaDetail from '@/components/PracticeAreaDetail';
import { PRACTICE_AREAS } from '@/lib/law-firm-data';

export const metadata: Metadata = {
  title: 'Criminal Law Toronto | Dragi Zekavica',
  description:
    'Professional legal representation and guidance in Ontario criminal matters. Confidential defense assessment and court advocacy.',
};

export default function CriminalLawPage() {
  const area = PRACTICE_AREAS.find((a) => a.id === 'criminal-law')!;
  return (
    <PracticeAreaDetail
      area={area}
      customNote="Legal Notice: In accordance with professional standards, past performance does not guarantee future results. No specific legal outcome can be guaranteed in any criminal proceeding."
    />
  );
}
