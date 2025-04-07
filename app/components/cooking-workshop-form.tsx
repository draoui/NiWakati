"use client"

import { useEffect } from "react"

export function CookingWorkshopForm() {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "//js.hsforms.net/forms/embed/v2.js"
    script.charset = "utf-8"
    script.type = "text/javascript"
    script.async = true
    
    script.onload = () => {
      // @ts-ignore
      if (window.hbspt) {
        // @ts-ignore
        window.hbspt.forms.create({
          portalId: "49152515",
          formId: "7abe66da-e902-4a33-a154-ff8d1393c8bc",
          region: "na1"
        })
      }
    }
    
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div id="hubspot-form-container" className="min-h-[400px]" />
  )
}