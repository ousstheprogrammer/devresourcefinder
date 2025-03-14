
import { Profession, CategoryOption } from './types';

// List of available professions
export const professions: Profession[] = [
  { value: "frontend", label: "Frontend Developer" },
  { value: "backend", label: "Backend Developer" },
  { value: "fullstack", label: "Fullstack Developer" },
  { value: "devops", label: "DevOps Engineer" },
  { value: "data", label: "Data Analyst/Scientist" },
  { value: "mobile", label: "Mobile Developer" },
  { value: "ai", label: "AI/ML Engineer" },
  { value: "security", label: "Security Engineer" },
  { value: "qa", label: "QA Engineer" },
  { value: "ux", label: "UX/UI Designer" },
];

// List of available categories
export const categories: CategoryOption[] = [
  { value: "learning", label: "Learning Platforms" },
  { value: "tools", label: "Development Tools" },
  { value: "documentation", label: "Documentation" },
  { value: "community", label: "Communities" },
  { value: "job", label: "Job Boards" },
  { value: "api", label: "APIs" },
];
