import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { RESPONSE_MESSAGES } from "./utils/responseMessages"
import StatusCodes from "./utils/statusCodeEnum"
import { jwtVerify } from "jose"
import { appConstants } from "./utils"

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith('/api')) {
    console.log("Running for API");
    return ProtectApiRoute(req);
  } 
  
  if (req.nextUrl.pathname.startsWith('/movies')) {
    console.log("Running for CLIENT");
    return ProtectPages(req);
  }
}

export const config = {
  matcher: ['/movies/:path*', "/api/movies/:path*"],
}

function ProtectApiRoute(req: NextRequest) {
  const authorization = req.headers.get("authorization")
  try {
    if (!authorization) {
      return NextResponse.json(
        {
          success: false,
          message: RESPONSE_MESSAGES.LOGIN.UNAUTHORIZED,
        },
        { status: StatusCodes.UNAUTHORIZED }
      )
    }
    const token = authorization.replace("Bearer ", "")
    const secretKey = new TextEncoder().encode(process.env.SECRET_KEY as string)

    const decoded = jwtVerify(token, secretKey)
    req.user = decoded
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        message: RESPONSE_MESSAGES.LOGIN.UNAUTHORIZED,
      },
      { status: StatusCodes.UNAUTHORIZED }
    )
  }
  return NextResponse.next()
}

function ProtectPages(req: NextRequest) {
  if (req.cookies.has(appConstants.AUTH_COOKIE)) {
    return NextResponse.next()
  }

  return NextResponse.redirect(new URL('/signin', req.url))
}
