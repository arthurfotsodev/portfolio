import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import InputSearch from "./input-search";
import { SunDim } from "lucide-react";
import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa";
import { site } from "@/lib/site";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-40 h-nav border-b border-border bg-bg/90 backdrop-blur">
      <div className="mx-auto flex h-full max-w-5xl py-4 items-center justify-between gap-6 px-4">
        <div className="flex items-center space-x-4 gap-4">
          <Link href="/" className="text-base">
            Arthur_
          </Link>
          <NavigationMenu>
            <NavigationMenuList className="text-muted-foreground">
              {site.nav.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <NavigationMenuLink
                    render={<Link href={link.href} />}
                    className={navigationMenuTriggerStyle()}
                  >
                    {link.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center space-x-4 gap-4">
          <InputSearch />
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <SunDim />
            </Button>
            <Button variant="ghost" size="icon">
              <FaGithub />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
