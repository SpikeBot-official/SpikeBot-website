import React from 'react';
import { GITHUB_REPO_URL } from '../siteData';
import { ArrowRight, ChevronRight, Terminal } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-brand-500/20 dark:bg-brand-500/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen animate-blob"></div>
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-accent-400/20 dark:bg-accent-400/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[500px] h-[500px] bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen animate-blob animation-delay-4000"></div>
        
        {/* Grid Texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        
        {/* Pill Label */}
        <div className="reveal-on-scroll inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm mb-8">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
            v2.0 Now Available on GitHub
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="reveal-on-scroll delay-100 text-5xl md:text-7xl lg:text-8xl font-header font-bold leading-tight tracking-tight mb-8 text-slate-900 dark:text-white">
          Manage Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-400 dark:from-brand-400 dark:to-accent-400">
            Valorant Squad
          </span>
        </h1>

        <p className="reveal-on-scroll delay-200 text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12 font-normal leading-relaxed">
          セルフホストで安心・安全。ストア確認から在庫管理、そしてMMRに基づいた公平なチーム分けまで。
          <br className="hidden md:block" /> 
          モダンなDiscordボットで、あなたのサーバーをアップグレードしましょう。
        </p>

        {/* CTA Buttons */}
        <div className="reveal-on-scroll delay-300 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={GITHUB_REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-bold transition-all shadow-xl shadow-brand-500/20 hover:shadow-brand-500/40 flex items-center justify-center gap-2 group"
          >
            Deploy Bot
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a
            href="#features"
            className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 hover:border-brand-500 dark:hover:border-brand-400 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
          >
            Explore Features
          </a>
        </div>

        {/* Tech Stack / Badges */}
        <div className="reveal-on-scroll delay-300 mt-20 pt-8 border-t border-slate-200 dark:border-slate-800/50 flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
           <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
              <span className="font-header font-bold text-slate-900 dark:text-white text-xl">Golang</span>
           </div>
           <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span className="font-header font-bold text-slate-900 dark:text-white text-xl">Docker</span>
           </div>
           <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
              <span className="font-header font-bold text-slate-900 dark:text-white text-xl">Open Source</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;