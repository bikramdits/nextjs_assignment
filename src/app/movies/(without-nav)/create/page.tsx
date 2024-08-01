"use client"

import { MovieForm } from "@/components"
import { IMovie } from "@/types/movies"
import { postRequest } from "@/utils/api-client"
import { toast } from "react-hot-toast"

export default function CreateMovie() {
  const onMovieCreate = async (movie: Partial<IMovie>) => {
    try {
      const formData = new FormData()
      formData.append("file", movie.poster as File)
      formData.append("title", movie.title as string)
      formData.append(
        "publishingYear",
        movie.publishingYear?.toString() as string
      )

      await postRequest("/movies", formData, {
        "Content-Type": "multipart/form-data; boundary=12345",
      })
    } catch (e: any) {
      toast.error(e.response.data.message)
    }
  }
  return <MovieForm onCreateEdit={onMovieCreate} />
}
