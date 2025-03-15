
import React from 'react';
import { faqItems } from '@/utils/data';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { QuestionMarkCircle } from 'lucide-react';

const FAQSection = () => {
  return (
    <section className="py-8 px-4 md:px-8 lg:px-12 max-w-5xl mx-auto">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
          <QuestionMarkCircle className="h-7 w-7" />
          <span>Developer FAQ</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Common questions and answers about development, APIs, and programming resources
        </p>
      </div>
      
      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger className="text-left font-medium">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQSection;
