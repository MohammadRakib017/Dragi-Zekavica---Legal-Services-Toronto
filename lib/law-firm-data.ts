export interface PracticeArea {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  heroVisualType: 'family' | 'criminal' | 'injury' | 'civil' | 'real-estate' | 'estate' | 'business' | 'immigration' | 'consultation';
  ctaText: string;
  sections: {
    title: string;
    description: string;
  }[];
  keyConsiderations: string[];
}

export const LAW_FIRM_INFO = {
  name: 'Dragi Zekavica',
  tagline: 'LEGAL SERVICES',
  phone: '+1 416-599-5095',
  phoneClean: '+14165995095',
  address: '120 Carlton St. Ste 410',
  cityRegion: 'Toronto, Ontario, Canada',
  fullAddress: '120 Carlton St. Ste 410, Toronto, Ontario, Canada',
  linkedIn: 'https://www.linkedin.com/in/dragizekavica/',
  googleMapsUrl: 'https://www.google.com/maps/place/Dragi+Zekavica/data=!4m7!3m6!1s0x89d4cb4b8b187619:0x9ab647c6268a34a1!8m2!3d43.6627548!4d-79.3764887!16s%2Fg%2F11b6jgp2bh',
  heroImage: '/images/dragi-zekavica.png',
  disclaimer: 'The information provided on this website is for general informational purposes and does not constitute legal advice. Contacting the firm does not establish a lawyer-client relationship.',
};

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'family-law',
    title: 'Family Law',
    slug: '/family-law',
    shortDescription: 'Legal guidance for sensitive family-related matters.',
    fullDescription: 'Navigating family disputes requires discretion, clarity, and steady legal assessment. We assist clients in understanding their rights and responsibilities under Ontario family law.',
    heroVisualType: 'family',
    ctaText: 'Discuss Your Family Law Matter',
    sections: [
      {
        title: 'Separation',
        description: 'Guidance through the separation process, identifying legal obligations, property considerations, and initial procedural steps.'
      },
      {
        title: 'Divorce',
        description: 'Legal representation and assistance with both contested and uncontested divorce proceedings in Ontario.'
      },
      {
        title: 'Parenting Matters',
        description: 'Structuring legal arrangements concerning decision-making responsibility, parenting time schedules, and parental obligations.'
      },
      {
        title: 'Child-Related Matters',
        description: 'Addressing child welfare, protection, and representation in formal and informal family arrangements.'
      },
      {
        title: 'Support Matters',
        description: 'Calculating and establishing child support and spousal support according to relevant statutory guidelines and disclosures.'
      },
      {
        title: 'Property-Related Family Disputes',
        description: 'Assisting with equalization of net family property, matrimonial home considerations, and division of assets.'
      }
    ],
    keyConsiderations: [
      'Comprehensive financial disclosure requirements',
      'Preservation of children\'s best interests',
      'Negotiation and alternative dispute resolution options',
      'Formal separation agreements and court filings'
    ]
  },
  {
    id: 'criminal-law',
    title: 'Criminal Law',
    slug: '/criminal-law',
    shortDescription: 'Professional legal representation and guidance in criminal matters.',
    fullDescription: 'When facing criminal charges or an investigation, prompt legal counsel is essential to understand your rights, evaluate allegations, and structure a disciplined defense.',
    heroVisualType: 'criminal',
    ctaText: 'Discuss Your Criminal Matter',
    sections: [
      {
        title: 'Understanding Your Situation',
        description: 'A confidential, thorough review of the allegations, police disclosures, and circumstances surrounding the investigation.'
      },
      {
        title: 'Legal Rights',
        description: 'Ensuring your constitutional protections under the Charter of Rights and Freedoms are vigorously guarded at every stage.'
      },
      {
        title: 'Legal Assessment',
        description: 'Evaluating the Crown\'s evidence, potential procedural violations, and legal precedents relevant to your defense.'
      },
      {
        title: 'Representation',
        description: 'Steadfast advocacy during bail hearings, pretrial conferences, negotiations with the Crown attorney, and trials.'
      },
      {
        title: 'Court Process',
        description: 'Clear explanations of appearances, disclosure review, preliminary hearings, and Ontario court procedures.'
      },
      {
        title: 'Next Steps',
        description: 'Identifying practical defense strategies and procedural actions to protect your freedom and record.'
      }
    ],
    keyConsiderations: [
      'Never speaking to investigators without legal consultation',
      'Timely bail hearings and release condition management',
      'Rigorous scrutiny of Crown evidence and search procedures',
      'Protection of personal reputation and employment records'
    ]
  },
  {
    id: 'personal-injury',
    title: 'Personal Injury',
    slug: '/personal-injury',
    shortDescription: 'Legal assistance for injury-related legal matters.',
    fullDescription: 'Providing objective legal counsel for individuals dealing with serious physical injury, insurance complications, and compensation claims in Ontario.',
    heroVisualType: 'injury',
    ctaText: 'Discuss Your Injury Matter',
    sections: [
      {
        title: 'Understanding Your Situation',
        description: 'Gathering the foundational facts of the accident, medical treatments, and immediate impact on your daily life.'
      },
      {
        title: 'Legal Options',
        description: 'Reviewing statutory accident benefits, third-party tort claims, and disability insurance entitlements.'
      },
      {
        title: 'Documentation',
        description: 'Securing medical records, hospital charts, specialist assessments, and proof of income loss.'
      },
      {
        title: 'Evidence',
        description: 'Preserving accident scene evidence, witness statements, collision reports, and liability assessments.'
      },
      {
        title: 'Negotiation',
        description: 'Engaging directly with insurance adjusters and opposing counsel to pursue fair and reasoned settlements.'
      },
      {
        title: 'Representation',
        description: 'Advancing formal court actions when insurers refuse reasonable resolution or dispute legal liability.'
      }
    ],
    keyConsiderations: [
      'Strict statutory notice periods under Ontario law',
      'Detailed medical record preservation',
      'Evaluation of long-term rehabilitation requirements',
      'Careful calculation of future economic loss'
    ]
  },
  {
    id: 'civil-litigation',
    title: 'Civil Litigation',
    slug: '/civil-litigation',
    shortDescription: 'Strategic guidance for civil disputes and litigation.',
    fullDescription: 'Resolving disputes with precision. Whether enforcing contractual rights or defending against contentious claims, we provide realistic risk assessments and rigorous courtroom advocacy.',
    heroVisualType: 'civil',
    ctaText: 'Discuss Your Dispute',
    sections: [
      {
        title: 'Dispute Assessment',
        description: 'In-depth analysis of claims, contractual terms, evidentiary strength, and jurisdictional parameters.'
      },
      {
        title: 'Legal Strategy',
        description: 'Formulating tactical roadmaps aligning litigation risk with practical financial and commercial objectives.'
      },
      {
        title: 'Negotiation',
        description: 'Engaging in pre-trial dispute resolution, structured settlement conferences, and mediation.'
      },
      {
        title: 'Litigation',
        description: 'Drafting pleadings, managing discovery examinations, and executing interlocutory motions.'
      },
      {
        title: 'Court Proceedings',
        description: 'Professional representation in the Ontario Superior Court of Justice and Small Claims Court.'
      },
      {
        title: 'Resolution',
        description: 'Enforcing judgments, structuring binding settlement releases, and concluding legal proceedings.'
      }
    ],
    keyConsiderations: [
      'Cost-benefit assessment of litigation versus settlement',
      'Timely preservation of documentary and digital evidence',
      'Mandatory mediation rules in Ontario jurisdictions',
      'Enforcement mechanisms for court judgments'
    ]
  },
  {
    id: 'real-estate',
    title: 'Real Estate',
    slug: '/real-estate',
    shortDescription: 'Legal support for property and real estate matters.',
    fullDescription: 'Facilitating secure property transactions in Toronto and across Ontario with thorough title review, contract diligence, and meticulous closing procedures.',
    heroVisualType: 'real-estate',
    ctaText: 'Discuss Your Real Estate Matter',
    sections: [
      {
        title: 'Residential Transactions',
        description: 'Legal representation for purchases, sales, refinances, and transfers of residential properties.'
      },
      {
        title: 'Commercial Transactions',
        description: 'Advising on commercial acquisitions, leasing agreements, zoning compliance, and security interests.'
      },
      {
        title: 'Purchase & Sale',
        description: 'Drafting and vetting purchase agreements, conditions precedent, amendments, and waivers.'
      },
      {
        title: 'Agreements',
        description: 'Review of co-ownership agreements, private mortgages, easements, and restrictive covenants.'
      },
      {
        title: 'Property Matters',
        description: 'Resolving boundary discrepancies, title defects, municipal liens, and closing disputes.'
      },
      {
        title: 'Legal Review',
        description: 'Conducting title searches, reviewing condominium status certificates, and reviewing mortgage documents.'
      }
    ],
    keyConsiderations: [
      'Status certificate review deadlines for condominiums',
      'Land Transfer Tax calculations and first-time buyer rebates',
      'Title insurance verification and survey review',
      'Punctual requisition delivery and closing coordination'
    ]
  },
  {
    id: 'estate-planning',
    title: 'Estate Planning',
    slug: '/estate-planning',
    shortDescription: 'Planning and legal guidance for protecting your future and legacy.',
    fullDescription: 'Structuring clear, legally binding wills and powers of attorney tailored to your intentions and family structure, ensuring peace of mind.',
    heroVisualType: 'estate',
    ctaText: 'Plan for the Future',
    sections: [
      {
        title: 'Wills',
        description: 'Drafting comprehensive primary and secondary wills to direct asset distribution and name trusted executors.'
      },
      {
        title: 'Powers of Attorney',
        description: 'Preparing continuing powers of attorney for property and powers of attorney for personal care.'
      },
      {
        title: 'Estate Planning',
        description: 'Designing balanced estate frameworks that reflect client wishes and minimize administrative delay.'
      },
      {
        title: 'Legacy Considerations',
        description: 'Structuring testamentary provisions for family dependents, charities, and succession needs.'
      },
      {
        title: 'Updating Existing Plans',
        description: 'Periodic reviews of existing wills following marriage, separation, births, or significant asset changes.'
      }
    ],
    keyConsiderations: [
      'Statutory formal execution requirements in Ontario',
      'Careful selection and replacement of executors and attorneys',
      'Contingency provisions for beneficiaries predeceasing the testator',
      'Coordination of designated beneficiary assets with estate terms'
    ]
  },
  {
    id: 'business-law',
    title: 'Business Law',
    slug: '/business-law',
    shortDescription: 'Legal guidance for businesses, agreements, and commercial matters.',
    fullDescription: 'Providing clear legal foundations for Toronto entrepreneurs, established corporations, and partnerships throughout every business lifecycle phase.',
    heroVisualType: 'business',
    ctaText: 'Discuss Your Business Needs',
    sections: [
      {
        title: 'Business Formation',
        description: 'Incorporation under Ontario and federal laws, minute book creation, by-laws, and share structures.'
      },
      {
        title: 'Contracts',
        description: 'Drafting, negotiating, and reviewing core operational, supply, vendor, and service contracts.'
      },
      {
        title: 'Commercial Agreements',
        description: 'Structuring shareholder agreements, partnership agreements, NDAs, and joint venture pacts.'
      },
      {
        title: 'Business Transactions',
        description: 'Guiding asset purchases, share transactions, reorganizations, and commercial financings.'
      },
      {
        title: 'Legal Risk',
        description: 'Identifying operational compliance vulnerabilities and structuring preventive legal terms.'
      },
      {
        title: 'Business Disputes',
        description: 'Managing shareholder disagreements, breach of contract allegations, and commercial debt collection.'
      }
    ],
    keyConsiderations: [
      'Carefully drafted dispute mechanisms in shareholder agreements',
      'Limitation of liability and indemnification protections',
      'Corporate compliance and annual director resolutions',
      'Protection of proprietary assets and trade secrets'
    ]
  },
  {
    id: 'immigration',
    title: 'Immigration',
    slug: '/immigration',
    shortDescription: 'Professional guidance for immigration-related legal matters.',
    fullDescription: 'Guiding individuals, families, and businesses through the legal requirements of Canadian immigration, applications, and procedural reviews.',
    heroVisualType: 'immigration',
    ctaText: 'Discuss Your Immigration Matter',
    sections: [
      {
        title: 'Immigration Consultation',
        description: 'A detailed evaluation of eligibility criteria, immigration categories, and viable application pathways.'
      },
      {
        title: 'Application Guidance',
        description: 'Meticulous preparation and verification of documentation, forms, and supporting evidentiary records.'
      },
      {
        title: 'Family-Related Immigration Matters',
        description: 'Assisting Canadian citizens and permanent residents with spousal, parental, and dependent sponsorships.'
      },
      {
        title: 'Temporary Immigration Matters',
        description: 'Legal assistance with study permits, visitor visas, work permits, and status extensions.'
      },
      {
        title: 'Permanent Immigration Matters',
        description: 'Guidance regarding Express Entry, Provincial Nominee Programs (OINP), and humanitarian streams.'
      },
      {
        title: 'Legal Representation',
        description: 'Professional responses to procedural fairness letters, inadmissibility concerns, and official inquiries.'
      }
    ],
    keyConsiderations: [
      'Accurate and transparent disclosure on all government filings',
      'Adherence to strict statutory deadlines and submission protocols',
      'Thorough evidentiary substantiation of relationships and qualifications',
      'Honest appraisal of requirements without unsubstantiated guarantees'
    ]
  },
  {
    id: 'legal-consultation',
    title: 'Legal Consultation',
    slug: '/legal-consultation',
    shortDescription: 'Discuss your legal situation and understand potential next steps.',
    fullDescription: 'An initial consultation provides a confidential, focused environment to review your circumstances, assess legal options, and chart an informed path forward.',
    heroVisualType: 'consultation',
    ctaText: 'Request a Consultation',
    sections: [
      {
        title: 'Preliminary Case Review',
        description: 'Discussing the factual background of your matter to identify key legal issues and jurisdictions.'
      },
      {
        title: 'Assessment of Options',
        description: 'Objective exploration of available legal remedies, potential risks, timelines, and practical next steps.'
      },
      {
        title: 'Confidentiality Assured',
        description: 'All discussions are held in strict confidence in accordance with professional legal standards.'
      },
      {
        title: 'Clear Action Plan',
        description: 'Leave the consultation with clear, actionable insights on what steps are required next.'
      }
    ],
    keyConsiderations: [
      'Preparation of relevant documents and timeline of events',
      'Identification of urgent deadlines or pending court dates',
      'Clear definition of desired outcomes and priorities',
      'Transparent discussion of legal processes'
    ]
  }
];
