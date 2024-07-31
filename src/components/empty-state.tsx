import { Button } from "./ui"

export function EmptyState() {
  return (
    <div className="flex flex-col items-center gap-4 self-center my-auto">
      <h1 className="text-h2 font-semibold text-white text-center">
        Your movie list is empty
      </h1>
      <Button link="movies/create" className="w-full sm:w-auto">Add a new movie</Button>
    </div>
  )
}
