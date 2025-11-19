import React from 'react';
import { ShoppingCart, Users, BarChart2, Shield, Swords, Wallet } from 'lucide-react';
import { Feature } from '../types';

const featureList: Feature[] = [
  {
    title: "Daily Store Checker",
    description: "ゲームを起動せずにDiscordで今日のストアを確認。価格やティアも一目で。",
    icon: ShoppingCart,
  },
  {
    title: "Smart Auto Balance",
    description: "VCメンバーの最新MMRを取得し、勝率50%に近づくようチーム分けを提案。",
    icon: Users,
  },
  {
    title: "Stats & Profile",
    description: "ランク、勝率、K/Dなどの主要スタッツをモダンなカード形式で表示。",
    icon: BarChart2,
  },
  {
    title: "Inventory Valuation",
    description: "あなたのコレクション総額はいくら？所持スキンと課金額を瞬時に計算。",
    icon: Wallet,
  },
  {
    title: "LFG System",
    description: "ランク帯や役割を指定した募集パネルを作成。ワンクリックで参加。",
    icon: Swords,
  },
  {
    title: "Privacy Focused",
    description: "セルフホスト型のため、認証トークンはあなたの環境内に留まります。",
    icon: Shield,
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-32 bg-white dark:bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal-on-scroll text-center mb-20">
          <h2 className="text-sm font-bold text-brand-500 uppercase tracking-widest mb-3">Features</h2>
          <h3 className="text-4xl md:text-5xl font-header font-bold text-slate-900 dark:text-white mb-6">
            Everything you need to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-500">manage your game</span>
          </h3>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            SpikeBotは単なるツールではありません。DiscordサーバーをVALORANTハブへと進化させるためのオールインワンソリューションです。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureList.map((feature, index) => (
            <div
              key={index}
              className={`reveal-on-scroll group p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-brand-500/50 dark:hover:border-brand-500/50 hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-300`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-brand-100 dark:bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-brand-600 dark:text-brand-400">
                <feature.icon className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-header font-bold text-slate-900 dark:text-white mb-3">
                {feature.title}
              </h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;