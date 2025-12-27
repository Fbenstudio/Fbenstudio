
export type Page = 'home' | 'work' | 'prototyping' | 'about' | 'contact';

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  role: string;
  duration: string;
  challenges: string[];
  solutions: string[];
  prototypeUrl?: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
