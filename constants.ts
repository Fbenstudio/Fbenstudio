
import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'echo-music',
    title: 'Echo Music',
    category: 'Mobile App',
    description: 'An immersive high-fidelity music streaming experience focused on spatial audio and community curation.',
    image: 'https://images.unsplash.com/photo-1614149162883-504ce4d13909?auto=format&fit=crop&q=80&w=1000',
    tags: ['UX Research', 'Visual Design', 'iOS'],
    role: 'Lead Product Designer',
    duration: '6 Months',
    challenges: [
      'High churn rate among premium users',
      'Complex navigation for discovery features',
      'Inconsistent visual language across devices'
    ],
    solutions: [
      'Implemented a gesture-based player interface',
      'Created a new "Spatial discovery" engine',
      'Established a unified design system "Sonic Design"'
    ],
    prototypeUrl: '#'
  },
  {
    id: 'lumina-home',
    title: 'Lumina Home',
    category: 'Smart Dashboard',
    description: 'A unified control center for modern smart homes, prioritizing accessibility and real-time energy monitoring.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1000',
    tags: ['IoT', 'Dashboard Design', 'Accessibility'],
    role: 'UI Designer',
    duration: '4 Months',
    challenges: [
      'Visualizing complex energy consumption data',
      'Ensuring WCAG 2.1 AA compliance',
      'Connecting fragmented device ecosystems'
    ],
    solutions: [
      'Dynamic color-coding for high energy periods',
      'One-tap automation creation',
      'Custom icon set for smart appliances'
    ]
  },
  {
    id: 'aura-wellness',
    title: 'Aura Wellness',
    category: 'Health & Fitness',
    description: 'A meditative platform designed to reduce digital anxiety through minimalist interactions.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000',
    tags: ['Interaction Design', 'Product Strategy', 'Research'],
    role: 'Product Designer',
    duration: '3 Months',
    challenges: [
      'Users feeling overwhelmed by notification spam',
      'Low engagement for long-form meditations',
      'Stale UI compared to competitors'
    ],
    solutions: [
      'Zero-notification "Focus Mode"',
      'Micro-meditation loops (30 seconds)',
      'Soft pastel gradient aesthetic'
    ]
  }
];

export const PROTOTYPES = [
  {
    id: 'p1',
    title: 'Dynamic Micro-interactions',
    category: 'Motion Design',
    description: 'Exploring spring-based physics for mobile navigation elements.',
    video: 'https://cdn.pixabay.com/vimeo/328946146/mobile-app-1354.mp4?width=1280&hash=6f7e3c1a3b'
  },
  {
    id: 'p2',
    title: 'Neumorphic Control Center',
    category: 'Interface Lab',
    description: 'A study on lighting and shadows for modern IoT dashboards.',
    video: 'https://cdn.pixabay.com/vimeo/147113110/smart-home-287.mp4?width=1280&hash=d8e9f0'
  }
];

export const SKILLS = [
  'User Research', 'Information Architecture', 'Wireframing', 'High-Fidelity Prototyping',
  'Motion Design', 'Design Systems', 'Figma Mastery', 'Webflow/React Development',
  'Accessibility (WCAG)', 'User Testing'
];
