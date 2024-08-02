import "@/database/connection"
import Users from "@/models/user"
import SendResponse from "@/utils/response"
import { RESPONSE_MESSAGES } from "@/utils/responseMessages"
import StatusCodes from "@/utils/statusCodeEnum"
import { IUSERS } from "@/utils/types"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { NextRequest } from "next/server"

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json()

    const user = await Users.findOne({ email: body.email}) as unknown as IUSERS
    if(!user){
      return SendResponse({message:RESPONSE_MESSAGES.COMMON.USER_NOT_FOUND}, StatusCodes.OK)
    }
    const validPassword = bcrypt.compare(body.password, user.password)
    const secretKey: string = process.env.SECRET_KEY as string;
    const token = jwt.sign(
      { _id: user._id, email: user?.email },
      secretKey
    )
    const resPayload = {
      token: token,
    }
    return SendResponse(resPayload, StatusCodes.OK)
  } catch (error) {
    const e = error as Error;
      return SendResponse(
      { message: e.message },
      StatusCodes.INTERNAL_SERVER_ERROR
    )
  }
}
