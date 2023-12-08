import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.png';
import Work2 from './assets/project-2.png';
import Work3 from './assets/project-3.png';
import Work4 from './assets/project-4.png';
import Work5 from './assets/project-5.jpg';
import Work6 from './assets/project-1.png';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Vikas',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Kumar',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '23 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Indian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Rewari,Haryana',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+918053987090',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'vikassaban1010@gmail.com',
  },

  {
    id: 9,
    title: 'Linkedin : ',
    description: 'vikas kumar',
  },

  {
    id: 10,
    title: 'Langages : ',
    description: 'Hindi, English',
  },
];

export const stats = [
  {
    id: 1,
    no: '6+',
    title: 'months of <br /> Experience',
  },

  {
    id: 2,
    no: '10+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '1+',
    title: ' HRIS<br /> Dashboard',
  },

  {
    id: 4,
    no: '1+',
    title: ' CRM <br /> Dashboard',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'Dec 2023 - PRESENT',
    title: 'Front-End Developer <span> iNtechnologies </span>',
    desc: 'On a role of a web developer',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'June 2023 - Nov 2023',
    title: 'UI Designer <span> iNtechnologies </span>',
    desc: '6 months internship as a web developer',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2005 - 2013',
    title: '',
    desc: '',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2023',
    title: 'Mernstack Course <span> Aptron Solutions </span>',
    desc: 'Learn Html, css ,bootstrap,javascript and react',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2016',
    title: '12th <span> Sarwan International School</span>',
    desc: 'Non-Medical',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2014',
    title: '10th <span> Sarwan International School</span>',
    desc: 'Had Subject Math,Science,hindi and English',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '95',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '75',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '90',
  },

  {
    id: 4,
    title: 'Bootstrap',
    percentage: '97',
  },

  {
    id: 5,
    title: 'Tailwind CSS',
    percentage: '95',
  },

  {
    id: 6,
    title: 'Jquery',
    percentage: '50',
  },

  {
    id: 7,
    title: 'Node',
    percentage: '65',
  },

  {
    id: 8,
    title: 'React',
    percentage: '85',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Website Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Photo',
      },
      // {
      //   icon: <FiUser />,
      //   title: 'Client : ',
      //   desc: 'Dribble',
      // },
      // {
      //   icon: <FaCode />,
      //   title: 'Language : ',
      //   desc: 'Adobe Photoshop',
      // },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.affvertize.com',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Website Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      // {
      //   icon: <FiUser />,
      //   title: 'Client : ',
      //   desc: 'Dribble',
      // },
      // {
      //   icon: <FaCode />,
      //   title: 'Language : ',
      //   desc: 'React JS',
      // },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.clubhdtv.com',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'website Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      // {
      //   icon: <FiUser />,
      //   title: 'Client : ',
      //   desc: 'Dribble',
      // },
      // {
      //   icon: <FaCode />,
      //   title: 'Language : ',
      //   desc: 'Adobe Premium',
      // },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.topinternetplans.com',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'website design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      // {
      //   icon: <FiUser />,
      //   title: 'Client : ',
      //   desc: 'Dribble',
      // },
      // {
      //   icon: <FaCode />,
      //   title: 'Language : ',
      //   desc: 'Adobe Premium',
      // },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.sureshotayurveda.com',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Website Design',
    details: [
      {
        title: 'Project : ',
        desc: 'Website',
      },
      // {
      //   title: 'Client : ',
      //   desc: 'Dribble',
      // },
      // {
      //   title: 'Language : ',
      //   desc: 'React JS, Node JS',
      // },
      {
        title: 'Preview : ',
        desc: 'www.intechnologies.com',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Website Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'website',
      },
      // {
      //   icon: <FiUser />,
      //   title: 'Client : ',
      //   desc: 'Dribble',
      // },
      // {
      //   icon: <FaCode />,
      //   title: 'Language : ',
      //   desc: 'Adobe Photoshop',
      // },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.affvertize.com',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
