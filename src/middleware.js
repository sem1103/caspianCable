import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['az', 'ru', 'en', 'tr', 'it'],
  // Used when no locale matches
  defaultLocale: 'az',
  pathnames : {
    '/' : '/',
  }
});
 
export const config = {
  matcher: [
    '/',
    '/(az|ru|en|ge|it)/:path*',
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
};