export interface ProfileData {
  name: string;
  title: string;
  supportingText: string;
  currentOrganization: string;
  currentSector: string;
  careerSpan: string;
  location: string;
  email: string;
  linkedInUrl: string;
  githubUrl: string;
  profileImagePath: string;
  heroIntro: string;
  academicSummary: {
    degreeShort: string;
    institution: string;
    cgpa: string;
  };
  aboutParagraphs: string[];
  keyHighlights: {
    label: string;
    value: string;
    sublabel: string;
  }[];
  coreCompetencies: string[];
  operationalEnvironments: string[];
  standardOfService: string;
}

export interface ExperienceItem {
  id: string;
  organization: string;
  role: string;
  period: string;
  isCurrent?: boolean;
  sector: string;
  location?: string;
  responsibilities: string[];
}

export interface SkillCategory {
  id: string;
  category: string;
  description: string;
  skills: string[];
}

export interface ProjectItem {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  role: string;
  year: string;
  image?: string;
  externalLink?: string;
  statusBadge?: string;
  confidentialityNote?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  cgpa: string;
  highlights: string[];
}
