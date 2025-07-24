'use client';

import { useState } from 'react';
import Link from 'next/link';
import { categories } from '@/app/data/categories';
import type { Category } from '@/app/data/categories';
import { FaChevronRight, FaHome } from 'react-icons/fa';

interface BreadcrumbItem {
  name: string;
  link: string;
  icon: React.ReactNode;
}

export default function CategoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<Category | null>(null);

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category);
    setSelectedSubcategory(null);
  };

  const handleSubcategoryClick = (subcategory: Category) => {
    setSelectedSubcategory(subcategory);
  };

  const handleBack = () => {
    if (selectedSubcategory) {
      setSelectedSubcategory(null);
    } else if (selectedCategory) {
      setSelectedCategory(null);
    }
  };

  const getBreadcrumbs = (): BreadcrumbItem[] => {
    const items = [
      { name: 'Categories', link: '/categories', icon: <FaHome className="w-4 h-4" /> },
    ];

    if (selectedCategory) {
      items.push({
        name: selectedCategory.name,
        link: `/categories/${selectedCategory.id}`,
        icon: <span>{selectedCategory.icon}</span>,
      });
    }

    if (selectedSubcategory) {
      items.push({
        name: selectedSubcategory.name,
        link: `/categories/${selectedCategory?.id}/${selectedSubcategory.id}`,
        icon: <span>{selectedSubcategory.icon}</span>,
      });
    }

    return items;
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
          className="text-gray-600 hover:text-gray-900"
        >
          Create
        </Link>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          {getBreadcrumbs().map((item, index) => (
            <div key={item.name} className="flex items-center">
              {index > 0 && <FaChevronRight className="mx-2 text-gray-400" />}
              <button
                onClick={() => {
                  if (index === 0) {
                    setSelectedCategory(null);
                    setSelectedSubcategory(null);
                  } else if (index === 1) {
                    setSelectedSubcategory(null);
                  }
                }}
                className="flex items-center hover:text-gray-900"
              >
                {item.icon}
                <span>{item.name}</span>
              </button>
            </div>
          ))}
        </nav>

        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          {!selectedCategory ? (
            <>
              <h1 className="text-2xl font-bold text-gray-900 mb-6">Browse Categories</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryClick(category)}
                    className="flex items-start p-6 bg-white border rounded-xl hover:shadow-lg transition-shadow text-left group"
                  >
                    <span className="text-4xl mr-4">{category.icon}</span>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                        {category.name}
                      </h3>
                      {category.description && (
                        <p className="text-sm text-gray-500 mt-1">{category.description}</p>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </>
          ) : !selectedSubcategory ? (
            <>
              <h1 className="text-2xl font-bold text-gray-900 mb-6">
                {selectedCategory.name}
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedCategory.subcategories?.map((subcategory) => (
                  <button
                    key={subcategory.id}
                    onClick={() => handleSubcategoryClick(subcategory)}
                    className="flex items-center p-6 bg-white border rounded-xl hover:shadow-lg transition-shadow text-left group"
                  >
                    <span className="text-3xl mr-4">{subcategory.icon}</span>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                        {subcategory.name}
                      </h3>
                      {subcategory.subcategories && (
                        <p className="text-sm text-gray-500 mt-1">
                          {subcategory.subcategories.length} items
                        </p>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <>
              <h1 className="text-2xl font-bold text-gray-900 mb-6">
                {selectedSubcategory.name}
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedSubcategory.subcategories?.map((item) => (
                  <Link
                    key={item.id}
                    href={`/create?category=${selectedCategory.id}&subcategory=${selectedSubcategory.id}&item=${item.id}`}
                    className="flex items-center p-6 bg-white border rounded-xl hover:shadow-lg transition-shadow group"
                  >
                    <span className="text-3xl mr-4">{item.icon}</span>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        Click to create
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
} 