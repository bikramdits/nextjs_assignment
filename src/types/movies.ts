export interface IMovie {
  title: string
  publishingYear: number
  poster: string | File
  isDeleted: boolean
  createdAt?: Date
  updatedAt?: Date
}

export interface IMoviesResponse {
  movies: IMovie[]
  totalItems: number
  currentPage: number
  limit: number
  totalPages: number
}
