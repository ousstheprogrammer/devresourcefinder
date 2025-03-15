
import { BarChart3Icon, Code, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ThemeToggle from "@/components/ThemeToggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="flex h-16 w-full border-b bg-background sticky top-0 z-50">
      <div className="container flex items-center justify-between">
        {/* Logo/Brand */}
        <div className="flex items-center">
          <Link to="/">
            <Button variant="link" size="sm" className="font-bold text-lg">
              oussRessourceFinder
            </Button>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
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
        
        {/* Mobile Navigation */}
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
      </div>
    </div>
  );
}
