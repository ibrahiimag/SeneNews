import React from 'react';
import { TrendingUp } from 'lucide-react';

export default function TrendingSection() {
  const trends = [
    "#DakarRally2024",
    "#AfconSenegal",
    "#TerangaLions",
    "#DakarFashionWeek",
    "#SenegalStartups"
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center space-x-2 mb-4">
        <TrendingUp className="w-5 h-5 text-emerald-600" />
        <h2 className="text-lg font-semibold">Trending in Senegal</h2>
      </div>
      <div className="space-y-3">
        {trends.map((trend, index) => (
          <div 
            key={index}
            className="p-2 hover:bg-emerald-50 rounded-md transition cursor-pointer"
          >
            <p className="font-medium text-emerald-800">{trend}</p>
            <p className="text-sm text-gray-500">{(10 - index) * 1000} posts</p>
          </div>
        ))}
      </div>
    </div>
  );
}