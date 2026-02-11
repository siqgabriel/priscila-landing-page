import { NextResponse } from 'next/server';

export async function POST() {
  console.log('API HIT PROD');

  return NextResponse.json({
    ok: true,
    env: {
      SMTP_HOST: !!process.env.SMTP_HOST,
      SMTP_USER: !!process.env.SMTP_USER,
      SMTP_PASS: !!process.env.SMTP_PASS,
      SMTP_FROM: !!process.env.SMTP_FROM,
      RECAPTCHA_SECRET_KEY: !!process.env.RECAPTCHA_SECRET_KEY,
    }
  });
}
