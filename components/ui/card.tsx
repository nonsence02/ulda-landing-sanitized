import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * Base card container used for highlight blocks, summaries, and content panels.
 */
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-2xl border bg-card text-card-foreground shadow-sm transition-colors duration-200",
      className
    )}
    {...props}
  />
))

Card.displayName = "Card"

/**
 * Card header wrapper for titles and leading metadata.
 */
const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col space-y-2 p-5 sm:p-6", className)} {...props} />
))

CardHeader.displayName = "CardHeader"

/**
 * Semantic title element used inside card headers.
 */
const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => (
  <h3 ref={ref} className={cn("text-xl font-semibold leading-tight tracking-tight sm:text-2xl", className)} {...props} />
))

CardTitle.displayName = "CardTitle"

/**
 * Content wrapper that keeps internal card spacing consistent.
 */
const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-5 pt-0 sm:p-6 sm:pt-0", className)} {...props} />
))

CardContent.displayName = "CardContent"

export { Card, CardHeader, CardTitle, CardContent }
