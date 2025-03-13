
import { useState } from "react";
import { 
  ExternalLink, 
  ThumbsUp, 
  Bookmark,
  BookmarkCheck 
} from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface ResourceCardProps {
  title: string;
  description: string;
  url: string;
  category: string;
  type: "free" | "paid" | "freemium";
  difficulty: "beginner" | "intermediate" | "advanced";
  votes: number;
}

export default function ResourceCard({
  title,
  description,
  url,
  category,
  type,
  difficulty,
  votes: initialVotes,
}: ResourceCardProps) {
  const [votes, setVotes] = useState(initialVotes);
  const [hasVoted, setHasVoted] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleVote = () => {
    if (!hasVoted) {
      setVotes(votes + 1);
      setHasVoted(true);
    }
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const difficultyColor = {
    beginner: "bg-green-500/10 text-green-600 dark:bg-green-500/20 dark:text-green-400",
    intermediate: "bg-yellow-500/10 text-yellow-600 dark:bg-yellow-500/20 dark:text-yellow-400",
    advanced: "bg-red-500/10 text-red-600 dark:bg-red-500/20 dark:text-red-400",
  };

  const typeColor = {
    free: "bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400",
    paid: "bg-purple-500/10 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400",
    freemium: "bg-teal-500/10 text-teal-600 dark:bg-teal-500/20 dark:text-teal-400",
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 ease-out-expo hover:shadow-soft dark:hover:shadow-soft-light border-border/50 h-full flex flex-col animate-scale-in">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <Badge variant="outline" className="mb-2 capitalize">
              {category}
            </Badge>
            <CardTitle className="text-xl font-semibold line-clamp-1">{title}</CardTitle>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full ml-2 -mt-1"
                  onClick={handleBookmark}
                >
                  {isBookmarked ? (
                    <BookmarkCheck className="h-5 w-5 text-primary" />
                  ) : (
                    <Bookmark className="h-5 w-5" />
                  )}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{isBookmarked ? "Remove bookmark" : "Bookmark resource"}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <CardDescription className="line-clamp-2 text-balance">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2 flex-grow">
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className={`${typeColor[type]}`}>
            {type}
          </Badge>
          <Badge variant="secondary" className={`${difficultyColor[difficulty]}`}>
            {difficulty}
          </Badge>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-2 border-t border-border/40">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant={hasVoted ? "default" : "outline"}
                size="sm"
                className="gap-1 transition-all duration-300 ease-out-expo"
                onClick={handleVote}
                disabled={hasVoted}
              >
                <ThumbsUp className="h-4 w-4" />
                <span>{votes}</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{hasVoted ? "Already voted" : "Upvote this resource"}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="gap-1 transition-all duration-300 ease-out-expo"
                asChild
              >
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <span>Visit</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Open resource in new tab</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardFooter>
    </Card>
  );
}
