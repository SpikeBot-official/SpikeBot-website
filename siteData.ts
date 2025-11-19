import { Command, FAQItem } from './types';

// ==========================================
// EDIT THIS FILE TO UPDATE WEBSITE CONTENT
// ==========================================

export const COMMANDS_DATA: Command[] = [
  {
    name: "/spike setup",
    description: "Botの初期設定を行います。チャンネル設定やロール設定など。",
    usage: "/spike setup",
    category: "General"
  },
  {
    name: "/spike store",
    description: "あなたの本日のデイリーストアを表示します。",
    usage: "/spike store [user]",
    category: "Store"
  },
  {
    name: "/spike inventory",
    description: "所持しているスキン一覧と合計課金額を確認します。",
    usage: "/spike inventory",
    category: "Store"
  },
  {
    name: "/spike balance",
    description: "VCにいるメンバーのランクを取得し、公平なチーム分けを提案します。",
    usage: "/spike balance",
    category: "Match"
  },
  {
    name: "/spike lfg",
    description: "条件を指定してランク募集・カスタム募集パネルを作成します。",
    usage: "/spike lfg rank:<min-max> slots:<num>",
    category: "Match"
  },
  {
    name: "/spike profile",
    description: "現在のランク、勝率、直近の戦績サマリーを表示します。",
    usage: "/spike profile [riot_id]",
    category: "Utility"
  },
  {
    name: "/spike link",
    description: "RiotアカウントとDiscordアカウントを紐付けます。",
    usage: "/spike link",
    category: "General"
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: "このBotは誰でも導入できますか？",
    answer: "SpikeBotはセルフホスト型（Self-hosted）です。あなたのPCやVPS上でDockerまたはGoを使用して起動する必要があります。ソースコードはGitHubで公開されています。"
  },
  {
    question: "ストア機能を使うのはBAN対象になりますか？",
    answer: "いいえ。SpikeBotはRiot Gamesの公式APIおよび、クライアントと同じ認証フローを使用しています。ただし、アカウント情報の取り扱いには自己責任が伴います。Botはトークンをローカルにのみ保存し、外部送信は行いません。"
  },
  {
    question: "専用拡張機能は何のために必要ですか？",
    answer: "Riotのセキュリティ仕様上、デイリーストア情報へのアクセスには特殊な認証クッキーが必要です。専用拡張機能を使用することで、安全に認証情報を取得しBotへ連携することができます。"
  },
  {
    question: "チーム分けのロジックはどうなっていますか？",
    answer: "参加者の現在のMMR（内部レート）とランクポイントを取得し、両チームの平均MMRが限りなく近くなるように組み合わせを計算します。"
  }
];

export const GITHUB_REPO_URL = "https://github.com/example/spikebot";
export const EXTENSION_DOWNLOAD_URL = "https://github.com/example/spikebot-extension/archive/refs/heads/main.zip";