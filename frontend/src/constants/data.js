// src/constants/data.js
export const navLinks = [
  { name: 'Home', to: 'hero' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Experience', to: 'experience' },
  { name: 'Contact', to: 'contact' },
];

export const personalInfo = {
  name: 'Rudra Narayan Sahu',
  email: 'abcd@gmail.com',
  phone: '9668331234',
  location: 'Berhampur, Odisha, India',
  university: 'GIET University, Gunupur',
  degree: 'B.Tech in Computer Science Engineering (AI & ML)',
  year: '3rd Year',
};

export const skills = {
  programming: [
    { name: 'Java', icon: 'java' },
    { name: 'Python', icon: 'python' },
    { name: 'JavaScript', icon: 'javascript' },
  ],
  domains: [
    { name: 'Web Development', icon: 'globe' },
    { name: 'Machine Learning', icon: 'brain' },
    { name: 'Deep Learning', icon: 'deeplearning' },
    { name: 'Generative AI', icon: 'sparkles' },
    { name: 'Agentic AI', icon: 'robot' },
  ],
  problemsolving: [
    { name: 'Data Structures & Algorithms', icon: 'code' },
    { name: 'Competitive Programming', icon: 'trophy' },
  ],
};

export const projects = [
  {
    id: 1,
    title: 'TalentLens AI',
    description: 'AI-Powered Resume Screening & ATS Optimization Platform. Analyzes resumes using ATS scoring techniques and provides personalized recommendations to improve candidate profiles. Recruiters can efficiently filter applicants based on skill relevance and resume quality, streamlining the hiring process and improving hiring decisions.',
    problem: 'Recruiters struggle to efficiently filter applicants based on skill relevance and resume quality.',
    solution: 'Built an AI platform that analyzes resumes with ATS scoring and delivers personalized recommendations to improve candidate profiles.',
    tech: ['React', 'FastAPI', 'NLP', 'Machine Learning'],
    achievements: ['ATS Scoring Engine', 'Personalized Recommendations', 'Efficient Applicant Filtering'],
    image: '/images/talentlens.svg',
    github: '#',
    demo: '#',
  },
  {
    id: 2,
    title: 'ArtFusion AI',
    description: 'Neural Style Transfer for Creative Image Transformation. Leverages Convolutional Neural Networks to blend the artistic style of one image with the content of another, enabling users to transform ordinary images into visually stunning pieces of artwork.',
    problem: 'Users want to generate visually stunning artwork without manual design skills.',
    solution: 'Implemented CNNs to blend the artistic style of one image with the content of another for creative transformations.',
    tech: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV'],
    achievements: ['Neural Style Transfer', 'Creative Image Transformation', 'Artistic AI'],
    image: '/images/artfusion.svg',
    github: '#',
    demo: '#',
  },
  {
    id: 3,
    title: 'IntelliClass',
    description: 'AI-Driven Smart Classroom & Attendance Management System. Automates classroom attendance using facial recognition and voice verification technologies. Provides intelligent analytics to improve classroom engagement and educational monitoring.',
    problem: 'Manual attendance is time-consuming, error-prone, and lacks insightful analytics.',
    solution: 'Developed an automated system using facial recognition and voice verification with intelligent classroom analytics.',
    tech: ['Python', 'OpenCV', 'Face Recognition', 'Speech Processing'],
    achievements: ['Facial Recognition', 'Voice Verification', 'Intelligent Analytics'],
    image: '/images/intelliclass.svg',
    github: '#',
    demo: '#',
  },
  {
    id: 4,
    title: 'WebSage AI',
    description: 'Real-Time Web-Enhanced Intelligent Assistant. Dynamically scrapes information from specified websites and generates context-aware responses using Large Language Models, ensuring users receive accurate and up-to-date insights.',
    problem: 'LLMs often lack access to real-time, up-to-date external knowledge.',
    solution: 'Built a system that dynamically scrapes websites and generates context-aware responses using LLMs.',
    tech: ['FastAPI', 'LLMs', 'BeautifulSoup', 'LangChain'],
    achievements: ['Real-Time Web Scraping', 'Context-Aware Responses', 'Dynamic Insights'],
    image: '/images/websage.svg',
    github: '#',
    demo: '#',
  },
  {
    id: 5,
    title: 'VideoMind AI',
    description: 'Agentic YouTube Video Analysis Assistant. Transforms YouTube videos into interactive knowledge bases, allowing users to ask questions, extract insights, and generate summaries from video content through an AI-powered conversational interface.',
    problem: 'Extracting key insights from lengthy videos is tedious and time-consuming.',
    solution: 'Built an agentic AI assistant that transforms videos into interactive knowledge bases for Q&A and summarization.',
    tech: ['Agentic AI', 'LLMs', 'Whisper', 'FastAPI'],
    achievements: ['Interactive Knowledge Base', 'Video Q&A', 'AI Summarization'],
    image: '/images/videomind.svg',
    github: '#',
    demo: '#',
  },
  {
    id: 6,
    title: 'CodeNation',
    description: 'Community-Driven DSA Learning & Competitive Programming Platform. Empowers students to practice Data Structures and Algorithms, participate in coding challenges, monitor consistency, and strengthen their problem-solving abilities through an engaging learning environment.',
    problem: 'Students lack a unified platform for DSA practice, coding challenges, and consistency tracking.',
    solution: 'Created a community-driven platform with challenges, tracking, and collaborative learning features.',
    tech: ['React', 'Node.js', 'MongoDB'],
    achievements: ['Consistency Tracking', 'Coding Challenges', 'Community Driven'],
    image: '/images/codenation.svg',
    github: '#',
    demo: '#',
  },
  {
    id: 7,
    title: 'GenVision GAN',
    description: 'Deep Learning-Based Synthetic Image Generation Framework. Utilizes Generative Adversarial Networks to generate realistic synthetic images from learned data distributions, demonstrating practical applications of generative deep learning.',
    problem: 'Need for realistic synthetic data generation across various domains.',
    solution: 'Utilized GANs to generate realistic synthetic images from learned data distributions.',
    tech: ['PyTorch', 'GANs', 'Deep Learning'],
    achievements: ['Synthetic Image Generation', 'Generative Deep Learning', 'Data Distribution Learning'],
    image: '/images/genvision.svg',
    github: '#',
    demo: '#',
  },
  {
    id: 8,
    title: 'AgentForge',
    description: 'Practical Implementations of Autonomous AI Agents. A collection of Agentic AI applications demonstrating planning, reasoning, tool usage, memory management, and autonomous task execution across diverse real-world scenarios.',
    problem: 'Need to demonstrate planning, reasoning, and tool usage across diverse real-world scenarios.',
    solution: 'Created a collection of agentic AI applications showcasing autonomous task execution and tool usage.',
    tech: ['LangGraph', 'LLMs', 'Python', 'FastAPI'],
    achievements: ['Autonomous Task Execution', 'Tool Usage', 'Reasoning & Planning'],
    image: '/images/agentforge.svg',
    github: '#',
    demo: '#',
  },
];

export const experience = [
  {
    milestone: 'Started Coding',
    description: 'Began the journey into programming with Java fundamentals at GIET University.',
    year: '2022',
  },
  {
    milestone: 'Mastered Java & DSA',
    description: 'Deep dive into object-oriented programming and solved first 100+ DSA problems.',
    year: '2023',
  },
  {
    milestone: 'Built First Full Stack Project',
    description: 'Created end-to-end application with React frontend and Node.js backend.',
    year: '2023',
  },
  {
    milestone: 'Explored AI & ML',
    description: 'Ventured into Machine Learning, Deep Learning, and AI-powered application development.',
    year: '2024',
  },
  {
    milestone: 'Built 8+ AI Projects',
    description: 'Developed multiple AI-driven projects spanning NLP, GANs, Agentic AI, and computer vision.',
    year: '2025',
  },
];

export const stats = [
  { label: 'Projects Built', value: 8 },
  { label: 'DSA Problems Solved', value: 300 },
  { label: 'Technologies Explored', value: 20 },
  { label: 'Years of Learning', value: 3 },
];

export const achievements = [
  {
    title: '300+ DSA Problems',
    description: 'Solved across LeetCode & platforms',
    icon: '🎯',
  },
  {
    title: '8+ AI Projects',
    description: 'Built with modern AI/ML stacks',
    icon: '🤖',
  },
  {
    title: 'Full Stack Developer',
    description: 'React, Node.js, FastAPI, MongoDB',
    icon: '🚀',
  },
  {
    title: 'AI & ML Enthusiast',
    description: 'NLP, GANs, Agentic AI, DL',
    icon: '🧠',
  },
];
