import { Resource } from './types';

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
  {
    id: "21",
    title: "Amazon CodeWhisperer",
    description: "AI-powered code generator that helps developers write code faster with personalized recommendations based on their comments and code.",
    url: "https://aws.amazon.com/codewhisperer/",
    category: "tools",
    type: "freemium",
    difficulty: "beginner",
    votes: 480,
    professions: ["frontend", "backend", "fullstack", "mobile", "ai"],
  },
  {
    id: "22",
    title: "Sourcegraph",
    description: "Universal code search platform that helps developers find, understand, and fix code quickly.",
    url: "https://sourcegraph.com/",
    category: "tools",
    type: "freemium",
    difficulty: "intermediate",
    votes: 540,
    professions: ["frontend", "backend", "fullstack", "devops"],
  },
  {
    id: "23",
    title: "Tabnine",
    description: "AI code completion tool that helps you write code faster and with fewer errors using machine learning.",
    url: "https://www.tabnine.com/",
    category: "tools",
    type: "freemium",
    difficulty: "beginner",
    votes: 630,
    professions: ["frontend", "backend", "fullstack", "mobile"],
  },
  {
    id: "24",
    title: "Google Cloud AI Code Generator",
    description: "AI-powered coding assistant that helps developers create, complete, and optimize code in Google Cloud environments.",
    url: "https://cloud.google.com/",
    category: "tools",
    type: "freemium",
    difficulty: "intermediate",
    votes: 520,
    professions: ["backend", "fullstack", "devops", "ai"],
  },
  {
    id: "25",
    title: "Mutable",
    description: "Platform that helps developers build and deploy applications quickly across multiple cloud providers.",
    url: "https://mutable.io/",
    category: "tools",
    type: "freemium",
    difficulty: "intermediate",
    votes: 380,
    professions: ["devops", "backend", "fullstack"],
  },
  {
    id: "26",
    title: "aiXcoder",
    description: "AI-powered code completion and generation tool that helps developers write code more efficiently.",
    url: "https://www.aixcoder.com/",
    category: "tools",
    type: "freemium",
    difficulty: "beginner",
    votes: 310,
    professions: ["frontend", "backend", "fullstack"],
  },
  {
    id: "27",
    title: "Code Alpha",
    description: "AI coding assistant that helps developers write code faster and with fewer bugs.",
    url: "https://codealpha.io/",
    category: "tools",
    type: "freemium",
    difficulty: "beginner",
    votes: 290,
    professions: ["frontend", "backend", "fullstack"],
  },
  {
    id: "28",
    title: "DemandezCodi",
    description: "AI-powered code generation tool that helps developers create code from natural language descriptions.",
    url: "https://demandezcodi.com/",
    category: "tools",
    type: "freemium",
    difficulty: "beginner",
    votes: 270,
    professions: ["frontend", "backend", "fullstack"],
  },
  {
    id: "29",
    title: "Cody by Sourcegraph",
    description: "AI coding assistant powered by Sourcegraph that helps developers search, navigate, and understand code.",
    url: "https://about.sourcegraph.com/cody",
    category: "tools",
    type: "freemium",
    difficulty: "intermediate",
    votes: 410,
    professions: ["frontend", "backend", "fullstack", "devops"],
  },
  {
    id: "30",
    title: "CodeWP",
    description: "AI-powered WordPress code generator that helps developers build WordPress themes and plugins faster.",
    url: "https://codewp.com/",
    category: "tools",
    type: "freemium",
    difficulty: "intermediate",
    votes: 320,
    professions: ["frontend", "fullstack"],
  },
  {
    id: "31",
    title: "Mintlifier",
    description: "AI tool that helps simplify and explain complex code to make it more readable and maintainable.",
    url: "https://mintlify.com/",
    category: "tools",
    type: "freemium",
    difficulty: "beginner",
    votes: 280,
    professions: ["frontend", "backend", "fullstack"],
  },
  {
    id: "32",
    title: "ClickUp",
    description: "Productivity platform with AI capabilities to help teams manage projects, tasks, and workflows more efficiently.",
    url: "https://clickup.com/",
    category: "tools",
    type: "freemium",
    difficulty: "beginner",
    votes: 560,
    professions: ["frontend", "backend", "fullstack", "devops", "mobile", "ai", "data", "security", "qa", "ux"],
  },
  {
    id: "33",
    title: "Exercism",
    description: "Improve your coding skills with practice and mentorship, with 50+ programming languages.",
    url: "https://exercism.org/",
    category: "learning",
    type: "free",
    difficulty: "beginner",
    votes: 570,
    professions: ["frontend", "backend", "fullstack"],
  },
  {
    id: "34",
    title: "HackerRank",
    description: "Practice coding skills, prepare for interviews, and get hired with coding challenges and competitions.",
    url: "https://www.hackerrank.com/",
    category: "learning",
    type: "freemium",
    difficulty: "intermediate",
    votes: 820,
    professions: ["frontend", "backend", "fullstack", "data", "ai"],
  },
  {
    id: "35",
    title: "LeetCode",
    description: "Platform to help prepare for technical interviews with coding challenges and contests.",
    url: "https://leetcode.com/",
    category: "learning",
    type: "freemium",
    difficulty: "intermediate",
    votes: 910,
    professions: ["frontend", "backend", "fullstack", "mobile"],
  },
  {
    id: "36",
    title: "AWS Documentation",
    description: "Official documentation for Amazon Web Services with guides, API references, and tutorials.",
    url: "https://docs.aws.amazon.com/",
    category: "documentation",
    type: "free",
    difficulty: "intermediate",
    votes: 730,
    professions: ["backend", "devops", "fullstack"],
  },
  {
    id: "37",
    title: "HashNode",
    description: "Developer blogging platform where you can read and write about programming and technology.",
    url: "https://hashnode.com/",
    category: "community",
    type: "free",
    difficulty: "beginner",
    votes: 490,
    professions: ["frontend", "backend", "fullstack", "devops", "mobile", "ai", "data"],
  },
  {
    id: "38",
    title: "Visual Studio Live Share",
    description: "Real-time collaborative development tool for pair programming and troubleshooting.",
    url: "https://visualstudio.microsoft.com/services/live-share/",
    category: "tools",
    type: "free",
    difficulty: "beginner",
    votes: 420,
    professions: ["frontend", "backend", "fullstack", "mobile"],
  },
  {
    id: "39",
    title: "Dribbble",
    description: "Design community for showcasing, discovering, and connecting with designers worldwide.",
    url: "https://dribbble.com/",
    category: "community",
    type: "freemium",
    difficulty: "beginner",
    votes: 580,
    professions: ["frontend", "ux"],
  },
  {
    id: "40",
    title: "Behance",
    description: "Platform for showcasing and discovering creative work in design, illustration, and more.",
    url: "https://www.behance.net/",
    category: "community",
    type: "free",
    difficulty: "beginner",
    votes: 550,
    professions: ["frontend", "ux"],
  },
  {
    id: "41",
    title: "CodeSandbox",
    description: "Online code editor and prototyping tool that helps you create projects quickly.",
    url: "https://codesandbox.io/",
    category: "tools",
    type: "freemium",
    difficulty: "beginner",
    votes: 710,
    professions: ["frontend", "fullstack"],
  },
  {
    id: "42",
    title: "Vercel",
    description: "Platform for frontend developers, providing the tools for deploying websites and web applications.",
    url: "https://vercel.com/",
    category: "tools",
    type: "freemium",
    difficulty: "beginner",
    votes: 830,
    professions: ["frontend", "fullstack"],
  },
  {
    id: "43",
    title: "AWS Amplify",
    description: "Development platform for building secure, scalable mobile and web applications.",
    url: "https://aws.amazon.com/amplify/",
    category: "tools",
    type: "freemium",
    difficulty: "intermediate",
    votes: 470,
    professions: ["frontend", "fullstack", "mobile"],
  },
  {
    id: "44",
    title: "Firebase",
    description: "App development platform that helps you build, improve, and grow your app.",
    url: "https://firebase.google.com/",
    category: "tools",
    type: "freemium",
    difficulty: "beginner",
    votes: 890,
    professions: ["frontend", "backend", "fullstack", "mobile"],
  },
  {
    id: "45",
    title: "Cypress",
    description: "JavaScript end-to-end testing framework that makes testing fast, easy, and reliable.",
    url: "https://www.cypress.io/",
    category: "tools",
    type: "freemium",
    difficulty: "intermediate",
    votes: 530,
    professions: ["frontend", "fullstack", "qa"],
  },
  {
    id: "46",
    title: "Jest",
    description: "Delightful JavaScript testing framework with a focus on simplicity.",
    url: "https://jestjs.io/",
    category: "tools",
    type: "free",
    difficulty: "intermediate",
    votes: 620,
    professions: ["frontend", "backend", "fullstack"],
  },
  {
    id: "47",
    title: "Netlify",
    description: "Platform that automates your code to create high-performant sites and web apps.",
    url: "https://www.netlify.com/",
    category: "tools",
    type: "freemium",
    difficulty: "beginner",
    votes: 780,
    professions: ["frontend", "fullstack"],
  },
  {
    id: "48",
    title: "Docker Hub",
    description: "Repository of container images for developers and IT professionals.",
    url: "https://hub.docker.com/",
    category: "tools",
    type: "freemium",
    difficulty: "intermediate",
    votes: 650,
    professions: ["backend", "devops", "fullstack"],
  },
  {
    id: "49",
    title: "Pluralsight",
    description: "Technology learning platform that helps companies and individuals benchmark expertise and upskill.",
    url: "https://www.pluralsight.com/",
    category: "learning",
    type: "paid",
    difficulty: "intermediate",
    votes: 590,
    professions: ["frontend", "backend", "fullstack", "devops", "data", "ai", "mobile", "security"],
  },
  {
    id: "50",
    title: "DataCamp",
    description: "Learn Data Science online with courses, tutorials, and practice exercises.",
    url: "https://www.datacamp.com/",
    category: "learning",
    type: "freemium",
    difficulty: "beginner",
    votes: 510,
    professions: ["data", "ai"],
  },
  {
    id: "51",
    title: "MongoDB University",
    description: "Free online courses and learning resources for MongoDB database.",
    url: "https://university.mongodb.com/",
    category: "learning",
    type: "free",
    difficulty: "beginner",
    votes: 460,
    professions: ["backend", "fullstack", "data"],
  },
  {
    id: "52",
    title: "RapidAPI Hub",
    description: "Find and connect to thousands of APIs for building applications.",
    url: "https://rapidapi.com/hub",
    category: "api",
    type: "freemium",
    difficulty: "beginner",
    votes: 390,
    professions: ["frontend", "backend", "fullstack"],
  },
  {
    id: "53",
    title: "Redis University",
    description: "Free online courses to learn Redis database concepts and development.",
    url: "https://university.redis.com/",
    category: "learning",
    type: "free",
    difficulty: "intermediate",
    votes: 340,
    professions: ["backend", "fullstack", "devops"],
  },
  {
    id: "54",
    title: "The Odin Project",
    description: "Free open-source coding curriculum that can be taken entirely online.",
    url: "https://www.theodinproject.com/",
    category: "learning",
    type: "free",
    difficulty: "beginner",
    votes: 720,
    professions: ["frontend", "fullstack"],
  },
  {
    id: "55",
    title: "DigitalOcean Community",
    description: "Community of developers sharing tutorials, questions, and ideas.",
    url: "https://www.digitalocean.com/community",
    category: "community",
    type: "free",
    difficulty: "beginner",
    votes: 480,
    professions: ["backend", "fullstack", "devops"],
  },
  {
    id: "56",
    title: "Scrimba",
    description: "Interactive coding platform with courses on web development.",
    url: "https://scrimba.com/",
    category: "learning",
    type: "freemium",
    difficulty: "beginner",
    votes: 410,
    professions: ["frontend", "fullstack"],
  },
  {
    id: "57",
    title: "GitKraken",
    description: "Git GUI client for Windows, Mac & Linux with intuitive interface.",
    url: "https://www.gitkraken.com/",
    category: "tools",
    type: "freemium",
    difficulty: "beginner",
    votes: 450,
    professions: ["frontend", "backend", "fullstack", "devops"],
  },
  {
    id: "58",
    title: "CodePen",
    description: "Social development environment for front-end designers and developers.",
    url: "https://codepen.io/",
    category: "tools",
    type: "freemium",
    difficulty: "beginner",
    votes: 670,
    professions: ["frontend", "ux"],
  },
  {
    id: "59",
    title: "Unsplash",
    description: "Beautiful free images and photos that you can download and use for any project.",
    url: "https://unsplash.com/",
    category: "tools",
    type: "free",
    difficulty: "beginner",
    votes: 610,
    professions: ["frontend", "ux"],
  },
  {
    id: "60",
    title: "Stripe Documentation",
    description: "Comprehensive guides and API references for implementing payment processing.",
    url: "https://stripe.com/docs",
    category: "documentation",
    type: "free",
    difficulty: "intermediate",
    votes: 540,
    professions: ["frontend", "backend", "fullstack"],
  },
  {
    id: "61",
    title: "AWS Lambda",
    description: "Serverless computing service that runs code in response to events and automatically manages the computing resources.",
    url: "https://aws.amazon.com/lambda/",
    category: "tools",
    type: "freemium",
    difficulty: "intermediate",
    votes: 520,
    professions: ["backend", "devops", "fullstack"],
  },
  {
    id: "62",
    title: "PyTorch",
    description: "Open source machine learning framework for Python with strong GPU acceleration support.",
    url: "https://pytorch.org/",
    category: "tools",
    type: "free",
    difficulty: "advanced",
    votes: 690,
    professions: ["ai", "data"],
  },
  {
    id: "63",
    title: "Svelte",
    description: "Radical new approach to building user interfaces. Write less code and build reactive web apps.",
    url: "https://svelte.dev/",
    category: "tools",
    type: "free",
    difficulty: "intermediate",
    votes: 580,
    professions: ["frontend", "fullstack"],
  },
  {
    id: "64",
    title: "Tailwind CSS",
    description: "Utility-first CSS framework for rapidly building custom user interfaces.",
    url: "https://tailwindcss.com/",
    category: "tools",
    type: "free",
    difficulty: "beginner",
    votes: 860,
    professions: ["frontend", "fullstack", "ux"],
  },
  {
    id: "65",
    title: "Hashnode",
    description: "Blogging platform for developers and software engineers with built-in community engagement features.",
    url: "https://hashnode.com/",
    category: "community",
    type: "free",
    difficulty: "beginner",
    votes: 420,
    professions: ["frontend", "backend", "fullstack", "devops", "mobile", "ai", "data", "security", "qa", "ux"],
  },
  {
    id: "66",
    title: "Toptal",
    description: "Exclusive network of the top freelance software developers, designers, and finance experts.",
    url: "https://www.toptal.com/",
    category: "job",
    type: "free",
    difficulty: "advanced",
    votes: 480,
    professions: ["frontend", "backend", "fullstack", "devops", "mobile", "ai", "data", "security", "ux"],
  },
  {
    id: "67",
    title: "Upwork",
    description: "World's largest freelancing website where businesses and independent professionals connect and collaborate remotely.",
    url: "https://www.upwork.com/",
    category: "job",
    type: "free",
    difficulty: "beginner",
    votes: 650,
    professions: ["frontend", "backend", "fullstack", "devops", "mobile", "ai", "data", "security", "qa", "ux"],
  },
  {
    id: "68",
    title: "Node.js Documentation",
    description: "Official documentation for Node.js, a JavaScript runtime built on Chrome's V8 JavaScript engine.",
    url: "https://nodejs.org/en/docs/",
    category: "documentation",
    type: "free",
    difficulty: "intermediate",
    votes: 720,
    professions: ["backend", "fullstack"],
  },
  {
    id: "69",
    title: "Next.js",
    description: "React framework for building production-ready websites and applications with server-side rendering.",
    url: "https://nextjs.org/",
    category: "tools",
    type: "free",
    difficulty: "intermediate",
    votes: 790,
    professions: ["frontend", "fullstack"],
  },
  {
    id: "70",
    title: "Remix",
    description: "Full stack web framework that lets you focus on the user interface and work back through web fundamentals.",
    url: "https://remix.run/",
    category: "tools",
    type: "free",
    difficulty: "intermediate",
    votes: 430,
    professions: ["frontend", "fullstack"],
  },
  {
    id: "71",
    title: "Prisma",
    description: "Next-generation ORM for Node.js and TypeScript that helps developers build faster and make fewer errors.",
    url: "https://www.prisma.io/",
    category: "tools",
    type: "free",
    difficulty: "intermediate",
    votes: 560,
    professions: ["backend", "fullstack"],
  },
  {
    id: "72",
    title: "Dribbble",
    description: "Platform for designers to share their work, gain inspiration, and get hired.",
    url: "https://dribbble.com/",
    category: "community",
    type: "freemium",
    difficulty: "beginner",
    votes: 660,
    professions: ["frontend", "ux"],
  },
  {
    id: "73",
    title: "Storybook",
    description: "Frontend workshop for building UI components and pages in isolation. Perfect for UI development and documentation.",
    url: "https://storybook.js.org/",
    category: "tools",
    type: "free",
    difficulty: "intermediate",
    votes: 470,
    professions: ["frontend", "fullstack", "ux"],
  },
  {
    id: "74",
    title: "Auth0",
    description: "Authentication and authorization platform for web, mobile and legacy applications.",
    url: "https://auth0.com/",
    category: "tools",
    type: "freemium",
    difficulty: "intermediate",
    votes: 540,
    professions: ["frontend", "backend", "fullstack", "mobile", "security"],
  },
  {
    id: "75",
    title: "Codecademy",
    description: "Interactive platform that offers free coding classes in different programming languages.",
    url: "https://www.codecademy.com/",
    category: "learning",
    type: "freemium",
    difficulty: "beginner",
    votes: 810,
    professions: ["frontend", "backend", "fullstack", "data", "ai", "mobile"],
  },
  {
    id: "76",
    title: "TypeScript Documentation",
    description: "Official documentation for TypeScript, a typed superset of JavaScript that compiles to plain JavaScript.",
    url: "https://www.typescriptlang.org/docs/",
    category: "documentation",
    type: "free",
    difficulty: "intermediate",
    votes: 670,
    professions: ["frontend", "backend", "fullstack", "mobile"],
  },
  {
    id: "77",
    title: "Cypress.io",
    description: "JavaScript end-to-end testing framework built for the modern web. Fast, easy and reliable.",
    url: "https://www.cypress.io/",
    category: "tools",
    type: "freemium",
    difficulty: "intermediate",
    votes: 580,
    professions: ["frontend", "fullstack", "qa"],
  },
  {
    id: "78",
    title: "GraphQL Documentation",
    description: "Official documentation for GraphQL, a query language for APIs and a runtime for executing those queries with your existing data.",
    url: "https://graphql.org/learn/",
    category: "documentation",
    type: "free",
    difficulty: "intermediate",
    votes: 490,
    professions: ["frontend", "backend", "fullstack"],
  },
  {
    id: "79",
    title: "Cloudflare Workers",
    description: "Serverless execution environment that allows you to create applications that run on Cloudflare's edge network.",
    url: "https://workers.cloudflare.com/",
    category: "tools",
    type: "freemium",
    difficulty: "intermediate",
    votes: 450,
    professions: ["backend", "fullstack", "devops"],
  },
  {
    id: "80",
    title: "TestDriven.io",
    description: "Online courses focusing on full-stack web development with Python, Django, and JavaScript.",
    url: "https://testdriven.io/",
    category: "learning",
    type: "paid",
    difficulty: "intermediate",
    votes: 320,
    professions: ["backend", "fullstack", "qa"],
  },
];
