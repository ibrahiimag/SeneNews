import React from 'react';
import { MapPin, TrendingUp, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-emerald-700 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <MapPin className="w-6 h-6" />
            <span className="text-xl font-bold">SenegalSocial</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#trending" className="hover:text-emerald-200 transition">Trending</a>
            <a href="#twitter" className="hover:text-emerald-200 transition">Twitter</a>
            <a href="#facebook" className="hover:text-emerald-200 transition">Facebook</a>
            <a href="#instagram" className="hover:text-emerald-200 transition">Instagram</a>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-emerald-800">
            <a href="#trending" className="block px-3 py-2 hover:bg-emerald-600 rounded-md">Trending</a>
            <a href="#twitter" className="block px-3 py-2 hover:bg-emerald-600 rounded-md">Twitter</a>
            <a href="#facebook" className="block px-3 py-2 hover:bg-emerald-600 rounded-md">Facebook</a>
            <a href="#instagram" className="block px-3 py-2 hover:bg-emerald-600 rounded-md">Instagram</a>
          </div>
        </div>
      )}
    </header>
  );
}