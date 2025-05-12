import { NextRequest } from 'next/server'
import { authApiMiddleware } from '@/lib/middleware/authApi'
import { authPageMiddleware } from '@/lib/middleware/authPage'

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  if (pathname.startsWith('/api/')) {
    return authApiMiddleware(request)
  }

  return authPageMiddleware(request)
}


export const config = {
  matcher: [
    // API
    '/api/user/:path*',

    // Frontend page
    '/dashboard/:path*',
    '/',
  ],
}
