export interface Command {
  name: string;
  description: string;
  usage: string;
  category: 'General' | 'Store' | 'Match' | 'Utility';
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ElementType;
}