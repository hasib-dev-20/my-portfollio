import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaChartLine } from 'react-icons/fa';
import { SiTailwindcss, SiRedux, SiNextdotjs, SiPostman } from 'react-icons/si';

import profileImg from '../assets/profile.avif';
import projectImg1 from '../assets/project1.avif';
import projectImg2 from '../assets/project2.avif';
import projectImg3 from '../assets/project3.avif';
import projectImg4 from '../assets/project4.avif';
import projectImg5 from '../assets/project5.avif';
import projectImg6 from '../assets/project6.avif';


export const assets = {
  profileImg,
}

export const personalInfo = {
  name: "MD Hasib",
  role: "Aspiring MERN Developer",
  bio: "Crafting high-performance, user-centric web applications. Transforming ideas into seamless digital experiences with modern technologies.",
  socialLinks: {
    github: "https://github.com/hasib-dev-20",
    linkedin: "#",
    twitter: "#"
  },
  contact: {
    email: "rs6433424@gmail.com",
    phone: "01764382031",
    location: "Dhaka, Bangladesh"
  }
}


export const aboutInfo = [
  {
    icon: FaCode,
    title: 'Problem Solver',
    description: 'I enjoy breaking down complex problems and solving them with clean, efficient code.',
    color: 'text-purple'
  },
  {
    icon: FaLightbulb,
    title: 'Fast Learner',
    description: 'I adapt quickly to new technologies and am currently expanding my skills in Next.js.',
    color: 'text-pink'
  },
  {
    icon: FaPaintBrush,
    title: 'Detail Oriented',
    description: 'I pay attention to the small details that make a user interface feel polished and professional.',
    color: 'text-blue'
  }
];



export const skills = [
  {
    title: 'Frontend Core',
    icon: FaCode,
    description: 'Building the structure and style of modern websites.',
    tags: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Tailwind CSS']
  },
  {
    title: 'Frameworks & Libraries',
    icon: FaReact,
    description: 'Creating dynamic, single-page applications.',
    tags: ['React.js', 'Redux Toolkit', 'React Router', 'Framer Motion']
  },
  {
    title: 'Backend & Tools',
    icon: FaServer,
    description: 'Understanding server-side logic and development tools.',
    tags: ['Node.js (Basic)', 'Express.js', 'Git & GitHub', 'VS Code']
  },
  {
    title: 'Currently Learning',
    icon: SiNextdotjs,
    description: 'Expanding my skillset with full-stack frameworks.',
    tags: ['Next.js', 'Advanced React Patterns', 'TypeScript']
  }
];



export const projects = [
  {
    title: "E-Commerce Clone",
    description: "A fully responsive e-commerce application with product listing, cart functionality, and user authentication.",
    image: projectImg1,
    tech: ["React", "Redux Toolkit", "Tailwind CSS"],
    icons: [FaReact, SiRedux, SiTailwindcss],
    demo: "#",
    code: "#",
  },
  {
    title: "Personal Portfolio",
    description: "My personal portfolio website showcasing my skills and projects, featuring a modern dark theme and animations.",
    image: projectImg4,
    tech: ["React", "Framer Motion", "Tailwind CSS"],
    icons: [FaReact, FaPaintBrush, SiTailwindcss],
    demo: "#",
    code: "#",
  },
  {
    title: "Redux Shopping Cart",
    description: "A complex state management demonstration using Redux Toolkit to handle cart operations, persistent state, and asynchronous actions.",
    image: projectImg5,
    tech: ["React", "Redux Toolkit", "Tailwind CSS"],
    icons: [FaReact, SiRedux, SiTailwindcss],
    demo: "#",
    code: "#",
  },
  {
    title: "Task Management Dashboard",
    description: "A data-rich dashboard featuring real-time updates, charts, and data visualization. Demonstrates proficiency in handling complex UI logic.",
    image: projectImg6,
    tech: ["React", "Chart.js", "Tailwind CSS"],
    icons: [FaReact, FaChartLine, SiTailwindcss],
    demo: "#",
    code: "#",
  }
];


export const workData = [
  {
    role: "Frontend Developer (Self-Taught)",
    company: "Personal Projects",
    duration: "2025 - Present",
    description:
      "Built 10+ responsive web applications using React and Tailwind CSS. Focused on writing clean code, component reusability, and mastering the frontend ecosystem.",
    color: "purple"
  },
  {
    role: "Web Development Learner",
    company: "Online Courses & Bootcamps",
    duration: "2024 - 2025",
    description:
      "Completed intensive coursework in HTML, CSS, JavaScript, and React. Gained hands-on experience by cloning popular websites and solving coding challenges.",
    color: "pink"
  },
  {
    role: "Diploma in Computer Science",
    company: "Infra Polytechnic Institute",
    duration: "2021 - 2025",
    description:
      "Graduated with a focus on Computer Science Technology. Built a strong foundation in programming, algorithms, and software development.",
    color: "blue"
  }
];
