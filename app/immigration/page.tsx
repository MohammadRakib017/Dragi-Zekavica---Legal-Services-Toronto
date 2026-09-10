import React from 'react';
import type { Metadata } from 'next';
import PracticeAreaDetail from '@/components/PracticeAreaDetail';
import { PRACTICE_AREAS } from '@/lib/law-firm-data';

export const metadata: Metadata = {
  title: 'Immigration Law Toronto | Dragi Zekavica',
  description:
    'Professional guidance for Canadian immigration legal matters, applications, family sponsorships, and procedural representation.',
};

export default function ImmigrationPage() {
  const area = PRACTICE_AREAS.find((a) => a.id === 'immigration')!;
  return (
    <PracticeAreaDetail
      area={area}
      customNote="Important Disclaimer: In accordance with Canadian legal and regulatory requirements, our firm does not guarantee visa approval, application processing times, or government decisions on any immigration matter."
    />
  );
}
