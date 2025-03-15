
import { Resource } from './types';

export const apiSuggestions: Resource[] = [
  {
    id: "api1",
    title: "Google Maps API",
    description: "Add maps, geolocation, and route planning to your applications. Perfect for location-based services and mapping features.",
    url: "https://developers.google.com/maps",
    category: "api",
    type: "freemium",
    difficulty: "intermediate",
    votes: 875,
    professions: ["frontend", "mobile", "fullstack"]
  },
  {
    id: "api2",
    title: "Stripe API",
    description: "Industry-leading payment processing solution. Implement secure payment systems in your applications with comprehensive documentation.",
    url: "https://stripe.com/docs/api",
    category: "api",
    type: "freemium",
    difficulty: "intermediate",
    votes: 920,
    professions: ["backend", "fullstack", "mobile"]
  },
  {
    id: "api3",
    title: "OpenAI API",
    description: "Access powerful AI models for text generation, completion, image creation, and more to build AI-enhanced applications.",
    url: "https://platform.openai.com/docs/api-reference",
    category: "api",
    type: "paid",
    difficulty: "intermediate",
    votes: 790,
    professions: ["ai", "backend", "fullstack"]
  },
  {
    id: "api4",
    title: "Weather API",
    description: "Incorporate current weather data, forecasts, and historical weather information into your applications.",
    url: "https://openweathermap.org/api",
    category: "api",
    type: "freemium",
    difficulty: "beginner",
    votes: 682,
    professions: ["frontend", "mobile", "fullstack"]
  },
  {
    id: "api5",
    title: "Twitter API",
    description: "Integrate Twitter functionality into your applications, including tweets, timelines, and user data.",
    url: "https://developer.twitter.com/en/docs/twitter-api",
    category: "api",
    type: "freemium",
    difficulty: "intermediate",
    votes: 740,
    professions: ["frontend", "backend", "fullstack"]
  },
  {
    id: "api6",
    title: "GitHub API",
    description: "Access GitHub data and functionality, perfect for developer tools and integrations with GitHub repositories.",
    url: "https://docs.github.com/en/rest",
    category: "api",
    type: "free",
    difficulty: "intermediate",
    votes: 830,
    professions: ["backend", "fullstack", "devops"]
  },
  {
    id: "api7",
    title: "Twilio API",
    description: "Add communication features like SMS, voice, video, and WhatsApp messaging to your applications.",
    url: "https://www.twilio.com/docs/api",
    category: "api",
    type: "paid",
    difficulty: "intermediate",
    votes: 760,
    professions: ["backend", "fullstack", "mobile"]
  },
  {
    id: "api8",
    title: "Spotify API",
    description: "Integrate music playback, playlist management, and music data into your applications.",
    url: "https://developer.spotify.com/documentation/web-api",
    category: "api",
    type: "freemium",
    difficulty: "intermediate",
    votes: 715,
    professions: ["frontend", "mobile", "fullstack"]
  }
];
