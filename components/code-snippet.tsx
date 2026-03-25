"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { captureError } from "@/lib/errors"
import { createLogger } from "@/lib/logger"

export interface CodeSnippetProps {
  code: string
}

const logger = createLogger("code-snippet")

/**
 * Displays a short terminal-style command snippet with clipboard support.
 *
 * @param props - The command string to render and copy.
 * @returns An interactive command snippet block with tooltip feedback.
 */
export function CodeSnippet({ code }: CodeSnippetProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      logger.info("Command copied to clipboard", { code })
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      captureError(error, {
        module: "code-snippet",
        context: {
          code,
          operation: "clipboard.writeText",
        },
        fallbackMessage: "Failed to copy command to clipboard",
      })
    }
  }

  return (
    <div className="relative flex items-center bg-background rounded-lg p-3 font-mono text-sm shadow-inner">
      <code className="text-muted-foreground flex-grow pr-10 select-all">{`$ ${code}`}</code>
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 text-muted-foreground hover:text-foreground"
              onClick={handleCopy}
              aria-label="Copy to clipboard"
            >
              {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{copied ? "Copied!" : "Copy to clipboard"}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
