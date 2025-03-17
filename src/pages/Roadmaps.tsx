import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import { professions } from "@/utils/constants";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Compass, BookOpen, Award, Code, ChevronRight, ExternalLink, Youtube } from "lucide-react";
import RoadmapVisualization from "@/components/RoadmapVisualization";
import { getRoadmapImage } from "@/utils/roadmapImages";
import { Button } from "@/components/ui/button";

// Roadmap data types
interface RoadmapStep {
  id: string;
  title: string;
  description: string;
  resources?: string[];
  level: "beginner" | "intermediate" | "advanced";
}

interface RoadmapSection {
  id: string;
  title: string;
  description: string;
  steps: RoadmapStep[];
}

interface Roadmap {
  profession: string;
  sections: RoadmapSection[];
}

// Sample roadmap data
const roadmaps: Record<string, Roadmap> = {
  frontend: {
    profession: "Frontend Developer",
    sections: [
      {
        id: "basics",
        title: "Web Development Fundamentals",
        description: "Learn the core building blocks of web development",
        steps: [
          {
            id: "html",
            title: "HTML",
            description: "Learn the structure of web pages with semantic HTML",
            resources: ["MDN Web Docs", "freeCodeCamp"],
            level: "beginner"
          },
          {
            id: "css",
            title: "CSS",
            description: "Style your web pages with CSS",
            resources: ["MDN Web Docs", "CSS-Tricks"],
            level: "beginner"
          },
          {
            id: "javascript",
            title: "JavaScript",
            description: "Add interactivity to your web pages",
            resources: ["JavaScript.info", "Eloquent JavaScript"],
            level: "beginner"
          }
        ]
      },
      {
        id: "frameworks",
        title: "Modern Frontend Frameworks",
        description: "Learn popular frontend frameworks",
        steps: [
          {
            id: "react",
            title: "React",
            description: "Learn the most popular frontend library",
            resources: ["React Documentation", "React for Beginners"],
            level: "intermediate"
          },
          {
            id: "state-management",
            title: "State Management",
            description: "Learn to manage state in frontend applications",
            resources: ["Redux", "Zustand", "MobX"],
            level: "intermediate"
          },
          {
            id: "typescript",
            title: "TypeScript",
            description: "Add type safety to your JavaScript code",
            resources: ["TypeScript Handbook", "TypeScript Deep Dive"],
            level: "intermediate"
          }
        ]
      },
      {
        id: "advanced",
        title: "Advanced Frontend Development",
        description: "Master advanced frontend concepts and techniques",
        steps: [
          {
            id: "performance",
            title: "Web Performance",
            description: "Optimize the performance of your web applications",
            resources: ["Web.dev", "Frontend Masters"],
            level: "advanced"
          },
          {
            id: "testing",
            title: "Frontend Testing",
            description: "Learn to write tests for your frontend code",
            resources: ["Testing Library", "Jest"],
            level: "advanced"
          },
          {
            id: "accessibility",
            title: "Web Accessibility",
            description: "Make your web applications accessible to everyone",
            resources: ["A11y Project", "WAI-ARIA"],
            level: "advanced"
          }
        ]
      }
    ]
  },
  backend: {
    profession: "Backend Developer",
    sections: [
      {
        id: "basics",
        title: "Backend Fundamentals",
        description: "Learn the core concepts of backend development",
        steps: [
          {
            id: "programming",
            title: "Programming Languages",
            description: "Learn backend programming languages like Node.js, Python, or Java",
            resources: ["Node.js Documentation", "Python.org"],
            level: "beginner"
          },
          {
            id: "databases",
            title: "Databases",
            description: "Learn SQL and NoSQL databases",
            resources: ["PostgreSQL", "MongoDB University"],
            level: "beginner"
          },
          {
            id: "apis",
            title: "API Design",
            description: "Learn to design and implement APIs",
            resources: ["RESTful API Design", "GraphQL"],
            level: "beginner"
          }
        ]
      },
      {
        id: "frameworks",
        title: "Backend Frameworks",
        description: "Learn popular backend frameworks",
        steps: [
          {
            id: "express",
            title: "Express.js",
            description: "Learn the most popular Node.js framework",
            resources: ["Express Documentation", "Express.js Guide"],
            level: "intermediate"
          },
          {
            id: "django",
            title: "Django",
            description: "Learn the Python web framework",
            resources: ["Django Documentation", "Django for Beginners"],
            level: "intermediate"
          },
          {
            id: "spring",
            title: "Spring Boot",
            description: "Learn the Java framework for building applications",
            resources: ["Spring Documentation", "Spring Guides"],
            level: "intermediate"
          }
        ]
      },
      {
        id: "advanced",
        title: "Advanced Backend Concepts",
        description: "Master advanced backend concepts",
        steps: [
          {
            id: "security",
            title: "Web Security",
            description: "Learn to secure your backend applications",
            resources: ["OWASP", "Web Security Academy"],
            level: "advanced"
          },
          {
            id: "performance",
            title: "Performance Optimization",
            description: "Optimize the performance of your backend applications",
            resources: ["High Performance Node.js", "SQL Performance Explained"],
            level: "advanced"
          },
          {
            id: "architecture",
            title: "System Design",
            description: "Learn to design scalable backend systems",
            resources: ["System Design Primer", "Designing Data-Intensive Applications"],
            level: "advanced"
          }
        ]
      }
    ]
  },
  fullstack: {
    profession: "Fullstack Developer",
    sections: [
      {
        id: "frontend",
        title: "Frontend Development",
        description: "Learn frontend technologies",
        steps: [
          {
            id: "html-css-js",
            title: "HTML, CSS, and JavaScript",
            description: "Learn the core frontend technologies",
            resources: ["MDN Web Docs", "freeCodeCamp"],
            level: "beginner"
          },
          {
            id: "frontend-frameworks",
            title: "Frontend Frameworks",
            description: "Learn React, Vue, or Angular",
            resources: ["React Documentation", "Vue.js Guide"],
            level: "intermediate"
          }
        ]
      },
      {
        id: "backend",
        title: "Backend Development",
        description: "Learn backend technologies",
        steps: [
          {
            id: "server-side",
            title: "Server-side Programming",
            description: "Learn Node.js, Python, or another backend language",
            resources: ["Node.js Documentation", "Python.org"],
            level: "intermediate"
          },
          {
            id: "databases",
            title: "Databases",
            description: "Learn SQL and NoSQL databases",
            resources: ["PostgreSQL", "MongoDB University"],
            level: "intermediate"
          }
        ]
      },
      {
        id: "devops",
        title: "DevOps and Deployment",
        description: "Learn to deploy and manage applications",
        steps: [
          {
            id: "deployment",
            title: "Deployment",
            description: "Learn to deploy applications to production",
            resources: ["Vercel", "Netlify", "AWS"],
            level: "advanced"
          },
          {
            id: "ci-cd",
            title: "CI/CD",
            description: "Learn continuous integration and deployment",
            resources: ["GitHub Actions", "Jenkins"],
            level: "advanced"
          }
        ]
      }
    ]
  }
};

