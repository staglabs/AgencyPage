import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';
import { getAdminSession } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    if (!getAdminSession(request)) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const db = await getDatabase();
    const collection = db.collection('career_applications');

    const applications = await collection
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json(applications, { status: 200 });
  } catch (error) {
    console.error('Error fetching career applications:', error);
    return NextResponse.json(
      { error: 'Failed to fetch applications' },
      { status: 500 }
    );
  }
}

