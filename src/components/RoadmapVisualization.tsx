
import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface RoadmapVisualizationProps {
  steps: {
    id: string;
    title: string;
    description: string;
    level: "beginner" | "intermediate" | "advanced";
  }[];
  className?: string;
}

const RoadmapVisualization = ({ steps, className }: RoadmapVisualizationProps) => {
  return (
    <div className={cn("relative py-10", className)}>
      {/* Main timeline track */}
      <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-border" />
      
      {/* Timeline nodes */}
      <div className="relative space-y-12 md:space-y-24">
        {steps.map((step, index) => (
          <div key={step.id} className="relative grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Line connecting to the main track */}
            <div className="absolute left-1/2 top-6 h-0.5 w-8 -translate-x-1/2 bg-border md:w-1/6" />
            
            {/* Node */}
            <div className="absolute left-1/2 top-6 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-background bg-primary p-1 text-primary-foreground shadow-md">
              <span className="text-sm font-bold">{index + 1}</span>
            </div>
            
            {/* Content box */}
            <div 
              className={`col-span-1 flex flex-col rounded-lg border p-4 shadow-sm md:col-span-2 ${
                index % 2 === 0 ? "md:ml-auto md:mr-[8%]" : "md:mr-auto md:ml-[8%]"
              } w-full md:w-5/12`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">{step.title}</h3>
                <Badge
                  variant={
                    step.level === "beginner" ? "outline" : 
                    step.level === "intermediate" ? "secondary" : 
                    "destructive"
                  }
                >
                  {step.level}
                </Badge>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoadmapVisualization;
