import React from 'react';
import { Search, Moon, Sun, User, UserPlus, Menu } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface HeaderProps {
  isDarkMode: boolean;
  setIsDarkMode: (isDark: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, setIsDarkMode }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleSearchClick = () => {
    navigate('/search');
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-lg py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            <Link to="/" className="hover:text-primary transition-colors">SaaSCompany</Link>
          </h1>
          <div className="hidden md:flex items-center space-x-4">
            <button onClick={handleSearchClick} className="btn btn-secondary dark:bg-gray-700 dark:text-white">
              <Search className="w-4 h-4" />
            </button>
            <Link to="/entry" className="btn btn-primary flex items-center">
              <UserPlus className="w-4 h-4 mr-1" />
              <span className="hidden sm:inline">新規登録</span>
            </Link>
            <Link to="/login" className="btn btn-secondary dark:bg-gray-700 dark:text-white flex items-center">
              <User className="w-4 h-4 mr-1" />
              <span className="hidden sm:inline">ログイン</span>
            </Link>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="btn btn-secondary dark:bg-gray-700 dark:text-white"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="w-6 h-6 text-gray-800 dark:text-white" />
          </button>
        </div>
        {isMenuOpen && (
          <div className="mt-4 md:hidden">
            <nav className="flex flex-col space-y-2">
              <Link to="/entry" className="btn btn-primary flex items-center justify-center">
                <UserPlus className="w-4 h-4 mr-1" />
                新規登録
              </Link>
              <Link to="/login" className="btn btn-secondary dark:bg-gray-700 dark:text-white flex items-center justify-center">
                <User className="w-4 h-4 mr-1" />
                ログイン
              </Link>
              <button onClick={handleSearchClick} className="btn btn-secondary dark:bg-gray-700 dark:text-white w-full">
                <Search className="w-4 h-4 mr-1" />
                検索
              </button>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="btn btn-secondary dark:bg-gray-700 dark:text-white w-full"
              >
                {isDarkMode ? <Sun className="w-4 h-4 mr-1" /> : <Moon className="w-4 h-4 mr-1" />}
                {isDarkMode ? 'ライトモード' : 'ダークモード'}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;