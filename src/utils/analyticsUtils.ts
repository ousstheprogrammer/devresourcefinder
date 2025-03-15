
import { resources } from './resourcesData';
import { Profession } from './types';
import { professions } from './constants';

// Function to get most used resources by profession
export function getMostUsedResourcesByProfession(profession: string, limit: number = 5) {
  const filtered = resources
    .filter(resource => resource.professions.includes(profession))
    .sort((a, b) => b.votes - a.votes)
    .slice(0, limit);
  
  return filtered;
}

// Function to get most popular resources across all professions
export function getMostPopularResources(limit: number = 10) {
  return resources
    .sort((a, b) => b.votes - a.votes)
    .slice(0, limit);
}

// Calculate resources by category
export function getResourcesByCategory() {
  const categoryCounts: Record<string, number> = {};
  
  resources.forEach(resource => {
    if (categoryCounts[resource.category]) {
      categoryCounts[resource.category]++;
    } else {
      categoryCounts[resource.category] = 1;
    }
  });
  
  return Object.entries(categoryCounts).map(([name, value]) => ({ name, value }));
}

// Calculate resources by type
export function getResourcesByType() {
  const typeCounts: Record<string, number> = {};
  
  resources.forEach(resource => {
    if (typeCounts[resource.type]) {
      typeCounts[resource.type]++;
    } else {
      typeCounts[resource.type] = 1;
    }
  });
  
  return Object.entries(typeCounts).map(([name, value]) => ({ name, value }));
}

// Calculate resources by difficulty
export function getResourcesByDifficulty() {
  const difficultyCounts: Record<string, number> = {};
  
  resources.forEach(resource => {
    if (difficultyCounts[resource.difficulty]) {
      difficultyCounts[resource.difficulty]++;
    } else {
      difficultyCounts[resource.difficulty] = 1;
    }
  });
  
  return Object.entries(difficultyCounts).map(([name, value]) => ({ name, value }));
}

// Function to get resources count by profession
export function getResourcesByProfession() {
  const professionCounts: Record<string, number> = {};
  
  resources.forEach(resource => {
    resource.professions.forEach(profession => {
      if (professionCounts[profession]) {
        professionCounts[profession]++;
      } else {
        professionCounts[profession] = 1;
      }
    });
  });
  
  return Object.entries(professionCounts)
    .map(([name, value]) => {
      // Get the label for the profession
      const professionObj = professions.find(p => p.value === name);
      return { 
        name: professionObj?.label || name, 
        value 
      };
    })
    .sort((a, b) => b.value - a.value);
}
