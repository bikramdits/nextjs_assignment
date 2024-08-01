import { Button } from "./ui"

export function EmptyState() {
  return (
    <div className="my-auto flex flex-col items-center gap-4 self-center">
      <h1 className="text-center text-h2 font-semibold text-white">
        Your movie list is empty
      </h1>
      <Button link="movies/create" className="w-full sm:w-auto">
        Add a new movie
      </Button>
    </div>
  )
}
