import React, { useState, useRef, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import Header from './components/Header';
import Hero from './components/Hero';
import CategorySection from './components/CategorySection';
import Footer from './components/Footer';
import Search from './components/Search';
import AttendanceSystem from './components/AttendanceSystem';
import AttendanceSystemList from './components/AttendanceSystemList';
import ExpenseSystem from './components/ExpenseSystem';
import ExpenseManagementList from './components/ExpenseManagementList';
import WebInvoiceList from './components/WebInvoiceList';
import HelpfulArticles from './components/HelpfulArticles';
import ArticleList from './components/ArticleList';
import ArticleDetail from './components/ArticleDetail';
import Login from './components/Login';
import Entry from './components/Entry';

const categories = [
  {
    title: "経理・会計・財務",
    items: [
      { name: "経費精算システム", slug: "expense-management" },
      { name: "Web請求書システム", slug: "web-invoice" },
      { name: "勤怠管理システム", slug: "attendance-management" },
      // ... 他の項目
    ]
  },
  // ... 他のカテゴリー
];

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const loadingBarRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    loadingBarRef.current?.complete();
  }, [location]);

  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'dark' : ''}`}>
      <LoadingBar color="#FF6600" ref={loadingBarRef} />
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <main className="bg-gray-100 dark:bg-gray-800">
                <div className="container mx-auto px-4 py-12">
                  <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">ジャンルから探す</h2>
                  {categories.map((category, index) => (
                    <CategorySection key={index} category={category} />
                  ))}
                  <HelpfulArticles />
                </div>
              </main>
            </>
          } />
          <Route path="/search" element={<Search />} />
          <Route path="/system/attendance-management" element={<AttendanceSystemList />} />
          <Route path="/system/attendance-management/:slug" element={<AttendanceSystem />} />
          <Route path="/system/expense-management" element={<ExpenseManagementList />} />
          <Route path="/system/expense-management/:slug" element={<ExpenseSystem />} />
          <Route path="/system/web-invoice" element={<WebInvoiceList />} />
          <Route path="/articles" element={<ArticleList />} />
          <Route path="/articles/:id" element={<ArticleDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/entry" element={<Entry />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;