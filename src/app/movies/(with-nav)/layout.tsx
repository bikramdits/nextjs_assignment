import { AppNavbar } from "@/components"

export default function WithNavLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="container mx-auto flex flex-1 flex-col pt-10 pb-20">
      <AppNavbar />
      {children}
    </div>
  )
}
