import { IMovie } from "@/types/movies"
import Image from "next/image"

export function MovieCard(movie: IMovie) {
  return (
    <>
      <div className="bg-card hover:bg-card/55 group flex min-h-[23rem] cursor-pointer flex-col rounded-xl pb-4 sm:px-2 sm:pt-2 md:min-h-[30rem]">
        <div className="relative flex-1 rounded-[inherit]">
          <Image
            src={movie.poster as string}
            fill
            alt="movie-name"
            className="rounded-[inherit]"
          />
        </div>

        <div className="mt-4 flex flex-col gap-2 px-2">
          <h6 className="text-h5 font-medium text-white group-hover:font-semibold">
            {movie.title}
          </h6>
          <p className="text-sm text-white">{movie.publishingYear}</p>
        </div>
      </div>
    </>
  )
}
