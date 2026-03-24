"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import { cn } from "@/lib/utils"

/**
 * Shared tooltip provider used to coordinate delayed tooltip behavior.
 */
const TooltipProvider = TooltipPrimitive.Provider
/**
 * Root tooltip primitive re-exported for local UI composition.
 */
const Tooltip = TooltipPrimitive.Root
/**
 * Trigger primitive used to bind tooltips to interactive controls.
 */
const TooltipTrigger = TooltipPrimitive.Trigger

/**
 * Styled tooltip content wrapper used across interactive helper elements.
 */
const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md", className)}
      {...props}
    />
  </TooltipPrimitive.Portal>
))

TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
