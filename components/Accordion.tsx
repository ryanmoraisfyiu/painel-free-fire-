import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FaqItem } from '../types';

interface AccordionProps {
  items: FaqItem[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      {items.map((item, index) => (
        <div 
          key={index} 
          className={`
            border border-zinc-800 rounded-xl overflow-hidden bg-zinc-900/50 
            transition-all duration-300
            ${openIndex === index ? 'border-red-900/50 shadow-[0_0_15px_rgba(220,38,38,0.1)]' : 'hover:border-zinc-700'}
          `}
        >
          <button
            className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
            onClick={() => toggle(index)}
          >
            <span className={`font-semibold text-lg ${openIndex === index ? 'text-red-400' : 'text-zinc-200'}`}>
              {item.question}
            </span>
            {openIndex === index ? (
              <ChevronUp className="w-5 h-5 text-red-500" />
            ) : (
              <ChevronDown className="w-5 h-5 text-zinc-500" />
            )}
          </button>
          
          <div 
            className={`
              overflow-hidden transition-all duration-300 ease-in-out
              ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
            `}
          >
            <div className="p-5 pt-0 text-zinc-400 leading-relaxed border-t border-zinc-800/50 mt-2">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};