"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export function Nav() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold">AuthTemplate</Link>
        <div className="hidden md:flex items-center gap-6">
          <Link href="/#features" className="text-sm text-muted-foreground hover:text-foreground">Features</Link>
          <Link href="/#pricing" className="text-sm text-muted-foreground hover:text-foreground">Pricing</Link>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? "☀️" : "🌙"}
          </Button>
          <Link href="/login"><Button variant="ghost" size="sm">Login</Button></Link>
          <Link href="/register"><Button size="sm">Get Started</Button></Link>
        </div>
      </div>
    </nav>
  );
}
