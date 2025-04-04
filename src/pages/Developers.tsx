
import React from 'react';
import FAQSection from '@/components/FAQSection';
import BlogSection from '@/components/BlogSection';
import ApiSuggestionsSection from '@/components/ApiSuggestionsSection';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { HelpCircle, BookOpen, Code, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// Famous developers and CEOs with their quotes
const famousPersons = [
  {
    id: 1,
    name: "Linus Torvalds",
    role: "Creator of Linux & Git",
    quote: "Talk is cheap. Show me the code.",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: 2,
    name: "Ada Lovelace",
    role: "First Computer Programmer",
    quote: "That brain of mine is something more than merely mortal; as time will show.",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: 3,
    name: "Steve Jobs",
    role: "Co-founder of Apple",
    quote: "Innovation distinguishes between a leader and a follower.",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: 4,
    name: "Grace Hopper",
    role: "Computer Scientist & Navy Admiral",
    quote: "The most dangerous phrase in the language is, 'We've always done it this way.'",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: 5,
    name: "Bill Gates",
    role: "Co-founder of Microsoft",
    quote: "Your most unhappy customers are your greatest source of learning.",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: 6,
    name: "Mark Zuckerberg",
    role: "Co-founder of Facebook/Meta",
    quote: "Move fast and break things. Unless you are breaking stuff, you are not moving fast enough.",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=150&h=150"
  }
];

const Developers = () => {
  return (
    <div className="container mx-auto py-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Developer Resources</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Everything you need to know about development, APIs, and programming resources
        </p>
      </div>

      {/* Famous Developers & CEOs Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Famous Developers & CEOs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {famousPersons.map((person) => (
            <Card key={person.id} className="overflow-hidden">
              <div className="flex items-start p-6">
                <img 
                  src={person.imageUrl} 
                  alt={person.name} 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <CardTitle className="text-xl">{person.name}</CardTitle>
                  <CardDescription className="mb-2">{person.role}</CardDescription>
                  <p className="italic text-muted-foreground">"{person.quote}"</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Tabs defaultValue="faq" className="w-full max-w-7xl mx-auto">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="faq" className="flex items-center gap-2">
            <HelpCircle className="h-4 w-4" />
            <span>FAQ</span>
          </TabsTrigger>
          <TabsTrigger value="blog" className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            <span>Blog</span>
          </TabsTrigger>
          <TabsTrigger value="apis" className="flex items-center gap-2">
            <Code className="h-4 w-4" />
            <span>API Suggestions</span>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="faq">
          <FAQSection />
        </TabsContent>
        <TabsContent value="blog">
          <BlogSection />
        </TabsContent>
        <TabsContent value="apis">
          <ApiSuggestionsSection />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Developers;
