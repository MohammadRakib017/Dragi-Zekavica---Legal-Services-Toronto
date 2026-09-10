import React from 'react';
import type { Metadata } from 'next';
import PracticeAreaDetail from '@/components/PracticeAreaDetail';
import { PRACTICE_AREAS } from '@/lib/law-firm-data';

export const metadata: Metadata = {
  title: 'Real Estate Law Toronto | Dragi Zekavica',
  description:
    'Legal support for residential and commercial property transactions in Toronto and across Ontario. Title examination, purchase agreements, and closings.',
};

export default function RealEstatePage() {
  const area = PRACTICE_AREAS.find((a) => a.id === 'real-estate')!;
  return (
    <PracticeAreaDetail
      area={area}
      customNote="Property transactions in Toronto require strict adherence to requisition dates, status certificate reviews, and municipal land transfer tax compliance."
    />
  );
}
