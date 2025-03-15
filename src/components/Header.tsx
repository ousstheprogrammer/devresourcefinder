
import ThemeToggle from "./ThemeToggle";
import { LogIn, BarChart3Icon, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container-custom flex h-16 items-center justify-between">
        <motion.div 
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="flex items-center gap-2">
            <motion.div 
              className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-primary-foreground font-bold">O</span>
            </motion.div>
            <span className="font-medium text-lg tracking-tight">oussRessourceFinder</span>
          </Link>
        </motion.div>
        <motion.div 
          className="flex items-center gap-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/analytics">
            <Button variant="ghost" size="sm" className="gap-2">
              <BarChart3Icon className="h-4 w-4" />
              <span>Analytics</span>
            </Button>
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-2">
                <Mail className="h-4 w-4" />
                <span>Contact</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Contact Information</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild className="cursor-pointer">
                <a href="https://github.com/ousstheprogrammer" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="cursor-pointer">
                <a href="https://www.linkedin.com/in/oussama-zouini-48a036280/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="cursor-pointer">
                <a href="mailto:oussamazouini42@gmail.com" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>oussamazouini42@gmail.com</span>
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Link to="/login">
            <Button variant="outline" size="sm" className="gap-2">
              <LogIn className="h-4 w-4" />
              <span>Login</span>
            </Button>
          </Link>
          <ThemeToggle />
        </motion.div>
      </div>
    </header>
  );
}
