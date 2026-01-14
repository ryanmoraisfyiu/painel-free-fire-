import React from 'react';
import { ChevronRight } from 'lucide-react';

interface CtaButtonProps {
  text: string;
  subtext?: string;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
}

export const CtaButton: React.FC<CtaButtonProps> = ({ 
  text, 
  subtext, 
  onClick, 
  className = "",
  fullWidth = false
}) => {
  return (
    <div className={`flex flex-col items-center group ${fullWidth ? 'w-full' : ''}`}>
      <button
        onClick={onClick}
        className={`
          relative overflow-hidden
          bg-gradient-to-r from-red-600 to-red-700 
          hover:from-red-500 hover:to-red-600
          text-white font-black uppercase tracking-wide
          py-5 px-8 rounded-xl
          shadow-[0_0_20px_rgba(220,38,38,0.4)]
          hover:shadow-[0_0_30px_rgba(220,38,38,0.6)]
          transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0
          flex items-center justify-center gap-2
          border-b-4 border-red-900 active:border-b-0 active:mt-1
          ${fullWidth ? 'w-full' : 'w-full sm:w-auto min-w-[300px]'}
          ${className}
        `}
      >
        <span className="z-10 text-lg sm:text-2xl">{text}</span>
        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 animate-pulse z-10" />
        
        {/* Shine effect overlay */}
        <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:animate-[shine_1s_ease-in-out_infinite]" />
      </button>
      
      {subtext && (
        <span className="mt-3 text-xs sm:text-sm text-zinc-400 font-medium tracking-wide flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          {subtext}
        </span>
      )}
    </div>
  );
};