import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight, Mail, Lock } from 'lucide-react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ここにログイン処理を実装
    console.log('Login attempt with:', { email, password });
    // ログイン成功後、ダッシュボードにリダイレクト
    navigate('/dashboard');
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <nav className="text-sm breadcrumbs mb-6">
          <ul className="flex items-center space-x-2">
            <li><Link to="/" className="text-primary hover:underline">ホーム</Link></li>
            <ChevronRight className="w-4 h-4 text-gray-500" />
            <li className="text-gray-500 dark:text-gray-400">ログイン</li>
          </ul>
        </nav>
        <div className="max-w-md mx-auto bg-white dark:bg-gray-700 rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">ログイン</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">メールアドレス</label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-600 dark:text-white dark:border-gray-500"
                  required
                />
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 dark:text-gray-300 mb-2">パスワード</label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-600 dark:text-white dark:border-gray-500"
                  required
                />
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>
            <button type="submit" className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50">
              ログイン
            </button>
          </form>
          <div className="mt-4 text-center">
            <Link to="/forgot-password" className="text-primary hover:underline">パスワードをお忘れですか？</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;