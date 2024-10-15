import React, { useState, useCallback } from 'react';
import { Download, ChevronRight, Star } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import DownloadPopup from './DownloadPopup';

const systemDetails = {
  name: '経費精算システム01',
  logo: 'https://via.placeholder.com/150',
  description: '経費精算システム01は、最新のクラウド技術を活用した革新的な経費管理システムです。従業員の経費申請から承認、精算までのプロセスを効率化し、企業の経費管理を大幅に改善します。',
  overview: '経費精算システム01は、企業の規模や業種を問わず、あらゆる組織の経費管理ニーズに対応する包括的なソリューションです。クラウドベースのプラットフォームを採用しているため、場所や時間を選ばずアクセスが可能で、リアルタイムでのデータ更新と分析が可能です。主な特徴として、OCRを使用したレシート読み取り機能、複雑な経費ポリシーの自動チェック、経費の自動カテゴリ分類、多通貨対応、出張費管理、クレジットカード連携などが挙げられます。また、他の会計システムや人事システムとのシームレスな連携も可能で、経理部門の業務効率を大幅に向上させます。カスタマイズ性も高く、企業独自の承認フローや経費ルールにも柔軟に対応できます。セキュリティ面でも、最新の暗号化技術と多要素認証を採用し、機密性の高い経費データを厳重に保護しています。',
  pricing: {
    initialCost: '100,000',
    monthlyCost: '50,000',
    freeTrial: '30',
  },
  reviews: [
    {
      name: '山田太郎',
      avatar: 'https://i.pravatar.cc/100?img=1',
      rating: 5,
      comment: '導入してから経費精算の処理時間が半分以下になりました。特に海外出張の精算が楽になり、従業員からの評判も上々です。',
    },
    {
      name: '佐藤花子',
      avatar: 'https://i.pravatar.cc/100?img=5',
      rating: 4,
      comment: 'ユーザーインターフェースが直感的で、従業員の教育コストが大幅に削減できました。カスタマーサポートの対応も迅速で助かっています。',
    },
  ],
  company: {
    name: '株式会社経費ソリューションズ',
    established: '2015年6月1日',
    representative: '鈴木一郎',
    capital: '5億円',
    address: '東京都千代田区丸の内2-2-2',
  },
};

const ExpenseSystem: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleDownloadClick = useCallback(() => {
    console.log('Download button clicked');
    setIsPopupOpen(true);
  }, []);

  const handleClosePopup = useCallback(() => {
    console.log('Closing popup');
    setIsPopupOpen(false);
  }, []);

  return (
    <div className="bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 py-8">
        <nav className="text-sm breadcrumbs mb-6">
          <ul className="flex items-center space-x-2">
            <li><Link to="/" className="text-primary hover:underline">ホーム</Link></li>
            <ChevronRight className="w-4 h-4 text-gray-500" />
            <li><Link to="/system/expense-management" className="text-primary hover:underline">経費精算システム</Link></li>
            <ChevronRight className="w-4 h-4 text-gray-500" />
            <li className="text-gray-500 dark:text-gray-400">{systemDetails.name}</li>
          </ul>
        </nav>
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">{systemDetails.name}</h1>
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row items-start">
            <img src={systemDetails.logo} alt={systemDetails.name} className="w-32 h-32 object-cover rounded-lg mb-4 md:mb-0 md:mr-6" />
            <div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{systemDetails.description}</p>
              <button className="btn btn-primary flex items-center" onClick={handleDownloadClick}>
                <Download className="w-4 h-4 mr-2" />
                資料をダウンロード
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">サービス概要</h2>
          <p className="text-gray-600 dark:text-gray-300">{systemDetails.overview}</p>
        </div>

        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">料金・プラン</h3>
          <table className="w-full">
            <tbody>
              <tr>
                <th className="text-left py-2 text-gray-600 dark:text-gray-300">初期費用</th>
                <td className="py-2 text-gray-900 dark:text-white">{systemDetails.pricing.initialCost}円</td>
              </tr>
              <tr>
                <th className="text-left py-2 text-gray-600 dark:text-gray-300">月額料金</th>
                <td className="py-2 text-gray-900 dark:text-white">{systemDetails.pricing.monthlyCost}円</td>
              </tr>
              <tr>
                <th className="text-left py-2 text-gray-600 dark:text-gray-300">無料トライアル</th>
                <td className="py-2 text-gray-900 dark:text-white">{systemDetails.pricing.freeTrial}日間</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{systemDetails.name}の口コミ・評判</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {systemDetails.reviews.map((review, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full mr-3" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">{review.name}</p>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{systemDetails.name}の会社概要</h2>
          <table className="w-full">
            <tbody>
              {Object.entries(systemDetails.company).map(([key, value]) => (
                <tr key={key}>
                  <th className="text-left py-2 text-gray-600 dark:text-gray-300">{key}</th>
                  <td className="py-2 text-gray-900 dark:text-white">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <DownloadPopup isOpen={isPopupOpen} onClose={handleClosePopup} />
    </div>
  );
};

export default ExpenseSystem;