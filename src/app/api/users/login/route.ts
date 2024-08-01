import "@/database/connection"
import Users from "@/models/user"
import logger from "@/utils/logger"
import SendResponse from "@/utils/response"
import { RESPONSE_MESSAGES } from "@/utils/responseMessages"
import StatusCodes from "@/utils/statusCodeEnum"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { NextRequest } from "next/server"

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json()

    const user = await Users.findOne({ email: body.email})
    const validPassword = bcrypt.compare(body.password, user.password)
    const token = jwt.sign(
      { _id: user._id, email: user?.email },
      process.env.SECRET_KEY
    )
    const resPayload = {
      token: token,
    }
    return SendResponse(resPayload, StatusCodes.OK)
  } catch (error) {
      return SendResponse(
      { message: err.message },
      StatusCodes.INTERNAL_SERVER_ERROR
    )
  }
}
