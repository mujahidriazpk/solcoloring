import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const creationsDir = path.join(process.cwd(), 'public', 'creations');
    const metadataPath = path.join(creationsDir, 'metadata.json');

    // Read existing metadata
    let metadata = [];
    try {
      const existingData = await fs.readFile(metadataPath, 'utf-8');
      metadata = JSON.parse(existingData);
    } catch {
      return NextResponse.json(
        { error: 'Creation not found' },
        { status: 404 }
      );
    }

    // Find the creation to delete
    const creationIndex = metadata.findIndex((item: any) => item.id === id);
    if (creationIndex === -1) {
      return NextResponse.json(
        { error: 'Creation not found' },
        { status: 404 }
      );
    }

    const creation = metadata[creationIndex];

    // Delete the image file
    try {
      await fs.unlink(path.join(creationsDir, creation.filename));
    } catch (error) {
      console.error('Error deleting image file:', error);
      // Continue even if file deletion fails
    }

    // Update metadata
    metadata.splice(creationIndex, 1);
    await fs.writeFile(metadataPath, JSON.stringify(metadata, null, 2));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting creation:', error);
    return NextResponse.json(
      { error: 'Failed to delete creation' },
      { status: 500 }
    );
  }
} 