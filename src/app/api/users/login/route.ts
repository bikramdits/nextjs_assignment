import "@/database/connection"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { NextRequest } from "next/server"

import Users from "@/models/user"
import SendResponse from "@/utils/response"
import { RESPONSE_MESSAGES } from "@/utils/responseMessages"
import StatusCodes from "@/utils/statusCodeEnum"
import { env } from "@/utils/env"

export const POST = async (req: NextRequest) => {
  try {
    const {email, password} = await req.json()
    const user = await Users.findOne({ email  });

    // If No user exists
    if(!user){
      return SendResponse({message:RESPONSE_MESSAGES.COMMON.USER_NOT_FOUND}, StatusCodes.NOT_FOUND)
    }

    // Comparing Password
    if (await bcrypt.compare(password, user.password)) {
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
  } catch (error) {
    const e = error as Error;
      return SendResponse(
      { message: e.message },
      StatusCodes.INTERNAL_SERVER_ERROR
    )
  }
}
