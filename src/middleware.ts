// middleware.ts
import { NextRequest, NextResponse } from 'next/server'
import { verifyToken } from '@/lib/middleware/authApi'
import { authPageMiddleware } from '@/lib/middleware/authPage'

// List of routes that should bypass auth
const PUBLIC_API_ROUTES = [
  { path: '/api/auth', method: 'POST' },
  { path: '/api/admin/auth', method: 'POST' }
]

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const method = request.method

  // Check if this is a public API route that should bypass auth
  const isPublicRoute = PUBLIC_API_ROUTES.some(
    route => pathname.startsWith(route.path) && method === route.method
  )

  if (isPublicRoute) {
    return NextResponse.next()
  }

  // Handle API routes
  if (pathname.startsWith('/api/')) {
    return verifyToken(request)
  }

  // Handle frontend pages
  return authPageMiddleware(request)
}

export const config = {
  matcher: [
    // API routes - cover all API routes properly
    '/api/:path*',
    
    // Frontend pages
    '/dashboard/:path*',
    '/admin/:path*',
    '/',
  ],
}