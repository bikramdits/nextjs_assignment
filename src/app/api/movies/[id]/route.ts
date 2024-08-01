import Movies from "@/models/movies"
import SendResponse from "@/utils/response"
import { RESPONSE_MESSAGES } from "@/utils/responseMessages"
import StatusCodes from "@/utils/statusCodeEnum"
import { IPARAMS } from "@/utils/types"

export const GET = async (req: Request, { params }: IPARAMS) => {
  try {
    const id = params.id
    const movie = await Movies.findById(id)
    if (!movie) {
      return SendResponse(
        { message: RESPONSE_MESSAGES.MOVIES.MOVIE_NOT_FOUND },
        StatusCodes.INTERNAL_SERVER_ERROR
      )
    }
    return SendResponse(movie, StatusCodes.OK)
  } catch (error) {
    return SendResponse(
      { message: RESPONSE_MESSAGES.COMMON.INVALID_REQUEST },
      StatusCodes.INTERNAL_SERVER_ERROR
    )
  }
}
