
import { Resource } from './types';
import { resources } from './resourcesData';

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
