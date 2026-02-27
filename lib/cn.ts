import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind CSS classes safely
 * Handles conflicts and deduplication using tailwind-merge
 *
 * @param inputs - Class names to merge
 * @returns Merged class string
 *
 * @example
 * cn("px-4", "px-8") // Returns "px-8" (later value wins)
 * cn("text-red-500", { "text-blue-500": isActive }) // Conditional classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
