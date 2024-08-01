import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function setCookie(name: string, value: string) {
  if (!document) return;
  document.cookie = `${name}=${value}`
}

export const appConstants={
  AUTH_COOKIE: "authorization"
} 