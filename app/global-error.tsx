"use client"

import { useEffect, useMemo } from "react"
import { ErrorPanel } from "@/components/error-panel"
import { logNormalizedError, normalizeError } from "@/lib/errors"
import { createLogger } from "@/lib/logger"

type GlobalErrorProps = {
  error: Error & { digest?: string }
  reset: () => void
}

const logger = createLogger("global-error")

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  const normalizedError = useMemo(
    () =>
      normalizeError(error, "global-error", {
        digest: error.digest,
      }, "Global application error"),
    [error],
  )

  useEffect(() => {
    logNormalizedError(normalizedError, "CRITICAL")
  }, [normalizedError])

  return (
    <html lang="uk">
      <body>
        <ErrorPanel
          kind="global"
          errorId={normalizedError.id}
          issueModule="global-error"
          issueMessage={error.message || "Global application error"}
          issueDigest={error.digest}
          onRetry={() => {
            logger.info("Reset requested from global error page", { errorId: normalizedError.id })
            reset()
          }}
        />
      </body>
    </html>
  )
}
