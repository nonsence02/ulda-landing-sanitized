"use client"

import { useEffect } from "react"
import { captureError } from "@/lib/errors"
import { createLogger, getConfiguredLogLevel } from "@/lib/logger"

const logger = createLogger("runtime-monitor")

export function RuntimeMonitor() {
  useEffect(() => {
    logger.info("Client runtime initialized", {
      path: window.location.pathname,
      language: navigator.language,
      configuredLogLevel: getConfiguredLogLevel(),
    })

    const handleWindowError = (event: ErrorEvent) => {
      captureError(event.error ?? new Error(event.message), {
        module: "window.error",
        context: {
          filename: event.filename,
          line: event.lineno,
          column: event.colno,
          path: window.location.pathname,
        },
      })
    }

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      captureError(event.reason, {
        module: "window.unhandledrejection",
        level: "CRITICAL",
        context: {
          path: window.location.pathname,
        },
        fallbackMessage: "Unhandled promise rejection",
      })
    }

    window.addEventListener("error", handleWindowError)
    window.addEventListener("unhandledrejection", handleUnhandledRejection)

    return () => {
      window.removeEventListener("error", handleWindowError)
      window.removeEventListener("unhandledrejection", handleUnhandledRejection)
    }
  }, [])

  return null
}
