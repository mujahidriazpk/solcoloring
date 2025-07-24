import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

// Function to ensure the creations directory exists
async function ensureCreationsDir() {
  const creationsDir = path.join(process.cwd(), 'public', 'creations');
  try {
    await fs.access(creationsDir);
  } catch {
    await fs.mkdir(creationsDir, { recursive: true });
  }
  return creationsDir;
}

export async function POST(request: Request) {
  try {
    const { imageUrl, prompt, createdAt } = await request.json();

    // Ensure required fields are present
    if (!imageUrl || !prompt) {
      return NextResponse.json(
        { error: 'Image URL and prompt are required' },
        { status: 400 }
      );
    }

    // Create creations directory if it doesn't exist
    const creationsDir = await ensureCreationsDir();

    // Download the image
    const response = await fetch(imageUrl);
    const imageBuffer = Buffer.from(await response.arrayBuffer());

    // Generate a unique filename
    const filename = `coloring-${Date.now()}.png`;
    const filePath = path.join(creationsDir, filename);

    // Save the image
    await fs.writeFile(filePath, imageBuffer);

    // Save the metadata
    const metadataPath = path.join(creationsDir, 'metadata.json');
    let metadata = [];
    try {
      const existingData = await fs.readFile(metadataPath, 'utf-8');
      metadata = JSON.parse(existingData);
    } catch {
      // If file doesn't exist or is invalid, start with empty array
    }

    metadata.push({
      id: Date.now().toString(),
      filename,
      prompt,
      createdAt,
      publicUrl: `/creations/${filename}`,
    });

    await fs.writeFile(metadataPath, JSON.stringify(metadata, null, 2));

    return NextResponse.json({
      success: true,
      imageUrl: `/creations/${filename}`,
    });
  } catch (error) {
    console.error('Error saving creation:', error);
    return NextResponse.json(
      { error: 'Failed to save creation' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const creationsDir = await ensureCreationsDir();
    const metadataPath = path.join(creationsDir, 'metadata.json');

    try {
      const data = await fs.readFile(metadataPath, 'utf-8');
      const metadata = JSON.parse(data);
      return NextResponse.json(metadata);
    } catch {
      return NextResponse.json([]);
    }
  } catch (error) {
    console.error('Error fetching creations:', error);
    return NextResponse.json(
      { error: 'Failed to fetch creations' },
      { status: 500 }
    );
  }
} 