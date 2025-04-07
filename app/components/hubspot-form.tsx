"use client"

import { useEffect } from "react"

interface HubSpotFormProps {
  region: string
  portalId: string
  formId: string
}

export function HubSpotForm({ region, portalId, formId }: HubSpotFormProps) {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = `https://js.hsforms.net/forms/embed/${portalId}.js`
    script.async = true
    script.defer = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [portalId])

  return (
    <div
      className="hs-form-frame"
      data-region={region}
      data-form-id={formId}
      data-portal-id={portalId}
      role="form"
      aria-label="Formulaire HubSpot"
    />
  )
}