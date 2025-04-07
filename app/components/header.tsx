"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { ExternalLink, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"

export function Header() {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-40">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="text-xl font-bold">
            Ni Wakati
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link 
              href="/"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary"
              )}
            >
              Accueil
            </Link>
            <Link 
              href="/activites"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary"
              )}
            >
              Activités
            </Link>
            <Link 
              href="/impact"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary"
              )}
            >
              Notre impact
            </Link>
            <Link 
              href="https://blog.ni-wakati.be"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary"
              )}
            >
              Actus
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Link 
            href="/faire-un-don"
            className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium"
          >
            Faire un don
          </Link>
        </div>
      </div>
    </header>
  )
}