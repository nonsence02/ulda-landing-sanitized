import { siteConfig } from "@/lib/site"
import { createLogger, type LogContext, type LogLevel } from "@/lib/logger"

export type AppErrorContext = LogContext

export type NormalizedAppError = {
  id: string
  module: string
  name: string
  message: string
  digest?: string
  context?: AppErrorContext
  stack?: string
}

export type CaptureErrorOptions = {
  module: string
  level?: Extract<LogLevel, "ERROR" | "CRITICAL">
  context?: AppErrorContext
  fallbackMessage?: string
}

const logger = createLogger("errors")

function createRandomSegment(): string {
  if (typeof globalThis.crypto !== "undefined" && "randomUUID" in globalThis.crypto) {
    return globalThis.crypto.randomUUID().slice(0, 8)
  }

  return Math.random().toString(36).slice(2, 10)
}

export function createErrorId(prefix = "ERR"): string {
  const timestamp = new Date().toISOString().replace(/[-:.TZ]/g, "").slice(0, 14)
  return `${prefix}-${timestamp}-${createRandomSegment().toUpperCase()}`
}

export function normalizeError(
  error: unknown,
  module: string,
  context?: AppErrorContext,
  fallbackMessage = "Unexpected application error",
): NormalizedAppError {
  if (error instanceof Error) {
    return {
      id: createErrorId(),
      module,
      name: error.name,
      message: error.message || fallbackMessage,
      digest: "digest" in error && typeof error.digest === "string" ? error.digest : undefined,
      context,
      stack: error.stack,
    }
  }

  return {
    id: createErrorId(),
    module,
    name: "UnknownError",
    message: fallbackMessage,
    context: {
      ...context,
      receivedValue: error,
    },
  }
}

export function captureError(error: unknown, options: CaptureErrorOptions): NormalizedAppError {
  const normalized = normalizeError(error, options.module, options.context, options.fallbackMessage)
  logNormalizedError(normalized, options.level ?? "ERROR")
  return normalized
}

export function logNormalizedError(
  error: Pick<NormalizedAppError, "id" | "name" | "message" | "digest" | "context">,
  level: Extract<LogLevel, "ERROR" | "CRITICAL"> = "ERROR",
) {
  const context = {
    errorId: error.id,
    errorName: error.name,
    digest: error.digest,
    ...error.context,
  }

  if (level === "CRITICAL") {
    logger.critical(error.message, context)
  } else {
    logger.error(error.message, context)
  }
}

export function buildIssueReportUrl(error: Pick<NormalizedAppError, "id" | "message" | "module" | "digest">) {
  const title = encodeURIComponent(`[Bug] ${error.module} ${error.id}`)
  const body = encodeURIComponent(
    [
      "Describe what happened:",
      "",
      `Error ID: ${error.id}`,
      `Module: ${error.module}`,
      `Message: ${error.message}`,
      `Digest: ${error.digest ?? "n/a"}`,
      "",
      `Page: ${siteConfig.url}`,
    ].join("\n"),
  )

  return `${siteConfig.repositoryUrl}/issues/new?title=${title}&body=${body}`
}
