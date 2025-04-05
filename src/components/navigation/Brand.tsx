
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function Brand() {
  return (
    <div className="flex items-center">
      <Link to="/" className="relative">
        <Button variant="link" size="sm" className="font-bold text-lg">
          NO GATEKEEPING
        </Button>
        <span className="absolute bottom-[-15px] right-0 text-xs text-muted-foreground italic">
          by zouini
        </span>
      </Link>
    </div>
  );
}
