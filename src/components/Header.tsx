
import { BarChart3Icon, Code } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  return (
    <div className="flex h-16 w-full border-b bg-background">
      <div className="container flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link to="/">
            <Button variant="link" size="sm">
              oussRessourceFinder
            </Button>
          </Link>
          
          <div className="hidden sm:flex space-x-1">
            <Link to="/">
              <Button variant="ghost" size="sm">
                Home
              </Button>
            </Link>
            
            <Link to="/developers">
              <Button variant="ghost" size="sm" className="gap-2">
                <Code className="h-4 w-4" />
                <span>Developers</span>
              </Button>
            </Link>
            
            <Link to="/analytics">
              <Button variant="ghost" size="sm" className="gap-2">
                <BarChart3Icon className="h-4 w-4" />
                <span>Analytics</span>
              </Button>
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  Contact
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem asChild>
                  <a
                    href="https://github.com/ousstheprogrammer"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a
                    href="https://www.linkedin.com/in/oussama-zouini-48a036280/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <a href="mailto:oussamazouini42@gmail.com">
                    Email
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link to="/login">
              <Button size="sm">Login</Button>
            </Link>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <div className="sm:hidden">
            <Link to="/login">
              <Button size="sm">Login</Button>
            </Link>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
