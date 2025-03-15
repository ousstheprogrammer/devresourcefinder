
import React from 'react';
import { apiSuggestions } from '@/utils/data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Code, ExternalLink } from 'lucide-react';

const ApiSuggestionsSection = () => {
  return (
    <section className="py-8 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
            <Code className="h-7 w-7" />
            <span>Recommended APIs</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Powerful APIs to enhance your applications and streamline development
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {apiSuggestions.map((api) => (
            <Card key={api.id} className="flex flex-col h-full">
              <CardHeader>
                <CardTitle className="text-xl">{api.title}</CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <Badge variant={api.type === 'free' ? 'default' : api.type === 'paid' ? 'secondary' : 'outline'}>
                    {api.type}
                  </Badge>
                  <Badge variant="outline">{api.difficulty}</Badge>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground text-sm">
                  {api.description}
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <a href={api.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    <span>View Documentation</span>
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApiSuggestionsSection;
