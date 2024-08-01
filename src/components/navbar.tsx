"use client"

import { LogoutAction } from "./actions"
import { AddIconAction } from "./icon-actions"

export function AppNavbar() {
  return (
    <div className="flex items-center justify-between">
      <h2 className="flex items-baseline gap-x-4 text-nowrap text-h3 font-semibold text-white md:text-h2">
        <span>My Movies</span>
        <AddIconAction link={"movies/create"} />
      </h2>

      <LogoutAction />
    </div>
  )
}
