import React from 'react';
import { Link } from 'react-router-dom';
import { Download, ChevronRight } from 'lucide-react';

const attendanceSystems = [
  {
    id: 'system01',
    name: 'システム01',
    logo: 'https://via.placeholder.com/150',
    description: 'システム01は、最新のクラウド技術を活用した革新的な勤怠管理システムです。従業員の勤務時間を正確に記録し、効率的な労務管理を実現します。',
  },
  {
    id: 'system02',
    name: 'システム02',
    logo: 'https://via.placeholder.com/150',
    description: 'システム02は、AI搭載の高度な勤怠管理ソリューションです。シフト最適化や労働時間予測など、先進的な機能を提供します。',
  },
  // 他のシステムも同様に追加
];

const AttendanceSystemList: React.FC = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <nav className="text-sm breadcrumbs mb-6">
          <ul className="flex items-center space-x-2">
            <li><Link to="/" className="text-primary hover:underline">ホーム</Link></li>
            <ChevronRight className="w-4 h-4 text-gray-500" />
            <li className="text-gray-500 dark:text-gray-400">勤怠管理システム</li>
          </ul>
        </nav>

        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">勤怠管理システム</h1>

        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-300 mb-4 md:mb-0 md:mr-4">
              複数サービスを検討される場合は、「一括資料ダウンロード」をご利用ください。
              資料ダウンロード後にサービス提供会社、弊社よりご案内を差し上げる場合があります。
            </p>
            <button className="btn btn-primary flex items-center whitespace-nowrap">
              <Download className="w-4 h-4 mr-2" />
              一括資料ダウンロード
            </button>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
          {attendanceSystems.length}件の勤怠管理システム
        </h2>

        <ul className="space-y-6">
          {attendanceSystems.map((system) => (
            <li key={system.id} className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
              <div className="flex flex-col md:flex-row items-start">
                <div className="md:w-1/3 mb-4 md:mb-0">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{system.name}</h3>
                  <img src={system.logo} alt={system.name} className="w-32 h-32 object-cover rounded-lg" />
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {system.description.length > 100
                      ? `${system.description.substring(0, 100)}...`
                      : system.description}
                  </p>
                  <div className="flex space-x-4">
                    <Link to={`/system/attendance-management/${system.id}`} className="btn btn-secondary">
                      詳細を見る
                    </Link>
                    <button className="btn btn-primary flex items-center">
                      <Download className="w-4 h-4 mr-2" />
                      資料ダウンロード
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AttendanceSystemList;