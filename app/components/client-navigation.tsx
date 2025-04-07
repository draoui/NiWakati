"use client"

import { Suspense } from "react"
import { usePathname, useSearchParams } from "next/navigation"

function NavigationEvents() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  return null
}

export function ClientNavigation() {
  return (
    <Suspense fallback={null}>
      <NavigationEvents />
    </Suspense>
  )
}