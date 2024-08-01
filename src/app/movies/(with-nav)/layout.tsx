import { AppNavbar } from "@/components"

export default function WithNavLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="container mx-auto flex flex-1 flex-col py-16">
      <AppNavbar />
      {children}
    </div>
  )
}
