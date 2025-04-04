
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function Brand() {
  return (
    <div className="flex items-center">
      <Link to="/">
        <Button variant="link" size="sm" className="font-bold text-lg">
          NO GATEKEEPING
        </Button>
      </Link>
    </div>
  );
}
