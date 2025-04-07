"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface MotionDivProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function MotionDiv({ children, className, delay = 0 }: MotionDivProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}