
import { BarChart3Icon, Code, Code2 } from "lucide-react";
import { Link } from "react-router-dom";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";

export function DesktopNavigation() {
  return (
    <div className="hidden md:flex items-center space-x-4">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link to="/">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <Link to="/developers">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <Code className="h-4 w-4 mr-2" />
                <span>Developers</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <Link to="/programming-languages">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <Code2 className="h-4 w-4 mr-2" />
                <span>Programming Languages</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <Link to="/roadmaps">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <BarChart3Icon className="h-4 w-4 mr-2" />
                <span>Roadmaps</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <Link to="/analytics">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <BarChart3Icon className="h-4 w-4 mr-2" />
                <span>Analytics</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
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
                    className="flex items-center"
                  >
                    GitHub
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a
                    href="https://www.linkedin.com/in/oussama-zouini-48a036280/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center"
                  >
                    LinkedIn
                  </a>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <a href="mailto:oussamazouini42@gmail.com" className="flex items-center">
                    Email
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      
      <div className="flex items-center gap-2">
        <Link to="/login">
          <Button size="sm">Login</Button>
        </Link>
        <ThemeToggle />
      </div>
    </div>
  );
}
