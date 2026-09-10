import React from 'react';
import type { Metadata } from 'next';
import PracticeAreaDetail from '@/components/PracticeAreaDetail';
import { PRACTICE_AREAS } from '@/lib/law-firm-data';

export const metadata: Metadata = {
  title: 'Family Law Toronto | Dragi Zekavica',
  description:
    'Legal guidance for sensitive family law matters in Toronto, Ontario including separation, divorce, parenting arrangements, child support, and property division.',
};

export default function FamilyLawPage() {
  const area = PRACTICE_AREAS.find((a) => a.id === 'family-law')!;
  return (
    <PracticeAreaDetail
      area={area}
      customNote="Family law matters require sensitivity and strict adherence to statutory financial disclosure guidelines under the Ontario Family Law Act and federal Divorce Act."
    />
  );
}
