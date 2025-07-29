'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaPlus, FaDownload, FaTrash, FaClock, FaUser, FaEdit } from 'react-icons/fa';
import { useUser } from '@/app/contexts/UserContext';

export default function ProfilePage() {
  const { profile, creations, deleteCreation, updateProfile, isLoading, error } = useUser();
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [editName, setEditName] = useState(profile?.name || '');

  const handleDeleteCreation = (id: string) => {
    if (!confirm('Are you sure you want to delete this creation?')) {
      return;
    }
    deleteCreation(id);
  };

  const handleSaveProfile = () => {
    if (editName.trim()) {
      updateProfile({ name: editName.trim() });
      setIsEditingProfile(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom py-8">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom py-8">
        {/* Profile Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-2xl text-white">
                <FaUser />
              </div>
              <div>
                {isEditingProfile ? (
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      className="text-2xl font-bold border border-gray-300 rounded px-2 py-1"
                      placeholder="Enter your name"
                    />
                    <button
                      onClick={handleSaveProfile}
                      className="text-green-600 hover:text-green-700"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => {
                        setEditName(profile?.name || '');
                        setIsEditingProfile(false);
                      }}
                      className="text-gray-600 hover:text-gray-700"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <h1 className="text-2xl font-bold text-gray-900">{profile?.name || 'Anonymous User'}</h1>
                    <button
                      onClick={() => {
                        setEditName(profile?.name || '');
                        setIsEditingProfile(true);
                      }}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <FaEdit />
                    </button>
                  </div>
                )}
                <p className="text-gray-500">
                  Member since {profile ? formatDate(profile.createdAt) : 'N/A'}
                </p>
              </div>
            </div>
            <Link
              href="/create"
              className="flex items-center px-4 py-2 text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-colors"
            >
              <FaPlus className="mr-2" />
              Create New
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-indigo-600">{creations.length}</div>
              <div className="text-sm text-gray-500">Total Creations</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600">{creations.length}</div>
              <div className="text-sm text-gray-500">Downloads</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-purple-600">
                {creations.filter(c => new Date(c.createdAt) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)).length}
              </div>
              <div className="text-sm text-gray-500">This Week</div>
            </div>
          </div>
        </div>

        {/* Creations Gallery */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">My Creations</h2>
            <div className="text-sm text-gray-500">
              {creations.length} {creations.length === 1 ? 'creation' : 'creations'}
            </div>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600">{error}</p>
            </div>
          )}

          {creations.length === 0 ? (
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
                      src={creation.imageUrl}
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
                          link.href = creation.imageUrl;
                          link.download = `coloring-page-${creation.id}.png`;
                          link.click();
                        }}
                        className="flex items-center px-3 py-1.5 text-sm text-indigo-600 hover:text-indigo-700"
                      >
                        <FaDownload className="mr-1" />
                        Download
                      </button>
                      <button
                        onClick={() => handleDeleteCreation(creation.id)}
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