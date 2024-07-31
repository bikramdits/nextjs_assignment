"use client"

import { usePathname } from "next/navigation"
import { LogoutAction } from "./actions"
import { AddIconAction } from "./icon-actions"

const inclusivePaths = ["/movies"]
export function AppNavbar() {
  const pathname = usePathname()

  // if (!inclusivePaths.includes(pathname)) {
  //   return null
  // }

  return (
    <div className="flex items-center justify-between">
      <h2 className="text-h2 flex items-baseline gap-x-4 font-semibold text-white">
        <span>My Movies</span>
        <AddIconAction link={"movies/create"} />
      </h2>

      <LogoutAction />
    </div>
  )
}
