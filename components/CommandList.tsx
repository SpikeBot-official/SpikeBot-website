import React, { useState, useMemo } from 'react';
import { COMMANDS_DATA } from '../siteData';
import { Search, Copy, Check, Command as CommandIcon } from 'lucide-react';

const CommandList: React.FC = () => {
  const [filter, setFilter] = useState('');
  const [copied, setCopied] = useState<string | null>(null);

  const filteredCommands = useMemo(() => {
    return COMMANDS_DATA.filter(cmd => 
      cmd.name.toLowerCase().includes(filter.toLowerCase()) ||
      cmd.description.toLowerCase().includes(filter.toLowerCase()) ||
      cmd.category.toLowerCase().includes(filter.toLowerCase())
    );
  }, [filter]);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="commands" className="py-32 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal-on-scroll flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
           <div>
              <h2 className="text-4xl font-header font-bold text-slate-900 dark:text-white mb-4">
                Command Reference
              </h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-xl">
                SpikeBotの全機能リスト。クリックしてコマンドをコピーできます。
              </p>
           </div>

           {/* Search Bar */}
           <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Find a command..."
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white py-3 pl-12 pr-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
              />
              <Search className="absolute left-4 top-3.5 text-slate-400 w-5 h-5" />
           </div>
        </div>

        <div className="reveal-on-scroll delay-100 grid gap-4 md:grid-cols-2">
          {filteredCommands.map((cmd, idx) => (
            <div 
              key={idx}
              className="group bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl p-6 hover:border-brand-400 dark:hover:border-brand-500 hover:shadow-lg hover:shadow-brand-500/5 transition-all relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-brand-100 dark:bg-slate-800 rounded-lg text-brand-600 dark:text-brand-400">
                    <CommandIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-mono text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                      {cmd.name}
                    </h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-md">
                      {cmd.category}
                    </span>
                  </div>
                </div>
                
                <button
                  onClick={() => handleCopy(cmd.name)}
                  className="p-2 text-slate-400 hover:text-brand-500 hover:bg-brand-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
                  title="Copy command"
                >
                  {copied === cmd.name ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                </button>
              </div>

              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 min-h-[40px]">
                {cmd.description}
              </p>

              <div className="bg-white dark:bg-black/20 rounded-lg p-3 border border-slate-100 dark:border-white/5">
                <p className="text-xs text-slate-500 dark:text-slate-500 font-mono">
                  <span className="select-none mr-2">$</span>{cmd.usage}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredCommands.length === 0 && (
           <div className="text-center text-slate-500 py-20">
             No commands found matching "{filter}"
           </div>
        )}
      </div>
    </section>
  );
};

export default CommandList;