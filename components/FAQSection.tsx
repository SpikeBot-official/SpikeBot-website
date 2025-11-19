import React, { useState } from 'react';
import { FAQ_DATA } from '../siteData';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-32 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-3xl mx-auto px-6">
        <div className="reveal-on-scroll flex flex-col items-center text-center mb-16">
          <div className="p-3 bg-brand-100 dark:bg-slate-800 rounded-full text-brand-600 dark:text-brand-400 mb-4">
            <HelpCircle className="w-8 h-8" />
          </div>
          <h2 className="text-4xl font-header font-bold text-slate-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            導入にあたってよくある質問をまとめました。
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_DATA.map((item, index) => (
            // Wrapper handles the entrance animation.
            // It remains static so React doesn't overwrite the 'is-visible' class added by the observer.
            <div 
              key={index} 
              className="reveal-on-scroll delay-100"
            >
              <div 
                className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                  openIndex === index 
                    ? 'bg-white dark:bg-slate-800 shadow-lg dark:shadow-slate-900/50 ring-1 ring-brand-500/20' 
                    : 'bg-transparent hover:bg-white dark:hover:bg-slate-800/50'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none"
                >
                  <span className={`font-bold text-lg ${openIndex === index ? 'text-brand-600 dark:text-brand-400' : 'text-slate-700 dark:text-slate-200'}`}>
                    {item.question}
                  </span>
                  <span className={`p-1 rounded-full transition-colors ${openIndex === index ? 'bg-brand-100 text-brand-600 dark:bg-slate-700 dark:text-white' : 'text-slate-400'}`}>
                    {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </span>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-6 pb-6 pt-4 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-700/50">
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;