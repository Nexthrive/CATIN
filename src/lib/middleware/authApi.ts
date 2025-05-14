// lib/middleware/authApi.ts
import { NextRequest, NextResponse } from 'next/server'
import * as jose from 'jose'

const secret = process.env.JWT_SECRET as string

interface TokenPayload extends jose.JWTPayload {
  id: string
  email: string
  role: 'user' | 'admin'
}

export async function verifyToken(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  const isAdminRoute = pathname === '/api/admin' || pathname.startsWith('/api/admin/')

  const token = request.headers.get('authorization')?.split(' ')[1]

  if (!token) {
    return NextResponse.json(
      { success: false, message: 'Authorization token missing' },
      { status: 401 }
    )
  }

  try {
    const { payload } = await jose.jwtVerify(token, new TextEncoder().encode(secret)) as { payload: TokenPayload }

    // For any admin routes, verify the role is admin
    if (isAdminRoute && payload.role !== 'admin') {
      return NextResponse.json(
        { success: false, message: 'Admin access required' },
        { status: 403 }
      )
    }

    // Add user info to headers
    const headers = new Headers(request.headers)
    headers.set('x-user-id', payload.id)
    headers.set('x-user-email', payload.email)
    headers.set('x-user-role', payload.role)

    return NextResponse.next({
      request: { headers: headers }
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Invalid or expired token' },
      { status: 401 }
    )
  }
}