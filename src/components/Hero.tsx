import React, { useState } from 'react';
import { Search } from 'lucide-react';

const Hero: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className="relative bg-gradient-to-br from-orange-400 via-orange-300 to-yellow-200 text-white py-12 sm:py-20">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-gray-800">最適なSaaSを見つけよう</h2>
        <form onSubmit={handleSearch} className="max-w-2xl mx-auto relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="SaaSを検索"
            className="w-full pl-12 pr-4 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary shadow-lg"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
          <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary text-white px-4 py-2 rounded-full hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 shadow-md hover:shadow-lg transition-shadow duration-300">
            検索
          </button>
        </form>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-16 h-16 bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
              <span className="text-gray-800 font-bold">Logo {i}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;