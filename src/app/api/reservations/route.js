import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data.json');

// Helper to get reservations
function getReservations() {
  try {
    if (!fs.existsSync(dataFilePath)) {
      fs.writeFileSync(dataFilePath, JSON.stringify([]));
    }
    const fileData = fs.readFileSync(dataFilePath, 'utf-8');
    return JSON.parse(fileData);
  } catch (error) {
    console.error('Error reading data.json:', error);
    return [];
  }
}

export async function GET() {
  const data = getReservations();
  return NextResponse.json(data);
}

export async function POST(request) {
  try {
    const body = await request.json();
    const newReservation = {
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      status: 'En attente',
      ...body
    };

    const currentReservations = getReservations();
    currentReservations.push(newReservation);
    
    // Reverse sort so newest are first
    currentReservations.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    fs.writeFileSync(dataFilePath, JSON.stringify(currentReservations, null, 2));

    return NextResponse.json({ success: true, reservation: newReservation }, { status: 201 });
  } catch (error) {
    console.error('Error saving reservation:', error);
    return NextResponse.json({ success: false, error: 'Failed to save data' }, { status: 500 });
  }
}
