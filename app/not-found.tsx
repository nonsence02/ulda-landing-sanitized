import { ErrorPanel } from "@/components/error-panel"
import { createErrorId } from "@/lib/errors"
import { createLogger } from "@/lib/logger"

const logger = createLogger("not-found")

export default function NotFound() {
  const errorId = createErrorId("NOTFOUND")

  logger.warning("Not-found page rendered", {
    errorId,
  })

  return (
    <ErrorPanel
      kind="notFound"
      errorId={errorId}
      issueModule="not-found"
      issueMessage="Requested route was not found"
    />
  )
}
