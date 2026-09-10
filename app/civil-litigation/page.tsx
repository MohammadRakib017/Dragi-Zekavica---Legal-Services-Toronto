import React from 'react';
import type { Metadata } from 'next';
import PracticeAreaDetail from '@/components/PracticeAreaDetail';
import { PRACTICE_AREAS } from '@/lib/law-firm-data';

export const metadata: Metadata = {
  title: 'Civil Litigation Toronto | Dragi Zekavica',
  description:
    'Strategic guidance for civil disputes and commercial litigation in Toronto courts. Realistic assessment and steadfast representation.',
};

export default function CivilLitigationPage() {
  const area = PRACTICE_AREAS.find((a) => a.id === 'civil-litigation')!;
  return (
    <PracticeAreaDetail
      area={area}
      customNote="Civil disputes in Ontario often involve mandatory mediation requirements in Toronto. Our strategy balances aggressive legal advocacy with cost-conscious resolution."
    />
  );
}
