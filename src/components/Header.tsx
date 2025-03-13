
import ThemeToggle from "./ThemeToggle";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container-custom flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold">D</span>
          </div>
          <span className="font-medium text-lg tracking-tight">DevResourceFinder</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
