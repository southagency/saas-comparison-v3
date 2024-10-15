import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { User, MessageSquare, FileText, HelpCircle, BookOpen } from 'lucide-react';

const Dashboard: React.FC = () => {
  const location = useLocation();

  const menuItems = [
    { icon: <User />, title: 'マイページ', link: '/dashboard/mypage' },
    { icon: <MessageSquare />, title: '投稿した口コミ', link: '/dashboard/answer' },
    { icon: <FileText />, title: '請求した資料', link: '/dashboard/downloads' },
    { icon: <BookOpen />, title: 'よくある質問', link: '/dashboard/faq' },
    { icon: <HelpCircle />, title: 'お問い合わせ', link: '/dashboard/help' },
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-800 min-h-screen flex">
      {/* サイドバーメニュー */}
      <aside className="w-64 bg-white dark:bg-gray-700 shadow-md">
        <nav className="p-4">
          <h2 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">ダッシュボード</h2>
          <ul>
            {menuItems.map((item, index) => (
              <li key={index} className="mb-2">
                <Link
                  to={item.link}
                  className={`flex items-center p-2 rounded-lg transition-colors ${
                    location.pathname === item.link
                      ? 'bg-primary text-white'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* メインコンテンツ */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;