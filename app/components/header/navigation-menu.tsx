"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

export function NavigationMenu() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-6">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === item.href ? "text-primary" : "text-foreground/60",
              item.external && "flex items-center"
            )}
            {...(item.external && {
              target: "_blank",
              rel: "noopener noreferrer",
            })}
          >
            {item.label}
            {item.external && <ExternalLink className="ml-1 h-4 w-4" />}
          </Link>
        ))}
      </nav>

      {/* Mobile Navigation */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <nav className="flex flex-col space-y-4 mt-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-lg font-medium transition-colors hover:text-primary",
                  pathname === item.href ? "text-primary" : "text-foreground/60"
                )}
                onClick={() => setIsOpen(false)}
                {...(item.external && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
              >
                <span className="flex items-center">
                  {item.label}
                  {item.external && <ExternalLink className="ml-2 h-4 w-4" />}
                </span>
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <Button className="w-full" asChild>
                <Link href="/donate">Faire un don</Link>
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/volunteer">Devenir Bénévole</Link>
              </Button>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </>
  )
}

const navItems = [
  { href: "/about", label: "À propos" },
  { href: "/activities", label: "Activités" },
  { href: "https://blog.ni-wakati.be", label: "Actualités", external: true },
  { href: "/contact", label: "Contact" },
]