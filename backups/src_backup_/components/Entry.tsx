import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, User, Mail, Building, Phone, Briefcase } from 'lucide-react';

const Entry: React.FC = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    name: '',
    email: '',
    phone: '',
    jobTitle: '',
    employeeCount: '',
    industry: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ここに登録処理を実装
    console.log('Registration attempt with:', formData);
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <nav className="text-sm breadcrumbs mb-6">
          <ul className="flex items-center space-x-2">
            <li><Link to="/" className="text-primary hover:underline">ホーム</Link></li>
            <ChevronRight className="w-4 h-4 text-gray-500" />
            <li className="text-gray-500 dark:text-gray-400">新規登録</li>
          </ul>
        </nav>
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-700 rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">新規登録</h1>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="companyName" className="block text-gray-700 dark:text-gray-300 mb-2">会社名</label>
                <div className="relative">
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-600 dark:text-white dark:border-gray-500"
                    required
                  />
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </div>
              <div>
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">お名前</label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-600 dark:text-white dark:border-gray-500"
                    required
                  />
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">メールアドレス</label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-600 dark:text-white dark:border-gray-500"
                    required
                  />
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 dark:text-gray-300 mb-2">電話番号</label>
                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-600 dark:text-white dark:border-gray-500"
                    required
                  />
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </div>
              <div>
                <label htmlFor="jobTitle" className="block text-gray-700 dark:text-gray-300 mb-2">役職</label>
                <div className="relative">
                  <input
                    type="text"
                    id="jobTitle"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    className="w-full px-3 py-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-600 dark:text-white dark:border-gray-500"
                    required
                  />
                  <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </div>
              <div>
                <label htmlFor="employeeCount" className="block text-gray-700 dark:text-gray-300 mb-2">従業員数</label>
                <select
                  id="employeeCount"
                  name="employeeCount"
                  value={formData.employeeCount}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-600 dark:text-white dark:border-gray-500"
                  required
                >
                  <option value="">選択してください</option>
                  <option value="1-10">1-10人</option>
                  <option value="11-50">11-50人</option>
                  <option value="51-200">51-200人</option>
                  <option value="201-500">201-500人</option>
                  <option value="501+">501人以上</option>
                </select>
              </div>
              <div>
                <label htmlFor="industry" className="block text-gray-700 dark:text-gray-300 mb-2">業種</label>
                <select
                  id="industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-600 dark:text-white dark:border-gray-500"
                  required
                >
                  <option value="">選択してください</option>
                  <option value="IT">IT・通信</option>
                  <option value="製造業">製造業</option>
                  <option value="金融・保険">金融・保険</option>
                  <option value="小売・卸売">小売・卸売</option>
                  <option value="サービス業">サービス業</option>
                  <option value="その他">その他</option>
                </select>
              </div>
            </div>
            <div className="mt-8">
              <button type="submit" className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50">
                登録する
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Entry;