import { NextResponse } from "next/server";
import type { NextApiResponse } from "next";
import type { NextRequest } from "next/server";
import { RESPONSE_MESSAGES } from "./utils/responseMessages";
import SendResponse from "./utils/response";
import StatusCodes from "./utils/statusCodeEnum";
import * as jwt from "jsonwebtoken";
import { jwtVerify } from 'jose';


// This function can be marked `async` if using `await` inside
export function middleware(req: NextRequest) {
  debugger;
  const authorization = req.headers.get('authorization')
  let resPayload = {
    message: RESPONSE_MESSAGES.LOGIN.UNAUTHORIZED,
    payload: {},
  };
  try {
    if (!authorization) {
      return NextResponse.json(
        {
          success: false,
          message: RESPONSE_MESSAGES.LOGIN.UNAUTHORIZED,
        },
        { status: StatusCodes.UNAUTHORIZED }
      );
    }
    const token = authorization.replace("Bearer ", "");
    const secretKey = new TextEncoder().encode(process.env.SECRET_KEY as string);

    const decoded = jwtVerify(token, secretKey);
    req.user = decoded;
    console.log("in")
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        message: RESPONSE_MESSAGES.LOGIN.UNAUTHORIZED,
      },
      { status: StatusCodes.UNAUTHORIZED }
    );
  }
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/api/movies/:path*",
};
