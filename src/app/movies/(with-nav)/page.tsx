import { MovieCard } from "@/components"

export default function AppListPage() {
  return (
    <div className="flex flex-1 flex-col mt-20">
      {/* <EmptyState /> */}

      <div className="grid grid-cols-4 gap-8">
        {[1, 2, 3, 4, 5,6,7,8,9,10,11,12,13].map((i) => (
          <MovieCard key={i} />
        ))}
      </div>
    </div>
  )
}
