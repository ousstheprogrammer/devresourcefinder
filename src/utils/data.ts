
// Common resource types
export type ResourceType = "free" | "paid" | "freemium";
export type DifficultyLevel = "beginner" | "intermediate" | "advanced";
export type Category = "learning" | "tools" | "documentation" | "community" | "job" | "api";

// Resource interface
export interface Resource {
  id: string;
  title: string;
  description: string;
  url: string;
  category: Category;
  type: ResourceType;
  difficulty: DifficultyLevel;
  votes: number;
  professions: string[];
}

// Profession interface
export interface Profession {
  value: string;
  label: string;
}

// Category interface
export interface CategoryOption {
  value: Category;
  label: string;
}

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

// Sample resources data
export const resources: Resource[] = [
  {
    id: "1",
    title: "MDN Web Docs",
    description: "Resources for developers, by developers. Comprehensive documentation for web technologies.",
    url: "https://developer.mozilla.org",
    category: "documentation",
    type: "free",
    difficulty: "beginner",
    votes: 1250,
    professions: ["frontend", "backend", "fullstack"],
  },
  {
    id: "2",
    title: "freeCodeCamp",
    description: "Learn to code for free with interactive challenges and projects.",
    url: "https://www.freecodecamp.org",
    category: "learning",
    type: "free",
    difficulty: "beginner",
    votes: 980,
    professions: ["frontend", "backend", "fullstack"],
  },
  {
    id: "3",
    title: "GitHub",
    description: "Platform for version control and collaboration. Host and review code, manage projects, and build software.",
    url: "https://github.com",
    category: "tools",
    type: "freemium",
    difficulty: "beginner",
    votes: 2100,
    professions: ["frontend", "backend", "fullstack", "devops", "mobile", "ai", "data", "security", "qa"],
  },
  {
    id: "4",
    title: "Stack Overflow",
    description: "A public platform where developers learn, share, & build careers.",
    url: "https://stackoverflow.com",
    category: "community",
    type: "free",
    difficulty: "beginner",
    votes: 1800,
    professions: ["frontend", "backend", "fullstack", "devops", "mobile", "ai", "data", "security", "qa"],
  },
  {
    id: "5",
    title: "VS Code",
    description: "Free, built on open source. Integrated Git, debugging and extensions.",
    url: "https://code.visualstudio.com",
    category: "tools",
    type: "free",
    difficulty: "beginner",
    votes: 1560,
    professions: ["frontend", "backend", "fullstack", "devops"],
  },
  {
    id: "6",
    title: "Udemy",
    description: "Online learning platform with thousands of courses on programming and tech.",
    url: "https://www.udemy.com",
    category: "learning",
    type: "paid",
    difficulty: "beginner",
    votes: 890,
    professions: ["frontend", "backend", "fullstack", "devops", "mobile", "ai", "data", "security", "qa", "ux"],
  },
  {
    id: "7",
    title: "Kaggle",
    description: "Platform for data science competitions, datasets, and coding environments.",
    url: "https://www.kaggle.com",
    category: "community",
    type: "freemium",
    difficulty: "intermediate",
    votes: 750,
    professions: ["data", "ai"],
  },
  {
    id: "8",
    title: "Docker Hub",
    description: "World's largest library and community for container images.",
    url: "https://hub.docker.com",
    category: "tools",
    type: "freemium",
    difficulty: "intermediate",
    votes: 680,
    professions: ["backend", "fullstack", "devops"],
  },
  {
    id: "9",
    title: "AWS Documentation",
    description: "Comprehensive documentation for all Amazon Web Services.",
    url: "https://docs.aws.amazon.com",
    category: "documentation",
    type: "free",
    difficulty: "intermediate",
    votes: 920,
    professions: ["backend", "fullstack", "devops", "security"],
  },
  {
    id: "10",
    title: "React Documentation",
    description: "Official documentation for React, a JavaScript library for building user interfaces.",
    url: "https://react.dev/",
    category: "documentation",
    type: "free",
    difficulty: "intermediate",
    votes: 1100,
    professions: ["frontend", "fullstack", "mobile"],
  },
  {
    id: "11",
    title: "LinkedIn",
    description: "World's largest professional network. Find jobs, people, and business opportunities.",
    url: "https://www.linkedin.com",
    category: "job",
    type: "freemium",
    difficulty: "beginner",
    votes: 1250,
    professions: ["frontend", "backend", "fullstack", "devops", "mobile", "ai", "data", "security", "qa", "ux"],
  },
  {
    id: "12",
    title: "Figma",
    description: "Cloud-based design tool for interface design, prototyping, and collaboration.",
    url: "https://www.figma.com",
    category: "tools",
    type: "freemium",
    difficulty: "intermediate",
    votes: 870,
    professions: ["frontend", "ux"],
  },
  {
    id: "13",
    title: "Coursera",
    description: "Offers courses, specializations, and degrees online from top universities and companies.",
    url: "https://www.coursera.org",
    category: "learning",
    type: "freemium",
    difficulty: "intermediate",
    votes: 950,
    professions: ["frontend", "backend", "fullstack", "devops", "mobile", "ai", "data", "security"],
  },
  {
    id: "14",
    title: "RapidAPI",
    description: "World's largest API marketplace. Discover and connect to thousands of APIs.",
    url: "https://rapidapi.com",
    category: "api",
    type: "freemium",
    difficulty: "intermediate",
    votes: 620,
    professions: ["frontend", "backend", "fullstack"],
  },
  {
    id: "15",
    title: "TensorFlow",
    description: "Open-source machine learning platform. Comprehensive ecosystem of tools and libraries.",
    url: "https://www.tensorflow.org",
    category: "tools",
    type: "free",
    difficulty: "advanced",
    votes: 780,
    professions: ["ai", "data"],
  },
  {
    id: "16",
    title: "Kubernetes Documentation",
    description: "Open-source system for automating deployment, scaling, and management of containerized applications.",
    url: "https://kubernetes.io/docs/",
    category: "documentation",
    type: "free",
    difficulty: "advanced",
    votes: 690,
    professions: ["devops", "backend"],
  },
  {
    id: "17",
    title: "Indeed",
    description: "World's #1 job site. Search millions of jobs from thousands of job boards, newspapers, classifieds and company websites.",
    url: "https://www.indeed.com",
    category: "job",
    type: "free",
    difficulty: "beginner",
    votes: 1050,
    professions: ["frontend", "backend", "fullstack", "devops", "mobile", "ai", "data", "security", "qa", "ux"],
  },
  {
    id: "18",
    title: "Flutter",
    description: "Google's UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.",
    url: "https://flutter.dev",
    category: "tools",
    type: "free",
    difficulty: "intermediate",
    votes: 830,
    professions: ["mobile", "frontend"],
  },
  {
    id: "19",
    title: "Dev.to",
    description: "A constructive and inclusive social network for software developers.",
    url: "https://dev.to",
    category: "community",
    type: "free",
    difficulty: "beginner",
    votes: 920,
    professions: ["frontend", "backend", "fullstack", "devops", "mobile", "ai", "data", "security", "qa"],
  },
  {
    id: "20",
    title: "Postman",
    description: "Platform for API development. Simplifies steps of building an API for better collaboration.",
    url: "https://www.postman.com",
    category: "tools",
    type: "freemium",
    difficulty: "intermediate",
    votes: 860,
    professions: ["backend", "fullstack", "qa"],
  },
];

// Function to filter resources by profession and category
export function filterResources(
  profession: string,
  category?: string,
  searchQuery?: string
): Resource[] {
  let filtered = resources;
  
  // Filter by profession
  if (profession) {
    filtered = filtered.filter(resource => 
      resource.professions.includes(profession)
    );
  }
  
  // Filter by category
  if (category) {
    filtered = filtered.filter(resource => 
      resource.category === category
    );
  }
  
  // Filter by search query
  if (searchQuery) {
    const query = searchQuery.toLowerCase();
    filtered = filtered.filter(resource =>
      resource.title.toLowerCase().includes(query) ||
      resource.description.toLowerCase().includes(query)
    );
  }
  
  return filtered;
}
