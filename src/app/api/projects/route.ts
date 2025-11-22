import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, projectDetails } = body;

    if (!name || !email || !projectDetails) {
      return NextResponse.json(
        { error: 'Name, email, and project details are required' },
        { status: 400 }
      );
    }

    const db = await getDatabase();
    const collection = db.collection('project_requests');

    const projectRequest = {
      name,
      email,
      projectDetails,
      createdAt: new Date(),
    };

    await collection.insertOne(projectRequest);

    return NextResponse.json(
      { message: 'Project request submitted successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error submitting project request:', error);
    return NextResponse.json(
      { error: 'Failed to submit project request' },
      { status: 500 }
    );
  }
}

