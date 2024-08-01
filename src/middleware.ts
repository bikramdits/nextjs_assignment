import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { RESPONSE_MESSAGES } from "./utils/responseMessages"
import StatusCodes from "./utils/statusCodeEnum"
import { jwtVerify } from "jose"
import { appConstants } from "./utils"
import { env } from "./utils/env"

const protected_routes = [
  "/movies"
]

const protected_apis = [
  "/api/movies"
]

const publicRoutes = [
  "/signin"
]
export async function middleware(req: NextRequest) {
  console.log("Running Middleware for - ", req.nextUrl.pathname);
  console.log("Running Middleware for - ", req.url);
  
  if (protected_apis.includes(req.nextUrl.pathname)) {
    return await authenticatedApiRoutes(req)
  }
  
  if (protected_routes.includes(req.nextUrl.pathname)) {
    return authenticatedRoutes(req)
  }

  if (publicRoutes.includes(req.nextUrl.pathname)) {
    return unAuthenticatedRoutes(req)
  }
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}

async function authenticatedApiRoutes(req: NextRequest) {
  const unauthError = {
    success: false,
    message: RESPONSE_MESSAGES.LOGIN.UNAUTHORIZED,
  }

  try {
    const token = req.cookies.get(appConstants.AUTH_COOKIE)?.value;
    const secretKey = new TextEncoder().encode(env.secret_key);
    console.log({token, cookie: req.cookies.has(appConstants.AUTH_COOKIE), all: req.cookies.getAll()});
    

    if (!token) {
      return NextResponse.json(unauthError, {
        status: StatusCodes.UNAUTHORIZED,
      })
    }

    req.user = await jwtVerify(token, secretKey)
  } catch (err) {
    return NextResponse.json(unauthError, { status: StatusCodes.UNAUTHORIZED })
  }

  return NextResponse.next()
}

function authenticatedRoutes(req: NextRequest) {
  if (req.cookies.has(appConstants.AUTH_COOKIE)) {
    return NextResponse.next()
  }

  return NextResponse.redirect(new URL("/signin", req.url))
}

function unAuthenticatedRoutes(req: NextRequest) {
  if (req.cookies.has(appConstants.AUTH_COOKIE)) {
    return NextResponse.redirect(new URL("/movies", req.url))
  }

  return NextResponse.next()
}
