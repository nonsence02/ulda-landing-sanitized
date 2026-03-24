import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Merges conditional class names and resolves conflicting Tailwind utilities.
 *
 * @param inputs - Class values collected from component props and UI state.
 * @returns A normalized `className` string.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
