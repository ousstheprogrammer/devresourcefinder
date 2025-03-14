
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
