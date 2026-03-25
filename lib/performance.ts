import { createLogger } from "@/lib/logger"

const logger = createLogger("performance")

export type InteractionMeasurementContext = Record<string, string | number | boolean | null | undefined>

/**
 * Measures a client-side interaction and logs its duration in a structured form.
 *
 * @param name - Logical interaction name used in profiling logs.
 * @param action - Synchronous or asynchronous work to measure.
 * @param context - Optional metadata that helps associate the measurement with UI state.
 * @returns The result produced by the measured action.
 */
export async function measureClientInteraction<T>(
  name: string,
  action: () => Promise<T> | T,
  context?: InteractionMeasurementContext
): Promise<T> {
  const startedAt = typeof performance !== "undefined" ? performance.now() : Date.now()
  const result = await action()

  if (typeof window !== "undefined" && typeof window.requestAnimationFrame === "function") {
    await new Promise<void>((resolve) => {
      window.requestAnimationFrame(() => resolve())
    })
  }

  const endedAt = typeof performance !== "undefined" ? performance.now() : Date.now()
  logger.debug("Measured client interaction", {
    interaction: name,
    durationMs: Number((endedAt - startedAt).toFixed(2)),
    ...context,
  })

  return result
}