// YouTube resources by profession
const youtubeResources: Record<string, { channel: string; description: string; url: string }[]> = {
  fullstack: [
    {
      channel: "Traversy Media",
      description: "Covers full-stack development, including JavaScript, React, Node.js, and more.",
      url: "https://www.youtube.com/c/TraversyMedia"
    },
    {
      channel: "The Net Ninja",
      description: "Amazing tutorials on MERN, Next.js, Vue, and more.",
      url: "https://www.youtube.com/c/TheNetNinja"
    },
    {
      channel: "Academind",
      description: "Covers React, Node.js, databases, and full-stack projects.",
      url: "https://www.youtube.com/c/Academind"
    },
    {
      channel: "Web Dev Simplified",
      description: "Deep dives into JavaScript and web performance.",
      url: "https://www.youtube.com/c/WebDevSimplified"
    }
  ],
  devops: [
    {
      channel: "TechWorld with Nana",
      description: "Kubernetes, Docker, Terraform, and CI/CD explained simply.",
      url: "https://www.youtube.com/c/TechWorldwithNana"
    },
    {
      channel: "KodeKloud",
      description: "Hands-on DevOps, cloud, and automation tutorials.",
      url: "https://www.youtube.com/c/KodeKloud"
    },
    {
      channel: "ThePrimeagen",
      description: "Linux, Vim, and high-performance DevOps tools.",
      url: "https://www.youtube.com/c/ThePrimeagen"
    },
    {
      channel: "DevOps Toolkit",
      description: "CI/CD, Kubernetes, Helm, and more.",
      url: "https://www.youtube.com/c/DevOpsToolkit"
    }
  ],
  data: [
    {
      channel: "Ken Jee",
      description: "Career advice and projects for aspiring data scientists.",
      url: "https://www.youtube.com/c/KenJee1"
    },
    {
      channel: "StatQuest with Josh Starmer",
      description: "ML and statistics explained clearly.",
      url: "https://www.youtube.com/c/joshstarmer"
    },
    {
      channel: "Data School",
      description: "Pandas, Scikit-learn, and Python for data science.",
      url: "https://www.youtube.com/c/dataschool"
    },
    {
      channel: "Krish Naik",
      description: "Python, ML, and deep learning tutorials.",
      url: "https://www.youtube.com/user/krishnaik06"
    }
  ],
  mobile: [
    {
      channel: "Flutter",
      description: "Official channel with Flutter tutorials.",
      url: "https://www.youtube.com/c/flutterdev"
    },
    {
      channel: "Academind (React Native)",
      description: "React Native crash courses.",
      url: "https://www.youtube.com/c/Academind"
    },
    {
      channel: "CodeWithChris",
      description: "iOS development using Swift.",
      url: "https://www.youtube.com/c/CodeWithChris"
    },
    {
      channel: "Android Developers",
      description: "Official Android dev content.",
      url: "https://www.youtube.com/c/AndroidDevelopers"
    }
  ],
  ai: [
    {
      channel: "DeepLearning.AI",
      description: "AI news and hands-on ML tutorials.",
      url: "https://www.youtube.com/c/Deeplearningai"
    },
    {
      channel: "Sentdex",
      description: "Python, TensorFlow, and ML projects.",
      url: "https://www.youtube.com/c/sentdex"
    },
    {
      channel: "Two Minute Papers",
      description: "AI research breakdowns in an easy format.",
      url: "https://www.youtube.com/c/TwoMinutePapers"
    },
    {
      channel: "Yannic Kilcher",
      description: "AI research papers and LLM discussions.",
      url: "https://www.youtube.com/c/YannicKilcher"
    }
  ],
  security: [
    {
      channel: "John Hammond",
      description: "Cybersecurity, CTF challenges, and hacking.",
      url: "https://www.youtube.com/c/JohnHammond010"
    },
    {
      channel: "HackerSploit",
      description: "Ethical hacking and penetration testing.",
      url: "https://www.youtube.com/c/HackerSploit"
    },
    {
      channel: "LiveOverflow",
      description: "Deep dives into hacking techniques.",
      url: "https://www.youtube.com/c/LiveOverflow"
    },
    {
      channel: "The Cyber Mentor",
      description: "Practical ethical hacking guides.",
      url: "https://www.youtube.com/c/TheCyberMentor"
    }
  ],
  qa: [
    {
      channel: "Software Testing Mentor",
      description: "Manual and automation testing.",
      url: "https://www.youtube.com/c/SoftwareTestingMentor"
    },
    {
      channel: "Automation Step by Step",
      description: "Selenium, API testing, and automation.",
      url: "https://www.youtube.com/c/AutomationStepbyStep"
    },
    {
      channel: "LambdaTest",
      description: "Advanced test automation strategies.",
      url: "https://www.youtube.com/c/LambdaTest"
    },
    {
      channel: "Ministry of Testing",
      description: "QA discussions and best practices.",
      url: "https://www.youtube.com/c/MinistryofTesting"
    }
  ],
  ux: [
    {
      channel: "DesignCourse",
      description: "UI/UX tutorials with Figma, Webflow, and more.",
      url: "https://www.youtube.com/c/DesignCourse"
    },
    {
      channel: "Flux Academy",
      description: "Web design and UX strategies.",
      url: "https://www.youtube.com/c/FluxAcademy"
    },
    {
      channel: "Gareth David Studio",
      description: "Adobe tools and UI/UX fundamentals.",
      url: "https://www.youtube.com/c/GarethDavid"
    },
    {
      channel: "Figma",
      description: "Official channel with design tutorials.",
      url: "https://www.youtube.com/c/Figmadesign"
    }
  ],
  frontend: [
    {
      channel: "Traversy Media",
      description: "HTML, CSS, JavaScript and modern frontend frameworks.",
      url: "https://www.youtube.com/c/TraversyMedia"
    },
    {
      channel: "Kevin Powell",
      description: "CSS tricks and techniques explained clearly.",
      url: "https://www.youtube.com/kevinpowell"
    },
    {
      channel: "Fireship",
      description: "Short and informative videos about modern web development.",
      url: "https://www.youtube.com/c/Fireship"
    },
    {
      channel: "Codevolution",
      description: "In-depth React, Angular and Vue tutorials.",
      url: "https://www.youtube.com/c/Codevolution"
    }
  ],
  backend: [
    {
      channel: "Traversy Media",
      description: "Node.js, Express, MongoDB and other backend technologies.",
      url: "https://www.youtube.com/c/TraversyMedia"
    },
    {
      channel: "Academind",
      description: "Node.js, Express, databases, and APIs.",
      url: "https://www.youtube.com/c/Academind"
    },
    {
      channel: "The Net Ninja",
      description: "Backend frameworks and database tutorials.",
      url: "https://www.youtube.com/c/TheNetNinja"
    },
    {
      channel: "Hussein Nasser",
      description: "Databases, system design, and backend engineering.",
      url: "https://www.youtube.com/c/HusseinNasser-software-engineering"
    }
  ]
};

