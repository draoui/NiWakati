"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center">
      <h2 className="mb-4 text-2xl font-bold">Une erreur est survenue</h2>
      <p className="mb-6 text-muted-foreground">
        Nous nous excusons pour ce désagrément.
      </p>
      <Button onClick={reset}>Réessayer</Button>
    </div>
  )
}