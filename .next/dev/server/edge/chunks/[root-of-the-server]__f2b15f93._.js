(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__f2b15f93._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {

// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import { checkServerSession } from "./lib/api/serverApi";
// const privateRoutes = ["/profile", "/notes"];
// const publicRoutes = ["/sign-in", "/sign-up"];
// export async function middleware(req: NextRequest) {
//   const { pathname } = req.nextUrl;
//   const accessToken = req.cookies.get("accessToken")?.value;
//   const refreshToken = req.cookies.get("refreshToken")?.value;
//   const isPublicRoute = publicRoutes.some((route) => pathname.startsWith(route));
//   const isPrivateRoute = privateRoutes.some((route) => pathname.startsWith(route));
//   if (!accessToken) {
//     if (refreshToken) {
//       try {
//         const response = await checkServerSession();
//         const setCookie = response.headers["set-cookie"];
//         const res = NextResponse.next();
//         setCookie?.forEach((cookieStr: string) => {
//           const [nameValue] = cookieStr.split("; ");
//           const [name, value] = nameValue.split("=");
//           res.cookies.set(name, value, { httpOnly: true, path: "/" });
//         });
//         if (isPublicRoute) return NextResponse.redirect(new URL("/", req.url), res);
//         if (isPrivateRoute) return res;
//       } catch (err) {
//         console.error("Failed to refresh session:", err);
//         if (isPrivateRoute) return NextResponse.redirect(new URL("/sign-in", req.url));
//         if (isPublicRoute) return NextResponse.next();
//       }
//     } else {
//       if (isPrivateRoute) return NextResponse.redirect(new URL("/sign-in", req.url));
//       if (isPublicRoute) return NextResponse.next();
//     }
//   }
//   if (accessToken) {
//     if (isPublicRoute) return NextResponse.redirect(new URL("/", req.url));
//     if (isPrivateRoute) return NextResponse.next();
//   }
//   return NextResponse.next();
// }
// export const config = {
//   matcher: [
//     "/profile/:path*",  
//     "/notes/:path*",
//     "/sign-in",
//     "/sign-up",
//   ],
// };
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__f2b15f93._.js.map