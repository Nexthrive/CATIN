import { NextRequest, NextResponse } from 'next/server'
import * as jose from 'jose'

const secret = process.env.JWT_SECRET as string

export async function authPageMiddleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value
  const pathname = request.nextUrl.pathname

  if (!token) {
    const loginUrl = new URL('/auth', request.url)
    loginUrl.searchParams.set('from', pathname)
    return NextResponse.redirect(loginUrl)
  }

  try {
    await jose.jwtVerify(token, new TextEncoder().encode(secret))
    return NextResponse.next()
  } catch {
    const loginUrl = new URL('/auth', request.url)
    loginUrl.searchParams.set('from', pathname)
    return NextResponse.redirect(loginUrl)
  }
}
