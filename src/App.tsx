import React from 'react';
import Header from './components/Header';
import NewsCard from './components/NewsCard';
import TrendingSection from './components/TrendingSection';

const mockNews = [
  {
    platform: 'Twitter',
    author: 'Dakar Times',
    content: 'Breaking: Senegal's tech startup ecosystem sees record growth in Q1 2024! 🚀 Multiple startups secure major funding as international investors show increased interest in the region. #SenegalTech #StartupSN',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000',
    likes: 1200,
    comments: 234,
    shares: 567,
    time: '2h ago'
  },
  {
    platform: 'Facebook',
    author: 'Culture Senegal',
    content: 'Traditional meets modern at this year's Dakar Fashion Week! Stunning designs showcasing our rich cultural heritage with contemporary twists. 🇸🇳✨ #DakarFashion',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&q=80&w=1000',
    likes: 2300,
    comments: 178,
    shares: 445,
    time: '4h ago'
  },
  {
    platform: 'Instagram',
    author: 'Visit Senegal',
    content: 'The pink waters of Lake Retba continue to captivate visitors from around the world. A natural wonder that must be seen to be believed! 🌸 #SenegalTourism',
    image: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&q=80&w=1000',
    likes: 3400,
    comments: 289,
    shares: 678,
    time: '6h ago'
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            {mockNews.map((news, index) => (
              <NewsCard key={index} {...news} />
            ))}
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            <TrendingSection />
            
            {/* Welcome Card */}
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 rounded-lg shadow-md p-6 text-white">
              <h2 className="text-xl font-bold mb-3">Welcome to SenegalSocial</h2>
              <p className="mb-4">Stay updated with the latest news and trends from Senegal's vibrant social media landscape.</p>
              <p className="text-sm opacity-90">🇸🇳 Powered by the Teranga spirit</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;