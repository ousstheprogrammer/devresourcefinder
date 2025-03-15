
import { FAQItem } from './types';

export const faqItems: FAQItem[] = [
  {
    id: "1",
    question: "What are the best ways to learn programming?",
    answer: "The best ways to learn programming include: 1) Interactive courses on platforms like freeCodeCamp or Codecademy, 2) Building real projects, 3) Participating in open source, 4) Finding a mentor, 5) Joining developer communities, and 6) Consistent practice with coding challenges."
  },
  {
    id: "2",
    question: "How do I choose the right programming language to learn?",
    answer: "Choose a programming language based on your goals: For web development, start with HTML/CSS/JavaScript. For data science, consider Python. For mobile apps, learn Swift (iOS) or Kotlin (Android). For game development, C# with Unity is popular. Consider job market demand and project requirements in your decision."
  },
  {
    id: "3",
    question: "What are RESTful APIs and why are they important?",
    answer: "RESTful APIs are interfaces that allow different software systems to communicate over HTTP using standard methods (GET, POST, PUT, DELETE). They're important because they enable seamless integration between diverse applications, promote scalability with stateless operations, and have become the standard for web service architecture."
  },
  {
    id: "4",
    question: "How do I authenticate API requests securely?",
    answer: "Secure API authentication typically involves: 1) Using HTTPS/TLS encryption, 2) Implementing token-based auth (JWT, OAuth), 3) Rate limiting to prevent brute force attacks, 4) Implementing proper authorization checks, 5) Using API keys with proper security, and 6) Considering refresh token patterns for enhanced security."
  },
  {
    id: "5",
    question: "What's the difference between frontend and backend development?",
    answer: "Frontend development focuses on everything users see and interact with in a browser/app (using HTML, CSS, JavaScript, React, etc.). Backend development handles server-side logic, databases, and application architecture (using Node.js, Python, Java, etc.). Full-stack developers are proficient in both areas."
  },
  {
    id: "6",
    question: "How do I stay updated with the latest tech trends?",
    answer: "Stay updated by: 1) Following tech blogs and newsletters, 2) Joining developer communities like Stack Overflow and Reddit, 3) Attending virtual/in-person conferences, 4) Following thought leaders on social media, 5) Participating in open source, and 6) Taking courses on emerging technologies."
  },
  {
    id: "7",
    question: "What are microservices and when should I use them?",
    answer: "Microservices are an architectural approach where applications are built as small, independent services that communicate via APIs. Consider using them for large, complex applications that benefit from independent deployment, technology diversity, and team autonomy. For simpler applications, a monolithic approach may be more efficient."
  },
  {
    id: "8",
    question: "How can I optimize API performance?",
    answer: "Optimize API performance by: 1) Implementing caching strategies, 2) Using pagination for large data sets, 3) Compressing responses, 4) Minimizing database queries, 5) Using asynchronous processing for time-consuming operations, 6) Implementing proper indexing, and 7) Considering CDNs for global distribution."
  }
];
