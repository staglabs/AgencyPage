import { NextRequest } from 'next/server';
import bcrypt from 'bcryptjs';

const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH || '';

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export function getAdminSession(request: NextRequest): boolean {
  const session = request.cookies.get('admin_session');
  return session?.value === 'authenticated';
}


export async function initializeAdminPassword(): Promise<void> {
  if (!ADMIN_PASSWORD_HASH) {
    const hash = await hashPassword('admin123');
    console.log('Admin password hash (add to .env.local):', hash);
  }
}

