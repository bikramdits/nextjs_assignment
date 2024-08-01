import Movies from "@/models/movies"
import SendResponse from "@/utils/response"
import { RESPONSE_MESSAGES } from "@/utils/responseMessages"
import StatusCodes from "@/utils/statusCodeEnum"
import { NextRequest, NextResponse } from "next/server"

export const GET = async (req: Request, { params }: {params: {id: string}}) => {
  try {
    const id = params.id;
    const movie = await Movies.findById(id);
    
    return SendResponse(movie, StatusCodes.OK)
  } catch (error) {
    console.log(error)
    return SendResponse(
      { message: RESPONSE_MESSAGES.COMMON.INVALID_REQUEST },
      StatusCodes.INTERNAL_SERVER_ERROR
    )
  }
}
