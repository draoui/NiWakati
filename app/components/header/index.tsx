import { NavigationMenu } from "./navigation-menu"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">Ni Wakati</span>
          </Link>

          <NavigationMenu />

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" asChild>
              <Link href="/volunteer">Devenir Bénévole</Link>
            </Button>
            <Button asChild>
              <Link href="/donate">Faire un don</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}