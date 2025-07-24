import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { categories } from '@/app/data/categories';

// Check if API key is configured
if (!process.env.OPENAI_API_KEY) {
  throw new Error('OPENAI_API_KEY is not configured in environment variables');
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { prompt, categoryId, subcategoryId, itemId } = await req.json();

    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }

    // Get category metadata if provided
    let enhancedPrompt = prompt;
    if (categoryId && subcategoryId && itemId) {
      const category = categories.find(c => c.id === categoryId);
      const subcategory = category?.subcategories?.find(s => s.id === subcategoryId);
      const item = subcategory?.subcategories?.find(i => i.id === itemId);

      if (category && subcategory && item) {
        enhancedPrompt = `Create a beautiful coloring page of a ${item.name.toLowerCase()} in the style of a detailed line drawing. The image should be black and white, with clear lines suitable for coloring. Include intricate patterns and details that make it engaging to color. Additional context: ${prompt}`;
      }
    }

    console.log('Generating image with prompt:', enhancedPrompt);

    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: enhancedPrompt,
      n: 1,
      size: "1024x1024",
      quality: "standard",
      style: "natural",
    });

    if (!response.data?.[0]?.url) {
      console.error('OpenAI response missing image URL:', response);
      throw new Error('No image URL in OpenAI response');
    }

    const imageUrl = response.data[0].url;

    // Save metadata
    const metadata = {
      prompt: enhancedPrompt,
      originalPrompt: prompt,
      categoryId,
      subcategoryId,
      itemId,
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json({
      imageUrl,
      metadata,
    });
  } catch (error) {
    // Log the full error for debugging
    console.error('Error in /api/generate:', error);

    // Return a more specific error message if available
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
} 