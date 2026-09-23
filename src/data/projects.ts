import { ProjectItem } from '../types';

export const projectsNote =
  'Selected professional and personal projects showcasing application development, IT operations, process improvement, and AI-assisted web development.';

export const projectsData: ProjectItem[] = [
  {
    id: 'arkib-parlimen',
    name: 'ArkibParlimen',
    description:
      'Government web application developed to support officers in searching and referencing previous parliamentary questions and related records.',
    technologies: ['PHP Native', 'MySQL', 'Navicat'],
    role: 'Application Developer & Technical Support',
    year: '2026',
    statusBadge: 'Professional Project',
    confidentialityNote:
      'Government project. Public portfolio summary only; internal URLs, credentials, user data, and sensitive implementation details are excluded.',
  },
  {
    id: 'production-reporting-optimisation',
    name: 'Production Reporting Workflow Optimisation',
    description:
      'Optimised a production reporting workflow by consolidating line-level Microsoft 365 accounts and centralising daily reports through Microsoft Teams.',
    technologies: ['Microsoft 365', 'Microsoft Teams', 'Microsoft Excel'],
    role: 'IT Engineer',
    year: '2021–2023',
    statusBadge: 'Professional Project',
    confidentialityNote:
      'Internal manufacturing project. Operational details are summarised without sharing confidential company information.',
  },
  {
    id: 'wedding-invitation',
    name: 'Wedding Invitation Website',
    description:
      'Responsive digital wedding invitation website developed for a family member to provide guests with an accessible and interactive online invitation experience.',
    technologies: ['Google AI Studio', 'HTML', 'CSS', 'JavaScript', 'Netlify'],
    role: 'Developer · AI-Assisted Web Development',
    year: '2026',
    statusBadge: 'Personal Project',
  },
  {
    id: 'personal-portfolio',
    name: 'Personal Portfolio Website',
    description:
      'Responsive personal portfolio website developed to showcase professional experience, technical skills, and selected IT projects.',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Git', 'GitHub', 'Netlify'],
    role: 'Developer · AI-Assisted Web Development',
    year: '2026',
    statusBadge: 'Personal Project',
  },
];
