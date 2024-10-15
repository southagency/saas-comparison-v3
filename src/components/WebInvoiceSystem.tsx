import React, { useState, useCallback } from 'react';
import { Download, ChevronRight, Star } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import DownloadPopup from './DownloadPopup';

const systemDetails = {
  name: 'WEB請求書システム01',
  logo: 'https://via.placeholder.com/150',
  description: 'WEB請求書システム01は、クラウドベースの請求書作成・管理ソリューションです。複数の取引先に対する請求書を一括で作成し、自動送信する機能を備えています。',
  overview: 'WEB請求書システム01は、企業の規模や業種を問わず、あらゆる組織の請求書管理ニーズに対応する包括的なソリューションです。クラウドベースのプラットフォームを採用しているため、場所や時間を選ばずアクセスが可能で、リアルタイムでのデータ更新と分析が可能です。主な特徴として、複数の請求書テンプレート、自動定期請求、複数通貨対応、オンライン支払い連携、請求書の自動リマインダー送信、売掛金管理ダッシュボードなどが挙げられます。また、他の会計システムや顧客管理システムとのシームレスな連携も可能で、経理部門の業務効率を大幅に向上させます。カスタマイズ性も高く、企業独自の請求書フォーマットや承認フローにも柔軟に対応できます。セキュリティ面でも、最新の暗号化技術と多要素認証を採用し、機密性の高い請求データを厳重に保護しています。',
  pricing: {
    initialCost: '80,000',
    monthlyCost: '40,000',
    freeTrial: '14',
  },
  reviews: [
    {
      name: '田中一郎',
      avatar: 'https://i.pravatar.cc/100?img=3',
      rating: 5,
      comment: '導入後、請求書作成の時間が大幅に削減されました。自動リマインダー機能のおかげで、入金遅延も減少しています。',
    },
    {
      name: '鈴木美香',
      avatar: 'https://i.pravatar.cc/100?img=4',
      rating: 4,
      comment: 'カスタマイズ性が高く、当社独自の請求書フォーマットにも対応できました。ただ、初期設定に少し時間がかかりました。',
    },
  ],
  company: {
    name: '株式会社クラウドビリング',
    established: '2018年9月1日',
    representative: '高橋健太',
    capital: '3億円',
    address: '東京都港区赤坂3-3-3',
  },
};

const WebInvoiceSystem: React.FC = () => {
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
            <li><Link to="/system/web-invoice" className="text-primary hover:underline">WEB請求書発行システム</Link></li>
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

        {/* ... 他のセクション ... */}

      </div>
      <DownloadPopup isOpen={isPopupOpen} onClose={handleClosePopup} />
    </div>
  );
};

export default WebInvoiceSystem;