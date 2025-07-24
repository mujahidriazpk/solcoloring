'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaPlus, FaDownload, FaTrash, FaClock } from 'react-icons/fa';

interface Creation {
  id: string;
  filename: string;
  prompt: string;
  createdAt: string;
  publicUrl: string;
}

export default function ProfilePage() {
  const [creations, setCreations] = useState<Creation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCreations();
  }, []);

  const fetchCreations = async () => {
    try {
      const response = await fetch('/api/creations');
      if (!response.ok) {
        throw new Error('Failed to fetch creations');
      }
      const data = await response.json();
      setCreations(data);
    } catch (error) {
      setError('Failed to load your creations');
      console.error('Error fetching creations:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this creation?')) {
      return;
    }

    try {
      const response = await fetch(`/api/creations/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete creation');
      }

      setCreations(creations.filter(creation => creation.id !== id));
    } catch (error) {
      console.error('Error deleting creation:', error);
      alert('Failed to delete creation');
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-4 border-b bg-white">
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
          SolColoring
        </Link>
        <Link
          href="/create"
          className="flex items-center px-4 py-2 text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-colors"
        >
          <FaPlus className="mr-2" />
          Create New
        </Link>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900">My Creations</h1>
            <div className="text-sm text-gray-500">
              {creations.length} {creations.length === 1 ? 'creation' : 'creations'}
            </div>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600">{error}</p>
            </div>
          )}

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
            </div>
          ) : creations.length === 0 ? (
            <div className="text-center py-12">
              <div className="mb-4">
                <FaPlus className="mx-auto h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No creations yet</h3>
              <p className="text-gray-500 mb-6">Start creating beautiful coloring pages</p>
              <Link
                href="/create"
                className="inline-flex items-center px-4 py-2 text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-colors"
              >
                <FaPlus className="mr-2" />
                Create Your First Page
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {creations.map((creation) => (
                <div key={creation.id} className="bg-white border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative aspect-square">
                    <Image
                      src={creation.publicUrl}
                      alt={creation.prompt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-900 font-medium line-clamp-2 mb-2">
                      {creation.prompt}
                    </p>
                    <div className="flex items-center text-xs text-gray-500 mb-4">
                      <FaClock className="mr-1" />
                      {formatDate(creation.createdAt)}
                    </div>
                    <div className="flex justify-between">
                      <button
                        onClick={() => {
                          const link = document.createElement('a');
                          link.href = creation.publicUrl;
                          link.download = creation.filename;
                          link.click();
                        }}
                        className="flex items-center px-3 py-1.5 text-sm text-indigo-600 hover:text-indigo-700"
                      >
                        <FaDownload className="mr-1" />
                        Download
                      </button>
                      <button
                        onClick={() => handleDelete(creation.id)}
                        className="flex items-center px-3 py-1.5 text-sm text-red-600 hover:text-red-700"
                      >
                        <FaTrash className="mr-1" />
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 