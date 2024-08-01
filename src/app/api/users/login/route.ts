import "@/database/connection"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { NextRequest } from "next/server"

import Users from "@/models/user"
import { env } from "@/utils/env"
import SendResponse from "@/utils/response"
import { RESPONSE_MESSAGES } from "@/utils/responseMessages"
import StatusCodes from "@/utils/statusCodeEnum"

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json()

    // Finding USER
    const user = await Users.findOne({ email: body.email })

    // Comparing Password
    if (await bcrypt.compare(body.password, user.password)) {
      const token = jwt.sign(
        { _id: user._id, email: user?.email },
        env.secret_key
      )
      return SendResponse(
        {
          token,
        },
        StatusCodes.OK
      )
    }

    // Unauthorized user for invalid credentials
    return SendResponse(
      {
        message: RESPONSE_MESSAGES.LOGIN.UNAUTHORIZED,
      },
      StatusCodes.UNAUTHORIZED
    )
  } catch (err: any) {
    return SendResponse(
      { message: err.message },
      StatusCodes.INTERNAL_SERVER_ERROR
    )
  }
}
