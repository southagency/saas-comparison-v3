import React from 'react';
import { Download, ChevronRight, Star } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const systemDetails = {
  name: 'システム01',
  logo: 'https://via.placeholder.com/150',
  description: 'システム01は、最新のクラウド技術を活用した革新的な勤怠管理システムです。従業員の勤務時間を正確に記録し、効率的な労務管理を実現します。直感的なインターフェースで、管理者も従業員も簡単に操作できます。',
  overview: 'システム01は、企業の規模や業種を問わず、あらゆる組織の勤怠管理ニーズに対応する包括的なソリューションです。クラウドベースのプラットフォームを採用しているため、場所や時間を選ばずアクセスが可能で、リアルタイムでのデータ更新と分析が可能です。主な特徴として、GPS連動の打刻機能、複雑なシフト管理、有給休暇の自動計算、労働時間の可視化ダッシュボード、法令遵守のためのアラート機能などが挙げられます。また、他の人事システムや給与計算ソフトとのシームレスな連携も可能で、人事部門の業務効率を大幅に向上させます。カスタマイズ性も高く、企業独自の勤怠ルールや承認フローにも柔軟に対応できます。セキュリティ面でも、最新の暗号化技術と多要素認証を採用し、従業員の個人情報を厳重に保護しています。',
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
      comment: '導入してから業務効率が格段に上がりました。特に残業時間の管理が容易になり、従業員の働き方改革にも貢献しています。',
    },
    {
      name: '佐藤花子',
      avatar: 'https://i.pravatar.cc/100?img=5',
      rating: 4,
      comment: '使いやすいインターフェースで、従業員からの評判も良いです。カスタマーサポートの対応も迅速で助かっています。',
    },
  ],
  company: {
    name: '株式会社システム01',
    established: '2010年4月1日',
    representative: '鈴木一郎',
    capital: '1億円',
    address: '東京都千代田区丸の内1-1-1',
  },
};

const AttendanceSystem: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 py-4">
        <nav className="text-sm breadcrumbs">
          <ul className="flex items-center space-x-2">
            <li><Link to="/" className="text-primary hover:underline">ホーム</Link></li>
            <ChevronRight className="w-4 h-4 text-gray-500" />
            <li><Link to="/system/attendance-management" className="text-primary hover:underline">勤怠管理システム</Link></li>
            <ChevronRight className="w-4 h-4 text-gray-500" />
            <li className="text-gray-500 dark:text-gray-400">{systemDetails.name}</li>
          </ul>
        </nav>
      </div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">{systemDetails.name}</h1>
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row items-start">
            <img src={systemDetails.logo} alt={systemDetails.name} className="w-32 h-32 object-cover rounded-lg mb-4 md:mb-0 md:mr-6" />
            <div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{systemDetails.description}</p>
              <button className="btn btn-primary flex items-center">
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
    </div>
  );
};

export default AttendanceSystem;