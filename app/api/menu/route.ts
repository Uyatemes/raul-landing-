import { NextResponse } from 'next/server';
import { menuTranslations } from '@/app/translations/menu';

export async function GET() {
  return NextResponse.json(menuTranslations);
}
