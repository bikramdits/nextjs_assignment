import { AppNavbar } from "@/components";

function getMovies() {
  return [];
}

export default function WithNavLayout({ children }: React.PropsWithChildren) {
    return (
      <div className="flex-1 py-16 container mx-auto flex flex-col">
        <AppNavbar />
        {children}
      </div>
    )
  }
  