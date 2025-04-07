"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Error({
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
    <div className="flex min-h-screen items-center justify-center">
      <div className="container flex max-w-md flex-col items-center text-center">
        <h2 className="text-2xl font-bold mb-4">Une erreur est survenue</h2>
        <p className="text-muted-foreground mb-8">
          Nous nous excusons pour ce désagrément. Notre équipe a été notifiée.
        </p>
        <Button onClick={() => reset()}>Réessayer</Button>
      </div>
    </div>
  )
}