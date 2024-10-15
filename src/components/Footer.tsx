import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-bold mb-4 dark:text-white">当サイトについて</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-secondary dark:text-gray-300 hover:text-primary dark:hover:text-white">会社概要</Link></li>
              <li><Link to="/mission" className="text-secondary dark:text-gray-300 hover:text-primary dark:hover:text-white">ミッション</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 dark:text-white">サービス</h4>
            <ul className="space-y-2">
              <li><Link to="/listing-guide" className="text-secondary dark:text-gray-300 hover:text-primary dark:hover:text-white">掲載のご案内</Link></li>
              <li><Link to="/terms" className="text-secondary dark:text-gray-300 hover:text-primary dark:hover:text-white">ご利用規約</Link></li>
              <li><Link to="/legal" className="text-secondary dark:text-gray-300 hover:text-primary dark:hover:text-white">特定商取引法に基づく表記</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 dark:text-white">サポート</h4>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-secondary dark:text-gray-300 hover:text-primary dark:hover:text-white">お問い合わせ</Link></li>
              <li><Link to="/faq" className="text-secondary dark:text-gray-300 hover:text-primary dark:hover:text-white">よくある質問</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-secondary dark:text-gray-400">
          © 2024 SaaSCompany, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;