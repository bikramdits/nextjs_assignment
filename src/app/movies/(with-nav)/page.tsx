import { EmptyState, MovieCard, Pagination } from "@/components"

export default function AppListPage() {
  return (
    <div className="mt-20 flex flex-1 flex-col">
      {/* <EmptyState /> */}

      <div className="grid grid-cols-2 gap-3 sm:gap-8 md:grid-cols-3 xl:grid-cols-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((i) => (
          <MovieCard key={i} />
        ))}
      </div>

      <div className="mx-auto mt-10">
        <Pagination numberOfPages={4} />
      </div>
    </div>
  )
}
