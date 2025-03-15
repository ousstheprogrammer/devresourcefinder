
import React from 'react';
import FAQSection from '@/components/FAQSection';
import BlogSection from '@/components/BlogSection';
import ApiSuggestionsSection from '@/components/ApiSuggestionsSection';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { HelpCircle, BookOpen, Code } from 'lucide-react';

const Developers = () => {
  return (
    <div className="container mx-auto py-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Developer Resources</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Everything you need to know about development, APIs, and programming resources
        </p>
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
