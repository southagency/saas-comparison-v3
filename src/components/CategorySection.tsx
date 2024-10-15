import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryItem {
  name: string;
  slug: string;
}

interface Category {
  title: string;
  items: CategoryItem[];
}

const CategorySection: React.FC<{ category: Category }> = ({ category }) => {
  return (
    <div className="mb-12 card p-4 sm:p-6">
      <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-white border-b-2 border-gray-200 dark:border-gray-700 pb-2">{category.title}</h3>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {category.items.map((item, index) => (
          <li key={index} className="w-full">
            <Link to={`/system/${item.slug}`} className="system-link w-full text-center dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:bg-gray-600">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySection;