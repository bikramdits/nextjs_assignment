import "@/database/connection"
import Users from "@/models/user"
import SendResponse from "@/utils/response"
import { RESPONSE_MESSAGES } from "@/utils/responseMessages"
import StatusCodes from "@/utils/statusCodeEnum"
import { NextApiRequest, NextApiResponse } from "next"
import { NextRequest, NextResponse } from "next/server"

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const body = await req.json()
    const user = await Users.create(body)

    return SendResponse(user, StatusCodes.OK)
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
    const user = await Users.findByIdAndUpdate(id, body)

    return SendResponse(user, StatusCodes.OK)
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
    const user = await Users.findByIdAndUpdate(id, { isDeleted: true })
    if (!user) {
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
