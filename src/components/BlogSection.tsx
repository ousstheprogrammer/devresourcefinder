
import React from 'react';
import { blogPosts } from '@/utils/data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen } from 'lucide-react';

const BlogSection = () => {
  return (
    <section className="py-8 px-4 md:px-8 lg:px-12 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
            <BookOpen className="h-7 w-7" />
            <span>Developer Blog</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorials and guides for modern web development
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-md transition-shadow">
              {post.imageUrl && (
                <div className="w-full h-48 overflow-hidden">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                <CardDescription className="flex justify-between">
                  <span>{post.publishDate}</span>
                  <span>{post.readTime} read</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground line-clamp-3">{post.summary}</p>
              </CardContent>
              <CardFooter>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <Badge key={index} variant="outline">{tag}</Badge>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
