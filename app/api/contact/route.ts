import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, email, phone, practiceArea, message, preferredContact } = body;

    // Validate required fields
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: 'Please provide your full name, email address, and brief message regarding your legal matter.' },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // Process inquiry
    const inquiryReference = `DZ-${Date.now().toString().slice(-6)}`;

    return NextResponse.json({
      success: true,
      referenceNumber: inquiryReference,
      message: 'Your inquiry has been received. Our Toronto legal office will review your matter and contact you confidentially.',
      receivedData: {
        fullName,
        practiceArea: practiceArea || 'General Legal Consultation',
        preferredContact: preferredContact || 'Email',
      },
    });
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred while processing your request. Please call our office directly at +1 416-599-5095.' },
      { status: 500 }
    );
  }
}
