import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data.json');

export async function PATCH(request, { params }) {
  try {
    const { id } = params;
    const body = await request.json();
    
    if (!fs.existsSync(dataFilePath)) {
      return NextResponse.json({ error: 'No data' }, { status: 404 });
    }
    
    const fileData = fs.readFileSync(dataFilePath, 'utf-8');
    let reservations = JSON.parse(fileData);
    
    const index = reservations.findIndex(r => r.id === id);
    if (index === -1) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }
    
    reservations[index] = { ...reservations[index], ...body };
    fs.writeFileSync(dataFilePath, JSON.stringify(reservations, null, 2));
    
    return NextResponse.json(reservations[index]);
  } catch (error) {
    console.error('Error updating reservation:', error);
    return NextResponse.json({ error: 'Failed to update' }, { status: 500 });
  }
}
