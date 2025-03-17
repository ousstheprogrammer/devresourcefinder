
// Collection of roadmap images for different professions
export const roadmapImages = {
  frontend: "/roadmap-frontend.png",
  backend: "/roadmap-backend.png",
  fullstack: "/roadmap-fullstack.png",
  devops: "/roadmap-devops.png",
  data: "/roadmap-data.png",
  mobile: "/roadmap-mobile.png",
  ai: "/roadmap-ai.png",
  security: "/roadmap-security.png",
  qa: "/roadmap-qa.png",
  ux: "/roadmap-ux.png",
};

// Placeholder to use when no specific image is available
export const placeholderRoadmapImage = "/placeholder.svg";

// Get roadmap image or return placeholder
export const getRoadmapImage = (profession: string): string => {
  return roadmapImages[profession as keyof typeof roadmapImages] || placeholderRoadmapImage;
};
