"use client"

import { MovieForm } from "@/components"
import { IMovie } from "@/types/movies"

export default function EditMovie() {
  const onMovieEdit = (movie: Partial<IMovie>) => {
    // Upload File

    // Save Movie
  }

  return <MovieForm movie={{title: "Test"}} onCreateEdit={onMovieEdit} />
}
