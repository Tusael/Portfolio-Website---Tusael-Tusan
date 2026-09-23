import { SkillCategory } from '../types';

export const skillsData: SkillCategory[] = [
  {
    id: 'development',
    category: 'Application Development',
    description:
      'Developing and maintaining practical web applications, system functionality, and application lifecycle activities.',
    skills: [
      'PHP Native',
      'Laravel',
      'Web Application Development',
      'System Design',
      'System Maintenance & Enhancement',
      'System Testing',
      'Troubleshooting',
      'Application Deployment',
    ],
  },
  {
    id: 'database',
    category: 'Database',
    description:
      'Managing relational databases and supporting application data operations.',
    skills: ['MySQL', 'MariaDB', 'Database Management'],
  },
  {
    id: 'database-tools',
    category: 'Database Tools',
    description:
      'Using database management and development tools for application support and maintenance.',
    skills: ['Navicat'],
  },
  {
    id: 'infrastructure',
    category: 'IT Infrastructure & Support',
    description:
      'Supporting infrastructure, users, devices, networks, servers, and day-to-day IT operations.',
    skills: [
      'IT Infrastructure',
      'IT Support',
      'Technical Support',
      'Hardware & Software Troubleshooting',
      'Network Troubleshooting',
      'Server Administration',
      'VPN Support',
      'Backup & Disaster Recovery',
      'CCTV Infrastructure',
    ],
  },
  {
    id: 'system-administration',
    category: 'System Administration',
    description:
      'Administering user accounts, Microsoft environments, devices, licences, and operational IT resources.',
    skills: [
      'Active Directory',
      'Microsoft 365 Administration',
      'User Administration',
      'User Support & Training',
      'IT Inventory Management',
      'Software Licence Management',
    ],
  },
  {
    id: 'enterprise',
    category: 'Enterprise Applications & Project Delivery',
    description:
      'Supporting enterprise application projects from requirements and testing through implementation and post-go-live support.',
    skills: [
      'SAP',
      'Project Coordination',
      'Requirements Gathering',
      'Solutioning Support',
      'SIT',
      'UAT',
      'Pre-Go-Live & Post-Go-Live Support',
      'Cutover Support',
      'Incident Management',
      'Business User Coordination',
    ],
  },
  {
    id: 'tools',
    category: 'Development & Collaboration Tools',
    description:
      'Tools used for development, source control, documentation, collaboration, and day-to-day productivity.',
    skills: [
      'Git',
      'GitHub',
      'Visual Studio Code',
      'Sublime Text',
      'Microsoft Excel',
      'Microsoft Teams',
    ],
  },
];
