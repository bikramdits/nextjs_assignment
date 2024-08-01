"use client"

import { EmptyState, MovieCard, Pagination } from "@/components"
import { IMovie, IMoviesResponse } from "@/types/movies"
import { getRequest } from "@/utils/api-client"
import { useEffect, useState } from "react"
import { toast } from "react-hot-toast"

type PageProps = {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function AppListPage({ searchParams }: PageProps) {
  const page = searchParams.pageNum
  const [movies, setMovies] = useState<IMovie[]>([])

  useEffect(() => {
    const getMovies = async () => {
      try {
        const moviesRes = await getRequest<IMoviesResponse>(
          `/movies?page=${page}`
        )
        if (moviesRes.status === 200 && moviesRes.data.movies) {
          setMovies(moviesRes.data.movies)
        }
      } catch (e: any) {
        toast.error(e.response.data.message)
      }
    }

    getMovies()
  }, [page])

  return (
    <div className="mt-20 flex flex-1 flex-col">
      {movies.length > 0 ? (
        <div className="grid grid-cols-2 gap-3 sm:gap-8 md:grid-cols-3 xl:grid-cols-4">
          {movies.map((i) => (
            <MovieCard key={i.title} />
          ))}
        </div>
      ) : (
        <EmptyState />
      )}

      {movies.length > 0 && (
        <div className="mx-auto mt-10">
          <Pagination numberOfPages={4} />
        </div>
      )}
    </div>
  )
}
