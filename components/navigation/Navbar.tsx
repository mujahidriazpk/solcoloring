import Link from 'next/link';

export default function Navbar() {
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

          <div className="flex items-center">
            <button className="button-primary">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 