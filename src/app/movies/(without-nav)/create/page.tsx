"use client"

import { MovieForm } from "@/components"
import { IMovie } from "@/types/movies"

export default function CreateMovie() {
  const onMovieCreate = (movie: Partial<IMovie>) => {
  }
  return <MovieForm onCreateEdit={onMovieCreate} />
}