// Add basic structure for other professions
["devops", "data", "mobile", "ai", "security", "qa", "ux"].forEach(prof => {
  if (!roadmaps[prof]) {
    roadmaps[prof] = {
      profession: professions.find(p => p.value === prof)?.label || "",
      sections: [
        {
          id: "basics",
          title: "Getting Started",
          description: `Learn the fundamentals of ${prof} development`,
          steps: [
            {
              id: "core-concepts",
              title: "Core Concepts",
              description: `Understanding the core concepts of ${prof}`,
              resources: ["Resource 1", "Resource 2"],
              level: "beginner"
            }
          ]
        },
        {
          id: "intermediate",
          title: "Intermediate Skills",
          description: `Build upon your ${prof} knowledge`,
          steps: [
            {
              id: "adv-tools",
              title: "Advanced Tools",
              description: `Working with professional ${prof} tools`,
              resources: ["Resource 3", "Resource 4"],
              level: "intermediate"
            }
          ]
        }
      ]
    };
  }
});

// Roadmaps Page Component
const Roadmaps = () => {
  const [selectedProfession, setSelectedProfession] = useState("frontend");
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container-custom py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">
            <Compass className="h-8 w-8 text-primary" />
            Developer Roadmaps
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No gatekeeping here. Explore clear step-by-step paths to learn any developer role from beginner to advanced.
          </p>
        </motion.div>

        <Tabs 
          defaultValue="frontend" 
          value={selectedProfession}
          onValueChange={setSelectedProfession}
          className="w-full"
        >
          <div className="mb-8">
            <TabsList className="w-full h-auto flex flex-wrap gap-2 bg-transparent justify-center">
              {professions.map(profession => (
                <TabsTrigger
                  key={profession.value}
                  value={profession.value}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2"
                >
                  {profession.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {Object.entries(roadmaps).map(([key, roadmap]) => (
            <TabsContent key={key} value={key} className="mt-6">
              <div className="space-y-12">
                <div>
                  <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                    <Code className="h-6 w-6 text-primary" />
                    {roadmap.profession} Roadmap
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Follow this roadmap to become a proficient {roadmap.profession.toLowerCase()}.
                  </p>
                  
                  {/* Roadmap Image */}
                  <div className="mb-12 rounded-lg overflow-hidden border border-border shadow-md">
                    <img 
                      src={getRoadmapImage(key)} 
                      alt={`${roadmap.profession} Roadmap`}
                      className="w-full object-cover object-center"
                    />
                  </div>
                </div>

                {/* YouTube Resources Section */}
                {youtubeResources[key] && youtubeResources[key].length > 0 && (
                  <div className="bg-accent/20 p-6 rounded-lg border border-border mb-12">
                    <div className="flex items-center gap-3 mb-6">
                      <Youtube className="h-6 w-6 text-red-500" />
                      <h3 className="text-2xl font-semibold">Recommended YouTube Resources</h3>
                    </div>
                    
                    <div className="grid gap-4 md:grid-cols-2">
                      {youtubeResources[key].map((resource, index) => (
                        <Card key={index} className="overflow-hidden">
                          <CardHeader className="bg-accent/30 pb-3">
                            <CardTitle className="flex justify-between items-center">
                              <span>{resource.channel}</span>
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                onClick={() => window.open(resource.url, '_blank')}
                                className="text-primary hover:text-primary/80"
                              >
                                <ExternalLink className="h-4 w-4 mr-1" /> Visit
                              </Button>
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="pt-4">
                            <CardDescription>{resource.description}</CardDescription>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {roadmap.sections.map((section, index) => (
                  <div key={section.id} className="relative">
                    {index > 0 && (
                      <div className="absolute top-0 bottom-0 left-6 -mt-8 w-0.5 bg-border" 
                           style={{ height: "calc(100% + 2rem)" }} />
                    )}
                    
                    <div className="relative">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                          <BookOpen className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-semibold">{section.title}</h3>
                          <p className="text-muted-foreground">{section.description}</p>
                        </div>
                      </div>
                      
                      <div className="ml-6 space-y-8">
                        {section.steps.map(step => (
                          <Card key={step.id} className="relative overflow-hidden border border-border">
                            <div className={`absolute top-0 left-0 w-1 h-full ${
                              step.level === 'beginner' ? 'bg-green-500' : 
                              step.level === 'intermediate' ? 'bg-blue-500' : 
                              'bg-purple-500'
                            }`} />
                            
                            <CardHeader className="pb-2">
                              <div className="flex items-center justify-between">
                                <CardTitle className="text-xl">{step.title}</CardTitle>
                                <Badge variant={
                                  step.level === 'beginner' ? 'outline' : 
                                  step.level === 'intermediate' ? 'secondary' : 
                                  'destructive'
                                }>
                                  {step.level}
                                </Badge>
                              </div>
                              <CardDescription>{step.description}</CardDescription>
                            </CardHeader>
                            
                            {step.resources && step.resources.length > 0 && (
                              <CardContent>
                                <p className="font-medium text-sm mb-2">Recommended Resources:</p>
                                <ul className="list-disc ml-5 space-y-1">
                                  {step.resources.map((resource, i) => (
                                    <li key={i} className="text-sm text-muted-foreground">{resource}</li>
                                  ))}
                                </ul>
                              </CardContent>
                            )}
                          </Card>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
                
                <div className="bg-accent/30 p-6 rounded-lg border border-border mt-12">
                  <div className="flex items-center gap-3 mb-3">
                    <Award className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-medium">Continue Learning</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    This roadmap is a starting point. Technology constantly evolves, so keep learning and stay updated with industry trends.
                  </p>
                  <div className="flex items-center text-sm">
                    <ChevronRight className="h-4 w-4 mr-1 text-primary" />
                    <span>Check our resources section for more learning materials</span>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </main>
      
      <footer className="border-t border-border/40 py-6 mt-12">
        <div className="container-custom text-center text-sm text-muted-foreground">
          <p>NO GATEKEEPING &copy; {new Date().getFullYear()}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Roadmaps;
