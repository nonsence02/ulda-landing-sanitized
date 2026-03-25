"use client"

import { useMemo } from "react"
import Link from "next/link"
import { AlertTriangle, Home, RotateCcw, TriangleAlert } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { buildIssueReportUrl } from "@/lib/errors"
import { errorMessages, resolveErrorLanguage } from "@/lib/error-messages"
import { createLogger } from "@/lib/logger"

type ErrorKind = "notFound" | "global"

type ErrorPanelProps = {
  kind: ErrorKind
  errorId: string
  issueModule: string
  issueMessage: string
  issueDigest?: string
  onRetry?: () => void
}

const logger = createLogger("error-panel")

export function ErrorPanel({ kind, errorId, issueModule, issueMessage, issueDigest, onRetry }: ErrorPanelProps) {
  const language = resolveErrorLanguage(typeof navigator !== "undefined" ? navigator.language : "uk")
  const messages = errorMessages[language][kind]
  const reportUrl = useMemo(
    () =>
      buildIssueReportUrl({
        id: errorId,
        module: issueModule,
        message: issueMessage,
        digest: issueDigest,
      }),
    [errorId, issueDigest, issueMessage, issueModule],
  )

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4 py-12 text-foreground">
      <Card className="w-full max-w-2xl border-border/70 bg-card/80">
        <CardHeader className="space-y-4">
          <div className="flex items-center gap-3 text-primary">
            {kind === "global" ? (
              <TriangleAlert aria-hidden="true" className="h-6 w-6" />
            ) : (
              <AlertTriangle aria-hidden="true" className="h-6 w-6" />
            )}
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary/90">ULDA Thesis Landing</p>
          </div>
          <CardTitle className="text-2xl sm:text-3xl">{messages.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm leading-7 text-muted-foreground sm:text-base">
          <p>{messages.description}</p>
          <div className="rounded-xl border border-border/70 bg-background/60 p-4">
            <p className="font-medium text-foreground">{messages.errorIdLabel}</p>
            <p className="font-mono text-sm">{errorId}</p>
          </div>
          <p>{messages.reportHint}</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {onRetry ? (
              <Button
                size="lg"
                onClick={() => {
                  logger.info("Retry action requested from error page", { errorId, issueModule })
                  onRetry()
                }}
              >
                <RotateCcw aria-hidden="true" className="h-4 w-4" />
                {messages.primaryAction}
              </Button>
            ) : (
              <Button asChild size="lg">
                <Link href="/">
                  <Home aria-hidden="true" className="h-4 w-4" />
                  {messages.primaryAction}
                </Link>
              </Button>
            )}
            <Button asChild size="lg" variant="outline">
              <Link href="/" prefetch={false}>
                <Home aria-hidden="true" className="h-4 w-4" />
                {messages.secondaryAction}
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link
                href={reportUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => logger.warning("Issue report link opened", { errorId, issueModule })}
              >
                {messages.reportAction}
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
