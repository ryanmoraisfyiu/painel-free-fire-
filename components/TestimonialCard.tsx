import React from 'react';
import { Star } from 'lucide-react';
import { TestimonialItem } from '../types';

export const TestimonialCard: React.FC<TestimonialItem> = ({ name, quote, avatarInitials }) => {
  return (
    <div className="bg-zinc-900/80 border border-zinc-800 p-6 rounded-2xl flex flex-col gap-4 relative overflow-hidden backdrop-blur-sm hover:border-zinc-700 transition-colors">
        {/* Decorative quote mark */}
      <div className="absolute top-2 right-4 text-6xl font-serif text-zinc-800 opacity-50 select-none">"</div>
      
      <div className="flex items-center gap-1 text-yellow-500 mb-1">
        {[1, 2, 3, 4, 5].map((_, i) => (
          <Star key={i} size={16} fill="currentColor" />
        ))}
      </div>
      
      <p className="text-zinc-300 italic relative z-10 leading-relaxed">
        "{quote}"
      </p>
      
      <div className="flex items-center gap-3 mt-auto pt-4 border-t border-zinc-800">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-red-900 flex items-center justify-center font-bold text-white text-sm">
          {avatarInitials}
        </div>
        <div>
          <p className="font-bold text-white text-sm">{name}</p>
          <p className="text-xs text-green-500 font-medium flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
            Compra Verificada
          </p>
        </div>
      </div>
    </div>
  );
};