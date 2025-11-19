import React from 'react';
import { Github, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex items-center gap-2">
           <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center text-white font-bold">S</div>
           <span className="text-xl font-header font-bold text-slate-900 dark:text-white tracking-wide">SPIKEBOT</span>
        </div>

        <p className="text-slate-500 dark:text-slate-500 text-sm text-center md:text-left max-w-lg">
          SpikeBot is an open-source project. Not endorsed by Riot Games and does not reflect the views or opinions of Riot Games.
        </p>

        <div className="flex gap-6">
          <a href="#" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div className="text-center text-slate-400 dark:text-slate-600 text-xs mt-8">
        &copy; {new Date().getFullYear()} SpikeBot Project. Open Source MIT License.
      </div>
    </footer>
  );
};

export default Footer;