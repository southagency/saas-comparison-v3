import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: 'SaaSツール導入で業務効率を劇的に改善する方法',
    image: '/images/article-1.jpg',
    date: '2024-03-15',
    excerpt: 'SaaSツールを効果的に活用することで、企業の業務効率を大幅に向上させることができます。本記事では、SaaS導入のベストプラクティスと、成功事例を紹介します。',
  },
  {
    id: 2,
    title: 'クラウドベースのプロジェクト管理ツール比較',
    image: '/images/article-2.jpg',
    date: '2024-03-10',
    excerpt: '多くの企業がプロジェクト管理にSaaSツールを活用しています。本記事では、人気の高いクラウドベースのプロジェクト管理ツールを比較し、各ツールの特徴と選び方のポイントを解説します。',
  },
  {
    id: 3,
    title: 'SaaS活用によるコスト削減戦略',
    image: '/images/article-3.jpg',
    date: '2024-03-05',
    excerpt: 'SaaSの適切な選択と活用により、企業は大幅なコスト削減を実現できます。本記事では、SaaS導入によるコスト削減の具体的な方法と、注意点について詳しく解説します。',
  },
  // Add more articles here...
];

const ArticleList: React.FC = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">SaaS活用のお役立ち記事一覧</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div key={article.id} className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
              <Link to={`/articles/${article.id}`} className="block hover:opacity-90 transition-opacity">
                <div className="relative h-48 bg-gray-200 dark:bg-gray-600">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-500">
                    <BookOpen size={48} />
                  </div>
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{article.title}</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">{article.date}</p>
                  <p className="text-gray-600 dark:text-gray-400">{article.excerpt.substring(0, 100)}...</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleList;