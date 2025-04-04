
import { Brand } from "./navigation/Brand";
import { DesktopNavigation } from "./navigation/DesktopNavigation";
import { MobileNavigation } from "./navigation/MobileNavigation";

export default function Header() {
  return (
    <div className="flex h-16 w-full border-b bg-background sticky top-0 z-50">
      <div className="container flex items-center justify-between">
        <Brand />
        <DesktopNavigation />
        <MobileNavigation />
      </div>
    </div>
  );
}
