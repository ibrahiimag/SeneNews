import React from 'react';
import { Heart, MessageCircle, Share2 } from 'lucide-react';

interface NewsCardProps {
  platform: string;
  author: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
  time: string;
}

export default function NewsCard({
  platform,
  author,
  content,
  image,
  likes,
  comments,
  shares,
  time
}: NewsCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <div className="p-4">
        <div className="flex items-center space-x-2 mb-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-700 flex items-center justify-center text-white font-bold">
            {author[0]}
          </div>
          <div>
            <p className="font-semibold">{author}</p>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <span>{platform}</span>
              <span>•</span>
              <span>{time}</span>
            </div>
          </div>
        </div>
        
        <p className="text-gray-800 mb-4">{content}</p>
        
        {image && (
          <div className="mb-4">
            <img src={image} alt="News content" className="rounded-lg w-full h-64 object-cover" />
          </div>
        )}
        
        <div className="flex items-center justify-between text-gray-500 pt-3 border-t">
          <div className="flex items-center space-x-1">
            <Heart className="w-5 h-5" />
            <span>{likes}</span>
          </div>
          <div className="flex items-center space-x-1">
            <MessageCircle className="w-5 h-5" />
            <span>{comments}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Share2 className="w-5 h-5" />
            <span>{shares}</span>
          </div>
        </div>
      </div>
    </div>
  );
}