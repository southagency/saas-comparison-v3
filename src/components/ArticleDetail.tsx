import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: 'SaaSツール導入で業務効率を劇的に改善する方法',
    date: '2024-03-15',
    author: '山田太郎',
    content: `
      <h2>はじめに</h2>
      <p>SaaSツールの導入は、企業の業務効率を大幅に向上させる可能性を秘めています。本記事では、SaaS導入のベストプラクティスと成功事例を紹介します。</p>

      <h2>SaaS導入の利点</h2>
      <p>SaaSを導入することで、以下のような利点があります：</p>
      <ul>
        <li>コスト削減</li>
        <li>柔軟性の向上</li>
        <li>スケーラビリティ</li>
        <li>最新技術へのアクセス</li>
      </ul>

      <h3>コスト削減の詳細</h3>
      <p>SaaSを利用することで、初期投資や保守コストを大幅に削減できます。従量課金制のサービスも多く、必要な分だけ利用することが可能です。</p>

      <h3>柔軟性とスケーラビリティ</h3>
      <p>クラウドベースのSaaSは、ビジネスの成長に合わせて簡単にスケールアップやダウンが可能です。また、リモートワークにも対応しやすいため、働き方の柔軟性も向上します。</p>

      <h2>SaaS導入の成功事例</h2>
      <p>以下に、SaaS導入に成功した企業の事例を紹介します：</p>

      <h3>A社の事例</h3>
      <p>A社は、クラウドベースのプロジェクト管理ツールを導入することで、チーム間のコミュニケーションを改善し、プロジェクトの進捗管理を効率化しました。その結果、プロジェクトの完了までの時間が平均20%短縮されました。</p>

      <h3>B社の事例</h3>
      <p>B社は、CRMのSaaSを導入し、営業活動の可視化と顧客データの一元管理を実現しました。これにより、顧客対応の質が向上し、売上が前年比15%増加しました。</p>

      <h2>まとめ</h2>
      <p>SaaSツールの適切な選択と導入により、業務効率の劇的な改善が可能です。自社の課題を明確にし、目的に合ったSaaSを選択することが成功の鍵となります。</p>
    `,
  },
  // Add more articles here...
];

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<typeof articles[0] | null>(null);
  const [tableOfContents, setTableOfContents] = useState<{ id: string; title: string; level: number }[]>([]);
  const [isTocOpen, setIsTocOpen] = useState(true);

  useEffect(() => {
    const foundArticle = articles.find(a => a.id.toString() === id);
    if (foundArticle) {
      setArticle(foundArticle);
      generateTableOfContents(foundArticle.content);
    }
  }, [id]);

  const generateTableOfContents = (content: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');
    const headings = doc.querySelectorAll('h2, h3, h4');
    const toc: { id: string; title: string; level: number }[] = [];

    headings.forEach((heading, index) => {
      const id = `heading-${index}`;
      heading.id = id;
      toc.push({
        id,
        title: heading.textContent || '',
        level: parseInt(heading.tagName.charAt(1)) - 1,
      });
    });

    setTableOfContents(toc);
  };

  const createMarkup = (content: string) => {
    return { __html: content };
  };

  if (!article) {
    return <div>記事が見つかりません。</div>;
  }

  return (
    <div className="bg-gray-100 dark:bg-gray-800 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <nav className="text-sm breadcrumbs mb-6">
          <ul className="flex items-center space-x-2">
            <li><Link to="/" className="text-primary hover:underline">ホーム</Link></li>
            <ChevronRight className="w-4 h-4 text-gray-500" />
            <li><Link to="/articles" className="text-primary hover:underline">お役立ち記事</Link></li>
            <ChevronRight className="w-4 h-4 text-gray-500" />
            <li className="text-gray-500 dark:text-gray-400">{article.title}</li>
          </ul>
        </nav>
        <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">{article.title}</h1>
        <div className="flex items-center mb-6 text-gray-600 dark:text-gray-400">
          <Calendar className="w-5 h-5 mr-2" />
          <span className="mr-4">{article.date}</span>
          <User className="w-5 h-5 mr-2" />
          <span>{article.author}</span>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-3/4">
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 mb-8">
              <div className="bg-gray-100 dark:bg-gray-600 p-4 rounded-lg mb-6">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => setIsTocOpen(!isTocOpen)}
                >
                  <h2 className="text-xl font-bold">目次</h2>
                  {isTocOpen ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
                {isTocOpen && (
                  <ul className="mt-2">
                    {tableOfContents.map((item) => (
                      <li
                        key={item.id}
                        className={`mb-1 ${
                          item.level === 1 ? 'ml-0' : item.level === 2 ? 'ml-4' : 'ml-8'
                        }`}
                      >
                        <a href={`#${item.id}`} className="text-primary hover:underline">
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div
                className="prose prose-lg dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={createMarkup(article.content)}
              />
            </div>
          </div>
          <div className="md:w-1/4">
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 mb-8 sticky top-6">
              <img
                src="https://via.placeholder.com/300x250?text=Banner+Ad"
                alt="Banner Advertisement"
                className="w-full h-auto rounded-lg mb-4"
              />
              <img
                src="https://via.placeholder.com/300x250?text=Another+Banner"
                alt="Another Banner Advertisement"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;