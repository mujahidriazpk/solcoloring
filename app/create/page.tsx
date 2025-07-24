'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { categories } from '@/app/data/categories';
import type { Category } from '@/app/data/categories';
import Image from 'next/image';
import Link from 'next/link';
import { FaMagic, FaUpload, FaImage, FaTimes } from 'react-icons/fa';

export default function CreatePage() {
  const searchParams = useSearchParams();
  const categoryId = searchParams.get('category');
  const subcategoryId = searchParams.get('subcategory');
  const itemId = searchParams.get('item');

  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'text' | 'image'>('text');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);

  useEffect(() => {
    if (categoryId && subcategoryId && itemId) {
      const category = categories.find(c => c.id === categoryId);
      const subcategory = category?.subcategories?.find(s => s.id === subcategoryId);
      const item = subcategory?.subcategories?.find(i => i.id === itemId);

      if (category && subcategory && item) {
        setPrompt(`Create a beautiful coloring page of a ${item.name.toLowerCase()} in the style of a detailed line drawing. The image should be black and white, with clear lines suitable for coloring. Include intricate patterns and details that make it engaging to color.`);
      }
    }
  }, [categoryId, subcategoryId, itemId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate image');
      }

      const data = await response.json();
      setResult(data.imageUrl);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedImage(file);
      const url = URL.createObjectURL(file);
      setUploadedImageUrl(url);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    if (file) {
      setUploadedImage(file);
      const url = URL.createObjectURL(file);
      setUploadedImageUrl(url);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-4 border-b bg-white">
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
          SolColoring
        </Link>
        <Link href="/profile" className="text-gray-600 hover:text-gray-900">
          My Creations
        </Link>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Create Your Coloring Page</h1>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 flex items-center">
                <FaTimes className="mr-2" />
                {error}
              </p>
            </div>
          )}

          {/* Tab Navigation */}
          <div className="flex space-x-1 p-1 bg-gray-100 rounded-lg mb-6">
            <button
              onClick={() => setActiveTab('text')}
              className={`flex-1 flex items-center justify-center space-x-2 py-2.5 text-sm font-medium rounded-md transition-all ${
                activeTab === 'text'
                  ? 'bg-white text-indigo-600 shadow'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <FaMagic className="text-lg" />
              <span>AI Generation</span>
            </button>
            <button
              onClick={() => setActiveTab('image')}
              className={`flex-1 flex items-center justify-center space-x-2 py-2.5 text-sm font-medium rounded-md transition-all ${
                activeTab === 'image'
                  ? 'bg-white text-indigo-600 shadow'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <FaUpload className="text-lg" />
              <span>Upload Image</span>
            </button>
          </div>

          {/* Text Prompt Form */}
          {activeTab === 'text' && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-2">
                  Describe your coloring page
                </label>
                <div className="relative">
                  <textarea
                    id="prompt"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    rows={4}
                    className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 resize-none"
                    placeholder="Describe what you want to create..."
                    required
                  />
                  <div className="absolute bottom-2 right-2 text-sm text-gray-500">
                    {prompt.length}/1000
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading || prompt.length === 0}
                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white ${
                  isLoading || prompt.length === 0
                    ? 'bg-indigo-400 cursor-not-allowed'
                    : 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                }`}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Generating...
                  </div>
                ) : (
                  'Generate Coloring Page'
                )}
              </button>
            </form>
          )}

          {/* Image Upload Form */}
          {activeTab === 'image' && (
            <div className="space-y-6">
              <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                className={`relative border-2 border-dashed rounded-lg transition-all ${
                  uploadedImageUrl ? 'border-indigo-600' : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                {!uploadedImageUrl ? (
                  <div className="p-8 text-center">
                    <FaImage className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <div className="space-y-1">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                          onChange={handleFileUpload}
                          accept="image/*"
                        />
                      </label>
                      <p className="text-gray-500">or drag and drop</p>
                      <p className="text-xs text-gray-400">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                ) : (
                  <div className="relative aspect-video">
                    <Image
                      src={uploadedImageUrl}
                      alt="Uploaded image"
                      fill
                      className="object-contain rounded-lg"
                    />
                    <button
                      onClick={() => {
                        setUploadedImage(null);
                        setUploadedImageUrl(null);
                      }}
                      className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                    >
                      <FaTimes className="text-gray-600" />
                    </button>
                  </div>
                )}
              </div>

              <button
                onClick={handleSubmit}
                disabled={isLoading || !uploadedImage}
                className="w-full flex items-center justify-center px-4 py-3 text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Converting...
                  </>
                ) : (
                  <>
                    <FaMagic className="mr-2" />
                    Convert to Coloring Page
                  </>
                )}
              </button>
            </div>
          )}

          {/* Generated Image Display */}
          {(result || uploadedImageUrl) && !isLoading && (
            <div className="mt-8 space-y-6">
              <div className="border-t pt-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Coloring Page</h2>
                <div className="relative aspect-square w-full border rounded-lg overflow-hidden bg-white shadow-lg">
                  <Image
                    src={result || uploadedImageUrl || ''}
                    alt="Generated coloring page"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="mt-4 flex justify-end space-x-4">
                  <button
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = result || uploadedImageUrl || '';
                      link.download = 'coloring-page.png';
                      link.click();
                    }}
                    className="flex items-center px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 