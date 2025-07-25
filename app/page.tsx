import Link from 'next/link';
import { categories } from '@/app/data/categories';

export default function HomePage() {
  // Get featured categories (first 6)
  const featuredCategories = categories.slice(0, 6);

  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-center relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-float"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-pink-200 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-200 rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-purple-200 rounded-full animate-float"></div>
        </div>
        
        <div className="container-custom relative z-20 py-20 sm:py-28">
          {/* AI Art Icon */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-r from-pink-400 to-purple-600 rounded-2xl flex items-center justify-center text-4xl animate-bounce">
                🎨
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-lg animate-spin">
                ✨
              </div>
            </div>
          </div>
          
          <h1 className="heading-1 text-white mb-6 max-w-4xl mx-auto">
            Create Beautiful Coloring Pages with AI
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Transform your ideas into stunning coloring pages using artificial intelligence
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/create" className="button-primary bg-white text-indigo-600 hover:bg-gray-100">
              Start Creating
            </Link>
            <Link href="/categories" className="button-secondary bg-white/10 text-white border-white/20 hover:bg-white/20">
              Browse Categories
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-12">Featured Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCategories.map((category) => (
              <Link
                key={category.id}
                href={`/categories?category=${category.id}`}
                className="group"
              >
                <div className="card p-6 h-full">
                  <div className="flex items-start space-x-4">
                    <span className="text-4xl">{category.icon}</span>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                        {category.name}
                      </h3>
                      {category.description && (
                        <p className="text-gray-500 mt-1">{category.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/categories" className="button-secondary">
              View All Categories
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-16 bg-white">
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-12">Why Choose SolColoring?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <div className="w-12 h-12 mx-auto bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI-Powered Creation</h3>
              <p className="text-gray-500">Transform your ideas into beautiful coloring pages in seconds using advanced AI technology</p>
            </div>
            <div className="card p-8 text-center">
              <div className="w-12 h-12 mx-auto bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Diverse Categories</h3>
              <p className="text-gray-500">Explore a wide range of categories from animals to vehicles, nature to fantasy</p>
            </div>
            <div className="card p-8 text-center">
              <div className="w-12 h-12 mx-auto bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Easy Download</h3>
              <p className="text-gray-500">Download your creations instantly and start coloring right away</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
