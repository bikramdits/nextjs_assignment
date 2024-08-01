import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function setCookie(name: string, value: string) {
  if (!document) return;
  document.cookie = `${name}=${value}`
}

export function deleteCookie(name: string) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

export const appConstants={
  PAGINATION_PARAM: "page",
  AUTH_COOKIE: "authorization"
} 