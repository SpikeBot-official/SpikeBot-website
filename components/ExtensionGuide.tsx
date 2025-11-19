import React from 'react';
import { Download, FolderOpen, ToggleRight, RefreshCw, Chrome } from 'lucide-react';
import { EXTENSION_DOWNLOAD_URL } from '../siteData';

const ExtensionGuide: React.FC = () => {
  return (
    <section id="extension" className="py-32 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute -right-20 top-40 w-96 h-96 bg-brand-500 rounded-full blur-3xl"></div>
          <div className="absolute -left-20 bottom-40 w-96 h-96 bg-accent-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div className="reveal-on-scroll">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-widest mb-6">
              <Chrome className="w-4 h-4" />
              Required for Store Access
            </div>
            
            <h2 className="text-4xl md:text-5xl font-header font-bold text-slate-900 dark:text-white mb-6">
              Browser Extension
            </h2>
            
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
              Riot APIのセキュリティ仕様上、デイリーストア情報の取得には認証クッキーが必要です。
              SpikeBotは専用のオープンソース拡張機能を使用することで、安全に認証情報をBotへ連携します。
              <br/><br/>
              Chromeウェブストアではなく、GitHubから直接導入する「デベロッパーモード」方式を採用しています。
            </p>

            <a 
              href={EXTENSION_DOWNLOAD_URL}
              className="inline-flex items-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all"
            >
              <Download className="w-5 h-5" />
              Download from GitHub
            </a>
          </div>

          {/* Steps */}
          <div className="reveal-on-scroll delay-200 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-700 p-8 md:p-10">
             <h3 className="text-xl font-header font-bold text-slate-900 dark:text-white mb-8 border-b border-slate-200 dark:border-slate-700 pb-4">
               Installation Steps
             </h3>

             <div className="space-y-8">
               <StepItem 
                 number="01" 
                 icon={<FolderOpen className="w-5 h-5" />}
                 title="Unzip Files"
                 desc="ダウンロードしたZIPファイルを任意の場所に解凍します。"
               />
               <StepItem 
                 number="02" 
                 icon={<ToggleRight className="w-5 h-5" />}
                 title="Developer Mode"
                 desc={<>Chromeの拡張機能管理 (<code className="bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded text-xs font-mono text-brand-600 dark:text-brand-400">chrome://extensions</code>) でデベロッパーモードをONにします。</>}
               />
               <StepItem 
                 number="03" 
                 icon={<RefreshCw className="w-5 h-5" />}
                 title="Load Extension"
                 desc="「パッケージ化されていない拡張機能を読み込む」をクリックし、解凍したフォルダを選択します。"
               />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const StepItem: React.FC<{ number: string; icon: React.ReactNode; title: string; desc: React.ReactNode }> = ({ number, icon, title, desc }) => (
  <div className="flex gap-5">
     <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-50 dark:bg-slate-900 border border-brand-100 dark:border-slate-700 flex items-center justify-center text-brand-600 dark:text-brand-400 font-bold font-header text-xl">
       {number}
     </div>
     <div>
       <h4 className="text-slate-900 dark:text-white font-bold mb-1 flex items-center gap-2 text-lg">
         {icon} {title}
       </h4>
       <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
         {desc}
       </p>
     </div>
   </div>
);

export default ExtensionGuide;