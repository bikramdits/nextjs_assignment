import "@/database/connection"
import Movies from "@/models/movies"
import logger from "@/utils/logger"
import SendResponse from "@/utils/response"
import { RESPONSE_MESSAGES } from "@/utils/responseMessages"
import StatusCodes from "@/utils/statusCodeEnum"
import { NextRequest, NextResponse } from "next/server"

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const body = await req.json()
    const movies = await Movies.create(body)

    return SendResponse(movies, StatusCodes.OK)
  } catch (error) {
    
    return SendResponse(
      { message: RESPONSE_MESSAGES.COMMON.INVALID_REQUEST },
      StatusCodes.INTERNAL_SERVER_ERROR
    )
  }
}

export const PUT = async (req: NextRequest, res: NextResponse) => {
  try {
    const query = req.nextUrl.searchParams
    const id = query.get("id")

    const body = await req.json()
    const movies = await Movies.findByIdAndUpdate(id, body)

    return SendResponse(movies, StatusCodes.OK)
  } catch (error) {
   

    return SendResponse(
      { message: error?.message },
      StatusCodes.INTERNAL_SERVER_ERROR
    )
  }
}

export const DELETE = async (req: NextRequest, res: NextResponse) => {
  try {
    const query = req.nextUrl.searchParams
    const id = query.get("id")
    const movies = await Movies.findByIdAndUpdate(id, { isDeleted: true })
    if (!movies) {
      return SendResponse(
        RESPONSE_MESSAGES.COMMON.CANNOT_DELETE_USER,
        StatusCodes.OK
      )
    }
    return SendResponse(
      RESPONSE_MESSAGES.COMMON.USER_DELETED_SUCCESSFULLY,
      StatusCodes.OK
    )
  } catch (error) {
    
    return SendResponse(
      { message: error?.message },
      StatusCodes.INTERNAL_SERVER_ERROR
    )
  }
}

export const GET = async (req: NextRequest, res: NextResponse) => {
  try {
    const query = req.nextUrl.searchParams
    let limit = query.get("limit") as unknown as number
    let page = query.get("page") as unknown as number
    // limit= +limit |10
    // page= +page | 1
    const movies = await Movies.find().limit(limit)
  // Get the page number and limit from the query parameters
   page = page || 1;
   limit = limit || 10;

  // Calculate the offset
  const offset = (page - 1) * limit;


    const users = await Movies.find({})
    .sort({ createdAt: -1 }) // Sort by latest first
    .skip(offset)
    .limit(limit)
    .exec();
    const totalItems =  await Movies.countDocuments()
    const totalPages = Math.ceil(totalItems/limit);

    return SendResponse({users,totalItems,currentPage:page,limit,totalPages}, StatusCodes.OK) 
  } catch (error) {
   
    return SendResponse(
      { message: RESPONSE_MESSAGES.COMMON.INVALID_REQUEST },
      StatusCodes.INTERNAL_SERVER_ERROR
    )
  }
}
