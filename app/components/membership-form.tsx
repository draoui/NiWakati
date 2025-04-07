"use client"

import { useEffect } from "react"

export function MembershipForm() {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://js.hsforms.net/forms/embed/49152515.js"
    script.async = true
    script.defer = true
    
    script.onload = () => {
      // @ts-ignore
      if (window.hbspt) {
        // @ts-ignore
        window.hbspt.forms.create({
          region: "na1",
          portalId: "49152515",
          formId: "59f7d522-8a3e-42e5-8f6d-45b4ed2a409d",
          target: "#hubspot-form-container"
        })
      }
    }
    
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div 
      id="hubspot-form-container" 
      className="min-h-[400px]"
    />
  )
}