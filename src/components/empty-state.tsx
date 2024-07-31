import { Button } from "./ui"

export function EmptyState() {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-h2 font-semibold text-white">
        Your movie list is empty
      </h1>
      <Button link="movies/create">Add a new movie</Button>
    </div>
  )
}
