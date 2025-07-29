'use client';

import Link from 'next/link';
import { useUser } from '@/app/contexts/UserContext';
import { FaUser } from 'react-icons/fa';

export default function Navbar() {
  let profile = null;
  let creations: any[] = [];

  try {
    const userContext = useUser();
    profile = userContext.profile;
    creations = userContext.creations;
  } catch (error) {
    // Context not available yet, use defaults
    console.log('UserContext not available yet');
  }

  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors">
                SolColoring
              </span>
            </Link>
          </div>
          
          <div className="hidden sm:flex items-center justify-center flex-1 px-8 space-x-8">
            <Link 
              href="/categories" 
              className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Categories
            </Link>
            <Link 
              href="/create" 
              className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Create
            </Link>
            <Link 
              href="/profile" 
              className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Profile
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {/* User Profile Info */}
            <Link href="/profile" className="hidden sm:flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full flex items-center justify-center text-white text-sm">
                <FaUser />
              </div>
              <div className="text-sm">
                <div className="font-medium">{profile?.name || 'Anonymous'}</div>
                <div className="text-xs text-gray-500">{creations.length} creations</div>
              </div>
            </Link>
            
            <button className="button-primary">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 