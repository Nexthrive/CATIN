import { NextRequest, NextResponse } from 'next/server'
import * as jose from 'jose'

const secret = process.env.JWT_SECRET as string

export async function authApiMiddleware(request: NextRequest) {
  const authHeader = request.headers.get('authorization')
  const token = authHeader?.split(' ')[1]

  if (!token) {
    return NextResponse.json({ success: false, message: 'No token provided' }, { status: 401 })
  }

  try {
    const { payload } = await jose.jwtVerify(token, new TextEncoder().encode(secret))

    const requestHeaders = new Headers(request.headers)
    requestHeaders.set('x-user-id', payload.id as string)
    requestHeaders.set('x-user-email', payload.email as string)

    return NextResponse.next({ request: { headers: requestHeaders } })
  } catch {
    return NextResponse.json({ success: false, message: 'Invalid token' }, { status: 401 })
  }
}
