export type LogLevel = "DEBUG" | "INFO" | "WARNING" | "ERROR" | "CRITICAL"

export type LogContext = Record<string, unknown>

export type LogEntry = {
  timestamp: string
  level: LogLevel
  module: string
  message: string
  context?: LogContext
}

const LOG_LEVEL_WEIGHTS: Record<LogLevel, number> = {
  DEBUG: 10,
  INFO: 20,
  WARNING: 30,
  ERROR: 40,
  CRITICAL: 50,
}

const DEFAULT_LOG_LEVEL: LogLevel = "INFO"
const RUNTIME_LOG_LEVEL_KEY = "ulda.logLevel"

declare global {
  interface Window {
    __ULDA_LOG_LEVEL__?: string
  }
}

function normalizeLogLevel(value?: string | null): LogLevel {
  const normalized = value?.trim().toUpperCase()

  switch (normalized) {
    case "DEBUG":
    case "INFO":
    case "WARNING":
    case "ERROR":
    case "CRITICAL":
      return normalized
    default:
      return DEFAULT_LOG_LEVEL
  }
}

function getRuntimeLogLevelOverride(): LogLevel | null {
  if (typeof window === "undefined") {
    return null
  }

  const windowLevel = normalizeLogLevel(window.__ULDA_LOG_LEVEL__)

  if (window.__ULDA_LOG_LEVEL__) {
    return windowLevel
  }

  try {
    const storedValue = window.localStorage.getItem(RUNTIME_LOG_LEVEL_KEY)
    return storedValue ? normalizeLogLevel(storedValue) : null
  } catch {
    return null
  }
}

export function getConfiguredLogLevel(): LogLevel {
  const runtimeOverride = getRuntimeLogLevelOverride()

  if (runtimeOverride) {
    return runtimeOverride
  }

  return normalizeLogLevel(process.env.LOG_LEVEL ?? process.env.NEXT_PUBLIC_LOG_LEVEL)
}

export function setRuntimeLogLevel(level: LogLevel) {
  if (typeof window === "undefined") {
    return
  }

  window.__ULDA_LOG_LEVEL__ = level

  try {
    window.localStorage.setItem(RUNTIME_LOG_LEVEL_KEY, level)
  } catch {
    // Ignore storage failures in restricted browser contexts.
  }
}

function shouldLog(level: LogLevel): boolean {
  return LOG_LEVEL_WEIGHTS[level] >= LOG_LEVEL_WEIGHTS[getConfiguredLogLevel()]
}

function getConsoleMethod(level: LogLevel): (...data: unknown[]) => void {
  switch (level) {
    case "DEBUG":
      return console.debug
    case "INFO":
      return console.info
    case "WARNING":
      return console.warn
    case "ERROR":
    case "CRITICAL":
      return console.error
  }
}

function writeLog(entry: LogEntry) {
  const consoleMethod = getConsoleMethod(entry.level)
  const baseMessage = `[${entry.timestamp}] [${entry.level}] [${entry.module}] ${entry.message}`

  if (entry.context && Object.keys(entry.context).length > 0) {
    consoleMethod(baseMessage, entry.context)
    return
  }

  consoleMethod(baseMessage)
}

export function log(level: LogLevel, module: string, message: string, context?: LogContext): LogEntry | null {
  if (!shouldLog(level)) {
    return null
  }

  const entry: LogEntry = {
    timestamp: new Date().toISOString(),
    level,
    module,
    message,
    context,
  }

  writeLog(entry)
  return entry
}

export function createLogger(module: string) {
  return {
    debug: (message: string, context?: LogContext) => log("DEBUG", module, message, context),
    info: (message: string, context?: LogContext) => log("INFO", module, message, context),
    warning: (message: string, context?: LogContext) => log("WARNING", module, message, context),
    error: (message: string, context?: LogContext) => log("ERROR", module, message, context),
    critical: (message: string, context?: LogContext) => log("CRITICAL", module, message, context),
  }
}
