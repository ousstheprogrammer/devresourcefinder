
import { useState } from "react";
import { BarChart3Icon, Code, Code2, Menu } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ThemeToggle from "@/components/ThemeToggle";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="md:hidden flex items-center">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="mr-2">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[250px] sm:w-[300px]">
          <div className="flex flex-col gap-4 mt-8">
            <Link to="/" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" size="sm" className="w-full justify-start">
                Home
              </Button>
            </Link>
            
            <Link to="/developers" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" size="sm" className="w-full justify-start gap-2">
                <Code className="h-4 w-4" />
                <span>Developers</span>
              </Button>
            </Link>
            
            <Link to="/programming-languages" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" size="sm" className="w-full justify-start gap-2">
                <Code2 className="h-4 w-4" />
                <span>Programming Languages</span>
              </Button>
            </Link>
            
            <Link to="/roadmaps" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" size="sm" className="w-full justify-start gap-2">
                <BarChart3Icon className="h-4 w-4" />
                <span>Roadmaps</span>
              </Button>
            </Link>
            
            <Link to="/analytics" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" size="sm" className="w-full justify-start gap-2">
                <BarChart3Icon className="h-4 w-4" />
                <span>Analytics</span>
              </Button>
            </Link>
            
            <div className="space-y-2">
              <p className="px-3 text-sm font-medium">Contact</p>
              <a
                href="https://github.com/ousstheprogrammer"
                target="_blank"
                rel="noreferrer"
                className="block px-3 py-2 text-sm hover:bg-accent rounded-md"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/oussama-zouini-48a036280/"
                target="_blank"
                rel="noreferrer"
                className="block px-3 py-2 text-sm hover:bg-accent rounded-md"
              >
                LinkedIn
              </a>
              <a 
                href="mailto:oussamazouini42@gmail.com"
                className="block px-3 py-2 text-sm hover:bg-accent rounded-md"
              >
                Email
              </a>
            </div>
            
            <Link to="/login" onClick={() => setIsOpen(false)}>
              <Button size="sm" className="w-full">Login</Button>
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      <ThemeToggle />
    </div>
  );
}
